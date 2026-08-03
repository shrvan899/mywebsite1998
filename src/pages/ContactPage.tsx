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
            href="tel:+919341872726"
            className="font-display font-bold text-base text-[#1B4332] hover:text-[#006970] block"
          >
            +91 93418 72726
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

      {/* Main Grid: Message Form + Hours & Map */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Contact Form (8 cols) */}
        <div className="lg:col-span-8 bg-white p-6 sm:p-10 rounded-[2.5rem] border border-slate-200/80 shadow-lg space-y-6">
          <h2 className="font-display font-bold text-2xl text-[#1B4332]">
            Send a Direct Message
          </h2>

          {submitted ? (
            <div className="p-6 bg-[#D8F3DC] text-[#2D6A4F] rounded-2xl text-center space-y-2 font-semibold text-sm">
              <CheckCircle2 className="w-8 h-8 mx-auto" />
              <p>Thank you! Your message has been received. Our clinic desk will get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:border-[#1B4332] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:border-[#1B4332] outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:border-[#1B4332] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Treatment Category *
                  </label>
                  <select
                    value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:border-[#1B4332] outline-none"
                  >
                    <option value="General Consultation">General Consultation</option>
                    <option value="Piles & Fissures Care">Piles & Fissures Care</option>
                    <option value="Thyroid Treatment">Thyroid Care</option>
                    <option value="Hair Loss Solutions">Hair Loss Solutions</option>
                    <option value="Skin & Psoriasis">Skin & Psoriasis Care</option>
                    <option value="Respiratory Disorders">Respiratory Disorders</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Your Message or Health Query *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Please describe your symptoms or share your health goals..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:border-[#1B4332] outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="bg-[#1B4332] text-white py-3.5 px-8 rounded-2xl font-display font-bold text-sm hover:bg-[#004b57] transition-all shadow-md flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4 text-[#D8F3DC]" />
                <span>Submit Inquiry</span>
              </button>
            </form>
          )}
        </div>

        {/* Hours & Map Preview (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Clinic Hours */}
          <div className="bg-[#1B4332] text-white p-6 sm:p-8 rounded-[2rem] shadow-xl space-y-4">
            <h3 className="font-display font-bold text-lg text-white flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#D8F3DC]" />
              Clinic Operating Hours
            </h3>

            <div className="space-y-3 text-xs text-emerald-100">
              <div className="flex justify-between border-b border-emerald-800/80 pb-2">
                <span>Monday - Saturday</span>
                <span className="font-bold text-white">10:00 AM - 08:00 PM</span>
              </div>
              <div className="flex justify-between border-b border-emerald-800/80 pb-2">
                <span>Sunday</span>
                <span className="font-bold text-emerald-300">Closed (Online Only)</span>
              </div>
            </div>

            <p className="text-[11px] text-emerald-200/80">
              We recommend calling ahead (+91 93418 72726) to confirm doctor availability before visiting.
            </p>
          </div>

          {/* Location Map Preview Box */}
          <div className="bg-white p-6 rounded-[2rem] border border-slate-200 shadow-sm space-y-3">
            <h4 className="font-display font-bold text-slate-900 text-sm flex items-center gap-2">
              <Building2 className="w-4 h-4 text-[#2D6A4F]" />
              Bokaro Clinic Location
            </h4>
            <div className="p-3 bg-slate-100 rounded-xl text-xs text-slate-600 space-y-1">
              <p className="font-semibold text-slate-800">Subhash Homoeo Clinic</p>
              <p>Shop 06, Centre Market, Laxmi Market, Sector -4 Bokaro Steel City, Jharkhand - 827004</p>
            </div>
            
            <a
              href="https://maps.google.com/?q=Subhash+Homoeo+Clinic+Sector+4+Bokaro+Steel+City"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#006970] text-white py-2.5 rounded-xl font-display font-semibold text-xs flex items-center justify-center gap-2 hover:bg-[#004b57] transition-colors"
            >
              <Compass className="w-4 h-4 text-[#7DF4FF]" />
              <span>Get Google Maps Directions</span>
            </a>
          </div>

        </div>

      </div>

    </div>
  );
};
