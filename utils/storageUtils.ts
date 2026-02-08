import { Biodata } from '../types';
import { INITIAL_DATA } from '../constants';

const STORAGE_KEY = 'biodata_draft';

/**
 * Save biodata to localStorage
 */
export const saveDraft = (data: Biodata): void => {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (error) {
        console.error('Error saving draft:', error);
    }
};

/**
 * Load biodata from localStorage
 */
export const loadDraft = (): Biodata | null => {
    try {
        const savedData = localStorage.getItem(STORAGE_KEY);
        if (savedData) {
            return JSON.parse(savedData);
        }
        return null;
    } catch (error) {
        console.error('Error loading draft:', error);
        return null;
    }
};

/**
 * Clear draft from localStorage
 */
export const clearDraft = (): void => {
    try {
        localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
        console.error('Error clearing draft:', error);
    }
};

/**
 * Export biodata as JSON file
 */
export const exportToJSON = (data: Biodata): void => {
    const dataStr = JSON.stringify(data, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;

    const sanitizedName = (data.personal.fullName || 'draft')
        .replace(/[^a-z0-9]/gi, '_')
        .toLowerCase();
    link.download = `biodata_${sanitizedName}.json`;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
};

/**
 * Parse imported JSON data and merge with defaults
 */
export const parseImportedData = (jsonString: string): Biodata | null => {
    try {
        const json = JSON.parse(jsonString);

        if (json && typeof json === 'object') {
            const importedData = json as Partial<Biodata>;
            const mergedData: Biodata = {
                ...INITIAL_DATA,
                ...importedData,
                personal: { ...INITIAL_DATA.personal, ...(importedData.personal || {}) },
                contact: { ...INITIAL_DATA.contact, ...(importedData.contact || {}) },
                education: { ...INITIAL_DATA.education, ...(importedData.education || {}) },
                family: { ...INITIAL_DATA.family, ...(importedData.family || {}) },
            };
            return mergedData;
        }
        return null;
    } catch (error) {
        console.error('Error parsing JSON:', error);
        return null;
    }
};
