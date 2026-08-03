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
    { page: 'symptom-checker', label: 'Symptom Checker' },
    { page: 'contact', label: 'Contact Us' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Utility Announcement Bar */}
      <div className="bg-slate-900/80 backdrop-blur-md text-slate-300 text-xs py-2 px-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-4 text-emerald-300/90 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5 font-medium">
              <Award className="w-3.5 h-3.5 text-emerald-400" />
              15+ Years Clinical Mastery | BHMS (H.P. Univ)
            </span>
            <span className="hidden md:inline-block text-slate-600">•</span>
            <span className="hidden md:flex items-center gap-1 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              Sector-4, Bokaro Steel City, Jharkhand
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="tel:+919341872726"
              className="flex items-center gap-1 font-semibold text-white hover:text-emerald-300 transition-colors text-[11px] sm:text-xs"
            >
              <Phone className="w-3 h-3 text-emerald-400" />
              +91 93418 72726
            </a>
          </div>
        </div>
      </div>

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

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://wa.me/919341872726?text=Hello%20Subhash%20Homoeo%20Clinic,%20I%20would%20like%20to%20inquire%20about%20a%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl text-emerald-300 bg-emerald-500/20 border border-emerald-500/30 hover:bg-emerald-500/30 transition-colors flex items-center justify-center"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
            </a>

            <button
              onClick={() => onOpenBookingModal()}
              className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-5 py-2.5 rounded-xl font-display font-semibold text-xs sm:text-sm shadow-lg shadow-emerald-500/20 hover:brightness-110 active:scale-95 transition-all flex items-center gap-2 border border-white/20"
            >
              <Calendar className="w-4 h-4 text-emerald-100" />
              <span>Book Appointment</span>
            </button>
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
            <button
              onClick={() => {
                onOpenBookingModal('clinic');
                setMobileMenuOpen(false);
              }}
              className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-3 rounded-xl font-display font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 border border-white/20"
            >
              <Calendar className="w-4 h-4 text-emerald-100" />
              <span>Book Clinic Appointment</span>
            </button>

            <button
              onClick={() => {
                onOpenBookingModal('online');
                setMobileMenuOpen(false);
              }}
              className="w-full bg-white/10 border border-white/15 text-white py-3 rounded-xl font-display font-semibold text-sm flex items-center justify-center gap-2 hover:bg-white/20"
            >
              <Sparkles className="w-4 h-4 text-emerald-300" />
              <span>Book Online Consultation</span>
            </button>

            <a
              href="https://wa.me/919341872726"
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
