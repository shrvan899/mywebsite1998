import React, { useState } from 'react';
import { PageType } from '../types';
import { 
  Truck, 
  Video, 
  Package, 
  Phone, 
  Calendar, 
  CheckCircle2, 
  ShieldCheck, 
  MessageCircle, 
  Sparkles, 
  MapPin, 
  Clock,
  ArrowRight
} from 'lucide-react';
import { Logo } from '../components/Logo';

interface OnlineConsultationPageProps {
  onNavigate: (page: PageType) => void;
  onOpenBookingModal: (type?: 'clinic' | 'online') => void;
}

export const OnlineConsultationPage: React.FC<OnlineConsultationPageProps> = ({
  onNavigate,
  onOpenBookingModal
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    age: '',
    gender: 'female',
    city: '',
    condition: 'Piles & Fissures Care',
    details: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [bookingCode, setBookingCode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = 'SHC-ONL-' + Math.floor(100000 + Math.random() * 900000);
    setBookingCode(code);
    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Subhash Homoeo Clinic,\nI submitted an Online Consultation request.\n*Ref:* ${bookingCode}\n*Name:* ${formData.name}\n*City:* ${formData.city}\n*Condition:* ${formData.condition}`
  );

  return (
    <div className="pt-32 sm:pt-36 lg:pt-40 pb-20 space-y-16 max-w-7xl mx-auto px-4 sm:px-8">
      
      {/* 1. HERO HEADER */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 rounded-full text-xs font-semibold backdrop-blur-md">
            <Logo size="sm" showText={false} />
            <span>Pan-India Doorstep Medicine Delivery</span>
          </div>

          <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-white leading-tight">
            Consult Dr. Subhash Online <br />
            <span className="text-emerald-400">From Anywhere in India</span>
          </h1>

          <p className="text-base text-slate-300 leading-relaxed">
            Distance should never be a barrier to quality homeopathic care. Receive expert constitutional diagnosis via high-definition video or phone consultation, and get custom-formulated medicines delivered directly to your doorstep anywhere in India.
          </p>

          {/* 3 Step Process Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            
            <div className="p-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-sm space-y-1">
              <span className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-300 font-bold text-sm flex items-center justify-center mb-2">1</span>
              <h4 className="font-display font-bold text-white text-xs">Submit Case Info</h4>
              <p className="text-[11px] text-slate-400">Fill the simple online booking form below.</p>
            </div>

            <div className="p-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-sm space-y-1">
              <span className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-300 font-bold text-sm flex items-center justify-center mb-2">2</span>
              <h4 className="font-display font-bold text-white text-xs">Video/Voice Call</h4>
              <p className="text-[11px] text-slate-400">Detailed case discussion with Dr. Subhash.</p>
            </div>

            <div className="p-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-sm space-y-1">
              <span className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-300 font-bold text-sm flex items-center justify-center mb-2">3</span>
              <h4 className="font-display font-bold text-white text-xs">Parcel Delivery</h4>
              <p className="text-[11px] text-slate-400">Custom remedies shipped to your home.</p>
            </div>

          </div>
        </div>

        {/* Doctor Online Consultation Image */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/20 bg-slate-900">
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80"
              alt="Online Homeopathic Tele-consultation"
              referrerPolicy="no-referrer"
              className="w-full h-[450px] object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-slate-900/90 backdrop-blur-md shadow-lg border border-white/10 text-xs text-slate-300 space-y-1">
              <div className="flex items-center gap-2 text-emerald-400 font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>Expert Homeopathic Tele-Consultation</span>
              </div>
              <p className="text-slate-400">
                Sealed, tamper-proof medication parcels dispatched across all Indian states and Union Territories.
              </p>
            </div>
          </div>
        </div>

      </section>

      {/* 2. ONLINE CONSULTATION FORM SECTION */}
      <section className="bg-white p-8 sm:p-12 rounded-[2.5rem] border border-slate-200/80 shadow-lg space-y-8 max-w-4xl mx-auto">
        <div className="text-center space-y-2">
          <span className="text-[#006970] font-display text-xs font-bold tracking-widest uppercase">
            Start Your Healing Journey Today
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#1B4332]">
            Online Consultation & Medicine Dispatch Form
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Please share your contact details and symptoms so our clinical team can arrange your call slot.
          </p>
        </div>

        {submitted ? (
          <div className="text-center p-8 bg-[#D8F3DC]/40 rounded-3xl border border-emerald-200 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#D8F3DC] text-[#2D6A4F] mx-auto flex items-center justify-center font-bold text-2xl">
              ✓
            </div>
            <h3 className="font-display font-bold text-2xl text-[#1B4332]">
              Online Consultation Form Registered!
            </h3>
            <p className="text-sm text-slate-700 max-w-md mx-auto">
              Your Reference Code is <span className="font-mono font-bold text-[#1B4332]">{bookingCode}</span>. Our desk team will call you within 2 hours to confirm your video/voice slot.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
              <a
                href={`https://wa.me/919341872726?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2D6A4F] text-white py-3 px-6 rounded-2xl font-display font-bold text-xs flex items-center justify-center gap-2 shadow-md hover:bg-emerald-800 transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Confirm Instantly via WhatsApp</span>
              </a>

              <button
                onClick={() => setSubmitted(false)}
                className="bg-white text-slate-700 border border-slate-200 py-3 px-6 rounded-2xl font-display font-semibold text-xs hover:bg-slate-50 transition-colors"
              >
                Book Another Patient
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Priya Sundaram"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:border-[#1B4332] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Phone / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:border-[#1B4332] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Age & Gender *
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="number"
                    required
                    placeholder="Age"
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:border-[#1B4332] outline-none"
                  />
                  <select
                    value={formData.gender}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:border-[#1B4332] outline-none"
                  >
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  City & State (for Shipping) *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Patna, Bihar / Bengaluru, Karnataka"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:border-[#1B4332] outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Health Category / Primary Issue *
              </label>
              <select
                value={formData.condition}
                onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:border-[#1B4332] outline-none"
              >
                <option value="Piles & Fissures Care">Piles, Bleeding & Anal Fissures</option>
                <option value="Thyroid & Hormonal Health">Hypothyroidism & Metabolic Care</option>
                <option value="Alopecia & Hair Loss">Alopecia & Severe Hair Thinning</option>
                <option value="Skin, Psoriasis & Eczema">Eczema, Psoriasis & Skin Rash</option>
                <option value="Asthma & Respiratory">Asthma, Sinusitis & Rhinitis</option>
                <option value="PCOS & Women Health">PCOS, Irregular Periods & Ovarian Cysts</option>
                <option value="Arthritis & Joint Pain">Joint Pain & Sciatica</option>
                <option value="Other Health Issue">Other Health Issue</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Symptoms Description & Duration (Optional)
              </label>
              <textarea
                rows={3}
                placeholder="Share any specific symptoms, diagnostic reports, or past medications..."
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:border-[#1B4332] outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#1B4332] text-white py-4 rounded-2xl font-display font-bold text-sm shadow-xl hover:bg-[#004b57] transition-all flex items-center justify-center gap-2"
            >
              <Video className="w-4 h-4 text-[#D8F3DC]" />
              <span>Submit Online Consultation Request</span>
            </button>
          </form>
        )}

      </section>

      {/* 3. WHATSAPP INSTANT BOX */}
      <section className="bg-[#2D6A4F] text-white rounded-[2.5rem] p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-3 text-center md:text-left">
          <span className="inline-block px-3 py-1 bg-white/20 text-white rounded-full text-xs font-semibold">
            Instant Direct WhatsApp
          </span>
          <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
            Need an Immediate Consultation Slot?
          </h3>
          <p className="text-xs sm:text-sm text-emerald-100 max-w-lg">
            Connect directly with Dr. Subhash’s clinical desk on WhatsApp for real-time slot booking and instant prescription dispatch details.
          </p>
        </div>

        <a
          href="https://wa.me/919341872726"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-[#2D6A4F] px-8 py-4 rounded-2xl font-display font-bold text-sm hover:bg-[#D8F3DC] transition-colors shadow-lg shrink-0 flex items-center gap-2"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span>WhatsApp: +91 93418 72726</span>
        </a>
      </section>

    </div>
  );
};
