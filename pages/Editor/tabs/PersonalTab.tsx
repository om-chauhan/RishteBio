import React from 'react';
import { Calendar, User } from 'lucide-react';
import DatePicker from 'react-datepicker';
import { Biodata } from '../../../types';
import { InputGroup, SelectGroup } from '../../../components/FormElements';
import { parseDate, formatDate, calculateAge } from '../../../utils';

interface PersonalTabProps {
    data: Biodata;
    onInputChange: (section: keyof Biodata, field: string, value: string) => void;
}

export const PersonalTab: React.FC<PersonalTabProps> = ({ data, onInputChange }) => (
    <div className="space-y-4 animate-fadeIn">
        <InputGroup
            label="Full Name"
            value={data.personal.fullName}
            onChange={v => onInputChange('personal', 'fullName', v)}
            placeholder="e.g. Aditi Sharma"
        />
        <div className="grid grid-cols-2 gap-4">
            <div className="relative">
                <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Date of Birth</label>
                <div className="relative">
                    <DatePicker
                        selected={parseDate(data.personal.dob)}
                        onChange={(date: Date | null) => onInputChange('personal', 'dob', formatDate(date))}
                        dateFormat="dd MMM yyyy"
                        placeholderText="Select Date"
                        className="w-full pl-3 pr-10 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-rose-200 focus:border-rose-400 outline-none text-sm transition-all bg-white text-slate-900 cursor-pointer"
                        showMonthDropdown
                        showYearDropdown
                        dropdownMode="select"
                        icon={<Calendar size={16} />}
                    />
                    <Calendar className="absolute right-3 top-2.5 text-slate-400 pointer-events-none" size={16} />
                </div>
            </div>
            {data.personal.dob && (
                <div>
                    <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Age</label>
                    <div className="w-full px-3 py-2 border border-slate-200 bg-slate-50 rounded-lg text-sm text-slate-600">
                        {calculateAge(data.personal.dob)} Years
                    </div>
                </div>
            )}
        </div>
        <div className="grid grid-cols-2 gap-4">
            <InputGroup label="Height" value={data.personal.height} onChange={v => onInputChange('personal', 'height', v)} placeholder="5' 6&quot;" />
            <InputGroup label="Weight" value={data.personal.weight} onChange={v => onInputChange('personal', 'weight', v)} placeholder="60 Kg" />
        </div>
        <div className="grid grid-cols-2 gap-4">
            <InputGroup label="Complexion" value={data.personal.complexion} onChange={v => onInputChange('personal', 'complexion', v)} placeholder="Fair" />
            <InputGroup label="Blood Group" value={data.personal.bloodGroup} onChange={v => onInputChange('personal', 'bloodGroup', v)} placeholder="B+" />
        </div>
        <InputGroup label="Mother Tongue" value={data.personal.motherTongue} onChange={v => onInputChange('personal', 'motherTongue', v)} />
        <SelectGroup label="Marital Status" value={data.personal.maritalStatus} onChange={v => onInputChange('personal', 'maritalStatus', v)} options={['Never Married', 'Divorced', 'Widowed', 'Separated']} />
    </div>
);

export default PersonalTab;
