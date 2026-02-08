import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Languages, LogIn, Menu, X } from 'lucide-react';

interface NavBarProps {
    language: 'en' | 'hi';
    setLanguage: (l: 'en' | 'hi') => void;
}

export const NavBar: React.FC<NavBarProps> = ({ language, setLanguage }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white border-b border-slate-200 sticky top-0 z-50 no-print">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center gap-2">
                        <Link to="/" className="flex items-center gap-3">
                            <img src="/logo.svg" alt="RishteBio Logo" className="w-9 h-9" />
                            <span className="font-bold text-xl text-slate-900 tracking-tight font-['Playfair_Display']">RishteBio</span>
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

export default NavBar;
