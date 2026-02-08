import React from 'react';
import { Sparkles, Heart, Shield, Users } from 'lucide-react';

export const About: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-['Playfair_Display']">
                        About RishteBio
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Helping you create the perfect first impression for your life's most important partnership.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                        <div className="w-12 h-12 bg-rose-50 rounded-xl flex items-center justify-center mb-6">
                            <Sparkles className="text-rose-500" size={24} />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h2>
                        <p className="text-slate-600 leading-relaxed">
                            We believe that every marriage biodata should be as unique as the person it represents. Our mission is to provide modern, elegant, and culturally respectful templates that help you stand out in the matchmaking process.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                        <div className="w-12 h-12 bg-rose-50 rounded-xl flex items-center justify-center mb-6">
                            <Heart className="text-rose-500" size={24} />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">Made with Love in India</h2>
                        <p className="text-slate-600 leading-relaxed">
                            RishteBio is proudly built in India, understanding the nuances and importance of traditional arranged marriages while embracing modern design aesthetics.
                        </p>
                    </div>
                </div>

                <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 mb-20">
                    <div className="p-8 md:p-12 text-center">
                        <h2 className="text-3xl font-bold text-slate-900 mb-8 font-['Playfair_Display']">Why Choose RishteBio?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="flex flex-col items-center">
                                <div className="p-4 bg-slate-50 rounded-full mb-4">
                                    <Shield className="text-slate-700" size={24} />
                                </div>
                                <h3 className="font-semibold text-slate-900 mb-2">Privacy First</h3>
                                <p className="text-sm text-slate-500">Your data stays on your device. We don't store your personal information on our servers.</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="p-4 bg-slate-50 rounded-full mb-4">
                                    <Users className="text-slate-700" size={24} />
                                </div>
                                <h3 className="font-semibold text-slate-900 mb-2">Cultural Relevance</h3>
                                <p className="text-sm text-slate-500">Templates designed specifically for Indian communities and preferences.</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="p-4 bg-slate-50 rounded-full mb-4">
                                    <Sparkles className="text-slate-700" size={24} />
                                </div>
                                <h3 className="font-semibold text-slate-900 mb-2">Modern Design</h3>
                                <p className="text-sm text-slate-500">Stand out with contemporary layouts that look great on any device.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
