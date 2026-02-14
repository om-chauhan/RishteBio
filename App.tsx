import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import { NavBar, Footer, ScrollToTop } from './components';

// Pages
import { Home, Editor, About, PrivacyPolicy, TermsOfService, Contact } from './pages';

const App: React.FC = () => {
  const [language, setLanguage] = useState<'en' | 'hi'>('en');

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <NavBar language={language} setLanguage={setLanguage} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/editor" element={<Editor language={language} setLanguage={setLanguage} />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;