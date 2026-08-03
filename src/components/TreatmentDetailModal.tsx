import React from 'react';
import { TreatmentItem } from '../types';
import { 
  X, 
  CheckCircle2, 
  Clock, 
  Users, 
  Award, 
  Sparkles, 
  Calendar,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

interface TreatmentDetailModalProps {
  treatment: TreatmentItem | null;
  onClose: () => void;
  onOpenBookingModal: (type?: 'clinic' | 'online') => void;
}

export const TreatmentDetailModal: React.FC<TreatmentDetailModalProps> = ({
  treatment,
  onClose,
  onOpenBookingModal
}) => {
  if (!treatment) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-slate-900/90 backdrop-blur-2xl border border-white/15 rounded-[32px] max-w-3xl w-full shadow-2xl overflow-hidden my-8 flex flex-col max-h-[90vh] text-slate-100">
        
        {/* Header with image/gradient */}
        <div className="relative bg-white/10 backdrop-blur-md border-b border-white/10 text-white p-6 sm:p-8 shrink-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/60 via-slate-900/80 to-teal-950/60 opacity-90" />
          
          <div className="relative z-10 flex items-start justify-between gap-4">
            <div className="space-y-2 max-w-xl">
              <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 font-display text-xs font-semibold tracking-wide">
                {treatment.categoryLabel}
              </span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
                {treatment.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {treatment.shortDescription}
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Metrics */}
          <div className="relative z-10 grid grid-cols-3 gap-3 mt-6 pt-4 border-t border-white/10 text-xs">
            <div>
              <span className="text-slate-400 block text-[11px]">Success Rating</span>
              <span className="font-display font-bold text-emerald-400 text-base sm:text-lg">{treatment.successRate}%</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[11px]">Patients Recovered</span>
              <span className="font-display font-bold text-teal-300 text-base sm:text-lg">{treatment.patientCount.toLocaleString()}+</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[11px]">Recovery Timeline</span>
              <span className="font-display font-bold text-cyan-300 text-xs sm:text-sm">{treatment.typicalTimeline.split(';')[0]}</span>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          
          {/* Full Description */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm mb-2">
              Clinical Overview & Root-Cause Approach
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              {treatment.fullDescription}
            </p>
          </div>

          {/* Symptoms Covered */}
          <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-3">
            <h4 className="font-display font-semibold text-emerald-400 text-xs uppercase tracking-wider">
              Common Symptoms Addressed
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
              {treatment.symptoms.map((symptom, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{symptom}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Homeopathic Advantage */}
          <div className="bg-emerald-500/10 p-5 rounded-2xl border border-emerald-500/20 space-y-3">
            <h4 className="font-display font-semibold text-emerald-300 text-xs uppercase tracking-wider flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              The Subhash Homoeo Protocol Advantage
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-200">
              {treatment.homeopathicAdvantage.map((adv, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{adv}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => {
                onClose();
                onOpenBookingModal('clinic');
              }}
              className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-3.5 px-4 rounded-2xl font-display font-bold text-sm shadow-lg shadow-emerald-500/20 hover:brightness-110 transition-all flex items-center justify-center gap-2 border border-white/20"
            >
              <Calendar className="w-4 h-4 text-emerald-100" />
              <span>Book Clinic Visit (Bokaro)</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenBookingModal('online');
              }}
              className="flex-1 bg-gradient-to-r from-teal-500 to-cyan-600 text-white py-3.5 px-4 rounded-2xl font-display font-bold text-sm shadow-lg shadow-teal-500/20 hover:brightness-110 transition-all flex items-center justify-center gap-2 border border-white/20"
            >
              <Sparkles className="w-4 h-4 text-cyan-100" />
              <span>Book Online Consultation</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
