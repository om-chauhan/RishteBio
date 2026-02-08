import { Briefcase, Stethoscope, Building2, Landmark, Palette, Crown, Gem, Flower2, Building } from 'lucide-react';
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
    },
    {
        label: "Business Executive",
        icon: Building,
        id: 'sample-business',
        templateId: TemplateType.CORPORATE,
        language: 'en',
        personal: {
            fullName: 'Vikram Singhania',
            dob: '1990-09-12',
            birthTime: '10:30',
            birthPlace: 'Mumbai, Maharashtra',
            gender: 'Male',
            height: '6\' 0"',
            weight: '80 kg',
            bloodGroup: 'B+',
            complexion: 'Fair',
            maritalStatus: 'Never Married',
            religion: 'Hindu',
            caste: 'Marwari',
            subCaste: 'Maheshwari',
            gotra: 'Kaushik',
            manglik: 'No',
            motherTongue: 'Hindi',
            languagesKnown: 'English, Hindi, Gujarati'
        },
        contact: {
            phone: '+91 98222 33445',
            email: 'vikram.singhania@corp.com',
            address: 'Penthouse 4, Oberoi Springs',
            city: 'Mumbai',
            state: 'Maharashtra'
        },
        education: {
            qualification: 'MBA (Stanford University)',
            university: 'Stanford',
            occupation: 'Vice President',
            companyName: 'Singhania Group',
            workLocation: 'Mumbai',
            income: '75 LPA'
        },
        family: {
            fatherName: 'Rajendra Singhania',
            fatherOccupation: 'Industrialist',
            motherName: 'Sunita Singhania',
            motherOccupation: 'Social Worker',
            brothers: '1 (Director)',
            sisters: '1 (Married)',
            familyType: 'Joint',
            familyLocation: 'South Mumbai'
        },
        aboutMe: 'Ambitious and driven professional with a global outlook. I balance my corporate responsibilities with fitness and travel. Looking for a partner who is equally passionate and intellectual.',
        partnerExpectations: 'Seeking a sophisticated, educated partner from a business family background who understands the corporate lifestyle.',
        hobbies: 'Golf, Squash, International Travel',
        photoUrl: null
    },
    {
        label: "Legacy Family",
        icon: Crown,
        id: 'sample-royal',
        templateId: TemplateType.ROYAL,
        language: 'en',
        personal: {
            fullName: 'Rana Yuvraj Singh',
            dob: '1994-12-05',
            birthTime: '04:45',
            birthPlace: 'Udaipur, Rajasthan',
            gender: 'Male',
            height: '6\' 2"',
            weight: '85 kg',
            bloodGroup: 'O+',
            complexion: 'Fair',
            maritalStatus: 'Never Married',
            religion: 'Hindu',
            caste: 'Rajput',
            subCaste: 'Sisodia',
            gotra: 'Vashishtha',
            manglik: 'No',
            motherTongue: 'Hindi',
            languagesKnown: 'English, Hindi, Rajasthani'
        },
        contact: {
            phone: '+91 99111 22233',
            email: 'yuvraj.singh@royal.com',
            address: 'Anand Bhavan Palace',
            city: 'Udaipur',
            state: 'Rajasthan'
        },
        education: {
            qualification: 'Masters in Heritage Management',
            university: 'University of York, UK',
            occupation: 'Hotelier & Heritage Conservationist',
            companyName: 'Royal Heritage Hotels',
            workLocation: 'Udaipur',
            income: 'Business Income'
        },
        family: {
            fatherName: 'Rana Vikram Singh',
            fatherOccupation: 'Hotelier & Landlord',
            motherName: 'Rani Padmini Devi',
            motherOccupation: 'Royal Lineage',
            brothers: 'None',
            sisters: '2 (Married in Royal Families)',
            familyType: 'Joint',
            familyLocation: 'Udaipur'
        },
        aboutMe: 'Proud of my heritage and dedicated to preserving our family legacy. I am looking for a partner effectively bridging tradition with modernity.',
        partnerExpectations: 'Seeking a girl from a reputed Rajput family with strong traditional values and a modern education.',
        hobbies: 'Equestrian, Polo, Vintage Cars',
        photoUrl: null
    },
    {
        label: "Artist & Teacher",
        icon: Flower2,
        id: 'sample-floral',
        templateId: TemplateType.FLORAL,
        language: 'en',
        personal: {
            fullName: 'Ananya Deshmukh',
            dob: '1997-05-20',
            birthTime: '10:15',
            birthPlace: 'Pune, Maharashtra',
            gender: 'Female',
            height: '5\' 6"',
            weight: '58 kg',
            bloodGroup: 'B+',
            complexion: 'Fair',
            maritalStatus: 'Never Married',
            religion: 'Hindu',
            caste: 'Maratha',
            subCaste: 'Deshmukh',
            gotra: 'Kashyap',
            manglik: 'No',
            motherTongue: 'Marathi',
            languagesKnown: 'English, Marathi, Hindi'
        },
        contact: {
            phone: '+91 90909 80808',
            email: 'ananya.arts@example.com',
            address: 'Kothrud, Pune',
            city: 'Pune',
            state: 'Maharashtra'
        },
        education: {
            qualification: 'M.F.A (Fine Arts)',
            university: 'JJ School of Art',
            occupation: 'Art Teacher & Painter',
            companyName: 'Symbiosis School',
            workLocation: 'Pune',
            income: '8 LPA'
        },
        family: {
            fatherName: 'Milind Deshmukh',
            fatherOccupation: 'Architect',
            motherName: 'Savita Deshmukh',
            motherOccupation: 'Professor',
            brothers: '1 (Engineer)',
            sisters: 'None',
            familyType: 'Nuclear',
            familyLocation: 'Pune'
        },
        aboutMe: 'I find beauty in simple things. Art is my passion and teaching is my calling. I am looking for a partner who is sensitive, artistic, and kind-hearted.',
        partnerExpectations: 'Looking for a well-settled partner who appreciates art and culture. Preference for Pune or Mumbai based families.',
        hobbies: 'Painting, Classical Dance (Kathak), Gardening',
        photoUrl: null
    },
    {
        label: "High Profile",
        icon: Gem,
        id: 'sample-elegant',
        templateId: TemplateType.ELEGANT,
        language: 'en',
        personal: {
            fullName: 'Aisha Kapoor',
            dob: '1995-02-28',
            birthTime: '20:00',
            birthPlace: 'Delhi',
            gender: 'Female',
            height: '5\' 8"',
            weight: '60 kg',
            bloodGroup: 'A+',
            complexion: 'Very Fair',
            maritalStatus: 'Never Married',
            religion: 'Hindu',
            caste: 'Khatri',
            subCaste: 'Kapoor',
            gotra: 'Arora',
            manglik: 'No',
            motherTongue: 'Hindi',
            languagesKnown: 'English, Hindi, French'
        },
        contact: {
            phone: '+91 99880 07766',
            email: 'aisha.k@style.com',
            address: 'Golf Links, New Delhi',
            city: 'New Delhi',
            state: 'Delhi'
        },
        education: {
            qualification: 'Masters in Luxury Brand Management',
            university: 'ESSEC Business School, France',
            occupation: 'Brand Consultant',
            companyName: 'LVMH',
            workLocation: 'Delhi / Paris',
            income: '45 LPA'
        },
        family: {
            fatherName: 'Sanjay Kapoor',
            fatherOccupation: 'Exporter',
            motherName: 'Ritu Kapoor',
            motherOccupation: 'Fashion Designer',
            brothers: 'None',
            sisters: '1 (Fashion Blogger)',
            familyType: 'Nuclear',
            familyLocation: 'South Delhi'
        },
        aboutMe: 'A connoisseur of finer things in life. I have lived in Paris and New York. I value sophistication, intellect, and global exposure.',
        partnerExpectations: 'Seeking an ivy-league educated partner from an established business or industrialist family. Must be cosmopolitan and well-traveled.',
        hobbies: 'Wine Tasting, Opera, Traveling, Luxury Living',
        photoUrl: null
    }
];
