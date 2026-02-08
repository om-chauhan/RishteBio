import { Briefcase, Stethoscope, Building2, Landmark, Palette } from 'lucide-react';
import { Biodata, TemplateType } from '../types';

export interface SampleProfile extends Biodata {
    label: string;
    icon: any;
}

export const SAMPLE_PROFILES: SampleProfile[] = [
    {
        label: "Software Engineer",
        icon: Briefcase,
        id: 'sample-engineer',
        templateId: TemplateType.MODERN,
        language: 'en',
        personal: {
            fullName: 'Rohan Mehta',
            dob: '1996-08-15',
            birthTime: '14:30',
            birthPlace: 'Mumbai, Maharashtra',
            gender: 'Male',
            height: '5\' 10"',
            weight: '75 kg',
            bloodGroup: 'O+',
            complexion: 'Wheatish',
            maritalStatus: 'Never Married',
            religion: 'Hindu',
            caste: 'Brahmin',
            subCaste: 'Kanyakubja',
            gotra: 'Kashyap',
            manglik: 'No',
            motherTongue: 'Hindi',
            languagesKnown: 'English, Hindi, Marathi'
        },
        contact: {
            phone: '+91 98765 43210',
            email: 'rohan.mehta@example.com',
            address: '402, Sunshine Heights, Andheri West',
            city: 'Mumbai',
            state: 'Maharashtra'
        },
        education: {
            qualification: 'B.Tech in Computer Science',
            university: 'IIT Bombay',
            occupation: 'Senior Software Engineer',
            companyName: 'Google India',
            workLocation: 'Bangalore',
            income: '35 LPA'
        },
        family: {
            fatherName: 'Suresh Mehta',
            fatherOccupation: 'Retired Banker (SBI)',
            motherName: 'Radha Mehta',
            motherOccupation: 'Homemaker',
            brothers: '1 (Working in USA)',
            sisters: 'None',
            familyType: 'Nuclear',
            familyLocation: 'Mumbai'
        },
        aboutMe: 'I am a career-oriented individual with a passion for technology and travel. I value family traditions while embracing modern thinking. Looking for a partner who is intellectual, kind-hearted, and shares similar values.',
        partnerExpectations: 'Looking for a well-educated working professional who is understanding and family-oriented. Preferably from Mumbai or willing to settle in Bangalore.',
        hobbies: 'Coding, Trekking, Photography, Reading Sci-Fi',
        photoUrl: null
    },
    {
        label: "Doctor",
        icon: Stethoscope,
        id: 'sample-doctor',
        templateId: TemplateType.TRADITIONAL,
        language: 'en',
        personal: {
            fullName: 'Dr. Priya Singh',
            dob: '1997-03-22',
            birthTime: '06:15',
            birthPlace: 'Jaipur, Rajasthan',
            gender: 'Female',
            height: '5\' 4"',
            weight: '55 kg',
            bloodGroup: 'B+',
            complexion: 'Fair',
            maritalStatus: 'Never Married',
            religion: 'Hindu',
            caste: 'Rajput',
            subCaste: 'Shekhawat',
            gotra: 'Vats',
            manglik: 'Anshik Manglik',
            motherTongue: 'Hindi',
            languagesKnown: 'English, Hindi'
        },
        contact: {
            phone: '+91 99887 76655',
            email: 'priya.singh@example.com',
            address: '12, Civil Lines, Near Railway Station',
            city: 'Jaipur',
            state: 'Rajasthan'
        },
        education: {
            qualification: 'MBBS, MD (Pediatrics)',
            university: 'AIIMS Delhi',
            occupation: 'Pediatrician',
            companyName: 'Fortis Hospital',
            workLocation: 'Jaipur',
            income: '24 LPA'
        },
        family: {
            fatherName: 'Col. Vikram Singh',
            fatherOccupation: 'Army Officer (Serving)',
            motherName: 'Sunita Singh',
            motherOccupation: 'School Principal',
            brothers: '1 (Captain in Indian Army)',
            sisters: '1 (Studying)',
            familyType: 'Joint',
            familyLocation: 'Jaipur'
        },
        aboutMe: 'A dedicated doctor passionate about child healthcare. I come from a disciplined army background and value honesty and integrity. I enjoy classical music and painting in my free time.',
        partnerExpectations: 'Seeking a professionally qualified match, preferably a Doctor or Defence Officer, who respects family values and supports my career.',
        hobbies: 'Painting, Classical Music, Badminton',
        photoUrl: null
    },
    {
        label: "Chartered Accountant",
        icon: Landmark,
        id: 'sample-ca',
        templateId: TemplateType.MINIMAL,
        language: 'en',
        personal: {
            fullName: 'Amit Verma',
            dob: '1995-11-05',
            birthTime: '09:45',
            birthPlace: 'Delhi',
            gender: 'Male',
            height: '5\' 9"',
            weight: '72 kg',
            bloodGroup: 'A+',
            complexion: 'Fair',
            maritalStatus: 'Never Married',
            religion: 'Hindu',
            caste: 'Agarwal',
            subCaste: 'Baniya',
            gotra: 'Garg',
            manglik: 'No',
            motherTongue: 'Hindi',
            languagesKnown: 'English, Hindi'
        },
        contact: {
            phone: '+91 98112 23344',
            email: 'amit.verma@example.com',
            address: 'B-24, Greater Kailash Part 1',
            city: 'New Delhi',
            state: 'Delhi'
        },
        education: {
            qualification: 'Chartered Accountant (CA)',
            university: 'ICAI',
            occupation: 'Audit Manager',
            companyName: 'Deloitte',
            workLocation: 'Gurgaon',
            income: '20 LPA'
        },
        family: {
            fatherName: 'Rajesh Verma',
            fatherOccupation: 'Business (Textiles)',
            motherName: 'Meena Verma',
            motherOccupation: 'Homemaker',
            brothers: 'None',
            sisters: '1 (Married)',
            familyType: 'Joint',
            familyLocation: 'New Delhi'
        },
        aboutMe: 'I am a balanced and ambitious individual working with a Big 4 firm. I believe in maintaining a healthy work-life balance and enjoy traveling and cricket.',
        partnerExpectations: 'Looking for a compatible partner who is educated, understanding, and comes from a decent family background.',
        hobbies: 'Cricket, Stock Market, Travelling',
        photoUrl: null
    },
    {
        label: "Creative Designer",
        icon: Palette,
        id: 'sample-designer',
        templateId: TemplateType.CREATIVE,
        language: 'en',
        personal: {
            fullName: 'Sneha Roy',
            dob: '1998-02-14',
            birthTime: '18:20',
            birthPlace: 'Kolkata, West Bengal',
            gender: 'Female',
            height: '5\' 5"',
            weight: '52 kg',
            bloodGroup: 'AB+',
            complexion: 'Fair',
            maritalStatus: 'Never Married',
            religion: 'Hindu',
            caste: 'Kayastha',
            subCaste: '',
            gotra: '',
            manglik: 'No',
            motherTongue: 'Bengali',
            languagesKnown: 'English, Bengali, Hindi'
        },
        contact: {
            phone: '+91 90011 22334',
            email: 'sneha.roy@example.com',
            address: 'Salt Lake City, Sector V',
            city: 'Kolkata',
            state: 'West Bengal'
        },
        education: {
            qualification: 'B.Des in Graphic Design',
            university: 'NIFT',
            occupation: 'UX Designer',
            companyName: 'Flipkart',
            workLocation: 'Bangalore',
            income: '18 LPA'
        },
        family: {
            fatherName: 'Alok Roy',
            fatherOccupation: 'Professor',
            motherName: 'Debjani Roy',
            motherOccupation: 'Artist',
            brothers: '1 (Studying)',
            sisters: 'None',
            familyType: 'Nuclear',
            familyLocation: 'Kolkata'
        },
        aboutMe: 'A creative soul who finds joy in art, music, and nature. I am independent, open-minded, and value intellectual conversations.',
        partnerExpectations: 'Looking for someone who is open-minded, respectful, and appreciates art and culture. Qualification matches matter less than connection.',
        hobbies: 'Sketching, Photography, Classical Dance',
        photoUrl: null
    },
    {
        label: "Government Officer",
        icon: Building2,
        id: 'sample-govt',
        templateId: TemplateType.TRADITIONAL,
        language: 'en',
        personal: {
            fullName: 'Rajesh Kumar',
            dob: '1993-06-10',
            birthTime: '11:00',
            birthPlace: 'Patna, Bihar',
            gender: 'Male',
            height: '5\' 11"',
            weight: '78 kg',
            bloodGroup: 'O-',
            complexion: 'Wheatish',
            maritalStatus: 'Never Married',
            religion: 'Hindu',
            caste: 'Bhumihar',
            subCaste: '',
            gotra: 'Kashyap',
            manglik: 'Yes',
            motherTongue: 'Hindi',
            languagesKnown: 'Hindi, English'
        },
        contact: {
            phone: '+91 94311 11222',
            email: 'rajesh.k@example.com',
            address: 'Kankarbagh Colony',
            city: 'Patna',
            state: 'Bihar'
        },
        education: {
            qualification: 'M.Sc (Physics)',
            university: 'Delhi University',
            occupation: 'Bank PO',
            companyName: 'State Bank of India',
            workLocation: 'Patna',
            income: '12 LPA'
        },
        family: {
            fatherName: 'Dr. A.K. Kumar',
            fatherOccupation: 'Doctor',
            motherName: 'Nirmala Devi',
            motherOccupation: 'Homemaker',
            brothers: '2 (Both married)',
            sisters: '1 (Married)',
            familyType: 'Joint',
            familyLocation: 'Patna'
        },
        aboutMe: 'Simple living and high thinking is my motto. I am a government employee with a secure job and a strong belief in indian culture and traditions.',
        partnerExpectations: 'Looking for a homely girl who values family traditions. Education is important but family values are priority.',
        hobbies: 'Reading News, Politics, Yoga',
        photoUrl: null
    }
];
