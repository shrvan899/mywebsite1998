import React, { useState } from 'react';
import { AppointmentFormData } from '../types';
import { 
  X, 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  MessageCircle, 
  Sparkles,
  ShieldCheck,
  Building2,
  Video
} from 'lucide-react';

interface AppointmentModalProps {
  isOpen: boolean;
  initialType?: 'clinic' | 'online';
  onClose: () => void;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  initialType = 'clinic',
  onClose
}) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [formData, setFormData] = useState<AppointmentFormData>({
    consultationType: initialType,
    patientName: '',
    phone: '',
    email: '',
    age: '',
    gender: 'male',
    city: '',
    conditionCategory: 'Piles & Fissures Care',
    symptomDetails: '',
    preferredDate: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    preferredTimeSlot: '11:00 AM - 12:00 PM'
  });

  const [bookingRef, setBookingRef] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = 'SHC-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(ref);
    setStep('success');
  };

  const whatsappText = encodeURIComponent(
    `Hello Dr. Subhash Clinic,\nI have registered an appointment booking request.\n*Ref Code:* ${bookingRef}\n*Name:* ${formData.patientName}\n*Type:* ${formData.consultationType === 'clinic' ? 'In-Clinic Visit' : 'Online Video Consultation'}\n*Date:* ${formData.preferredDate}\n*Slot:* ${formData.preferredTimeSlot}\n*Condition:* ${formData.conditionCategory}\n*City:* ${formData.city || 'Bokaro'}`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-slate-900/90 backdrop-blur-2xl border border-white/15 rounded-[32px] max-w-2xl w-full shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col text-slate-100">
        
        {/* Modal Header */}
        <div className="bg-white/10 backdrop-blur-md border-b border-white/10 text-white p-6 relative flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-300">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-white">
                {step === 'form' ? 'Schedule a Consultation' : 'Appointment Confirmed!'}
              </h3>
              <p className="text-xs text-emerald-300/80">
                {step === 'form' ? 'Choose In-Clinic Visit or Online Consultation' : 'Your consultation slot has been reserved'}
              </p>
            </div>
          </div>

          <button 
            onClick={onClose}
            className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {step === 'form' ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Type Switcher */}
              <div className="grid grid-cols-2 gap-3 p-1.5 bg-white/5 border border-white/10 rounded-2xl">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, consultationType: 'clinic' })}
                  className={`py-3 px-4 rounded-xl font-display text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all ${
                    formData.consultationType === 'clinic'
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/20 border border-white/20'
                      : 'text-slate-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Building2 className="w-4 h-4 text-emerald-200" />
                  <span>In-Clinic Visit (Bokaro)</span>
                </button>

                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, consultationType: 'online' })}
                  className={`py-3 px-4 rounded-xl font-display text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all ${
                    formData.consultationType === 'online'
                      ? 'bg-gradient-to-r from-teal-500 to-cyan-600 text-white shadow-lg shadow-teal-500/20 border border-white/20'
                      : 'text-slate-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Video className="w-4 h-4 text-cyan-200" />
                  <span>Online Consultation</span>
                </button>
              </div>

              {/* Consultation Context Banner */}
              <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-200 flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>
                  {formData.consultationType === 'clinic' 
                    ? 'Visit Dr. Subhash at Laxmi Market, Sector-4, Bokaro Steel City.'
                    : 'Get prescribed medicines delivered to your home anywhere in India via SpeedPost/Courier.'}
                </span>
              </div>

              {/* Personal Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Patient Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Kumar"
                      value={formData.patientName}
                      onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 bg-white/5 border border-white/15 rounded-xl text-sm text-white placeholder-slate-400 focus:bg-white/10 focus:border-emerald-400 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Phone Number (WhatsApp) *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 bg-white/5 border border-white/15 rounded-xl text-sm text-white placeholder-slate-400 focus:bg-white/10 focus:border-emerald-400 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Age & Gender *
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="number"
                      required
                      placeholder="Age (e.g. 34)"
                      value={formData.age}
                      onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                      className="w-full px-3 py-2.5 bg-white/5 border border-white/15 rounded-xl text-sm text-white placeholder-slate-400 focus:bg-white/10 focus:border-emerald-400 outline-none transition-all"
                    />
                    <select
                      value={formData.gender}
                      onChange={(e) => setFormData({ ...formData, gender: e.target.value as any })}
                      className="w-full px-3 py-2.5 bg-slate-900 border border-white/15 rounded-xl text-sm text-white focus:bg-slate-800 focus:border-emerald-400 outline-none transition-all"
                    >
                      <option value="male" className="bg-slate-900 text-white">Male</option>
                      <option value="female" className="bg-slate-900 text-white">Female</option>
                      <option value="other" className="bg-slate-900 text-white">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    City / Location *
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Bokaro / Patna / Delhi"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 bg-white/5 border border-white/15 rounded-xl text-sm text-white placeholder-slate-400 focus:bg-white/10 focus:border-emerald-400 outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Condition Category */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Health Concern / Specialization Category *
                </label>
                <select
                  value={formData.conditionCategory}
                  onChange={(e) => setFormData({ ...formData, conditionCategory: e.target.value })}
                  className="w-full px-3 py-2.5 bg-slate-900 border border-white/15 rounded-xl text-sm text-white focus:bg-slate-800 focus:border-emerald-400 outline-none transition-all"
                >
                  <option value="Piles & Fissures Care" className="bg-slate-900 text-white">Piles, Hemorrhoids & Anal Fissure</option>
                  <option value="Thyroid & Hormonal Health" className="bg-slate-900 text-white">Hypothyroidism / Hyperthyroidism / Thyroiditis</option>
                  <option value="Alopecia & Hair Loss" className="bg-slate-900 text-white">Alopecia, Hair Loss & Scalp Health</option>
                  <option value="Skin, Psoriasis & Eczema" className="bg-slate-900 text-white">Eczema, Psoriasis, Acne & Skin Allergy</option>
                  <option value="Asthma & Respiratory" className="bg-slate-900 text-white">Asthma, Allergic Rhinitis & Sinusitis</option>
                  <option value="PCOS & Women Health" className="bg-slate-900 text-white">PCOS, Ovarian Cysts & Menstrual Issues</option>
                  <option value="Arthritis & Sciatica Pain" className="bg-slate-900 text-white">Joint Pain, Arthritis & Sciatica</option>
                  <option value="Child Immunity & Growth" className="bg-slate-900 text-white">Child Health & Recurrent Tonsillitis</option>
                  <option value="General Consultation" className="bg-slate-900 text-white">Other Health Concern</option>
                </select>
              </div>

              {/* Date and Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    required
                    min={new Date().toISOString().split('T')[0]}
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-3 py-2.5 bg-white/5 border border-white/15 rounded-xl text-sm text-white placeholder-slate-400 focus:bg-white/10 focus:border-emerald-400 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Preferred Time Slot *
                  </label>
                  <select
                    value={formData.preferredTimeSlot}
                    onChange={(e) => setFormData({ ...formData, preferredTimeSlot: e.target.value })}
                    className="w-full px-3 py-2.5 bg-slate-900 border border-white/15 rounded-xl text-sm text-white focus:bg-slate-800 focus:border-emerald-400 outline-none transition-all"
                  >
                    <option value="10:30 AM - 11:30 AM" className="bg-slate-900 text-white">10:30 AM - 11:30 AM</option>
                    <option value="11:30 AM - 12:30 PM" className="bg-slate-900 text-white">11:30 AM - 12:30 PM</option>
                    <option value="04:00 PM - 05:00 PM" className="bg-slate-900 text-white">04:00 PM - 05:00 PM</option>
                    <option value="05:30 PM - 06:30 PM" className="bg-slate-900 text-white">05:30 PM - 06:30 PM</option>
                    <option value="07:00 PM - 08:00 PM" className="bg-slate-900 text-white">07:00 PM - 08:00 PM</option>
                  </select>
                </div>
              </div>

              {/* Symptom Description */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Symptoms & Medical History Details (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe your symptoms, how long you've experienced them, or any past treatments..."
                  value={formData.symptomDetails}
                  onChange={(e) => setFormData({ ...formData, symptomDetails: e.target.value })}
                  className="w-full p-3 bg-white/5 border border-white/15 rounded-xl text-sm text-white placeholder-slate-400 focus:bg-white/10 focus:border-emerald-400 outline-none transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-3.5 rounded-2xl font-display font-bold text-sm shadow-lg shadow-emerald-500/20 hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2 border border-white/20"
              >
                <Sparkles className="w-4 h-4 text-emerald-100" />
                <span>Confirm Appointment Booking</span>
              </button>
            </form>
          ) : (
            /* Success View */
            <div className="text-center py-6 space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="inline-block px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 font-mono font-bold text-sm rounded-full mb-2">
                  Booking Ref: {bookingRef}
                </span>
                <h4 className="font-display font-bold text-2xl text-white">
                  Appointment Request Received!
                </h4>
                <p className="text-sm text-slate-300 max-w-md mx-auto mt-2">
                  Thank you, <span className="font-semibold text-white">{formData.patientName}</span>. Your {formData.consultationType === 'clinic' ? 'In-Clinic' : 'Online'} consultation slot for <span className="font-semibold text-white">{formData.preferredDate}</span> ({formData.preferredTimeSlot}) has been registered.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-left text-xs space-y-2 text-slate-200 max-w-md mx-auto">
                <div className="flex justify-between border-b border-white/10 pb-1.5">
                  <span className="text-slate-400">Consultation Mode:</span>
                  <span className="font-semibold">{formData.consultationType === 'clinic' ? 'In-Clinic (Bokaro)' : 'Online Video/Voice'}</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-1.5">
                  <span className="text-slate-400">Condition:</span>
                  <span className="font-semibold">{formData.conditionCategory}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Patient Contact:</span>
                  <span className="font-semibold">{formData.phone} ({formData.city || 'Bokaro'})</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 max-w-md mx-auto pt-2">
                <a
                  href={`https://wa.me/919341872726?text=${whatsappText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-600/30 border border-emerald-500/40 text-emerald-200 py-3.5 px-4 rounded-2xl font-display font-bold text-sm shadow-md hover:bg-emerald-600/50 transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Connect Directly on WhatsApp</span>
                </a>

                <button
                  onClick={() => {
                    setStep('form');
                    onClose();
                  }}
                  className="w-full bg-white/10 hover:bg-white/20 text-white py-3 rounded-2xl font-display font-semibold text-sm transition-colors border border-white/15"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
