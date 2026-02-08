import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ToolbarButtonProps {
    icon: LucideIcon;
    label?: string;
    title: string;
    onClick: () => void;
    primary?: boolean;
}

export const ToolbarButton: React.FC<ToolbarButtonProps> = ({
    icon: Icon,
    label,
    title,
    onClick,
    primary = false
}) => (
    <button
        onClick={onClick}
        className={`
      relative group flex items-center justify-center gap-2 px-3 py-2 rounded-lg transition-all
      ${primary
                ? 'bg-slate-900 text-white hover:bg-slate-800 shadow-md hover:shadow-lg active:scale-95'
                : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 active:bg-slate-100'
            }
    `}
        title={title}
        aria-label={title}
    >
        <Icon size={18} className={primary ? 'text-white' : 'text-slate-600'} />
        {label && (
            <span className={`text-sm font-semibold ${primary ? 'hidden sm:inline' : 'hidden md:inline'}`}>
                {label}
            </span>
        )}

        {/* CSS Tooltip for Desktop */}
        <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-800 text-white text-[10px] font-medium rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50 shadow-lg hidden md:block">
            {title}
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 border-4 border-transparent border-b-slate-800 transform rotate-180"></div>
        </div>
    </button>
);

export default ToolbarButton;
