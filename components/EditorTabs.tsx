import React from 'react';
import { User, MoonStar, Briefcase, Users as UsersIcon, Phone, Camera } from 'lucide-react';

export interface EditorTab {
    id: 'personal' | 'horoscope' | 'education' | 'family' | 'contact' | 'photo';
    label: string;
    icon: React.ReactNode;
}

export const EDITOR_TABS: EditorTab[] = [
    { id: 'personal', label: 'Basic Info', icon: <User size={18} /> },
    { id: 'horoscope', label: 'Horoscope', icon: <MoonStar size={18} /> },
    { id: 'education', label: 'Career', icon: <Briefcase size={18} /> },
    { id: 'family', label: 'Family', icon: <UsersIcon size={18} /> },
    { id: 'contact', label: 'Contact', icon: <Phone size={18} /> },
    { id: 'photo', label: 'Bio & Photo', icon: <Camera size={18} /> },
];

interface EditorTabsProps {
    activeTab: EditorTab['id'];
    onTabChange: (tabId: EditorTab['id']) => void;
}

export const EditorTabs: React.FC<EditorTabsProps> = ({ activeTab, onTabChange }) => (
    <div className="flex border-b border-slate-200 bg-slate-50 overflow-x-auto scrollbar-hide">
        {EDITOR_TABS.map(tab => (
            <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`flex-1 flex flex-col items-center justify-center py-3 px-4 min-w-[80px] text-xs font-medium transition-colors ${activeTab === tab.id
                    ? 'text-rose-600 border-b-2 border-rose-600 bg-white'
                    : 'text-slate-500 hover:text-slate-700 hover:bg-slate-100'
                    }`}
            >
                <div className="mb-1">{tab.icon}</div>
                {tab.label}
            </button>
        ))}
    </div>
);

export default EditorTabs;
