import React, { useRef, useState, useEffect } from 'react';
import {
    LayoutTemplate, ChevronRight, CheckCircle,
    Upload, FileJson, Printer
} from 'lucide-react';
import { TemplateType } from '../../types';
import { TEMPLATES } from '../../constants';
import { useBiodata, usePreviewScale } from '../../hooks';

// Components
import { TemplateRenderer } from '../../components/BioTemplates';
import { EditorTabs } from '../../components/EditorTabs';
import { ToolbarButton } from '../../components/ToolbarButton';
import { DraftRecoveryModal } from '../../components/DraftRecoveryModal';
import { TemplateGalleryModal } from '../../components/TemplateGalleryModal';
import { MobileBottomBar } from '../../components/MobileBottomBar';

// Editor Tabs
import {
    PersonalTab,
    HoroscopeTab,
    EducationTab,
    FamilyTab,
    ContactTab,
    PhotoBioTab
} from './tabs';

interface EditorProps {
    language: 'en' | 'hi';
    setLanguage: (l: 'en' | 'hi') => void;
}

export const Editor: React.FC<EditorProps> = ({ language, setLanguage }) => {
    const [activeTab, setActiveTab] = useState<'personal' | 'horoscope' | 'education' | 'family' | 'contact' | 'photo'>('personal');
    const [mobileView, setMobileView] = useState<'editor' | 'preview'>('editor');
    const [showTemplateGallery, setShowTemplateGallery] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    // Custom hooks
    const {
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
    } = useBiodata({ setLanguage });

    const { previewScale, isMounted, previewContainerRef } = usePreviewScale(mobileView);

    // Sync language prop to data state
    useEffect(() => {
        setData(prev => ({ ...prev, language }));
    }, [language, setData]);

    const printDocument = () => {
        window.print();
    };

    const handleImportClick = () => {
        fileInputRef.current?.click();
    };

    const handleSelectTemplate = (templateId: TemplateType) => {
        setData(prev => ({ ...prev, templateId }));
        setShowTemplateGallery(false);
    };

    const renderActiveTab = () => {
        switch (activeTab) {
            case 'personal':
                return <PersonalTab data={data} onInputChange={handleInputChange} />;
            case 'horoscope':
                return <HoroscopeTab data={data} onInputChange={handleInputChange} />;
            case 'education':
                return <EducationTab data={data} onInputChange={handleInputChange} />;
            case 'family':
                return <FamilyTab data={data} onInputChange={handleInputChange} />;
            case 'contact':
                return <ContactTab data={data} onInputChange={handleInputChange} />;
            case 'photo':
                return <PhotoBioTab data={data} onInputChange={handleInputChange} onPhotoUpload={handlePhotoUpload} />;
            default:
                return null;
        }
    };

    return (
        <div className="flex flex-col h-[calc(100vh-64px)] md:h-[calc(100dvh-64px)] bg-slate-100 relative">

            {/* Draft Recovery Modal */}
            {showDraftModal && (
                <DraftRecoveryModal
                    onResume={handleResumeDraft}
                    onStartFresh={handleStartFresh}
                />
            )}

            {/* Main Content */}
            <div className={`flex flex-col lg:flex-row h-full overflow-hidden ${showDraftModal ? 'blur-sm pointer-events-none' : ''} pb-14 lg:pb-0 print:h-auto print:overflow-visible`}>

                {/* LEFT: Editor Form */}
                <div className={`${mobileView === 'preview' ? 'hidden lg:flex' : 'flex'} w-full lg:w-[450px] bg-white border-r border-slate-200 flex-col h-full no-print z-10 shadow-xl print:hidden`}>
                    <div className="p-4 border-b border-slate-200 bg-white">
                        <h2 className="font-bold text-slate-800 text-lg flex items-center gap-2">
                            <LayoutTemplate size={20} className="text-rose-500" /> Editor
                        </h2>
                    </div>

                    <EditorTabs activeTab={activeTab} onTabChange={setActiveTab} />

                    <div className="flex-grow overflow-y-auto p-6 space-y-6">
                        {renderActiveTab()}
                    </div>
                </div>

                {/* RIGHT: Preview & Actions */}
                <div
                    ref={previewContainerRef}
                    className={`${mobileView === 'editor' ? 'hidden lg:flex print:!block' : 'flex'} flex-grow bg-slate-200 flex-col h-full relative print:bg-white print:h-auto print:overflow-visible print:static min-w-0`}
                >
                    {/* Toolbar */}
                    <div className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-3 md:px-6 shadow-sm no-print z-10 gap-2 flex-shrink-0 w-full overflow-x-hidden">

                        {/* Left: Template Selector */}
                        <div className="flex items-center gap-2 flex-grow-0">
                            <button
                                onClick={() => setShowTemplateGallery(true)}
                                className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-all border border-slate-200 group"
                            >
                                <LayoutTemplate size={18} className="text-rose-500" />
                                <span className="text-xs font-bold uppercase tracking-wider hidden sm:inline">Change Template</span>
                                <ChevronRight size={14} className="text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                            </button>
                        </div>

                        {/* Right: Actions */}
                        <div className="flex items-center gap-2 shrink-0">
                            {/* Autosave Status */}
                            <div
                                className={`flex items-center justify-center w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 transition-all ${lastSaved ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                                title={lastSaved ? `Saved at ${lastSaved.toLocaleTimeString()}` : ''}
                            >
                                <CheckCircle size={16} />
                            </div>

                            <div className="w-px h-6 bg-slate-200 hidden sm:block"></div>

                            {/* Action Buttons */}
                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleFileImport}
                                className="hidden"
                                accept=".json"
                            />

                            <ToolbarButton
                                icon={Upload}
                                title="Import JSON"
                                onClick={handleImportClick}
                            />

                            <ToolbarButton
                                icon={FileJson}
                                title="Export JSON"
                                onClick={handleExportJSON}
                            />

                            <ToolbarButton
                                icon={Printer}
                                label="Print"
                                title="Print / Save PDF"
                                onClick={printDocument}
                                primary
                            />
                        </div>
                    </div>

                    {/* Template Gallery Modal */}
                    {showTemplateGallery && (
                        <TemplateGalleryModal
                            templates={TEMPLATES}
                            currentTemplateId={data.templateId}
                            data={data}
                            onSelectTemplate={handleSelectTemplate}
                            onClose={() => setShowTemplateGallery(false)}
                        />
                    )}

                    {/* Preview Area */}
                    <div className="flex-grow overflow-auto bg-slate-200/50 backdrop-blur-sm flex justify-center print:overflow-visible print:bg-white print:h-auto print:block">
                        <div className="py-8 px-4 flex justify-center print:p-0 print:block">
                            <div
                                style={{
                                    width: `${210 * previewScale}mm`,
                                    minHeight: `${297 * previewScale}mm`
                                }}
                                className={`relative transition-all duration-500 ease-out print:!w-auto print:!h-auto print:static print:m-0 print:transform-none print:opacity-100 ${isMounted ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                            >
                                <div
                                    id="biodata-preview"
                                    className="resume-preview shadow-2xl bg-white origin-top-left transition-transform duration-300 ease-out-back overflow-hidden"
                                    style={{
                                        width: '210mm',
                                        minHeight: '297mm',
                                        transform: `scale(${previewScale})`,
                                    }}
                                >
                                    <TemplateRenderer template={data.templateId as TemplateType} data={data} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Bottom Bar */}
                <MobileBottomBar mobileView={mobileView} onViewChange={setMobileView} />
            </div>
        </div>
    );
};

export default Editor;
