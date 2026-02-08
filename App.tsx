import React, { useState, useRef, useCallback, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import {
  Heart, Download, Share2, Sparkles, LayoutTemplate,
  User, Phone, BookOpen, Users as UsersIcon, Camera,
  ChevronRight, Save, Printer, CheckCircle, AlertCircle, Trash2, FileText,
  Upload, FileJson, Menu, X, Edit3, Eye as EyeIcon, Calendar, Languages,
  MoonStar, Briefcase, MapPin, LogIn, PenTool, Stethoscope, Building2, Landmark, Palette
} from 'lucide-react';
import DatePicker from 'react-datepicker';
import { Biodata, TemplateType, TemplateConfig } from './types';
import { TemplateRenderer } from './components/BioTemplates';
import { generateProfessionalSummary } from './services/geminiService';
import { LABELS } from './translations';

// --- Constants ---
const INITIAL_DATA: Biodata = {
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

const TEMPLATES: TemplateConfig[] = [
  { id: TemplateType.TRADITIONAL, name: 'Traditional', thumbnail: 'https://images.unsplash.com/photo-1583316174775-bd6dc0e9f298?auto=format&fit=crop&q=80&w=400', description: 'Classic and formal layout with traditional patterns.' },
  { id: TemplateType.MODERN, name: 'Modern', thumbnail: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=400', description: 'Clean lines with a professional side profile.' },
  { id: TemplateType.MINIMAL, name: 'Minimal', thumbnail: 'https://images.unsplash.com/photo-1512418490979-92798cccf3b8?auto=format&fit=crop&q=80&w=400', description: 'Elegant and clean typography-focused design.' },
  { id: TemplateType.CREATIVE, name: 'Creative', thumbnail: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=400', description: 'Stylish and artistic design with vibrant accents.' },
];

const SAMPLE_PROFILES: (Biodata & { label: string, icon: any })[] = [
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

// --- Sub-components ---

const NavBar = ({ language, setLanguage }: { language: 'en' | 'hi', setLanguage: (l: 'en' | 'hi') => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-rose-500 p-1.5 rounded-lg">
                <Heart className="text-white fill-current" size={20} />
              </div>
              <span className="font-bold text-xl text-slate-800 tracking-tight font-['Playfair_Display']">RishteBio</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 text-slate-600 text-sm font-medium hover:bg-slate-200 transition-colors"
            >
              <Languages size={16} /> {language === 'en' ? 'हिन्दी' : 'English'}
            </button>
            <Link to="/editor" className="text-sm font-medium text-slate-600 hover:text-rose-600 transition-colors">Create</Link>
            <button className="flex items-center gap-2 bg-rose-50 text-rose-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-rose-100 transition-colors">
              <LogIn size={16} /> Sign In
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
              className="text-slate-600 p-1 bg-slate-100 rounded-md"
            >
              <Languages size={20} />
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-rose-600 p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 absolute w-full left-0 animate-fadeIn shadow-lg">
          <div className="px-4 py-3 space-y-3">
            <Link to="/editor" className="block text-base font-medium text-slate-700 hover:text-rose-600" onClick={() => setIsOpen(false)}>Create Biodata</Link>
            <div className="pt-2 border-t border-slate-100">
              <button className="w-full text-left text-base font-medium text-rose-600 flex items-center gap-2" onClick={() => setIsOpen(false)}>
                <LogIn size={16} /> Sign In with Google
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const Home = () => {
  const navigate = useNavigate();

  const handleUseSample = (sample: typeof SAMPLE_PROFILES[0]) => {
    // Destructure to remove non-serializable 'icon' component and 'label'
    // This prevents DataCloneError when using navigate state
    const { icon, label, ...biodata } = sample;

    // Navigate with state, creating a new unique ID for the draft
    navigate('/editor', {
      state: {
        prefilledData: {
          ...biodata,
          id: `draft-${Date.now()}`
        }
      }
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col no-print">
      <div className="flex-grow flex flex-col items-center pt-12 pb-20 px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-rose-100 text-rose-600 text-xs font-bold uppercase tracking-widest mb-6">
            India's #1 Biodata Builder
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 font-['Playfair_Display'] tracking-tight">
            Create the perfect <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-400">Marriage Biodata</span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            Design beautiful, professional matrimony profiles in English or Hindi. Choose from traditional to creative templates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/editor" className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl group">
              Start Designing <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Link>
          </div>
        </div>

        {/* Sample Profiles Section */}
        <div className="w-full max-w-6xl mb-20">
          <div className="flex items-center justify-center gap-2 mb-8">
            <PenTool className="text-rose-500" size={24} />
            <h2 className="text-2xl font-bold text-slate-800">Start with a Sample Profile</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {SAMPLE_PROFILES.map((profile) => (
              <button
                key={profile.id}
                onClick={() => handleUseSample(profile)}
                className="bg-white p-5 rounded-xl border border-slate-200 hover:border-rose-300 hover:shadow-lg transition-all text-left group flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center mb-3 group-hover:bg-rose-50 group-hover:text-rose-500 transition-colors text-slate-600">
                  <profile.icon size={24} />
                </div>
                <h3 className="font-bold text-slate-800 mb-1">{profile.label}</h3>
                <p className="text-xs text-slate-500 mb-3 line-clamp-2">{profile.aboutMe}</p>
                <span className="text-xs font-semibold text-rose-600 uppercase tracking-wider flex items-center gap-1">
                  Edit this <ChevronRight size={12} />
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-6xl w-full">
          {[
            { title: 'Multi-Language', desc: 'Create biodata in English or Hindi with one click.' },
            { title: 'Premium Designs', desc: 'Templates tailored for Indian marriage standards.' },
            { title: 'Privacy First', desc: 'Secure local drafting. No data sent to server unless saved.' }
          ].map((feature, i) => (
            <div key={i} className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
              <div className="w-10 h-10 bg-rose-50 rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="text-rose-500" size={20} />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ToolbarButton = ({ icon: Icon, label, title, onClick, primary = false }: any) => (
  <button
    onClick={onClick}
    className={`
      relative group flex items-center justify-center gap-2 px-3 py-2 rounded-lg transition-all
      ${primary
        ? 'bg-slate-900 text-white hover:bg-slate-800 shadow-md hover:shadow-lg active:scale-95'
        : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 active:bg-slate-100'
      }
    `}
    title={title} // Native tooltip as fallback for mobile long-press
    aria-label={title}
  >
    <Icon size={18} className={primary ? 'text-white' : 'text-slate-600'} />
    {label && (
      <span className={`text-sm font-semibold ${primary ? 'hidden sm:inline' : 'hidden md:inline'}`}>
        {label}
      </span>
    )}

    {/* CSS Tooltip for Desktop */}
    <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-800 text-white text-[10px] font-medium rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50 shadow-lg hidden md:block">
      {title}
      <div className="absolute -top-1 left-1/2 -translate-x-1/2 border-4 border-transparent border-b-slate-800 transform rotate-180"></div>
    </div>
  </button>
);

const Editor = ({ language, setLanguage }: { language: 'en' | 'hi', setLanguage: (l: 'en' | 'hi') => void }) => {
  const [data, setData] = useState<Biodata>(INITIAL_DATA);
  const [activeTab, setActiveTab] = useState<'personal' | 'horoscope' | 'education' | 'family' | 'contact' | 'photo'>('personal');
  const [isGenerating, setIsGenerating] = useState(false);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [mobileView, setMobileView] = useState<'editor' | 'preview'>('editor');

  // Preview Scaling & Animation State
  const [previewScale, setPreviewScale] = useState(1);
  const [isMounted, setIsMounted] = useState(false);
  const [showTemplateGallery, setShowTemplateGallery] = useState(false);
  const previewContainerRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Draft Management State
  const [showDraftModal, setShowDraftModal] = useState(false);
  const [pendingDraft, setPendingDraft] = useState<Biodata | null>(null);
  const [isReady, setIsReady] = useState(false); // Pauses autosave until decision is made

  // Check for existing draft or pre-filled data on mount
  useEffect(() => {
    // 1. Check if data was passed via navigation (Sample Profile)
    if (location.state?.prefilledData) {
      setData(location.state.prefilledData);
      setLanguage(location.state.prefilledData.language || 'en');
      setIsReady(true);
      setShowDraftModal(false);
      // Clear history state to avoid re-applying on simple refresh if desired, 
      // though keeping it allows persistence on refresh which is good.
      // window.history.replaceState({}, document.title);
    }
    // 2. Otherwise check local storage
    else {
      try {
        const savedData = localStorage.getItem('biodata_draft');
        if (savedData) {
          setPendingDraft(JSON.parse(savedData));
          setShowDraftModal(true);
        } else {
          setIsReady(true);
        }
      } catch (error) {
        console.error("Error loading draft:", error);
        setIsReady(true);
      }
    }

    // Trigger animation slightly after mount
    setTimeout(() => setIsMounted(true), 100);
  }, []);

  // Sync language prop to data state
  useEffect(() => {
    setData(prev => ({ ...prev, language }));
  }, [language]);

  // Handle Resize for Preview Scale
  useEffect(() => {
    const calculateScale = () => {
      if (previewContainerRef.current) {
        const containerWidth = previewContainerRef.current.clientWidth;
        // 210mm in pixels is approx 794px at 96 DPI
        const A4_WIDTH_PX = 794;
        const padding = 32; // 2rem padding

        // Calculate max width available for the page
        const availableWidth = containerWidth - padding;

        // Determine scale needed to fit A4 width into container
        let newScale = availableWidth / A4_WIDTH_PX;

        // Clamp scale to reasonable limits
        if (newScale > 1.2) newScale = 1.2;
        if (newScale < 0.3) newScale = 0.3;

        setPreviewScale(newScale);
      }
    };

    // Calculate immediately and on resize
    calculateScale();
    const observer = new ResizeObserver(calculateScale);
    if (previewContainerRef.current) {
      observer.observe(previewContainerRef.current);
    }

    window.addEventListener('resize', calculateScale);

    return () => {
      window.removeEventListener('resize', calculateScale);
      observer.disconnect();
    };
  }, [mobileView]); // Re-calculate when view changes (mobile toggle)

  const handleResumeDraft = () => {
    if (pendingDraft) {
      setData(pendingDraft);
      setLanguage(pendingDraft.language);
      setLastSaved(new Date());
    }
    setShowDraftModal(false);
    setIsReady(true);
  };

  const handleStartFresh = () => {
    localStorage.removeItem('biodata_draft');
    setData(INITIAL_DATA);
    setShowDraftModal(false);
    setIsReady(true);
  };

  // Keep a ref of data for the interval to access the latest state
  const dataRef = useRef(data);
  useEffect(() => {
    dataRef.current = data;
  }, [data]);

  // Autosave interval (every 30 seconds)
  useEffect(() => {
    if (!isReady) return; // Don't autosave while modal is open

    const intervalId = setInterval(() => {
      localStorage.setItem('biodata_draft', JSON.stringify(dataRef.current));
      setLastSaved(new Date());
    }, 30000);

    return () => clearInterval(intervalId);
  }, [isReady]);

  const handleInputChange = (section: keyof Biodata, field: string, value: string) => {
    setData(prev => ({
      ...prev,
      [section]: typeof prev[section] === 'object' && prev[section] !== null
        ? { ...prev[section], [field]: value }
        : value
    }));
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setData(prev => ({ ...prev, photoUrl: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const generateAIAbout = async () => {
    setIsGenerating(true);
    const summary = await generateProfessionalSummary(data);
    setData(prev => ({ ...prev, aboutMe: summary }));
    setIsGenerating(false);
  };

  const printDocument = () => {
    window.print();
  };

  const handleExportJSON = () => {
    const dataStr = JSON.stringify(data, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    // Sanitize filename to prevent issues
    const sanitizedName = (data.personal.fullName || 'draft')
      .replace(/[^a-z0-9]/gi, '_')
      .toLowerCase();
    link.download = `biodata_${sanitizedName}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleImportClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const json = JSON.parse(event.target?.result as string);

        // Robust check: Ensure it's an object and merge with INITIAL_DATA structure
        if (json && typeof json === 'object') {
          const importedData = json as Partial<Biodata>;
          const mergedData: Biodata = {
            ...INITIAL_DATA,
            ...importedData,
            // Deep merge nested objects to ensure new fields are present if missing in JSON
            personal: { ...INITIAL_DATA.personal, ...(importedData.personal || {}) },
            contact: { ...INITIAL_DATA.contact, ...(importedData.contact || {}) },
            education: { ...INITIAL_DATA.education, ...(importedData.education || {}) },
            family: { ...INITIAL_DATA.family, ...(importedData.family || {}) },
          };

          setData(mergedData);
          setLanguage(mergedData.language || 'en');
          setLastSaved(new Date());
          localStorage.setItem('biodata_draft', JSON.stringify(mergedData));
          // You might want to show a toast notification here
        } else {
          alert("Invalid RishteBio JSON file.");
        }
      } catch (err) {
        console.error("Error parsing JSON:", err);
        alert("Failed to parse JSON file.");
      }
    };
    reader.readAsText(file);
    e.target.value = ''; // Reset so same file can be selected again
  };

  // --- Helper Functions for DatePicker ---
  const parseDate = (dateStr: string) => {
    if (!dateStr) return null;
    const [y, m, d] = dateStr.split('-').map(Number);
    // Create local date from parts
    return new Date(y, m - 1, d);
  };

  const formatDate = (date: Date | null) => {
    if (!date) return '';
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const calculateAge = (dob: string) => {
    if (!dob) return '';
    const birthDate = parseDate(dob);
    if (!birthDate) return '';
    const ageDifMs = Date.now() - birthDate.getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  const tabs = [
    { id: 'personal', label: 'Basic Info', icon: <User size={18} /> },
    { id: 'horoscope', label: 'Horoscope', icon: <MoonStar size={18} /> },
    { id: 'education', label: 'Career', icon: <Briefcase size={18} /> },
    { id: 'family', label: 'Family', icon: <UsersIcon size={18} /> },
    { id: 'contact', label: 'Contact', icon: <Phone size={18} /> },
    { id: 'photo', label: 'Bio & Photo', icon: <Camera size={18} /> },
  ];

  return (
    // Use 100dvh for better mobile browser support (accounts for dynamic address bar)
    <div className="flex flex-col h-[calc(100vh-64px)] md:h-[calc(100dvh-64px)] bg-slate-100 relative">

      {/* Draft Recovery Modal */}
      {showDraftModal && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 animate-fadeIn">
            <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              <AlertCircle className="text-rose-600" size={24} />
            </div>
            <h3 className="text-xl font-bold text-center text-slate-800 mb-2">Unsaved Draft Found</h3>
            <p className="text-center text-slate-500 mb-6 text-sm">
              We found a biodata draft from your previous session. Would you like to resume editing it?
            </p>
            <div className="flex gap-3">
              <button
                onClick={handleStartFresh}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 bg-slate-100 text-slate-700 rounded-lg font-medium hover:bg-slate-200 transition-colors"
              >
                <Trash2 size={16} /> Start Fresh
              </button>
              <button
                onClick={handleResumeDraft}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 bg-rose-600 text-white rounded-lg font-medium hover:bg-rose-700 transition-colors shadow-lg shadow-rose-200"
              >
                <FileText size={16} /> Resume Draft
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile/Tablet: Stacked via Toggle, Desktop: Side-by-Side */}
      {/* pb-16 added to handle fixed bottom nav overlap */}
      <div className={`flex flex-col lg:flex-row h-full overflow-hidden ${showDraftModal ? 'blur-sm pointer-events-none' : ''} pb-14 lg:pb-0 print:h-auto print:overflow-visible`}>

        {/* LEFT: Editor Form */}
        <div className={`${mobileView === 'preview' ? 'hidden lg:flex' : 'flex'} w-full lg:w-[450px] bg-white border-r border-slate-200 flex-col h-full no-print z-10 shadow-xl print:hidden`}>
          <div className="p-4 border-b border-slate-200 bg-white">
            <h2 className="font-bold text-slate-800 text-lg flex items-center gap-2">
              <LayoutTemplate size={20} className="text-rose-500" /> Editor
            </h2>
          </div>

          <div className="flex border-b border-slate-200 bg-slate-50 overflow-x-auto scrollbar-hide">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex-1 flex flex-col items-center justify-center py-3 px-4 min-w-[80px] text-xs font-medium transition-colors ${activeTab === tab.id
                  ? 'text-rose-600 border-b-2 border-rose-600 bg-white'
                  : 'text-slate-500 hover:text-slate-700 hover:bg-slate-100'
                  }`}
              >
                <div className="mb-1">{tab.icon}</div>
                {tab.label}
              </button>
            ))}
          </div>

          <div className="flex-grow overflow-y-auto p-6 space-y-6">
            {activeTab === 'personal' && (
              <div className="space-y-4 animate-fadeIn">
                <InputGroup label="Full Name" value={data.personal.fullName} onChange={v => handleInputChange('personal', 'fullName', v)} placeholder="e.g. Aditi Sharma" />
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Date of Birth</label>
                    <div className="relative">
                      <DatePicker
                        selected={parseDate(data.personal.dob)}
                        onChange={(date: Date | null) => handleInputChange('personal', 'dob', formatDate(date))}
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
                  <InputGroup label="Height" value={data.personal.height} onChange={v => handleInputChange('personal', 'height', v)} placeholder="5' 6&quot;" />
                  <InputGroup label="Weight" value={data.personal.weight} onChange={v => handleInputChange('personal', 'weight', v)} placeholder="60 Kg" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <InputGroup label="Complexion" value={data.personal.complexion} onChange={v => handleInputChange('personal', 'complexion', v)} placeholder="Fair" />
                  <InputGroup label="Blood Group" value={data.personal.bloodGroup} onChange={v => handleInputChange('personal', 'bloodGroup', v)} placeholder="B+" />
                </div>
                <InputGroup label="Mother Tongue" value={data.personal.motherTongue} onChange={v => handleInputChange('personal', 'motherTongue', v)} />
                <SelectGroup label="Marital Status" value={data.personal.maritalStatus} onChange={v => handleInputChange('personal', 'maritalStatus', v)} options={['Never Married', 'Divorced', 'Widowed', 'Separated']} />
              </div>
            )}

            {activeTab === 'horoscope' && (
              <div className="space-y-4 animate-fadeIn">
                <div className="grid grid-cols-2 gap-4">
                  <InputGroup label="Time of Birth" value={data.personal.birthTime} onChange={v => handleInputChange('personal', 'birthTime', v)} placeholder="10:30 AM" />
                  <InputGroup label="Place of Birth" value={data.personal.birthPlace} onChange={v => handleInputChange('personal', 'birthPlace', v)} placeholder="Mumbai, India" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <InputGroup label="Religion" value={data.personal.religion} onChange={v => handleInputChange('personal', 'religion', v)} />
                  <InputGroup label="Caste" value={data.personal.caste} onChange={v => handleInputChange('personal', 'caste', v)} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <InputGroup label="Sub-caste" value={data.personal.subCaste} onChange={v => handleInputChange('personal', 'subCaste', v)} />
                  <InputGroup label="Gotra" value={data.personal.gotra} onChange={v => handleInputChange('personal', 'gotra', v)} />
                </div>
                <SelectGroup label="Manglik" value={data.personal.manglik} onChange={v => handleInputChange('personal', 'manglik', v)} options={['No', 'Yes', 'Anshik Manglik', "Don't Know"]} />
              </div>
            )}

            {activeTab === 'education' && (
              <div className="space-y-4 animate-fadeIn">
                <InputGroup label="Highest Qualification" value={data.education.qualification} onChange={v => handleInputChange('education', 'qualification', v)} placeholder="e.g. MBA Marketing" />
                <InputGroup label="University / College" value={data.education.university} onChange={v => handleInputChange('education', 'university', v)} />
                <InputGroup label="Occupation / Job Title" value={data.education.occupation} onChange={v => handleInputChange('education', 'occupation', v)} placeholder="Senior Analyst" />
                <InputGroup label="Company Name" value={data.education.companyName} onChange={v => handleInputChange('education', 'companyName', v)} />
                <InputGroup label="Work Location" value={data.education.workLocation} onChange={v => handleInputChange('education', 'workLocation', v)} placeholder="Bangalore" />
                <InputGroup label="Annual Income" value={data.education.income} onChange={v => handleInputChange('education', 'income', v)} placeholder="e.g. 12 LPA" />
              </div>
            )}

            {activeTab === 'family' && (
              <div className="space-y-4 animate-fadeIn">
                <SelectGroup label="Family Type" value={data.family.familyType} onChange={v => handleInputChange('family', 'familyType', v)} options={['Nuclear', 'Joint', 'Extended']} />
                <InputGroup label="Family Location" value={data.family.familyLocation} onChange={v => handleInputChange('family', 'familyLocation', v)} placeholder="City, State" />
                <InputGroup label="Father's Name" value={data.family.fatherName} onChange={v => handleInputChange('family', 'fatherName', v)} />
                <InputGroup label="Father's Occupation" value={data.family.fatherOccupation} onChange={v => handleInputChange('family', 'fatherOccupation', v)} />
                <InputGroup label="Mother's Name" value={data.family.motherName} onChange={v => handleInputChange('family', 'motherName', v)} />
                <InputGroup label="Mother's Occupation" value={data.family.motherOccupation} onChange={v => handleInputChange('family', 'motherOccupation', v)} />
                <div className="grid grid-cols-2 gap-4">
                  <InputGroup label="Brothers" value={data.family.brothers} onChange={v => handleInputChange('family', 'brothers', v)} placeholder="1 (Married)" />
                  <InputGroup label="Sisters" value={data.family.sisters} onChange={v => handleInputChange('family', 'sisters', v)} placeholder="None" />
                </div>
              </div>
            )}

            {activeTab === 'contact' && (
              <div className="space-y-4 animate-fadeIn">
                <InputGroup label="Phone Number" value={data.contact.phone} onChange={v => handleInputChange('contact', 'phone', v)} placeholder="+91 98765 43210" />
                <InputGroup label="Email Address" value={data.contact.email} onChange={v => handleInputChange('contact', 'email', v)} placeholder="email@example.com" />
                <InputGroup label="Current City" value={data.contact.city} onChange={v => handleInputChange('contact', 'city', v)} />
                <InputGroup label="State / Country" value={data.contact.state} onChange={v => handleInputChange('contact', 'state', v)} />
                <div>
                  <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Full Address</label>
                  <textarea
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-rose-200 focus:border-rose-400 outline-none text-sm transition-all bg-white text-slate-900"
                    rows={3}
                    value={data.contact.address}
                    onChange={e => handleInputChange('contact', 'address', e.target.value)}
                  />
                </div>
              </div>
            )}

            {activeTab === 'photo' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="bg-slate-50 p-4 rounded-xl border border-dashed border-slate-300 text-center">
                  <div className="w-24 h-24 mx-auto bg-slate-200 rounded-full flex items-center justify-center overflow-hidden mb-3 relative group">
                    {data.photoUrl ? (
                      <img src={data.photoUrl} alt="Preview" className="w-full h-full object-cover" />
                    ) : (
                      <User className="text-slate-400" />
                    )}
                    <label className="absolute inset-0 bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity text-xs font-medium">
                      Change
                      <input type="file" className="hidden" accept="image/*" onChange={handlePhotoUpload} />
                    </label>
                  </div>
                  <label className="inline-block text-sm text-rose-600 font-medium cursor-pointer hover:underline">
                    Upload Profile Photo
                    <input type="file" className="hidden" accept="image/*" onChange={handlePhotoUpload} />
                  </label>
                  <p className="text-xs text-slate-400 mt-1">Recommended: Square, High Quality</p>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="block text-xs font-semibold text-slate-500 uppercase">About Me</label>
                    <button
                      onClick={generateAIAbout}
                      disabled={isGenerating || !data.education.occupation}
                      className="flex items-center gap-1 text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-rose-500 hover:opacity-80 disabled:opacity-50"
                    >
                      <Sparkles size={12} className="text-purple-500" /> {isGenerating ? 'Writing...' : 'AI Rewrite'}
                    </button>
                  </div>
                  <textarea
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-rose-200 focus:border-rose-400 outline-none text-sm transition-all bg-white text-slate-900"
                    rows={5}
                    placeholder="Write a brief introduction about yourself..."
                    value={data.aboutMe}
                    onChange={e => handleInputChange('aboutMe', 'aboutMe', e.target.value)} // Direct property update
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Hobbies & Interests</label>
                  <textarea
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-rose-200 focus:border-rose-400 outline-none text-sm transition-all bg-white text-slate-900"
                    rows={2}
                    value={data.hobbies}
                    onChange={e => handleInputChange('hobbies', 'hobbies', e.target.value)} // Direct property update
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Partner Expectations</label>
                  <textarea
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-rose-200 focus:border-rose-400 outline-none text-sm transition-all bg-white text-slate-900"
                    rows={3}
                    placeholder="Describe what you are looking for in a partner..."
                    value={data.partnerExpectations}
                    onChange={e => handleInputChange('partnerExpectations', 'partnerExpectations', e.target.value)} // Direct property update
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT: Preview & Actions */}
        <div ref={previewContainerRef} className={`${mobileView === 'editor' ? 'hidden lg:flex print:!block' : 'flex'} flex-grow bg-slate-200 flex-col h-full relative print:bg-white print:h-auto print:overflow-visible print:static min-w-0`}>

          {/* Toolbar */}
          <div className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-3 md:px-6 shadow-sm no-print z-10 gap-2 flex-shrink-0 w-full overflow-x-hidden">

            {/* Left: Template Selector */}
            <div className="flex items-center gap-2 flex-grow-0">
              <button
                onClick={() => setShowTemplateGallery(true)}
                className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-all border border-slate-200 group"
              >
                <LayoutTemplate size={18} className="text-rose-500" />
                <span className="text-xs font-bold uppercase tracking-wider hidden sm:inline">Change Template</span>
                <ChevronRight size={14} className="text-slate-400 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Template Gallery Modal */}
            {showTemplateGallery && (
              <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-900/60 backdrop-blur-md p-4 animate-fadeIn">
                <div className="bg-white rounded-3xl shadow-2xl max-w-5xl w-full max-h-[90vh] flex flex-col overflow-hidden border border-white/20">
                  <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-rose-100 rounded-xl flex items-center justify-center">
                        <LayoutTemplate className="text-rose-600" size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-800">Select Template</h3>
                        <p className="text-xs text-slate-500">Live preview with your data</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setShowTemplateGallery(false)}
                      className="p-2 hover:bg-slate-200 rounded-full transition-colors"
                    >
                      <X size={20} className="text-slate-500" />
                    </button>
                  </div>

                  <div className="p-8 overflow-y-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                      {TEMPLATES.map(t => (
                        <button
                          key={t.id}
                          onClick={() => {
                            setData(prev => ({ ...prev, templateId: t.id }));
                            setShowTemplateGallery(false);
                          }}
                          className={`group relative flex flex-col text-left rounded-xl overflow-hidden transition-all duration-300 ${data.templateId === t.id
                            ? 'ring-4 ring-rose-500 ring-offset-2 shadow-xl'
                            : 'hover:ring-2 hover:ring-slate-300 hover:ring-offset-1 shadow-md hover:shadow-lg'
                            }`}
                        >
                          {/* Live Preview Container */}
                          <div className="aspect-[210/297] overflow-hidden bg-slate-100 relative">
                            {/* Miniature Live Preview - fits within thumbnail */}
                            <div
                              className="absolute top-0 left-0 origin-top-left pointer-events-none"
                              style={{
                                width: '794px',
                                height: '1123px',
                                transform: 'scale(0.22)',
                              }}
                            >
                              <TemplateRenderer
                                template={t.id}
                                data={data}
                              />
                            </div>

                            {/* Overlay gradient for better contrast */}
                            <div className={`absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent transition-opacity ${data.templateId === t.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />

                            {/* Selection Badge */}
                            {data.templateId === t.id && (
                              <div className="absolute top-2 right-2 bg-rose-500 text-white p-1.5 rounded-full shadow-lg z-10">
                                <CheckCircle size={14} strokeWidth={3} />
                              </div>
                            )}
                          </div>

                          {/* Template Info */}
                          <div className="p-3 bg-white border-x border-b border-slate-100 group-hover:bg-slate-50 transition-colors">
                            <div className="flex items-center justify-between mb-1">
                              <h4 className="font-bold text-slate-800 text-sm">{t.name}</h4>
                              {data.templateId === t.id && (
                                <span className="text-[9px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded-full bg-rose-100 text-rose-600">
                                  Active
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-slate-500 line-clamp-2">{t.description}</p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="p-6 bg-slate-50/50 border-t border-slate-100 text-center">
                    <p className="text-xs text-slate-400 italic">✨ Previews update in real-time with your data. Click any template to switch.</p>
                  </div>
                </div>
              </div>
            )}

            {/* Right: Actions */}
            <div className="flex items-center gap-2 shrink-0">

              {/* Autosave Status */}
              <div
                className={`flex items-center justify-center w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 transition-all ${lastSaved ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                title={lastSaved ? `Saved at ${lastSaved.toLocaleTimeString()}` : ''}
              >
                <CheckCircle size={16} />
              </div>

              <div className="w-px h-6 bg-slate-200 hidden sm:block"></div>

              {/* Action Buttons */}
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileImport}
                className="hidden"
                accept=".json"
              />

              <ToolbarButton
                icon={Upload}
                title="Import JSON"
                onClick={handleImportClick}
              />

              <ToolbarButton
                icon={FileJson}
                title="Export JSON"
                onClick={handleExportJSON}
              />

              <ToolbarButton
                icon={Printer}
                label="Print"
                title="Print / Save PDF"
                onClick={printDocument}
                primary
              />
            </div>
          </div>

          {/* Preview Area */}
          <div className="flex-grow overflow-auto bg-slate-200/50 backdrop-blur-sm flex justify-center print:overflow-visible print:bg-white print:h-auto print:block">
            <div className="py-8 px-4 flex justify-center print:p-0 print:block">
              {/* Visual Wrapper to reserve space for scaled element */}
              <div
                style={{
                  width: `${210 * previewScale}mm`,
                  minHeight: `${297 * previewScale}mm`
                }}
                className={`relative transition-all duration-500 ease-out print:!w-auto print:!h-auto print:static print:m-0 print:transform-none print:opacity-100 ${isMounted ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
              >
                {/* The actual A4 content scaled down */}
                <div
                  id="biodata-preview"
                  className="resume-preview shadow-2xl bg-white origin-top-left transition-transform duration-300 ease-out-back overflow-hidden"
                  style={{
                    width: '210mm',
                    minHeight: '297mm',
                    transform: `scale(${previewScale})`,
                  }}
                >
                  <TemplateRenderer template={data.templateId as TemplateType} data={data} />
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Mobile Bottom Bar for View Toggle */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 h-14 flex items-center justify-around z-40 no-print safe-area-bottom shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
          <button
            onClick={() => setMobileView('editor')}
            className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${mobileView === 'editor' ? 'text-rose-600 bg-rose-50/50' : 'text-slate-500 hover:bg-slate-50'}`}
          >
            <Edit3 size={18} />
            <span className="text-[10px] font-medium uppercase tracking-wide">Edit Details</span>
          </button>
          <div className="w-px h-8 bg-slate-200"></div>
          <button
            onClick={() => setMobileView('preview')}
            className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${mobileView === 'preview' ? 'text-rose-600 bg-rose-50/50' : 'text-slate-500 hover:bg-slate-50'}`}
          >
            <EyeIcon size={18} />
            <span className="text-[10px] font-medium uppercase tracking-wide">Preview</span>
          </button>
        </div>
      </div>
    </div>
  );
};


// --- Helper Components ---

const InputGroup = ({ label, value, onChange, type = "text", placeholder = "" }: any) => (
  <div>
    <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">{label}</label>
    <input
      type={type}
      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-rose-200 focus:border-rose-400 outline-none text-sm transition-all bg-white text-slate-900"
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
    />
  </div>
);

const SelectGroup = ({ label, value, onChange, options }: any) => (
  <div>
    <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">{label}</label>
    <select
      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-rose-200 focus:border-rose-400 outline-none text-sm transition-all bg-white text-slate-900"
      value={value}
      onChange={e => onChange(e.target.value)}
    >
      {options.map((opt: string) => (
        <option key={opt} value={opt}>{opt}</option>
      ))}
    </select>
  </div>
);


const App = () => {
  const [language, setLanguage] = useState<'en' | 'hi'>('en');

  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen">
        <NavBar language={language} setLanguage={setLanguage} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/editor" element={<Editor language={language} setLanguage={setLanguage} />} />
        </Routes>
      </div>
    </HashRouter>
  );
};

export default App;