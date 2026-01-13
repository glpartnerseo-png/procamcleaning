
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '소개', href: '#about' },
    { name: '서비스 안내', href: '#services' },
    { name: '포트폴리오', href: '#portfolio' },
    { name: '견적문의', href: '#contact' },
    { name: '고객센터', href: '#footer' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (location.pathname !== '/') {
        return; 
    }
    
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-effect py-2 border-b border-brand-green/20' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center group">
          <div className="relative h-12 w-auto flex items-center bg-white/10 rounded-lg px-2 backdrop-blur-sm border border-white/10 group-hover:bg-white/20 transition-all overflow-hidden">
            {/* Horizontal Logo Image */}
            <img 
              src="https://raw.githubusercontent.com/stackblitz/stackblitz-images/main/procam-logo-h.png" 
              alt="Procam Logo" 
              className="h-8 w-auto filter brightness-0 invert" 
              style={{ mixBlendMode: 'lighten' }}
              onError={(e) => {
                // Fallback if image path is not yet valid
                (e.target as HTMLImageElement).style.display = 'none';
                (e.target as HTMLImageElement).parentElement!.innerHTML = '<span class="text-xl font-bold tracking-tighter text-brand-light">PRO<span class="text-brand-emerald">CAM</span></span>';
              }}
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-sm font-medium hover:text-brand-emerald transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Link to="/admin" className="text-xs opacity-50 hover:opacity-100 transition-opacity bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
            Admin
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full glass-effect transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 border-b border-brand-green/20' : 'max-h-0'}`}>
        <div className="flex flex-col p-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-lg font-medium hover:text-brand-emerald transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Link to="/admin" className="text-sm opacity-50" onClick={() => setIsOpen(false)}>Admin Panel</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
