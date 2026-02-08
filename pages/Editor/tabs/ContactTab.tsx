import React from 'react';
import { Biodata } from '../../../types';
import { InputGroup } from '../../../components/FormElements';

interface ContactTabProps {
    data: Biodata;
    onInputChange: (section: keyof Biodata, field: string, value: string) => void;
}

export const ContactTab: React.FC<ContactTabProps> = ({ data, onInputChange }) => (
    <div className="space-y-4 animate-fadeIn">
        <InputGroup label="Phone Number" value={data.contact.phone} onChange={v => onInputChange('contact', 'phone', v)} placeholder="+91 98765 43210" />
        <InputGroup label="Email Address" value={data.contact.email} onChange={v => onInputChange('contact', 'email', v)} placeholder="email@example.com" />
        <InputGroup label="Current City" value={data.contact.city} onChange={v => onInputChange('contact', 'city', v)} />
        <InputGroup label="State / Country" value={data.contact.state} onChange={v => onInputChange('contact', 'state', v)} />
        <div>
            <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Full Address</label>
            <textarea
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-rose-200 focus:border-rose-400 outline-none text-sm transition-all bg-white text-slate-900"
                rows={3}
                value={data.contact.address}
                onChange={e => onInputChange('contact', 'address', e.target.value)}
            />
        </div>
    </div>
);

export default ContactTab;
