import React from 'react';
import { Biodata } from '../../../types';
import { InputGroup, SelectGroup } from '../../../components/FormElements';
import { FAMILY_TYPES } from '../../../constants';

interface FamilyTabProps {
    data: Biodata;
    onInputChange: (section: keyof Biodata, field: string, value: string) => void;
}

export const FamilyTab: React.FC<FamilyTabProps> = ({ data, onInputChange }) => (
    <div className="space-y-4 animate-fadeIn">
        <SelectGroup label="Family Type" value={data.family.familyType} onChange={v => onInputChange('family', 'familyType', v)} options={FAMILY_TYPES} />
        <InputGroup label="Family Location" value={data.family.familyLocation} onChange={v => onInputChange('family', 'familyLocation', v)} placeholder="City, State" />
        <InputGroup label="Father's Name" value={data.family.fatherName} onChange={v => onInputChange('family', 'fatherName', v)} />
        <InputGroup label="Father's Occupation" value={data.family.fatherOccupation} onChange={v => onInputChange('family', 'fatherOccupation', v)} />
        <InputGroup label="Mother's Name" value={data.family.motherName} onChange={v => onInputChange('family', 'motherName', v)} />
        <InputGroup label="Mother's Occupation" value={data.family.motherOccupation} onChange={v => onInputChange('family', 'motherOccupation', v)} />
        <div className="grid grid-cols-2 gap-4">
            <InputGroup label="Brothers" value={data.family.brothers} onChange={v => onInputChange('family', 'brothers', v)} placeholder="1 (Married)" />
            <InputGroup label="Sisters" value={data.family.sisters} onChange={v => onInputChange('family', 'sisters', v)} placeholder="None" />
        </div>
    </div>
);

export default FamilyTab;
