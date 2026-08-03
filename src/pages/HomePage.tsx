import React, { useState } from 'react';
import { PageType, TreatmentItem } from '../types';
import { TREATMENTS_DATA } from '../data/treatmentsData';
import { TESTIMONIALS_DATA } from '../data/reviewsData';
import { 
  ShieldCheck, 
  Award, 
  Users, 
  Calendar, 
  ArrowRight, 
  CheckCircle2, 
  HeartHandshake, 
  Sparkles, 
  MapPin, 
  Truck, 
  Activity, 
  Star, 
  Clock, 
  PhoneCall, 
  MessageCircle,
  HelpCircle
} from 'lucide-react';
import { Logo } from '../components/Logo';

interface HomePageProps {
  onNavigate: (page: PageType) => void;
  onOpenBookingModal: (type?: 'clinic' | 'online') => void;
  onSelectTreatment: (treatment: TreatmentItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenBookingModal,
  onSelectTreatment
}) => {
  const featuredTreatments = TREATMENTS_DATA.slice(0, 5);

  const [callbackForm, setCallbackForm] = useState({
    name: '',
    phone: '',
    concern: 'Piles & Fissures Care'
  });
  const [callbackSent, setCallbackSent] = useState(false);

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCallbackSent(true);
    setTimeout(() => {
      setCallbackSent(false);
      setCallbackForm({ name: '', phone: '', concern: 'Piles & Fissures Care' });
    }, 4000);
  };

  return (
    <div className="space-y-20 pb-16">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-36 sm:pt-40 lg:pt-44 pb-16 px-4 sm:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            <div className="inline-flex items-center gap-2 sm:gap-2.5 px-3 py-1.5 sm:px-4 sm:py-2 bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 rounded-2xl sm:rounded-full text-[11px] xs:text-xs sm:text-sm font-semibold shadow-sm backdrop-blur-md max-w-full">
              <Logo size="sm" showText={false} />
              <span className="leading-snug">15+ Years of Dedicated Classical Homeopathy</span>
            </div>

            <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-5xl text-white leading-[1.15] tracking-tight">
              Restoring the Person, <br className="hidden sm:inline" />
              Not Just <span className="text-emerald-400">Managing Symptoms</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              Dr. Subhash, B.H.M.S. (H.P. University), believes that true healing begins when we stop seeing disease as isolated symptoms and start seeing the individual behind them. With over 15 years at Subhash Homoeo Clinic, he formulates personalized constitutional remedies that match your unique biological and emotional landscape.
            </p>

            {/* Hero Quick Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-sm">
                <span className="font-display font-bold text-2xl text-emerald-400 block">8,500+</span>
                <span className="text-xs text-slate-300 font-medium">Bokaro Families Restored</span>
              </div>

              <div className="p-3.5 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-sm">
                <span className="font-display font-bold text-2xl text-teal-300 block">15+ Yrs</span>
                <span className="text-xs text-slate-300 font-medium">Clinical Excellence</span>
              </div>

              <div className="col-span-2 sm:col-span-1 p-3.5 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-sm">
                <span className="font-display font-bold text-2xl text-cyan-300 block">100%</span>
                <span className="text-xs text-slate-300 font-medium">Gentle Natural Healing</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => onOpenBookingModal('clinic')}
                className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-7 py-4 rounded-2xl font-display font-bold text-sm shadow-lg shadow-emerald-500/20 hover:brightness-110 active:scale-95 transition-all flex items-center gap-2.5 border border-white/20"
              >
                <Calendar className="w-4 h-4 text-emerald-100" />
                <span>Book Clinic Visit (Bokaro)</span>
              </button>

              <button
                onClick={() => onOpenBookingModal('online')}
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-7 py-4 rounded-2xl font-display font-semibold text-sm hover:bg-white/20 active:scale-95 transition-all flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-cyan-300" />
                <span>Online Consultation</span>
              </button>
            </div>

          </div>

          {/* Right Hero Image Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-slate-100 group">
              <img
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80"
                alt="Dr. Subhash Consulting Patient"
                referrerPolicy="no-referrer"
                className="w-full h-[460px] sm:h-[520px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B4332]/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/90 backdrop-blur-md shadow-xl border border-white">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#D8F3DC] text-[#2D6A4F] flex items-center justify-center font-bold">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-slate-900 text-sm">
                      Dr. Subhash, B.H.M.S.
                    </h4>
                    <p className="text-xs text-slate-600">
                      Classical Homoeopathy Practitioner (H.P. University)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Ambient Accents */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#006970]/10 rounded-full blur-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-[#D8F3DC]/60 rounded-full blur-3xl -z-10" />
          </div>

        </div>
      </section>

      {/* 2. TRUST BANNER */}
      <section className="bg-[#1B4332] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-emerald-800/60">
            
            <div className="p-2 space-y-1">
              <span className="font-display font-extrabold text-3xl sm:text-4xl text-[#D8F3DC]">15+ Yrs</span>
              <p className="text-xs text-emerald-100 font-medium uppercase tracking-wider">Clinical Mastery</p>
            </div>

            <div className="p-2 space-y-1 pt-4 md:pt-2">
              <span className="font-display font-extrabold text-3xl sm:text-4xl text-[#D8F3DC]">8,500+</span>
              <p className="text-xs text-emerald-100 font-medium uppercase tracking-wider">Families Restored</p>
            </div>

            <div className="p-2 space-y-1 pt-4 md:pt-2">
              <span className="font-display font-extrabold text-3xl sm:text-4xl text-[#D8F3DC]">Pan-India</span>
              <p className="text-xs text-emerald-100 font-medium uppercase tracking-wider">Medicine Shipping</p>
            </div>

            <div className="p-2 space-y-1 pt-4 md:pt-2">
              <span className="font-display font-extrabold text-3xl sm:text-4xl text-[#D8F3DC]">100%</span>
              <p className="text-xs text-emerald-100 font-medium uppercase tracking-wider">Non-Surgical Care</p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. SPECIALIZED TREATMENTS BENTO GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="text-[#006970] font-display text-xs font-bold tracking-widest uppercase">
              Targeted Root-Cause Solutions
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#1B4332]">
              Specialized Clinical Treatments
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              We focus on chronic, recurrent health conditions where conventional treatments often offer temporary relief. Homeopathy cures by rebuilding constitutional immune balance.
            </p>
          </div>

          <button
            onClick={() => onNavigate('treatments')}
            className="inline-flex items-center gap-2 text-[#1B4332] font-display font-bold text-sm hover:text-[#006970] transition-colors group"
          >
            <span>View All 9 Specialization Categories</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Main Card 1: Piles */}
          <div 
            onClick={() => onSelectTreatment(featuredTreatments[0])}
            className="md:col-span-2 bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group relative overflow-hidden flex flex-col justify-between"
          >
            <div className="space-y-4 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D8F3DC] text-[#2D6A4F] text-xs font-semibold">
                <Activity className="w-3.5 h-3.5" />
                <span>{featuredTreatments[0].categoryLabel}</span>
              </div>

              <h3 className="font-display font-bold text-2xl text-[#1B4332] group-hover:text-[#006970] transition-colors">
                {featuredTreatments[0].title}
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed max-w-lg">
                {featuredTreatments[0].shortDescription}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-xs text-slate-700">
                {featuredTreatments[0].symptoms.slice(0, 4).map((sym, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#2D6A4F] shrink-0" />
                    <span>{sym}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 relative z-10 flex items-center justify-between border-t border-slate-100 mt-6">
              <span className="text-xs font-semibold text-[#2D6A4F]">
                {featuredTreatments[0].successRate}% Success Rate • Non-Surgical
              </span>
              <span className="text-xs font-display font-bold text-[#1B4332] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Read Protocol Details <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

          {/* Card 2: Thyroid */}
          <div 
            onClick={() => onSelectTreatment(featuredTreatments[1])}
            className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 text-[#006970] text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{featuredTreatments[1].categoryLabel}</span>
              </div>

              <h3 className="font-display font-bold text-xl text-[#1B4332] group-hover:text-[#006970] transition-colors">
                {featuredTreatments[1].title}
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed">
                {featuredTreatments[1].shortDescription}
              </p>
            </div>

            <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between">
              <span className="text-xs font-semibold text-[#006970]">
                {featuredTreatments[1].successRate}% Clinical Recovery
              </span>
              <ArrowRight className="w-4 h-4 text-[#1B4332] group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 3: Alopecia / Hair */}
          <div 
            onClick={() => onSelectTreatment(featuredTreatments[2])}
            className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-[#2D6A4F] text-xs font-semibold">
                <span>{featuredTreatments[2].categoryLabel}</span>
              </div>

              <h3 className="font-display font-bold text-xl text-[#1B4332] group-hover:text-[#006970] transition-colors">
                {featuredTreatments[2].title}
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed">
                {featuredTreatments[2].shortDescription}
              </p>
            </div>

            <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between">
              <span className="text-xs font-semibold text-[#2D6A4F]">
                Follicle Root Re-activation
              </span>
              <ArrowRight className="w-4 h-4 text-[#1B4332] group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 4: Eczema / Psoriasis */}
          <div 
            onClick={() => onSelectTreatment(featuredTreatments[3])}
            className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 text-[#006970] text-xs font-semibold">
                <span>{featuredTreatments[3].categoryLabel}</span>
              </div>

              <h3 className="font-display font-bold text-xl text-[#1B4332] group-hover:text-[#006970] transition-colors">
                {featuredTreatments[3].title}
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed">
                {featuredTreatments[3].shortDescription}
              </p>
            </div>

            <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between">
              <span className="text-xs font-semibold text-[#006970]">
                Internal Blood Purification
              </span>
              <ArrowRight className="w-4 h-4 text-[#1B4332] group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 5: Respiratory / Asthma */}
          <div 
            onClick={() => onSelectTreatment(featuredTreatments[4])}
            className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D8F3DC] text-[#2D6A4F] text-xs font-semibold">
                <span>{featuredTreatments[4].categoryLabel}</span>
              </div>

              <h3 className="font-display font-bold text-xl text-[#1B4332] group-hover:text-[#006970] transition-colors">
                {featuredTreatments[4].title}
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed">
                {featuredTreatments[4].shortDescription}
              </p>
            </div>

            <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between">
              <span className="text-xs font-semibold text-[#2D6A4F]">
                Desensitizes Allergies
              </span>
              <ArrowRight className="w-4 h-4 text-[#1B4332] group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

        </div>
      </section>

      {/* 4. PATHWAY TO RECOVERY */}
      <section className="bg-slate-100/80 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-[#006970] font-display text-xs font-bold tracking-widest uppercase">
              The Subhash Homoeo Standard
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#1B4332]">
              Your Structured Pathway to Recovery
            </h2>
            <p className="text-slate-600 text-sm">
              Classical Homeopathy evaluates your lifestyle, emotional state, and physical triggers to formulate your exact constitutional remedy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
            
            <div className="bg-white p-6 rounded-3xl border border-slate-200 text-center space-y-3 relative shadow-sm">
              <div className="w-12 h-12 rounded-full bg-[#D8F3DC] text-[#2D6A4F] font-display font-bold text-lg mx-auto flex items-center justify-center">
                01
              </div>
              <h4 className="font-display font-bold text-slate-900 text-base">In-depth Dialogue</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Detailed discussion of physical symptoms, medical history, stress, and lifestyle triggers.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200 text-center space-y-3 relative shadow-sm">
              <div className="w-12 h-12 rounded-full bg-[#D8F3DC] text-[#2D6A4F] font-display font-bold text-lg mx-auto flex items-center justify-center">
                02
              </div>
              <h4 className="font-display font-bold text-slate-900 text-base">Constitutional Synthesis</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Connecting the dots across body systems to find the core vital force imbalance.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200 text-center space-y-3 relative shadow-sm">
              <div className="w-12 h-12 rounded-full bg-[#D8F3DC] text-[#2D6A4F] font-display font-bold text-lg mx-auto flex items-center justify-center">
                03
              </div>
              <h4 className="font-display font-bold text-slate-900 text-base">Custom Formulation</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Preparing precise potentized remedies tailored specifically for your case.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200 text-center space-y-3 relative shadow-sm">
              <div className="w-12 h-12 rounded-full bg-[#D8F3DC] text-[#2D6A4F] font-display font-bold text-lg mx-auto flex items-center justify-center">
                04
              </div>
              <h4 className="font-display font-bold text-slate-900 text-base">Safe Dispensing</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Handed over at Bokaro Clinic or dispatched directly to your doorstep anywhere in India.
              </p>
            </div>

            <div className="bg-[#1B4332] text-white p-6 rounded-3xl text-center space-y-3 relative shadow-md">
              <div className="w-12 h-12 rounded-full bg-[#D8F3DC] text-[#1B4332] font-display font-bold text-lg mx-auto flex items-center justify-center">
                05
              </div>
              <h4 className="font-display font-bold text-white text-base">Sustained Progress</h4>
              <p className="text-xs text-emerald-100/90 leading-relaxed">
                Continuous follow-up evaluations to ensure permanent long-term health restoration.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 5. PATIENT TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-[#006970] font-display text-xs font-bold tracking-widest uppercase">
            Real Patient Experiences
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#1B4332]">
            Restored Health & Patient Stories
          </h2>
          <p className="text-slate-600 text-sm">
            Read verified recovery experiences from patients treated at our Bokaro Clinic and through our Pan-India Online Consultation service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS_DATA.slice(0, 3).map((test) => (
            <div 
              key={test.id}
              className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{test.story}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-1">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-display font-bold text-slate-900">{test.patientName}, {test.age}</span>
                  <span className="text-xs font-medium text-[#2D6A4F] bg-[#D8F3DC] px-2.5 py-0.5 rounded-full">
                    {test.consultationType}
                  </span>
                </div>
                <p className="text-[11px] text-slate-500">
                  {test.condition} • {test.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. QUICK CALLBACK & CONSULTATION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-gradient-to-br from-[#1B4332] via-[#004b57] to-[#1B4332] text-white rounded-[2.5rem] p-8 sm:p-14 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            <div className="lg:col-span-7 space-y-4 text-left">
              <span className="inline-block px-3 py-1 bg-[#D8F3DC]/20 text-[#D8F3DC] rounded-full text-xs font-semibold">
                Direct Doctor Desk
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white leading-tight">
                Experience Personal Homeopathic Care
              </h2>
              <p className="text-sm text-emerald-100/90 leading-relaxed max-w-xl">
                Whether you wish to visit Dr. Subhash at our Bokaro Steel City clinic or consult online from any city in India, we are ready to listen and help.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2 text-xs text-emerald-200">
                  <PhoneCall className="w-4 h-4 text-[#D8F3DC]" />
                  <span>Call: +91 93418 72726</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-emerald-200">
                  <Truck className="w-4 h-4 text-[#D8F3DC]" />
                  <span>Pan-India Medicine Parcel Delivery</span>
                </div>
              </div>
            </div>

            {/* Quick Callback Form */}
            <div className="lg:col-span-5 bg-white text-slate-900 p-6 rounded-3xl shadow-xl space-y-4">
              <h4 className="font-display font-bold text-lg text-[#1B4332] text-center">
                Request a Quick Callback
              </h4>

              {callbackSent ? (
                <div className="p-4 bg-[#D8F3DC] text-[#2D6A4F] rounded-2xl text-center text-xs font-semibold space-y-1">
                  <CheckCircle2 className="w-8 h-8 mx-auto" />
                  <p>Request Received! Our clinic desk will call you within 2 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleCallbackSubmit} className="space-y-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Singh"
                      value={callbackForm.name}
                      onChange={(e) => setCallbackForm({ ...callbackForm, name: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:border-[#1B4332] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={callbackForm.phone}
                      onChange={(e) => setCallbackForm({ ...callbackForm, phone: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:border-[#1B4332] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                      Primary Concern *
                    </label>
                    <select
                      value={callbackForm.concern}
                      onChange={(e) => setCallbackForm({ ...callbackForm, concern: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:border-[#1B4332] outline-none"
                    >
                      <option value="Piles & Fissures Care">Piles & Fissures Care</option>
                      <option value="Thyroid & Hormonal Health">Thyroid Care</option>
                      <option value="Alopecia & Hair Loss">Hair Loss & Alopecia</option>
                      <option value="Skin, Psoriasis & Eczema">Skin, Eczema & Psoriasis</option>
                      <option value="Asthma & Respiratory">Asthma & Sinus Allergy</option>
                      <option value="PCOS & Women Health">PCOS & Women's Care</option>
                      <option value="Other Health Issue">Other Health Issue</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#1B4332] text-white py-3 rounded-xl font-display font-bold text-xs hover:bg-[#004b57] transition-all shadow-md"
                  >
                    Submit Callback Request
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
