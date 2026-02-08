import React, { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

// Components
import { NavBar } from './components';

// Pages
import { Home, Editor } from './pages';

const App: React.FC = () => {
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