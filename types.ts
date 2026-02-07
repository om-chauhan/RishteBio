export interface PersonalDetails {
  fullName: string;
  dob: string;
  birthTime: string;
  birthPlace: string;
  gender: string;
  height: string;
  weight: string;
  bloodGroup: string;
  complexion: string;
  maritalStatus: string;
  religion: string;
  caste: string;
  subCaste: string;
  gotra: string;
  manglik: string;
  motherTongue: string;
  languagesKnown: string;
}

export interface ContactDetails {
  phone: string;
  email: string;
  address: string;
  city: string;
  state: string;
}

export interface EducationJob {
  qualification: string;
  university: string;
  occupation: string;
  companyName: string;
  workLocation: string;
  income: string;
}

export interface FamilyDetails {
  fatherName: string;
  fatherOccupation: string;
  motherName: string;
  motherOccupation: string;
  brothers: string;
  sisters: string;
  familyType: string; // Joint/Nuclear
  familyLocation: string;
}

export interface Biodata {
  id: string;
  templateId: string;
  language: 'en' | 'hi';
  personal: PersonalDetails;
  contact: ContactDetails;
  education: EducationJob;
  family: FamilyDetails;
  aboutMe: string; // Can be AI generated
  partnerExpectations: string;
  hobbies: string;
  photoUrl: string | null;
}

export enum TemplateType {
  TRADITIONAL = 'TRADITIONAL',
  MODERN = 'MODERN',
  MINIMAL = 'MINIMAL',
  CREATIVE = 'CREATIVE',
}

export interface TemplateConfig {
  id: TemplateType;
  name: string;
  thumbnail: string;
  description: string;
}