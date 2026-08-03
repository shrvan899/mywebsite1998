import React from 'react';
import { PageType } from '../types';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Sparkles, 
  ShieldCheck, 
  ChevronRight,
  Heart,
  MessageCircle
} from 'lucide-react';
import { Logo } from './Logo';

interface FooterProps {
  onNavigate: (page: PageType) => void;
  onOpenBookingModal: (type?: 'clinic' | 'online') => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenBookingModal
}) => {
  return (
    <footer className="bg-slate-950/80 backdrop-blur-2xl text-slate-300 border-t border-white/10 pt-16 pb-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-5">
            <div 
              onClick={() => onNavigate('home')} 
              className="flex items-center gap-3 cursor-pointer group"
            >
              <Logo size="lg" showText={true} />
            </div>

            <p className="text-sm text-slate-300/90 leading-relaxed max-w-md">
              Led by Dr. Subhash, B.H.M.S. (H.P. University), Subhash Homoeo Clinic is a sanctuary of ethical, evidence-based classical Homeopathy. Over 15 years, we have restored health for thousands of families through individualized constitutional healing.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>100% Gentle & Non-Invasive Remedies</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-white text-base">Quick Links</h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-emerald-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-400" /> Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-emerald-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-400" /> About Dr. Subhash
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('treatments')} className="hover:text-emerald-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-400" /> Specialized Treatments
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('online-consultation')} className="hover:text-emerald-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-400" /> Online Consultation
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('symptom-checker')} className="hover:text-emerald-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-400" /> Symptom Guidance
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-emerald-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-400" /> Contact & Directions
                </button>
              </li>
            </ul>
          </div>

          {/* Specializations */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-white text-base">Specializations</h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <button onClick={() => onNavigate('treatments')} className="hover:text-emerald-300 transition-colors">
                  Piles & Anal Fissures
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('treatments')} className="hover:text-emerald-300 transition-colors">
                  Thyroid & Hormonal Care
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('treatments')} className="hover:text-emerald-300 transition-colors">
                  Alopecia & Hair Restoration
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('treatments')} className="hover:text-emerald-300 transition-colors">
                  Psoriasis & Eczema Skin Care
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('treatments')} className="hover:text-emerald-300 transition-colors">
                  Asthma & Allergic Rhinitis
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('treatments')} className="hover:text-emerald-300 transition-colors">
                  PCOS & Menstrual Wellness
                </button>
              </li>
            </ul>
          </div>

          {/* Clinic Contact & Hours */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-white text-base">Clinic Info</h4>
            
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Shop 06, Centre Market, Laxmi Market, Sector -4, Bokaro Steel City, Jharkhand - 827004</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:+919341872726" className="hover:text-white transition-colors">
                  +91 93418 72726
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="mailto:contact@subhashhomoeoclinic.com" className="hover:text-white transition-colors break-all">
                  contact@subhashhomoeoclinic.com
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">Mon - Sat: 10:00 AM - 08:00 PM</p>
                  <p className="text-slate-400">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright & credit */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Subhash Homoeo Clinic. All Rights Reserved.</p>
          
          <div className="flex items-center gap-2 text-emerald-300/90 font-medium bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full shadow-sm">
            <span>Website Designed & Developed by <strong className="text-white font-semibold hover:text-emerald-300 transition-colors">Everto Marketing</strong></span>
          </div>

          <div className="flex items-center gap-1.5 text-slate-400">
            <span>Crafted for holistic wellness & patient restoration</span>
            <Heart className="w-3.5 h-3.5 text-rose-400 fill-current" />
          </div>
        </div>
      </div>
    </footer>
  );
};
