import React from 'react';
import { AlertCircle, FileText, Trash2 } from 'lucide-react';

interface DraftRecoveryModalProps {
    onResume: () => void;
    onStartFresh: () => void;
}

export const DraftRecoveryModal: React.FC<DraftRecoveryModalProps> = ({
    onResume,
    onStartFresh
}) => (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4">
        <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 animate-fadeIn">
            <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <AlertCircle className="text-rose-600" size={24} />
            </div>
            <h3 className="text-xl font-bold text-center text-slate-800 mb-2">Unsaved Draft Found</h3>
            <p className="text-center text-slate-500 mb-6 text-sm">
                We found a biodata draft from your previous session. Would you like to resume editing it?
            </p>
            <div className="flex gap-3">
                <button
                    onClick={onStartFresh}
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 bg-slate-100 text-slate-700 rounded-lg font-medium hover:bg-slate-200 transition-colors"
                >
                    <Trash2 size={16} /> Start Fresh
                </button>
                <button
                    onClick={onResume}
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 bg-rose-600 text-white rounded-lg font-medium hover:bg-rose-700 transition-colors shadow-lg shadow-rose-200"
                >
                    <FileText size={16} /> Resume Draft
                </button>
            </div>
        </div>
    </div>
);

export default DraftRecoveryModal;
