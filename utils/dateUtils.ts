/**
 * Date utility functions for biodata
 */

/**
 * Parse a date string in YYYY-MM-DD format to a Date object
 */
export const parseDate = (dateStr: string): Date | null => {
    if (!dateStr) return null;
    const [y, m, d] = dateStr.split('-').map(Number);
    return new Date(y, m - 1, d);
};

/**
 * Format a Date object to YYYY-MM-DD string
 */
export const formatDate = (date: Date | null): string => {
    if (!date) return '';
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};

/**
 * Calculate age from date of birth string
 */
export const calculateAge = (dob: string): number | '' => {
    if (!dob) return '';
    const birthDate = parseDate(dob);
    if (!birthDate) return '';
    const ageDifMs = Date.now() - birthDate.getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
};

/**
 * Sanitize a string for use in filenames
 */
export const sanitizeFileName = (name: string): string => {
    return (name || 'draft')
        .replace(/[^a-z0-9]/gi, '_')
        .toLowerCase();
};
