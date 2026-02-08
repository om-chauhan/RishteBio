import { Biodata, TemplateType } from '../types';

export const INITIAL_DATA: Biodata = {
    id: 'draft-1',
    templateId: TemplateType.TRADITIONAL,
    language: 'en',
    personal: {
        fullName: '',
        dob: '',
        birthTime: '',
        birthPlace: '',
        gender: 'Female',
        height: '',
        weight: '',
        bloodGroup: '',
        complexion: '',
        maritalStatus: 'Never Married',
        religion: 'Hindu',
        caste: '',
        subCaste: '',
        gotra: '',
        manglik: 'No',
        motherTongue: '',
        languagesKnown: ''
    },
    contact: {
        phone: '',
        email: '',
        address: '',
        city: '',
        state: ''
    },
    education: {
        qualification: '',
        university: '',
        occupation: '',
        companyName: '',
        workLocation: '',
        income: ''
    },
    family: {
        fatherName: '',
        fatherOccupation: '',
        motherName: '',
        motherOccupation: '',
        brothers: '',
        sisters: '',
        familyType: 'Nuclear',
        familyLocation: ''
    },
    aboutMe: '',
    partnerExpectations: '',
    hobbies: '',
    photoUrl: null
};
