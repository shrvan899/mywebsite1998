import React, { useState } from 'react';
import { PageType } from '../types';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageCircle, 
  Building2, 
  Compass,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { Logo } from '../components/Logo';

interface ContactPageProps {
  onNavigate: (page: PageType) => void;
  onOpenBookingModal: (type?: 'clinic' | 'online') => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigate,
  onOpenBookingModal
}) => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    category: 'General Consultation',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({
        name: '',
        phone: '',
        email: '',
        category: 'General Consultation',
        message: ''
      });
    }, 4000);
  };

  return (
    <div className="pt-32 sm:pt-36 lg:pt-40 pb-20 space-y-16 max-w-7xl mx-auto px-4 sm:px-8">
      
      {/* Banner */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 rounded-full text-xs font-semibold backdrop-blur-md mb-2">
          <Logo size="sm" showText={false} />
          <span>We are Here to Support Your Recovery</span>
        </div>
        <h1 className="font-display font-bold text-3xl sm:text-5xl text-white">
          How Can We <span className="text-emerald-400">Help You?</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          Whether you have questions about our homeopathic remedies or wish to schedule a clinic visit in Bokaro Steel City, our dedicated team is here for you.
        </p>
      </div>

      {/* 3 Contact Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Address */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-4 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 rounded-2xl bg-[#D8F3DC] text-[#2D6A4F] flex items-center justify-center">
            <MapPin className="w-6 h-6" />
          </div>
          <h3 className="font-display font-bold text-xl text-[#1B4332]">Visit Our Clinic</h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Shop 06, Centre Market, Laxmi Market, Sector -4, Bokaro Steel City, Jharkhand - 827004
          </p>
          <p className="text-xs text-[#2D6A4F] font-semibold">
            Located in the heart of Laxmi Market Sector-4 for easy access.
          </p>
        </div>

        {/* Phone Call */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-4 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 rounded-2xl bg-[#D8F3DC] text-[#2D6A4F] flex items-center justify-center">
            <Phone className="w-6 h-6" />
          </div>
          <h3 className="font-display font-bold text-xl text-[#1B4332]">Call Desk Support</h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            We are just a phone call away for any health queries or appointment slots.
          </p>
          <a
            href="tel:+919801360376"
            className="font-display font-bold text-base text-[#1B4332] hover:text-[#006970] block"
          >
            +91 98013 60376
          </a>
        </div>

        {/* Email */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-4 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 rounded-2xl bg-[#D8F3DC] text-[#2D6A4F] flex items-center justify-center">
            <Mail className="w-6 h-6" />
          </div>
          <h3 className="font-display font-bold text-xl text-[#1B4332]">Email Support</h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Send us your detailed medical reports or general inquiries.
          </p>
          <a
            href="mailto:contact@subhashhomoeoclinic.com"
            className="font-display font-semibold text-xs text-[#006970] hover:underline block break-all"
          >
            contact@subhashhomoeoclinic.com
          </a>
        </div>

      </div>

      {/* Main Grid: Hours, Location & WhatsApp Direct Connect */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start max-w-5xl mx-auto">
        
        {/* Clinic Hours */}
        <div className="bg-[#1B4332] text-white p-8 sm:p-10 rounded-[2.5rem] shadow-xl space-y-6">
          <h3 className="font-display font-bold text-xl text-white flex items-center gap-2.5">
            <Clock className="w-6 h-6 text-[#D8F3DC]" />
            Clinic Operating Hours
          </h3>

          <div className="space-y-4 text-sm text-emerald-100">
            <div className="flex justify-between border-b border-emerald-800/80 pb-3">
              <span>Monday - Saturday</span>
              <span className="font-bold text-white">10:00 AM - 08:00 PM</span>
            </div>
            <div className="flex justify-between border-b border-emerald-800/80 pb-3">
              <span>Sunday</span>
              <span className="font-bold text-emerald-300">Closed (Online Only)</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/10 border border-white/15 text-xs text-emerald-100 space-y-2">
            <p className="font-semibold text-white">Direct WhatsApp Support Available</p>
            <p>Connect on WhatsApp +91 98013 60376 for immediate appointment booking or online consultation inquiries.</p>
          </div>
        </div>

        {/* Location Map Preview Box */}
        <div className="bg-white p-8 sm:p-10 rounded-[2.5rem] border border-slate-200/80 shadow-lg space-y-6">
          <h4 className="font-display font-bold text-slate-900 text-xl flex items-center gap-2.5">
            <Building2 className="w-6 h-6 text-[#2D6A4F]" />
            Bokaro Clinic Location
          </h4>
          <div className="p-4 bg-slate-100 rounded-2xl text-xs text-slate-700 space-y-1.5 leading-relaxed">
            <p className="font-bold text-sm text-slate-900">Subhash Homoeo Clinic</p>
            <p>Shop 06, Centre Market, Laxmi Market, Sector -4 Bokaro Steel City, Jharkhand - 827004</p>
          </div>
          
          <a
            href="https://maps.google.com/?q=Subhash+Homoeo+Clinic+Sector+4+Bokaro+Steel+City"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#006970] text-white py-3.5 px-6 rounded-2xl font-display font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#004b57] transition-colors shadow-md"
          >
            <Compass className="w-5 h-5 text-[#7DF4FF]" />
            <span>Get Google Maps Directions</span>
          </a>
        </div>

      </div>

    </div>
  );
};
