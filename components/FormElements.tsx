import React from 'react';

interface InputGroupProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    type?: string;
    placeholder?: string;
}

export const InputGroup: React.FC<InputGroupProps> = ({
    label,
    value,
    onChange,
    type = "text",
    placeholder = ""
}) => (
    <div>
        <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">{label}</label>
        <input
            type={type}
            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-rose-200 focus:border-rose-400 outline-none text-sm transition-all bg-white text-slate-900"
            value={value}
            onChange={e => onChange(e.target.value)}
            placeholder={placeholder}
        />
    </div>
);

interface SelectGroupProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    options: string[];
}

export const SelectGroup: React.FC<SelectGroupProps> = ({
    label,
    value,
    onChange,
    options
}) => (
    <div>
        <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">{label}</label>
        <select
            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-rose-200 focus:border-rose-400 outline-none text-sm transition-all bg-white text-slate-900"
            value={value}
            onChange={e => onChange(e.target.value)}
        >
            {options.map((opt: string) => (
                <option key={opt} value={opt}>{opt}</option>
            ))}
        </select>
    </div>
);

interface TextAreaGroupProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    rows?: number;
    placeholder?: string;
}

export const TextAreaGroup: React.FC<TextAreaGroupProps> = ({
    label,
    value,
    onChange,
    rows = 3,
    placeholder = ""
}) => (
    <div>
        <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">{label}</label>
        <textarea
            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-rose-200 focus:border-rose-400 outline-none text-sm transition-all bg-white text-slate-900"
            rows={rows}
            value={value}
            onChange={e => onChange(e.target.value)}
            placeholder={placeholder}
        />
    </div>
);
