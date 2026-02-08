import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    ChevronRight, Sparkles, PenTool, Edit3,
    Briefcase, MapPin
} from 'lucide-react';
import { TemplateType } from '../../types';
import { SAMPLE_PROFILES, SampleProfile } from '../../constants';
import { TemplateRenderer } from '../../components/BioTemplates';

export const Home: React.FC = () => {
    const navigate = useNavigate();

    const handleUseSample = (sample: SampleProfile) => {
        const { icon, label, ...biodata } = sample;
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
                {/* Hero Section */}
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
                        <button
                            onClick={() => navigate('/editor')}
                            className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl group"
                        >
                            Start Designing <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                        </button>
                    </div>
                </div>

                {/* Sample Profiles Section */}
                <div className="w-full max-w-6xl mb-20">
                    <div className="flex flex-col items-center justify-center gap-2 mb-8">
                        <div className="flex items-center gap-2">
                            <PenTool className="text-rose-500" size={24} />
                            <h2 className="text-2xl font-bold text-slate-800">Start with a Sample Profile</h2>
                        </div>
                        <p className="text-sm text-slate-500">Click any template to customize it with your own details</p>
                    </div>

                    {/* Mobile Cards - Horizontal Layout */}
                    <div className="flex flex-col gap-4 sm:hidden">
                        {SAMPLE_PROFILES.map((profile) => (
                            <button
                                key={`mobile-${profile.id}`}
                                onClick={() => handleUseSample(profile)}
                                className="group flex flex-row text-left rounded-2xl overflow-hidden transition-all duration-300 active:scale-[0.98] shadow-lg bg-white border border-slate-100"
                            >
                                {/* Left: Preview Thumbnail */}
                                <div className="w-28 aspect-square overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 relative flex-shrink-0 border-r border-slate-200/50">
                                    <div
                                        className="absolute top-1 left-1 pointer-events-none"
                                        style={{
                                            width: '794px',
                                            height: '1123px',
                                            transform: 'scale(0.13)',
                                            transformOrigin: 'top left',
                                        }}
                                    >
                                        <TemplateRenderer
                                            template={profile.templateId as TemplateType}
                                            data={profile}
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/70" />
                                </div>

                                {/* Right: Profile Info */}
                                <div className="flex-1 p-4 flex flex-col justify-center">
                                    <div className="flex items-center gap-2.5 mb-2">
                                        <div className="w-9 h-9 bg-gradient-to-br from-rose-100 to-rose-50 rounded-xl flex items-center justify-center shadow-sm">
                                            <profile.icon size={16} className="text-rose-500" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="font-bold text-slate-800 text-base truncate">{profile.label}</h3>
                                            <p className="text-xs text-slate-500">{profile.personal.fullName}</p>
                                        </div>
                                    </div>

                                    <div className="space-y-1.5 mt-1">
                                        <div className="flex items-center gap-2 text-xs text-slate-600">
                                            <MapPin size={12} className="text-rose-400 flex-shrink-0" />
                                            <span>{profile.contact.city}, {profile.contact.state}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-xs text-slate-600">
                                            <Briefcase size={12} className="text-rose-400 flex-shrink-0" />
                                            <span className="truncate">{profile.education.occupation}</span>
                                        </div>
                                    </div>

                                    <div className="mt-3">
                                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-600 bg-rose-50 px-3 py-1.5 rounded-full">
                                            <Edit3 size={12} /> Customize Template
                                        </span>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Desktop/Tablet Cards - Vertical Thumbnail Layout */}
                    <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
                        {SAMPLE_PROFILES.map((profile) => (
                            <button
                                key={`desktop-${profile.id}`}
                                onClick={() => handleUseSample(profile)}
                                className="group relative flex flex-col text-left rounded-xl overflow-hidden transition-all duration-300 hover:ring-2 hover:ring-rose-400 hover:ring-offset-2 shadow-md hover:shadow-xl bg-white"
                            >
                                {/* Live Preview Container */}
                                <div className="aspect-[210/297] overflow-hidden bg-slate-100 relative flex items-center justify-center">
                                    <div
                                        className="absolute top-1/2 left-1/2 pointer-events-none"
                                        style={{
                                            width: '794px',
                                            height: '1123px',
                                            transform: 'translate(-50%, -50%) scale(0.18)',
                                        }}
                                    >
                                        <TemplateRenderer
                                            template={profile.templateId as TemplateType}
                                            data={profile}
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <span className="bg-white/95 backdrop-blur-sm text-rose-600 text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full shadow-lg flex items-center gap-1.5">
                                            <Edit3 size={14} /> Customize
                                        </span>
                                    </div>
                                </div>

                                {/* Profile Info */}
                                <div className="p-3 bg-white border-t border-slate-100 group-hover:bg-slate-50 transition-colors">
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className="w-6 h-6 bg-rose-50 rounded-full flex items-center justify-center group-hover:bg-rose-100 transition-colors">
                                            <profile.icon size={12} className="text-rose-500" />
                                        </div>
                                        <h3 className="font-bold text-slate-800 text-sm truncate">{profile.label}</h3>
                                    </div>
                                    <p className="text-[11px] text-slate-500 line-clamp-1">{profile.personal.fullName} • {profile.contact.city}</p>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Features Section */}
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

export default Home;
