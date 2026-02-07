import React from 'react';
import { Biodata, TemplateType } from '../types';
import { Phone, Mail, MapPin, User, Briefcase, GraduationCap, Users, Heart, Star, Calendar, Clock, Map as MapIcon } from 'lucide-react';
import { LABELS } from '../translations';

interface TemplateProps {
  data: Biodata;
}

const PlaceholderImage = () => (
  <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400">
    <User size={48} />
  </div>
);

// --- TRADITIONAL TEMPLATE ---
export const TraditionalTemplate: React.FC<TemplateProps> = ({ data }) => {
  const t = LABELS[data.language];
  const isHindi = data.language === 'hi';
  const fontFamily = isHindi ? "font-['Noto_Sans_Devanagari']" : "font-serif";

  return (
    <div className={`w-full h-full bg-white text-slate-800 p-8 border-4 border-double border-amber-200 ${fontFamily}`}>
      <div className="text-center border-b-2 border-amber-100 pb-6 mb-6">
        <h1 className="text-4xl font-bold text-amber-800 mb-2 uppercase tracking-widest">{isHindi ? 'बायोडाटा' : 'Biodata'}</h1>
        <div className="w-24 h-1 bg-amber-800 mx-auto rounded-full"></div>
      </div>

      <div className="flex gap-8">
        <div className="w-1/3 flex flex-col items-center">
          <div className="w-48 h-56 border-2 border-amber-800 p-1 mb-4 shadow-sm">
             {data.photoUrl ? (
                <img src={data.photoUrl} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <PlaceholderImage />
              )}
          </div>
          <h2 className="text-2xl font-bold text-amber-900 text-center leading-tight">{data.personal.fullName}</h2>
        </div>

        <div className="w-2/3 space-y-6">
          <Section title={t.personalDetails} isHindi={isHindi}>
            <Row label={t.dob} value={data.personal.dob} />
            <Row label={t.birthTime} value={data.personal.birthTime} />
            <Row label={t.birthPlace} value={data.personal.birthPlace} />
            <Row label={t.height} value={data.personal.height} />
            {data.personal.weight && <Row label={t.weight} value={data.personal.weight} />}
            <Row label={t.religion} value={`${data.personal.religion} ${data.personal.caste ? `- ${data.personal.caste}` : ''} ${data.personal.gotra ? `(${data.personal.gotra})` : ''}`} />
            <Row label={t.manglik} value={data.personal.manglik} />
            <Row label={t.maritalStatus} value={data.personal.maritalStatus} />
          </Section>

          <Section title={t.educationCareer} isHindi={isHindi}>
            <Row label={t.qualification} value={data.education.qualification} />
            <Row label={t.university} value={data.education.university} />
            <Row label={t.occupation} value={data.education.occupation} />
            <Row label={t.company} value={data.education.companyName} />
            <Row label={t.income} value={data.education.income} />
          </Section>

          <Section title={t.familyDetails} isHindi={isHindi}>
            <Row label={t.father} value={`${data.family.fatherName} ${data.family.fatherOccupation ? `(${data.family.fatherOccupation})` : ''}`} />
            <Row label={t.mother} value={`${data.family.motherName} ${data.family.motherOccupation ? `(${data.family.motherOccupation})` : ''}`} />
            {(data.family.brothers || data.family.sisters) && (
               <Row label="Siblings" value={`${data.family.brothers ? `${data.family.brothers} Bro.` : ''} ${data.family.sisters ? `${data.family.sisters} Sis.` : ''}`} />
            )}
            <Row label={t.familyType} value={data.family.familyType} />
            <Row label={t.familyLocation} value={data.family.familyLocation} />
          </Section>

          <Section title={t.contactDetails} isHindi={isHindi}>
            <div className="flex flex-col gap-1 text-sm">
               <div className="flex items-center gap-2 font-medium"><Phone size={14}/> {data.contact.phone}</div>
               <div className="flex items-center gap-2 font-medium"><Mail size={14}/> {data.contact.email}</div>
               <div className="flex items-center gap-2"><MapPin size={14}/> {data.contact.address}, {data.contact.city}, {data.contact.state}</div>
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
};

const Section = ({ title, children, isHindi }: { title: string, children?: React.ReactNode, isHindi: boolean }) => (
  <div className="mb-5">
    <h3 className={`text-amber-800 font-bold border-b border-amber-200 mb-2 uppercase tracking-wide text-sm ${isHindi ? 'text-base' : ''}`}>{title}</h3>
    <table className="w-full text-sm">
      <tbody>{children}</tbody>
    </table>
  </div>
);

const Row = ({ label, value }: { label: string, value: string | undefined }) => {
  if (!value) return null;
  return (
    <tr className="align-top">
      <td className="font-semibold text-slate-500 py-1 w-1/3 pr-2">{label}</td>
      <td className="py-1 text-slate-800 font-medium">{value}</td>
    </tr>
  );
};


// --- MODERN TEMPLATE ---
export const ModernTemplate: React.FC<TemplateProps> = ({ data }) => {
  const t = LABELS[data.language];
  const isHindi = data.language === 'hi';
  const fontFamily = isHindi ? "font-['Noto_Sans_Devanagari']" : "font-sans";

  return (
    <div className={`w-full h-full bg-white flex ${fontFamily}`}>
      {/* Sidebar */}
      <div className="w-[35%] bg-slate-900 text-white p-8 flex flex-col">
        <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-slate-700 mx-auto mb-6 shadow-lg">
           {data.photoUrl ? (
              <img src={data.photoUrl} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <PlaceholderImage />
            )}
        </div>
        
        <h2 className="text-2xl font-bold text-center mb-1 leading-tight">{data.personal.fullName}</h2>
        <p className="text-slate-400 text-center text-sm mb-8">{data.education.occupation}</p>

        <div className="space-y-8 text-sm flex-grow">
           <div>
             <h3 className="text-rose-400 font-bold uppercase text-xs tracking-wider mb-4 border-b border-slate-700 pb-2">{t.contactDetails}</h3>
             <ul className="space-y-3">
               <li className="flex items-start gap-3 opacity-90"><Phone size={16} className="text-rose-400 mt-0.5 shrink-0"/> <span>{data.contact.phone}</span></li>
               <li className="flex items-start gap-3 opacity-90"><Mail size={16} className="text-rose-400 mt-0.5 shrink-0"/> <span className="break-all">{data.contact.email}</span></li>
               <li className="flex items-start gap-3 opacity-90"><MapPin size={16} className="text-rose-400 mt-0.5 shrink-0"/> <span>{data.contact.city}, {data.contact.state}</span></li>
             </ul>
           </div>

           <div>
             <h3 className="text-rose-400 font-bold uppercase text-xs tracking-wider mb-4 border-b border-slate-700 pb-2">{t.birthHoroscope}</h3>
              <ul className="space-y-2 opacity-90">
                <li className="flex justify-between"><span>{t.dob}</span> <span className="text-right">{data.personal.dob}</span></li>
                <li className="flex justify-between"><span>{t.birthTime}</span> <span className="text-right">{data.personal.birthTime}</span></li>
                <li className="flex justify-between"><span>{t.manglik}</span> <span className="text-right">{data.personal.manglik}</span></li>
                <li className="flex justify-between"><span>{t.gotra}</span> <span className="text-right">{data.personal.gotra}</span></li>
              </ul>
           </div>
           
           {data.hobbies && (
            <div>
              <h3 className="text-rose-400 font-bold uppercase text-xs tracking-wider mb-3 border-b border-slate-700 pb-2">{t.hobbies}</h3>
              <p className="opacity-80 leading-relaxed">{data.hobbies}</p>
            </div>
           )}
        </div>
      </div>

      {/* Main Content */}
      <div className="w-[65%] p-10 bg-slate-50">
        <div className="mb-8">
          <h1 className="text-4xl font-light text-slate-800 mb-2 uppercase tracking-wide">{isHindi ? 'प्रोफ़ाइल' : 'Profile'}</h1>
          <div className="w-16 h-1 bg-rose-500 mb-6"></div>
          {data.aboutMe && (
            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-rose-400 italic text-slate-600 leading-relaxed">
              "{data.aboutMe}"
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 gap-6">
           <ModernSection icon={<User/>} title={t.personalDetails}>
              <ModernRow label={t.height} value={data.personal.height} />
              <ModernRow label={t.weight} value={data.personal.weight} />
              <ModernRow label={t.maritalStatus} value={data.personal.maritalStatus} />
              <ModernRow label={t.religion} value={data.personal.religion} />
              <ModernRow label={t.caste} value={data.personal.caste} />
              <ModernRow label={t.motherTongue} value={data.personal.motherTongue} />
           </ModernSection>

           <ModernSection icon={<GraduationCap/>} title={t.educationCareer}>
              <ModernRow label={t.qualification} value={data.education.qualification} />
              <ModernRow label={t.university} value={data.education.university} />
              <ModernRow label={t.occupation} value={data.education.occupation} />
              <ModernRow label={t.company} value={data.education.companyName} />
              <ModernRow label={t.location} value={data.education.workLocation} />
              <ModernRow label={t.income} value={data.education.income} />
           </ModernSection>

           <ModernSection icon={<Users/>} title={t.familyDetails}>
              <ModernRow label={t.father} value={`${data.family.fatherName} (${data.family.fatherOccupation})`} />
              <ModernRow label={t.mother} value={`${data.family.motherName} (${data.family.motherOccupation})`} />
              <ModernRow label={t.brothers} value={data.family.brothers} />
              <ModernRow label={t.sisters} value={data.family.sisters} />
              <ModernRow label={t.familyLocation} value={data.family.familyLocation} />
           </ModernSection>
           
           {data.partnerExpectations && (
             <ModernSection icon={<Heart/>} title={t.partnerExpectations}>
                <p className="text-sm text-slate-700 leading-relaxed">{data.partnerExpectations}</p>
             </ModernSection>
           )}
        </div>
      </div>
    </div>
  );
};

const ModernSection = ({ icon, title, children }: { icon: React.ReactNode, title: string, children?: React.ReactNode }) => (
  <div className="bg-white p-5 rounded-lg shadow-sm border border-slate-100">
    <div className="flex items-center gap-3 mb-4">
      <div className="text-rose-500 p-2 bg-rose-50 rounded-full">{icon}</div>
      <h3 className="text-lg font-bold text-slate-800">{title}</h3>
    </div>
    <div className="space-y-2">{children}</div>
  </div>
);

const ModernRow = ({ label, value }: { label: string, value: string | undefined }) => {
  if (!value) return null;
  return (
    <div className="flex justify-between border-b border-slate-50 last:border-0 pb-1.5 last:pb-0">
      <span className="text-slate-500 text-sm font-medium">{label}</span>
      <span className="text-slate-800 font-semibold text-sm text-right max-w-[60%]">{value}</span>
    </div>
  );
};

// --- MINIMAL TEMPLATE ---
export const MinimalTemplate: React.FC<TemplateProps> = ({ data }) => {
  const t = LABELS[data.language];
  const isHindi = data.language === 'hi';
  const fontFamily = isHindi ? "font-['Noto_Sans_Devanagari']" : "font-sans";

  return (
    <div className={`w-full h-full bg-white text-gray-800 p-12 flex flex-col justify-between border border-gray-100 ${fontFamily}`}>
      <div>
        <div className="flex justify-between items-start mb-12">
           <div>
             <h1 className="text-5xl font-light tracking-tight text-gray-900 mb-2 leading-tight">{data.personal.fullName}</h1>
             <p className="text-xl text-gray-500 font-light">{data.education.occupation}</p>
             <div className="mt-4 flex gap-4 text-sm text-gray-500">
                <span>{data.personal.dob}</span>
                <span>&bull;</span>
                <span>{data.personal.height}</span>
                <span>&bull;</span>
                <span>{data.personal.religion}</span>
             </div>
           </div>
           {data.photoUrl && (
             <img src={data.photoUrl} className="w-32 h-32 rounded-lg object-cover grayscale" alt="Profile" />
           )}
        </div>

        <div className="grid grid-cols-2 gap-x-16 gap-y-10">
          <div className="space-y-8">
             <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 border-b border-gray-100 pb-1">{t.personalDetails}</h4>
              <p className="text-sm"><strong>{t.birthTime}:</strong> {data.personal.birthTime}</p>
              <p className="text-sm"><strong>{t.birthPlace}:</strong> {data.personal.birthPlace}</p>
              <p className="text-sm"><strong>{t.gotra}:</strong> {data.personal.gotra}</p>
              <p className="text-sm"><strong>{t.manglik}:</strong> {data.personal.manglik}</p>
            </div>

             <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 border-b border-gray-100 pb-1">{t.familyDetails}</h4>
              <p className="text-sm">F: <strong>{data.family.fatherName}</strong> <span className="text-gray-500">({data.family.fatherOccupation})</span></p>
              <p className="text-sm">M: <strong>{data.family.motherName}</strong> <span className="text-gray-500">({data.family.motherOccupation})</span></p>
              <p className="text-sm text-gray-600">{data.family.brothers} Bros, {data.family.sisters} Sis</p>
              <p className="text-sm text-gray-600">{data.family.familyLocation}</p>
            </div>
          </div>

          <div className="space-y-8">
             <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 border-b border-gray-100 pb-1">{t.educationCareer}</h4>
              <p className="text-lg font-medium">{data.education.qualification}</p>
              <p className="text-sm text-gray-600">{data.education.university}</p>
              <div className="h-2"></div>
              <p className="text-sm font-medium">{data.education.occupation}</p>
              <p className="text-sm text-gray-600">{data.education.companyName}, {data.education.workLocation}</p>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 border-b border-gray-100 pb-1">{t.contactDetails}</h4>
              <p className="text-sm font-medium">{data.contact.phone}</p>
              <p className="text-sm text-gray-600">{data.contact.email}</p>
              <p className="text-sm text-gray-500 mt-1">{data.contact.address}, {data.contact.city}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center mt-8 pt-6 border-t border-gray-100">
         <span className="text-xs text-gray-300 font-medium tracking-widest uppercase">{isHindi ? 'विवाह हेतु' : 'Available for Marriage'}</span>
      </div>
    </div>
  );
};

// --- CREATIVE TEMPLATE (New) ---

const CreativeCard = ({ title, children, color }: { title: string, children?: React.ReactNode, color: string }) => {
  const borderColors: Record<string, string> = { rose: 'border-rose-400', orange: 'border-orange-400', amber: 'border-amber-400', slate: 'border-slate-400' };
  const textColors: Record<string, string> = { rose: 'text-rose-600', orange: 'text-orange-600', amber: 'text-amber-600', slate: 'text-slate-600' };
  
  return (
      <div className={`bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm border-l-4 ${borderColors[color] || borderColors.slate}`}>
         <h3 className={`font-bold uppercase tracking-wider text-xs mb-4 ${textColors[color] || textColors.slate}`}>{title}</h3>
         <div className="text-sm">{children}</div>
      </div>
  )
}

const CreativeRow = ({ label, value }: { label: string, value: string | undefined }) => {
  if (!value) return null;
  return (
    <div className="flex justify-between border-b border-black/5 last:border-0 py-1.5 last:pb-0 first:pt-0">
      <span className="font-semibold opacity-70">{label}</span>
      <span className="font-medium text-right ml-4">{value}</span>
    </div>
  );
};

export const CreativeTemplate: React.FC<TemplateProps> = ({ data }) => {
  const t = LABELS[data.language];
  const isHindi = data.language === 'hi';
  const fontFamily = isHindi ? "font-['Noto_Sans_Devanagari']" : "font-sans";

  return (
    <div className={`w-full h-full bg-[#faf9f6] text-slate-800 p-0 relative overflow-hidden ${fontFamily}`}>
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-100 rounded-bl-full opacity-50 z-0"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-rose-50 rounded-tr-full opacity-50 z-0"></div>
      
      <div className="relative z-10 p-8 h-full flex flex-col">
         {/* Header */}
         <div className="flex items-center gap-8 mb-10">
            <div className="w-40 h-40 rounded-2xl overflow-hidden shadow-xl border-4 border-white rotate-3">
               {data.photoUrl ? (
                  <img src={data.photoUrl} alt="Profile" className="w-full h-full object-cover" />
               ) : (
                  <PlaceholderImage />
               )}
            </div>
            <div>
               <h1 className="text-5xl font-bold text-slate-900 mb-2">{data.personal.fullName}</h1>
               <div className="inline-block bg-orange-100 px-4 py-1 rounded-full text-orange-800 font-semibold text-sm mb-4">
                  {data.education.occupation}
               </div>
               <div className="flex gap-6 text-sm text-slate-600">
                  <span className="flex items-center gap-1"><Calendar size={14} className="text-orange-500"/> {data.personal.dob}</span>
                  <span className="flex items-center gap-1"><Clock size={14} className="text-orange-500"/> {data.personal.birthTime}</span>
                  <span className="flex items-center gap-1"><MapIcon size={14} className="text-orange-500"/> {data.personal.birthPlace}</span>
               </div>
            </div>
         </div>

         {/* Content Grid */}
         <div className="grid grid-cols-2 gap-8 flex-grow">
            <div className="space-y-6">
               <CreativeCard title={t.personalDetails} color="rose">
                  <CreativeRow label={t.height} value={data.personal.height} />
                  <CreativeRow label={t.religion} value={data.personal.religion} />
                  <CreativeRow label={t.caste} value={data.personal.caste} />
                  <CreativeRow label={t.gotra} value={data.personal.gotra} />
                  <CreativeRow label={t.manglik} value={data.personal.manglik} />
               </CreativeCard>

               <CreativeCard title={t.familyDetails} color="orange">
                  <p className="mb-1"><span className="font-semibold">{t.father}:</span> {data.family.fatherName}</p>
                  <p className="mb-1"><span className="font-semibold">{t.mother}:</span> {data.family.motherName}</p>
                  <p className="mb-1"><span className="font-semibold">{t.familyType}:</span> {data.family.familyType}</p>
                  <p className="text-sm text-slate-500 mt-2">{data.family.brothers} Bros, {data.family.sisters} Sis</p>
                  <p className="text-sm text-slate-500">{data.family.familyLocation}</p>
               </CreativeCard>
            </div>

            <div className="space-y-6">
               <CreativeCard title={t.educationCareer} color="amber">
                  <h4 className="font-bold text-lg">{data.education.qualification}</h4>
                  <p className="text-sm text-slate-600 mb-2">{data.education.university}</p>
                  <hr className="border-dashed border-amber-200 my-2"/>
                  <h4 className="font-bold text-lg">{data.education.occupation}</h4>
                  <p className="text-sm text-slate-600">{data.education.companyName}</p>
                  <p className="text-sm text-slate-600">{data.education.workLocation}</p>
                  <p className="font-medium text-amber-700 mt-1">{data.education.income}</p>
               </CreativeCard>

               <CreativeCard title={t.contactDetails} color="slate">
                  <div className="space-y-3">
                     <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600"><Phone size={16}/></div>
                        <span className="font-medium">{data.contact.phone}</span>
                     </div>
                     <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600"><Mail size={16}/></div>
                        <span className="font-medium text-sm">{data.contact.email}</span>
                     </div>
                  </div>
               </CreativeCard>
            </div>
         </div>
         
         {/* Footer Quote/About */}
         {data.aboutMe && (
            <div className="mt-6 text-center text-slate-500 italic text-sm max-w-2xl mx-auto">
               "{data.aboutMe}"
            </div>
         )}
      </div>
    </div>
  );
};

export const TemplateRenderer: React.FC<{ template: TemplateType; data: Biodata }> = ({ template, data }) => {
  switch (template) {
    case TemplateType.MODERN:
      return <ModernTemplate data={data} />;
    case TemplateType.MINIMAL:
      return <MinimalTemplate data={data} />;
    case TemplateType.CREATIVE:
      return <CreativeTemplate data={data} />;
    case TemplateType.TRADITIONAL:
    default:
      return <TraditionalTemplate data={data} />;
  }
};