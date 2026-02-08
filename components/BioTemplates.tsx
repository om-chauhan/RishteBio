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
              <div className="flex items-center gap-2 font-medium"><Phone size={14} /> {data.contact.phone}</div>
              <div className="flex items-center gap-2 font-medium"><Mail size={14} /> {data.contact.email}</div>
              <div className="flex items-center gap-2"><MapPin size={14} /> {data.contact.address}, {data.contact.city}, {data.contact.state}</div>
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
              <li className="flex items-start gap-3 opacity-90"><Phone size={16} className="text-rose-400 mt-0.5 shrink-0" /> <span>{data.contact.phone}</span></li>
              <li className="flex items-start gap-3 opacity-90"><Mail size={16} className="text-rose-400 mt-0.5 shrink-0" /> <span className="break-all">{data.contact.email}</span></li>
              <li className="flex items-start gap-3 opacity-90"><MapPin size={16} className="text-rose-400 mt-0.5 shrink-0" /> <span>{data.contact.city}, {data.contact.state}</span></li>
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
          <ModernSection icon={<User />} title={t.personalDetails}>
            <ModernRow label={t.height} value={data.personal.height} />
            <ModernRow label={t.weight} value={data.personal.weight} />
            <ModernRow label={t.maritalStatus} value={data.personal.maritalStatus} />
            <ModernRow label={t.religion} value={data.personal.religion} />
            <ModernRow label={t.caste} value={data.personal.caste} />
            <ModernRow label={t.motherTongue} value={data.personal.motherTongue} />
          </ModernSection>

          <ModernSection icon={<GraduationCap />} title={t.educationCareer}>
            <ModernRow label={t.qualification} value={data.education.qualification} />
            <ModernRow label={t.university} value={data.education.university} />
            <ModernRow label={t.occupation} value={data.education.occupation} />
            <ModernRow label={t.company} value={data.education.companyName} />
            <ModernRow label={t.location} value={data.education.workLocation} />
            <ModernRow label={t.income} value={data.education.income} />
          </ModernSection>

          <ModernSection icon={<Users />} title={t.familyDetails}>
            <ModernRow label={t.father} value={`${data.family.fatherName} (${data.family.fatherOccupation})`} />
            <ModernRow label={t.mother} value={`${data.family.motherName} (${data.family.motherOccupation})`} />
            <ModernRow label={t.brothers} value={data.family.brothers} />
            <ModernRow label={t.sisters} value={data.family.sisters} />
            <ModernRow label={t.familyLocation} value={data.family.familyLocation} />
          </ModernSection>

          {data.partnerExpectations && (
            <ModernSection icon={<Heart />} title={t.partnerExpectations}>
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
              <span className="flex items-center gap-1"><Calendar size={14} className="text-orange-500" /> {data.personal.dob}</span>
              <span className="flex items-center gap-1"><Clock size={14} className="text-orange-500" /> {data.personal.birthTime}</span>
              <span className="flex items-center gap-1"><MapIcon size={14} className="text-orange-500" /> {data.personal.birthPlace}</span>
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
              <hr className="border-dashed border-amber-200 my-2" />
              <h4 className="font-bold text-lg">{data.education.occupation}</h4>
              <p className="text-sm text-slate-600">{data.education.companyName}</p>
              <p className="text-sm text-slate-600">{data.education.workLocation}</p>
              <p className="font-medium text-amber-700 mt-1">{data.education.income}</p>
            </CreativeCard>

            <CreativeCard title={t.contactDetails} color="slate">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600"><Phone size={16} /></div>
                  <span className="font-medium">{data.contact.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600"><Mail size={16} /></div>
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
    case TemplateType.ELEGANT:
      return <ElegantTemplate data={data} />;
    case TemplateType.ROYAL:
      return <RoyalTemplate data={data} />;
    case TemplateType.FLORAL:
      return <FloralTemplate data={data} />;
    case TemplateType.CORPORATE:
      return <CorporateTemplate data={data} />;
    case TemplateType.TRADITIONAL:
    default:
      return <TraditionalTemplate data={data} />;
  }
};

// --- ELEGANT TEMPLATE ---
const ElegantSection = ({ title, children }: { title: string, children?: React.ReactNode }) => (
  <div className="mb-6">
    <div className="flex items-center gap-3 mb-3">
      <div className="h-px flex-1 bg-gradient-to-r from-amber-300/50 to-transparent"></div>
      <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-amber-700">{title}</h3>
      <div className="h-px flex-1 bg-gradient-to-l from-amber-300/50 to-transparent"></div>
    </div>
    <div className="text-sm">{children}</div>
  </div>
);

const ElegantRow = ({ label, value }: { label: string, value: string | undefined }) => {
  if (!value) return null;
  return (
    <div className="flex justify-between py-1.5 border-b border-amber-100/50 last:border-0">
      <span className="text-amber-900/70 font-medium">{label}</span>
      <span className="text-amber-950 font-semibold text-right">{value}</span>
    </div>
  );
};

export const ElegantTemplate: React.FC<TemplateProps> = ({ data }) => {
  const t = LABELS[data.language];
  const isHindi = data.language === 'hi';
  const fontFamily = isHindi ? "font-['Noto_Sans_Devanagari']" : "font-serif";

  return (
    <div className={`w-full h-full bg-gradient-to-br from-amber-50 via-cream-50 to-amber-100/30 text-amber-950 p-10 relative overflow-hidden ${fontFamily}`}>
      {/* Decorative corners */}
      <div className="absolute top-4 left-4 w-20 h-20 border-t-2 border-l-2 border-amber-300"></div>
      <div className="absolute top-4 right-4 w-20 h-20 border-t-2 border-r-2 border-amber-300"></div>
      <div className="absolute bottom-4 left-4 w-20 h-20 border-b-2 border-l-2 border-amber-300"></div>
      <div className="absolute bottom-4 right-4 w-20 h-20 border-b-2 border-r-2 border-amber-300"></div>

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B8860B' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="relative z-10 h-full flex flex-col">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-block">
            <div className="flex items-center gap-4 justify-center mb-2">
              <Star size={16} className="text-amber-500 fill-amber-300" />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-amber-600">{isHindi ? 'शुभ विवाह' : 'Marriage Biodata'}</span>
              <Star size={16} className="text-amber-500 fill-amber-300" />
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex gap-8 flex-grow">
          {/* Left: Photo & Name */}
          <div className="w-1/3 flex flex-col items-center">
            <div className="w-44 h-52 rounded-lg overflow-hidden shadow-xl border-4 border-white mb-4 bg-gradient-to-br from-amber-100 to-amber-200">
              {data.photoUrl ? (
                <img src={data.photoUrl} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <PlaceholderImage />
              )}
            </div>
            <h2 className="text-2xl font-bold text-amber-900 text-center leading-tight mb-1">{data.personal.fullName}</h2>
            <p className="text-sm text-amber-700 font-medium">{data.education.occupation}</p>

            <div className="mt-4 w-full bg-white/60 backdrop-blur-sm rounded-lg p-4 shadow-sm">
              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2 text-amber-800"><Phone size={12} className="text-amber-600" /> {data.contact.phone}</div>
                <div className="flex items-center gap-2 text-amber-800"><Mail size={12} className="text-amber-600" /> <span className="truncate">{data.contact.email}</span></div>
                <div className="flex items-center gap-2 text-amber-800"><MapPin size={12} className="text-amber-600" /> {data.contact.city}, {data.contact.state}</div>
              </div>
            </div>
          </div>

          {/* Right: Details */}
          <div className="w-2/3 space-y-4">
            <ElegantSection title={t.personalDetails}>
              <ElegantRow label={t.dob} value={data.personal.dob} />
              <ElegantRow label={t.birthTime} value={data.personal.birthTime} />
              <ElegantRow label={t.birthPlace} value={data.personal.birthPlace} />
              <ElegantRow label={t.height} value={data.personal.height} />
              <ElegantRow label={t.religion} value={`${data.personal.religion} - ${data.personal.caste}`} />
              <ElegantRow label={t.gotra} value={data.personal.gotra} />
              <ElegantRow label={t.manglik} value={data.personal.manglik} />
            </ElegantSection>

            <ElegantSection title={t.educationCareer}>
              <ElegantRow label={t.qualification} value={data.education.qualification} />
              <ElegantRow label={t.university} value={data.education.university} />
              <ElegantRow label={t.company} value={data.education.companyName} />
              <ElegantRow label={t.income} value={data.education.income} />
            </ElegantSection>

            <ElegantSection title={t.familyDetails}>
              <ElegantRow label={t.father} value={`${data.family.fatherName} (${data.family.fatherOccupation})`} />
              <ElegantRow label={t.mother} value={`${data.family.motherName} (${data.family.motherOccupation})`} />
              <ElegantRow label={t.familyType} value={data.family.familyType} />
              <ElegantRow label={t.familyLocation} value={data.family.familyLocation} />
            </ElegantSection>
          </div>
        </div>

        {/* Footer */}
        {data.aboutMe && (
          <div className="mt-6 text-center italic text-amber-800/80 text-sm max-w-2xl mx-auto border-t border-amber-200 pt-4">
            "{data.aboutMe}"
          </div>
        )}
      </div>
    </div>
  );
};

// --- ROYAL TEMPLATE ---
const RoyalCard = ({ title, icon, children, gradient }: { title: string, icon: React.ReactNode, children?: React.ReactNode, gradient: string }) => (
  <div className={`rounded-xl p-4 shadow-lg ${gradient}`}>
    <div className="flex items-center gap-2 mb-3">
      <div className="text-white/90">{icon}</div>
      <h3 className="text-xs font-bold uppercase tracking-wider text-white/90">{title}</h3>
    </div>
    <div className="text-white/95 text-sm">{children}</div>
  </div>
);

const RoyalRow = ({ label, value }: { label: string, value: string | undefined }) => {
  if (!value) return null;
  return (
    <div className="flex justify-between py-1 border-b border-white/10 last:border-0">
      <span className="opacity-80">{label}</span>
      <span className="font-semibold text-right">{value}</span>
    </div>
  );
};

export const RoyalTemplate: React.FC<TemplateProps> = ({ data }) => {
  const t = LABELS[data.language];
  const isHindi = data.language === 'hi';
  const fontFamily = isHindi ? "font-['Noto_Sans_Devanagari']" : "font-serif";

  return (
    <div className={`w-full h-full bg-gradient-to-br from-purple-950 via-purple-900 to-rose-900 text-white p-8 relative overflow-hidden ${fontFamily}`}>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-amber-500/10 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-amber-500/10 to-transparent"></div>

      {/* Gold border frame */}
      <div className="absolute inset-4 border border-amber-400/30 rounded-2xl pointer-events-none"></div>
      <div className="absolute inset-6 border border-amber-400/20 rounded-xl pointer-events-none"></div>

      <div className="relative z-10 h-full flex flex-col">
        {/* Royal Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-3">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-amber-400"></div>
            <Heart size={24} className="text-amber-400 fill-amber-400/50" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-amber-400"></div>
          </div>
          <h1 className="text-4xl font-bold mt-3 mb-1 bg-gradient-to-r from-amber-200 via-amber-100 to-amber-200 bg-clip-text text-transparent">
            {data.personal.fullName}
          </h1>
          <p className="text-amber-300/80 text-sm font-medium">{data.education.occupation}</p>
        </div>

        {/* Main Layout */}
        <div className="flex gap-6 flex-grow">
          {/* Left Column */}
          <div className="w-1/3 space-y-4">
            {/* Photo */}
            <div className="relative">
              <div className="w-full aspect-[3/4] rounded-xl overflow-hidden border-2 border-amber-400/40 shadow-2xl">
                {data.photoUrl ? (
                  <img src={data.photoUrl} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  <PlaceholderImage />
                )}
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-amber-600 px-4 py-1 rounded-full text-xs font-bold text-purple-900 shadow-lg">
                {data.personal.maritalStatus}
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <h3 className="text-[10px] uppercase tracking-wider text-amber-300 mb-3 font-bold">{t.contactDetails}</h3>
              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2"><Phone size={14} className="text-amber-400" /> {data.contact.phone}</div>
                <div className="flex items-center gap-2"><Mail size={14} className="text-amber-400" /> <span className="break-all opacity-90">{data.contact.email}</span></div>
                <div className="flex items-center gap-2"><MapPin size={14} className="text-amber-400" /> {data.contact.city}</div>
              </div>
            </div>
          </div>

          {/* Right Column - Cards Grid */}
          <div className="w-2/3 grid grid-cols-2 gap-4 content-start">
            <RoyalCard title={t.personalDetails} icon={<User size={16} />} gradient="bg-gradient-to-br from-purple-700/50 to-purple-800/50 backdrop-blur-sm border border-purple-500/20">
              <RoyalRow label={t.dob} value={data.personal.dob} />
              <RoyalRow label={t.birthTime} value={data.personal.birthTime} />
              <RoyalRow label={t.height} value={data.personal.height} />
              <RoyalRow label={t.religion} value={data.personal.religion} />
              <RoyalRow label={t.caste} value={data.personal.caste} />
            </RoyalCard>

            <RoyalCard title={t.educationCareer} icon={<GraduationCap size={16} />} gradient="bg-gradient-to-br from-rose-700/50 to-rose-800/50 backdrop-blur-sm border border-rose-500/20">
              <RoyalRow label={t.qualification} value={data.education.qualification} />
              <RoyalRow label={t.university} value={data.education.university} />
              <RoyalRow label={t.company} value={data.education.companyName} />
              <RoyalRow label={t.income} value={data.education.income} />
            </RoyalCard>

            <RoyalCard title={t.familyDetails} icon={<Users size={16} />} gradient="bg-gradient-to-br from-amber-700/30 to-amber-800/30 backdrop-blur-sm border border-amber-500/20">
              <p className="mb-1"><span className="opacity-70">{t.father}:</span> {data.family.fatherName}</p>
              <p className="mb-1 text-xs opacity-80">{data.family.fatherOccupation}</p>
              <p className="mb-1 mt-2"><span className="opacity-70">{t.mother}:</span> {data.family.motherName}</p>
              <p className="text-xs opacity-80">{data.family.motherOccupation}</p>
              <p className="mt-2 text-xs opacity-70">{data.family.familyType} • {data.family.familyLocation}</p>
            </RoyalCard>

            <RoyalCard title={t.birthHoroscope} icon={<Star size={16} />} gradient="bg-gradient-to-br from-indigo-700/50 to-indigo-800/50 backdrop-blur-sm border border-indigo-500/20">
              <RoyalRow label={t.birthPlace} value={data.personal.birthPlace} />
              <RoyalRow label={t.gotra} value={data.personal.gotra} />
              <RoyalRow label={t.manglik} value={data.personal.manglik} />
              <RoyalRow label={t.motherTongue} value={data.personal.motherTongue} />
            </RoyalCard>
          </div>
        </div>

        {/* Footer Quote */}
        {data.aboutMe && (
          <div className="mt-4 text-center text-white/70 italic text-xs max-w-xl mx-auto">
            "{data.aboutMe}"
          </div>
        )}
      </div>
    </div>
  );
};

// --- FLORAL TEMPLATE ---
export const FloralTemplate: React.FC<TemplateProps> = ({ data }) => {
  const t = LABELS[data.language];
  const isHindi = data.language === 'hi';
  const fontFamily = isHindi ? "font-['Noto_Sans_Devanagari']" : "font-serif";

  return (
    <div className={`w-full h-full bg-gradient-to-br from-pink-50 via-white to-rose-50 text-rose-950 p-10 relative overflow-hidden ${fontFamily}`}>
      {/* Floral decorative corners */}
      <div className="absolute top-0 left-0 w-40 h-40 opacity-20">
        <svg viewBox="0 0 100 100" className="w-full h-full text-rose-400">
          <circle cx="20" cy="20" r="8" fill="currentColor" opacity="0.6" />
          <circle cx="35" cy="10" r="5" fill="currentColor" opacity="0.4" />
          <circle cx="10" cy="35" r="5" fill="currentColor" opacity="0.4" />
          <path d="M15,15 Q30,5 40,20 Q50,35 35,40 Q20,45 15,30 Q10,15 15,15" fill="currentColor" opacity="0.3" />
        </svg>
      </div>
      <div className="absolute top-0 right-0 w-40 h-40 opacity-20 rotate-90">
        <svg viewBox="0 0 100 100" className="w-full h-full text-rose-400">
          <circle cx="20" cy="20" r="8" fill="currentColor" opacity="0.6" />
          <circle cx="35" cy="10" r="5" fill="currentColor" opacity="0.4" />
          <circle cx="10" cy="35" r="5" fill="currentColor" opacity="0.4" />
          <path d="M15,15 Q30,5 40,20 Q50,35 35,40 Q20,45 15,30 Q10,15 15,15" fill="currentColor" opacity="0.3" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 w-40 h-40 opacity-20 -rotate-90">
        <svg viewBox="0 0 100 100" className="w-full h-full text-rose-400">
          <circle cx="20" cy="20" r="8" fill="currentColor" opacity="0.6" />
          <circle cx="35" cy="10" r="5" fill="currentColor" opacity="0.4" />
          <circle cx="10" cy="35" r="5" fill="currentColor" opacity="0.4" />
          <path d="M15,15 Q30,5 40,20 Q50,35 35,40 Q20,45 15,30 Q10,15 15,15" fill="currentColor" opacity="0.3" />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-40 h-40 opacity-20 rotate-180">
        <svg viewBox="0 0 100 100" className="w-full h-full text-rose-400">
          <circle cx="20" cy="20" r="8" fill="currentColor" opacity="0.6" />
          <circle cx="35" cy="10" r="5" fill="currentColor" opacity="0.4" />
          <circle cx="10" cy="35" r="5" fill="currentColor" opacity="0.4" />
          <path d="M15,15 Q30,5 40,20 Q50,35 35,40 Q20,45 15,30 Q10,15 15,15" fill="currentColor" opacity="0.3" />
        </svg>
      </div>

      {/* Soft border */}
      <div className="absolute inset-6 border-2 border-rose-200/50 rounded-3xl pointer-events-none"></div>

      <div className="relative z-10 h-full flex flex-col">
        {/* Header with Photo */}
        <div className="flex items-center gap-8 mb-8">
          <div className="w-36 h-44 rounded-2xl overflow-hidden shadow-xl border-4 border-white ring-2 ring-rose-200">
            {data.photoUrl ? (
              <img src={data.photoUrl} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <PlaceholderImage />
            )}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <Heart size={16} className="text-rose-400 fill-rose-300" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-rose-400 font-semibold">{isHindi ? 'विवाह बायोडाटा' : 'Marriage Biodata'}</span>
            </div>
            <h1 className="text-4xl font-bold text-rose-900 mb-2">{data.personal.fullName}</h1>
            <p className="text-rose-600 font-medium">{data.education.occupation}</p>
            <div className="flex gap-4 mt-3 text-sm text-rose-700">
              <span>{data.personal.dob}</span>
              <span>•</span>
              <span>{data.personal.height}</span>
              <span>•</span>
              <span>{data.personal.religion}</span>
            </div>
          </div>
        </div>

        {/* About Quote */}
        {data.aboutMe && (
          <div className="bg-rose-50/80 backdrop-blur-sm rounded-2xl p-4 mb-6 border border-rose-100 text-center">
            <p className="text-rose-700 italic text-sm leading-relaxed">"{data.aboutMe}"</p>
          </div>
        )}

        {/* Content Grid */}
        <div className="grid grid-cols-2 gap-6 flex-grow">
          {/* Personal Details */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-5 shadow-sm border border-rose-100">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center">
                <User size={16} className="text-rose-500" />
              </div>
              <h3 className="font-bold text-rose-800">{t.personalDetails}</h3>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-rose-600">{t.birthTime}</span><span className="font-medium">{data.personal.birthTime}</span></div>
              <div className="flex justify-between"><span className="text-rose-600">{t.birthPlace}</span><span className="font-medium">{data.personal.birthPlace}</span></div>
              <div className="flex justify-between"><span className="text-rose-600">{t.caste}</span><span className="font-medium">{data.personal.caste}</span></div>
              <div className="flex justify-between"><span className="text-rose-600">{t.gotra}</span><span className="font-medium">{data.personal.gotra}</span></div>
              <div className="flex justify-between"><span className="text-rose-600">{t.manglik}</span><span className="font-medium">{data.personal.manglik}</span></div>
            </div>
          </div>

          {/* Education & Career */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-5 shadow-sm border border-rose-100">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center">
                <GraduationCap size={16} className="text-rose-500" />
              </div>
              <h3 className="font-bold text-rose-800">{t.educationCareer}</h3>
            </div>
            <div className="space-y-2 text-sm">
              <p className="font-semibold text-rose-900">{data.education.qualification}</p>
              <p className="text-rose-600 text-xs">{data.education.university}</p>
              <div className="h-2"></div>
              <p className="font-semibold text-rose-900">{data.education.occupation}</p>
              <p className="text-rose-600 text-xs">{data.education.companyName}, {data.education.workLocation}</p>
              <p className="text-rose-700 font-medium mt-2">{data.education.income}</p>
            </div>
          </div>

          {/* Family Details */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-5 shadow-sm border border-rose-100">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center">
                <Users size={16} className="text-rose-500" />
              </div>
              <h3 className="font-bold text-rose-800">{t.familyDetails}</h3>
            </div>
            <div className="space-y-2 text-sm">
              <p><span className="text-rose-600">{t.father}:</span> <span className="font-medium">{data.family.fatherName}</span></p>
              <p className="text-rose-500 text-xs">{data.family.fatherOccupation}</p>
              <p className="mt-2"><span className="text-rose-600">{t.mother}:</span> <span className="font-medium">{data.family.motherName}</span></p>
              <p className="text-rose-500 text-xs">{data.family.motherOccupation}</p>
              <p className="mt-2 text-rose-600">{data.family.brothers} Bros, {data.family.sisters} Sis • {data.family.familyType}</p>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-5 shadow-sm border border-rose-100">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center">
                <Phone size={16} className="text-rose-500" />
              </div>
              <h3 className="font-bold text-rose-800">{t.contactDetails}</h3>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center"><Phone size={14} className="text-rose-400" /></div>
                <span className="font-medium">{data.contact.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center"><Mail size={14} className="text-rose-400" /></div>
                <span className="font-medium text-sm truncate">{data.contact.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center"><MapPin size={14} className="text-rose-400" /></div>
                <span className="font-medium">{data.contact.city}, {data.contact.state}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- CORPORATE TEMPLATE ---
export const CorporateTemplate: React.FC<TemplateProps> = ({ data }) => {
  const t = LABELS[data.language];
  const isHindi = data.language === 'hi';
  const fontFamily = isHindi ? "font-['Noto_Sans_Devanagari']" : "font-sans";

  return (
    <div className={`w-full h-full bg-white text-slate-800 p-0 relative overflow-hidden ${fontFamily}`}>
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white p-8 pb-20">
        <div className="flex items-center gap-6">
          <div className="w-28 h-28 rounded-xl overflow-hidden border-4 border-white/20 shadow-2xl">
            {data.photoUrl ? (
              <img src={data.photoUrl} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <PlaceholderImage />
            )}
          </div>
          <div className="flex-1">
            <p className="text-blue-200 text-[10px] uppercase tracking-[0.2em] font-semibold mb-1">{isHindi ? 'विवाह प्रोफाइल' : 'Marriage Profile'}</p>
            <h1 className="text-3xl font-bold mb-1">{data.personal.fullName}</h1>
            <p className="text-blue-200 font-medium">{data.education.occupation} at {data.education.companyName}</p>
          </div>
          <div className="text-right">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 mb-2">
              <p className="text-2xl font-bold text-white">{data.education.income}</p>
              <p className="text-[10px] text-blue-200 uppercase tracking-wider">Annual Income</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-8 -mt-12 relative z-10">
        {/* Quick Stats Cards */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {[
            { label: t.dob, value: data.personal.dob, icon: <Calendar size={16} /> },
            { label: t.height, value: data.personal.height, icon: <User size={16} /> },
            { label: t.religion, value: data.personal.religion, icon: <Star size={16} /> },
            { label: t.maritalStatus, value: data.personal.maritalStatus, icon: <Heart size={16} /> },
          ].map((stat, i) => (
            <div key={i} className="bg-white rounded-xl p-4 shadow-lg border border-slate-100">
              <div className="flex items-center gap-2 text-blue-600 mb-2">{stat.icon}<span className="text-[10px] uppercase tracking-wider text-slate-500">{stat.label}</span></div>
              <p className="font-bold text-slate-800">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Education */}
            <div className="bg-slate-50 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center"><GraduationCap className="text-blue-600" size={20} /></div>
                <h3 className="font-bold text-slate-800">{t.educationCareer}</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="font-bold text-slate-900">{data.education.qualification}</p>
                  <p className="text-sm text-slate-500">{data.education.university}</p>
                </div>
                <div className="h-px bg-slate-200"></div>
                <div>
                  <p className="font-bold text-slate-900">{data.education.occupation}</p>
                  <p className="text-sm text-slate-500">{data.education.companyName}, {data.education.workLocation}</p>
                </div>
              </div>
            </div>

            {/* Family */}
            <div className="bg-slate-50 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center"><Users className="text-blue-600" size={20} /></div>
                <h3 className="font-bold text-slate-800">{t.familyDetails}</h3>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-slate-500 text-xs uppercase tracking-wider mb-1">{t.father}</p>
                  <p className="font-semibold">{data.family.fatherName}</p>
                  <p className="text-slate-500 text-xs">{data.family.fatherOccupation}</p>
                </div>
                <div>
                  <p className="text-slate-500 text-xs uppercase tracking-wider mb-1">{t.mother}</p>
                  <p className="font-semibold">{data.family.motherName}</p>
                  <p className="text-slate-500 text-xs">{data.family.motherOccupation}</p>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200 flex gap-6 text-sm">
                <span><strong>{data.family.brothers}</strong> Brothers</span>
                <span><strong>{data.family.sisters}</strong> Sisters</span>
                <span className="text-slate-500">{data.family.familyType} Family</span>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Personal Details */}
            <div className="bg-slate-50 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center"><User className="text-blue-600" size={20} /></div>
                <h3 className="font-bold text-slate-800">{t.personalDetails}</h3>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="flex justify-between"><span className="text-slate-500">{t.birthTime}</span><span className="font-medium">{data.personal.birthTime}</span></div>
                <div className="flex justify-between"><span className="text-slate-500">{t.birthPlace}</span><span className="font-medium">{data.personal.birthPlace}</span></div>
                <div className="flex justify-between"><span className="text-slate-500">{t.caste}</span><span className="font-medium">{data.personal.caste}</span></div>
                <div className="flex justify-between"><span className="text-slate-500">{t.gotra}</span><span className="font-medium">{data.personal.gotra}</span></div>
                <div className="flex justify-between"><span className="text-slate-500">{t.manglik}</span><span className="font-medium">{data.personal.manglik}</span></div>
                <div className="flex justify-between"><span className="text-slate-500">{t.motherTongue}</span><span className="font-medium">{data.personal.motherTongue}</span></div>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl p-5 text-white">
              <h3 className="font-bold mb-4 text-white/90">{t.contactDetails}</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center"><Phone size={16} /></div>
                  <span className="font-medium">{data.contact.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center"><Mail size={16} /></div>
                  <span className="font-medium text-sm">{data.contact.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center"><MapPin size={16} /></div>
                  <span className="font-medium">{data.contact.address}, {data.contact.city}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About Me Footer */}
        {data.aboutMe && (
          <div className="mt-6 bg-blue-50 rounded-xl p-4 border-l-4 border-blue-500">
            <p className="text-sm text-slate-700 leading-relaxed italic">"{data.aboutMe}"</p>
          </div>
        )}
      </div>
    </div>
  );
};