import React from 'react';
import { Edit3, EyeIcon } from 'lucide-react';

interface MobileBottomBarProps {
    mobileView: 'editor' | 'preview';
    onViewChange: (view: 'editor' | 'preview') => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({
    mobileView,
    onViewChange
}) => (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 h-14 flex items-center justify-around z-40 no-print safe-area-bottom shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <button
            onClick={() => onViewChange('editor')}
            className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${mobileView === 'editor' ? 'text-rose-600 bg-rose-50/50' : 'text-slate-500 hover:bg-slate-50'}`}
        >
            <Edit3 size={18} />
            <span className="text-[10px] font-medium uppercase tracking-wide">Edit Details</span>
        </button>
        <div className="w-px h-8 bg-slate-200"></div>
        <button
            onClick={() => onViewChange('preview')}
            className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${mobileView === 'preview' ? 'text-rose-600 bg-rose-50/50' : 'text-slate-500 hover:bg-slate-50'}`}
        >
            <EyeIcon size={18} />
            <span className="text-[10px] font-medium uppercase tracking-wide">Preview</span>
        </button>
    </div>
);

export default MobileBottomBar;
