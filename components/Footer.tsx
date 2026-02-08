import React from 'react';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-white border-t border-slate-200 py-12 no-print">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    {/* Brand */}
                    <div className="flex items-center gap-3">
                        <img src="/logo.svg" alt="RishteBio Logo" className="w-8 h-8 opacity-90" />
                        <span className="font-bold text-lg text-slate-800 font-['Playfair_Display']">RishteBio</span>
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-6 text-sm text-slate-500 font-medium">
                        <a href="#" className="hover:text-rose-600 transition-colors">About</a>
                        <a href="#" className="hover:text-rose-600 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-rose-600 transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-rose-600 transition-colors">Contact</a>
                    </div>

                    {/* Copyright */}
                    <div className="flex items-center gap-1.5 text-sm text-slate-400">
                        <span>Made with</span>
                        <Heart size={14} className="text-rose-500 fill-rose-500" />
                        <span>in India</span>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-slate-50 text-center text-xs text-slate-400">
                    &copy; {new Date().getFullYear()} RishteBio. All rights reserved.
                </div>
            </div>
        </footer>
    );
};
