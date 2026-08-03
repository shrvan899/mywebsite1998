import React from 'react';
import { PageType } from '../types';
import { 
  Award, 
  CheckCircle2, 
  Heart, 
  ShieldCheck, 
  Users, 
  MapPin, 
  BookOpen, 
  Sparkles, 
  Calendar,
  Microscope,
  Compass
} from 'lucide-react';
import { Logo } from '../components/Logo';

interface AboutPageProps {
  onNavigate: (page: PageType) => void;
  onOpenBookingModal: (type?: 'clinic' | 'online') => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigate,
  onOpenBookingModal
}) => {
  return (
    <div className="pt-32 sm:pt-36 lg:pt-40 pb-20 space-y-16 max-w-7xl mx-auto px-4 sm:px-8">
      
      {/* 1. HERO DOCTOR INTRODUCTION */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Text Area */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 rounded-full text-xs font-semibold backdrop-blur-md">
            <Logo size="sm" showText={false} />
            <span>15+ Years Clinical Excellence • B.H.M.S (H.P. University)</span>
          </div>

          <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-white leading-tight">
            Restoring Health, <br />
            <span className="text-emerald-400">Rebuilding Vitality</span>
          </h1>

          <p className="text-base text-slate-300 leading-relaxed">
            Dr. Subhash believes that true medical healing begins when we stop looking at a disease as merely a list of superficial symptoms and start seeing the individual behind them. With over 15 years at the helm of Subhash Homoeo Clinic in Bokaro Steel City, he has dedicated his life to classical Homeopathy—painstakingly tailoring every remedy to match the unique biological, mental, and emotional landscape of his patients.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="p-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-sm space-y-1">
              <span className="font-display font-bold text-2xl text-emerald-400 block">8,500+</span>
              <span className="text-xs text-slate-300 font-medium">Bokaro Families Restored</span>
            </div>

            <div className="p-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-sm space-y-1">
              <span className="font-display font-bold text-2xl text-teal-300 block">15+ Yrs</span>
              <span className="text-xs text-slate-300 font-medium">Clinical Practice Mastery</span>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap gap-4">
            <button
              onClick={() => onOpenBookingModal('online')}
              className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-3.5 rounded-2xl font-display font-semibold text-sm shadow-lg hover:brightness-110 transition-all flex items-center gap-2 border border-white/20"
            >
              <Sparkles className="w-4 h-4 text-emerald-100" />
              <span>Book Online Consultation</span>
            </button>

            <button
              onClick={() => onNavigate('treatments')}
              className="bg-white/10 hover:bg-white/20 text-white border border-white/15 px-6 py-3.5 rounded-2xl font-display font-semibold text-sm transition-colors"
            >
              View Specialized Treatments
            </button>
          </div>
        </div>

        {/* Doctor Image & Location Badge */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/20 bg-slate-900">
            <img
              src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80"
              alt="Dr. Subhash at Subhash Homoeo Clinic"
              referrerPolicy="no-referrer"
              className="w-full h-[480px] object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-slate-900/90 backdrop-blur-md shadow-lg border border-white/10 text-xs text-slate-300 space-y-1">
              <div className="flex items-center gap-2 text-emerald-400 font-bold">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>Subhash Homoeo Clinic, Bokaro</span>
              </div>
              <p className="text-slate-400">
                Shop 06, Centre Market, Laxmi Market, Sector -4 Bokaro Steel City, Jharkhand
              </p>
            </div>
          </div>
        </div>

      </section>

      {/* 2. MISSION & VISION */}
      <section className="space-y-8 pt-8">
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <span className="text-[#006970] font-display text-xs font-bold tracking-widest uppercase">
            Our Purpose & Ethical Code
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#1B4332]">
            Mission & Vision for Health
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Mission Card */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-[#D8F3DC] text-[#2D6A4F] flex items-center justify-center">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-xl text-[#1B4332]">The Healing Mission</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Our primary commitment is to guide every patient toward a state of lasting, self-sustaining health where body defenses are fortified and vitality is restored. We avoid temporary quick fixes, seeking instead to understand the root story behind illness to ensure it doesn't return.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-[#1B4332] text-white p-8 rounded-3xl shadow-xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-800 text-[#D8F3DC] flex items-center justify-center">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-xl text-white">Our Vision for Natural Medicine</h3>
            <p className="text-sm text-emerald-100/90 leading-relaxed">
              We envision a world where gentle, non-invasive constitutional Homeopathy is the first choice for families seeking balanced health. By integrating meticulous patient case analysis with natural remedies, we empower both mind and body for a disease-free future.
            </p>
          </div>

        </div>
      </section>

      {/* 3. CONSTITUTIONAL PHILOSOPHY */}
      <section className="bg-slate-50 p-8 sm:p-12 rounded-[2.5rem] border border-slate-200/80 space-y-8">
        <div className="max-w-3xl space-y-3">
          <span className="text-[#006970] font-display text-xs font-bold tracking-widest uppercase">
            Clinical Philosophy
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#1B4332]">
            Why Constitutional Homeopathy Works
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            In conventional medicine, two patients with identical disease labels (e.g. Hypothyroidism) receive identical pill dosages. In Classical Homeopathy, two patients with the same disease receive different remedies based on their distinct constitutional profiles.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-2">
            <Microscope className="w-6 h-6 text-[#2D6A4F]" />
            <h4 className="font-display font-bold text-slate-900 text-sm">Case Individualization</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              We analyze your sleep patterns, thermal sensitivities, stress triggers, and family medical inheritance.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-2">
            <ShieldCheck className="w-6 h-6 text-[#006970]" />
            <h4 className="font-display font-bold text-slate-900 text-sm">Non-Toxic Potentization</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Remedies are ultra-diluted natural micro-doses that trigger internal immune signaling without side effects.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-2">
            <Sparkles className="w-6 h-6 text-[#1B4332]" />
            <h4 className="font-display font-bold text-slate-900 text-sm">Preventive Immunity</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              By removing vital force blockages, Homeopathy prevents seasonal relapses and future illness triggers.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};
