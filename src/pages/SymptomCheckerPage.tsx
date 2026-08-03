import React, { useState } from 'react';
import { PageType, TreatmentItem } from '../types';
import { SYMPTOMS_GROUPS } from '../data/symptomsData';
import { TREATMENTS_DATA } from '../data/treatmentsData';
import { 
  CheckCircle2, 
  HelpCircle, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Calendar,
  Activity
} from 'lucide-react';
import { Logo } from '../components/Logo';

interface SymptomCheckerPageProps {
  onNavigate: (page: PageType) => void;
  onOpenBookingModal: (type?: 'clinic' | 'online') => void;
  onSelectTreatment: (treatment: TreatmentItem) => void;
}

export const SymptomCheckerPage: React.FC<SymptomCheckerPageProps> = ({
  onNavigate,
  onOpenBookingModal,
  onSelectTreatment
}) => {
  const [activeGroup, setActiveGroup] = useState<string>(SYMPTOMS_GROUPS[0].id);
  const [selectedSymptomId, setSelectedSymptomId] = useState<string>(SYMPTOMS_GROUPS[0].symptoms[0].id);

  const currentGroup = SYMPTOMS_GROUPS.find(g => g.id === activeGroup) || SYMPTOMS_GROUPS[0];
  const selectedSymptom = currentGroup.symptoms.find(s => s.id === selectedSymptomId) || currentGroup.symptoms[0];
  const relatedTreatment = TREATMENTS_DATA.find(t => t.id === selectedSymptom.relatedTreatmentId);

  return (
    <div className="pt-32 sm:pt-36 lg:pt-40 pb-20 space-y-12 max-w-7xl mx-auto px-4 sm:px-8">
      
      {/* Banner */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 rounded-full text-xs font-semibold backdrop-blur-md mb-2">
          <Logo size="sm" showText={false} />
          <span>Interactive Symptom Guidance</span>
        </div>
        <h1 className="font-display font-bold text-3xl sm:text-5xl text-white">
          Understand How Homeopathy <br />
          <span className="text-emerald-400">Addresses Your Symptoms</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          Select your primary symptom group below to explore how classical homeopathic constitutional analysis treats the root vitality cause rather than masking symptoms with temporary chemical blocks.
        </p>
      </div>

      {/* Main Interactive Checker Box */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white p-6 sm:p-10 rounded-[2.5rem] border border-slate-200/80 shadow-lg">
        
        {/* Left Column: Category & Symptom Selector */}
        <div className="lg:col-span-5 space-y-6">
          
          <div>
            <label className="block text-xs font-bold text-[#1B4332] uppercase tracking-wider mb-2">
              1. Select Symptom Category
            </label>
            <div className="space-y-2">
              {SYMPTOMS_GROUPS.map((group) => (
                <button
                  key={group.id}
                  onClick={() => {
                    setActiveGroup(group.id);
                    setSelectedSymptomId(group.symptoms[0].id);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-2xl text-xs font-semibold flex items-center justify-between transition-all ${
                    activeGroup === group.id
                      ? 'bg-[#1B4332] text-white shadow-md'
                      : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <span>{group.category}</span>
                  <ArrowRight className="w-4 h-4 opacity-70" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#1B4332] uppercase tracking-wider mb-2">
              2. Choose Specific Symptom
            </label>
            <div className="space-y-2">
              {currentGroup.symptoms.map((symptom) => (
                <button
                  key={symptom.id}
                  onClick={() => setSelectedSymptomId(symptom.id)}
                  className={`w-full text-left p-3.5 rounded-2xl text-xs font-medium border transition-all ${
                    selectedSymptomId === symptom.id
                      ? 'border-[#006970] bg-cyan-50/60 text-[#006970] font-bold shadow-sm'
                      : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <p className="font-semibold">{symptom.label}</p>
                  <p className="text-[11px] font-normal text-slate-500 mt-0.5">{symptom.description}</p>
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: Root Cause & Homeopathic Protocol Result */}
        <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 flex flex-col justify-between space-y-6">
          
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#D8F3DC] text-[#2D6A4F] rounded-full text-xs font-semibold">
              <Sparkles className="w-4 h-4" />
              <span>Root Cause Constitutional Insight</span>
            </div>

            <h3 className="font-display font-bold text-2xl text-[#1B4332]">
              {selectedSymptom.label}
            </h3>

            <div className="p-4 bg-white rounded-2xl border border-slate-200 space-y-2">
              <span className="text-xs font-bold text-[#006970] uppercase tracking-wider block">
                How Classical Homeopathy Treats This:
              </span>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {selectedSymptom.homeopathicNote}
              </p>
            </div>

            {relatedTreatment && (
              <div className="p-4 bg-emerald-50/80 rounded-2xl border border-emerald-100 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-[#1B4332]">
                    Matched Clinical Specialty: {relatedTreatment.title}
                  </span>
                  <span className="text-xs font-bold text-[#2D6A4F]">
                    {relatedTreatment.successRate}% Recovery Rate
                  </span>
                </div>
                
                <p className="text-xs text-slate-600 leading-relaxed">
                  {relatedTreatment.shortDescription}
                </p>

                <button
                  onClick={() => onSelectTreatment(relatedTreatment)}
                  className="text-xs font-bold text-[#1B4332] underline hover:text-[#006970] flex items-center gap-1"
                >
                  <span>View Full Protocol Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>

          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => onOpenBookingModal('clinic')}
              className="flex-1 bg-[#1B4332] text-white py-3.5 px-4 rounded-2xl font-display font-bold text-xs sm:text-sm shadow-md hover:bg-[#004b57] transition-all flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 text-[#D8F3DC]" />
              <span>Book In-Clinic Visit (Bokaro)</span>
            </button>

            <button
              onClick={() => onOpenBookingModal('online')}
              className="flex-1 bg-[#006970] text-white py-3.5 px-4 rounded-2xl font-display font-bold text-xs sm:text-sm shadow-md hover:bg-[#004b57] transition-all flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#7DF4FF]" />
              <span>Book Online Consultation</span>
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
