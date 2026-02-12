import React from 'react';
import { Calendar, User } from 'lucide-react';
import { CustomDatePicker } from '../../../components/CustomDatePicker';
import { Biodata } from '../../../types';
import { InputGroup, SelectGroup } from '../../../components/FormElements';
import { calculateAge } from '../../../utils';
import { BLOOD_GROUPS, COMPLEXIONS, MARITAL_STATUSES } from '../../../constants';

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
            <CustomDatePicker
                value={data.personal.dob}
                onChange={v => onInputChange('personal', 'dob', v)}
            />
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
            <SelectGroup label="Complexion" value={data.personal.complexion} onChange={v => onInputChange('personal', 'complexion', v)} options={COMPLEXIONS} />
            <SelectGroup label="Blood Group" value={data.personal.bloodGroup} onChange={v => onInputChange('personal', 'bloodGroup', v)} options={BLOOD_GROUPS} />
        </div>
        <InputGroup label="Mother Tongue" value={data.personal.motherTongue} onChange={v => onInputChange('personal', 'motherTongue', v)} />
        <SelectGroup label="Marital Status" value={data.personal.maritalStatus} onChange={v => onInputChange('personal', 'maritalStatus', v)} options={MARITAL_STATUSES} />
    </div>
);

export default PersonalTab;
