import React from 'react';
import { Biodata } from '../../../types';
import { InputGroup } from '../../../components/FormElements';

interface EducationTabProps {
    data: Biodata;
    onInputChange: (section: keyof Biodata, field: string, value: string) => void;
}

export const EducationTab: React.FC<EducationTabProps> = ({ data, onInputChange }) => (
    <div className="space-y-4 animate-fadeIn">
        <InputGroup label="Highest Qualification" value={data.education.qualification} onChange={v => onInputChange('education', 'qualification', v)} placeholder="e.g. MBA Marketing" />
        <InputGroup label="University / College" value={data.education.university} onChange={v => onInputChange('education', 'university', v)} />
        <InputGroup label="Occupation / Job Title" value={data.education.occupation} onChange={v => onInputChange('education', 'occupation', v)} placeholder="Senior Analyst" />
        <InputGroup label="Company Name" value={data.education.companyName} onChange={v => onInputChange('education', 'companyName', v)} />
        <InputGroup label="Work Location" value={data.education.workLocation} onChange={v => onInputChange('education', 'workLocation', v)} placeholder="Bangalore" />
        <InputGroup label="Annual Income" value={data.education.income} onChange={v => onInputChange('education', 'income', v)} placeholder="e.g. 12 LPA" />
    </div>
);

export default EducationTab;
