
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import AdminDashboard from './pages/AdminDashboard';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen bg-brand-black text-white font-sans flex flex-col">
        <ScrollToTop />
        <NavigationWrapper />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </main>
        <FooterWrapper />
      </div>
    </HashRouter>
  );
};

// Helper to handle navigation visibility
const NavigationWrapper: React.FC = () => {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');
  
  if (isAdmin) return null; // Dashboard has its own nav
  return <Navbar />;
};

const FooterWrapper: React.FC = () => {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');
  
  if (isAdmin) return null;
  return <Footer />;
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default App;
