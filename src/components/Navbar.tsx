import React, { useState, useEffect } from 'react';
import { PageType } from '../types';
import { 
  Phone, 
  Clock, 
  MapPin, 
  Calendar, 
  Menu, 
  X, 
  MessageCircle, 
  Award, 
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { Logo } from './Logo';

interface NavbarProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
  onOpenBookingModal: (type?: 'clinic' | 'online') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenBookingModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { page: PageType; label: string }[] = [
    { page: 'home', label: 'Home' },
    { page: 'about', label: 'About Dr. Subhash' },
    { page: 'treatments', label: 'Specialized Treatments' },
    { page: 'online-consultation', label: 'Online Consultation' },
    { page: 'symptom-checker', label: 'Symptom Checker' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Main Nav Bar */}
      <nav 
        className={`w-full px-4 sm:px-8 py-3.5 transition-all duration-300 ${
          scrolled 
            ? 'bg-slate-950/80 backdrop-blur-2xl shadow-2xl border-b border-white/10' 
            : 'bg-slate-950/50 backdrop-blur-xl border-b border-white/10'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div 
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <Logo size="md" showText={true} />
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const active = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  onClick={() => onNavigate(item.page)}
                  className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all relative ${
                    active
                      ? 'text-white font-semibold bg-white/15 border border-white/20 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                  {active && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-emerald-400 rounded-full shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Action Buttons: Only WhatsApp button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://wa.me/919801360376?text=Hello%20Subhash%20Homoeo%20Clinic,%20I%20would%20like%20to%20inquire%20about%20an%20online%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl text-emerald-300 bg-emerald-500/20 border border-emerald-500/30 hover:bg-emerald-500/30 transition-all flex items-center gap-2 text-xs sm:text-sm font-semibold shadow-lg shadow-emerald-500/10 hover:scale-[1.02]"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-5 h-5 fill-current text-emerald-400" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl text-white bg-white/10 border border-white/15 hover:bg-white/20 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl px-4 py-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
          <div className="space-y-1">
            {navItems.map((item) => {
              const active = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  onClick={() => {
                    onNavigate(item.page);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium flex items-center justify-between transition-colors ${
                    active
                      ? 'bg-emerald-500/20 border border-emerald-500/30 text-white font-semibold'
                      : 'text-slate-300 hover:bg-white/10'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className={`w-4 h-4 ${active ? 'text-emerald-400' : 'text-slate-500'}`} />
                </button>
              );
            })}
          </div>

          <div className="pt-4 border-t border-white/10 space-y-3">
            <a
              href="https://wa.me/919801360376?text=Hello%20Subhash%20Homoeo%20Clinic,%20I%20would%20like%20to%20inquire%20about%20an%20online%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-600/30 border border-emerald-500/30 text-emerald-300 py-3 rounded-xl font-display font-semibold text-sm flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp Direct Chat</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
