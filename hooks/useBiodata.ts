import { useState, useEffect, useRef, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { Biodata } from '../types';
import { INITIAL_DATA } from '../constants';
import { saveDraft, loadDraft, clearDraft, parseImportedData, exportToJSON } from '../utils';

interface UseBiodataOptions {
    setLanguage: (lang: 'en' | 'hi') => void;
}

interface UseBiodataReturn {
    data: Biodata;
    setData: React.Dispatch<React.SetStateAction<Biodata>>;
    lastSaved: Date | null;
    showDraftModal: boolean;
    isReady: boolean;
    handleInputChange: (section: keyof Biodata, field: string, value: string) => void;
    handlePhotoUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleResumeDraft: () => void;
    handleStartFresh: () => void;
    handleExportJSON: () => void;
    handleFileImport: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const useBiodata = ({ setLanguage }: UseBiodataOptions): UseBiodataReturn => {
    const [data, setData] = useState<Biodata>(INITIAL_DATA);
    const [lastSaved, setLastSaved] = useState<Date | null>(null);
    const [showDraftModal, setShowDraftModal] = useState(false);
    const [pendingDraft, setPendingDraft] = useState<Biodata | null>(null);
    const [isReady, setIsReady] = useState(false);

    const location = useLocation();
    const dataRef = useRef(data);

    // Keep ref updated with latest data
    useEffect(() => {
        dataRef.current = data;
    }, [data]);

    // Initialize - check for prefilled data or existing draft
    useEffect(() => {
        if (location.state?.prefilledData) {
            setData(location.state.prefilledData);
            setLanguage(location.state.prefilledData.language || 'en');
            setIsReady(true);
            setShowDraftModal(false);
        } else {
            const savedDraft = loadDraft();
            if (savedDraft) {
                setPendingDraft(savedDraft);
                setShowDraftModal(true);
            } else {
                setIsReady(true);
            }
        }
    }, []);

    // Autosave interval (every 30 seconds)
    useEffect(() => {
        if (!isReady) return;

        const intervalId = setInterval(() => {
            saveDraft(dataRef.current);
            setLastSaved(new Date());
        }, 30000);

        return () => clearInterval(intervalId);
    }, [isReady]);

    const handleInputChange = useCallback((section: keyof Biodata, field: string, value: string) => {
        setData(prev => ({
            ...prev,
            [section]: typeof prev[section] === 'object' && prev[section] !== null
                ? { ...prev[section], [field]: value }
                : value
        }));
    }, []);

    const handlePhotoUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setData(prev => ({ ...prev, photoUrl: reader.result as string }));
            };
            reader.readAsDataURL(file);
        }
    }, []);

    const handleResumeDraft = useCallback(() => {
        if (pendingDraft) {
            setData(pendingDraft);
            setLanguage(pendingDraft.language);
            setLastSaved(new Date());
        }
        setShowDraftModal(false);
        setIsReady(true);
    }, [pendingDraft, setLanguage]);

    const handleStartFresh = useCallback(() => {
        clearDraft();
        setData(INITIAL_DATA);
        setShowDraftModal(false);
        setIsReady(true);
    }, []);

    const handleExportJSON = useCallback(() => {
        exportToJSON(data);
    }, [data]);

    const handleFileImport = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            const importedData = parseImportedData(event.target?.result as string);

            if (importedData) {
                setData(importedData);
                setLanguage(importedData.language || 'en');
                setLastSaved(new Date());
                saveDraft(importedData);
            } else {
                alert("Invalid RishteBio JSON file.");
            }
        };
        reader.readAsText(file);
        e.target.value = '';
    }, [setLanguage]);

    return {
        data,
        setData,
        lastSaved,
        showDraftModal,
        isReady,
        handleInputChange,
        handlePhotoUpload,
        handleResumeDraft,
        handleStartFresh,
        handleExportJSON,
        handleFileImport
    };
};

export default useBiodata;
