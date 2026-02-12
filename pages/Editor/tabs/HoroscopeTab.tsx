import React from 'react';
import { Biodata } from '../../../types';
import { InputGroup, SelectGroup } from '../../../components/FormElements';
import { MANGLIK_OPTIONS } from '../../../constants';

interface HoroscopeTabProps {
    data: Biodata;
    onInputChange: (section: keyof Biodata, field: string, value: string) => void;
}

export const HoroscopeTab: React.FC<HoroscopeTabProps> = ({ data, onInputChange }) => (
    <div className="space-y-4 animate-fadeIn">
        <div className="grid grid-cols-2 gap-4">
            <InputGroup label="Time of Birth" value={data.personal.birthTime} onChange={v => onInputChange('personal', 'birthTime', v)} placeholder="10:30 AM" />
            <InputGroup label="Place of Birth" value={data.personal.birthPlace} onChange={v => onInputChange('personal', 'birthPlace', v)} placeholder="Mumbai, India" />
        </div>
        <div className="grid grid-cols-2 gap-4">
            <InputGroup label="Religion" value={data.personal.religion} onChange={v => onInputChange('personal', 'religion', v)} />
            <InputGroup label="Caste" value={data.personal.caste} onChange={v => onInputChange('personal', 'caste', v)} />
        </div>
        <div className="grid grid-cols-2 gap-4">
            <InputGroup label="Sub-caste" value={data.personal.subCaste} onChange={v => onInputChange('personal', 'subCaste', v)} />
            <InputGroup label="Gotra" value={data.personal.gotra} onChange={v => onInputChange('personal', 'gotra', v)} />
        </div>
        <SelectGroup label="Manglik" value={data.personal.manglik} onChange={v => onInputChange('personal', 'manglik', v)} options={MANGLIK_OPTIONS} />
    </div>
);

export default HoroscopeTab;
