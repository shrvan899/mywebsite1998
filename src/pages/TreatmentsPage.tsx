import React, { useState, useMemo } from 'react';
import { PageType, TreatmentItem } from '../types';
import { TREATMENTS_DATA } from '../data/treatmentsData';
import { 
  Search, 
  Filter, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Calendar,
  Activity,
  Zap,
  Wind,
  HeartHandshake,
  Smile,
  Shield
} from 'lucide-react';

import { Logo } from '../components/Logo';

interface TreatmentsPageProps {
  onNavigate: (page: PageType) => void;
  onOpenBookingModal: (type?: 'clinic' | 'online') => void;
  onSelectTreatment: (treatment: TreatmentItem) => void;
}

export const TreatmentsPage: React.FC<TreatmentsPageProps> = ({
  onNavigate,
  onOpenBookingModal,
  onSelectTreatment
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Treatments' },
    { id: 'piles', label: 'Gastrointestinal / Piles' },
    { id: 'thyroid', label: 'Thyroid & Hormonal' },
    { id: 'skin-hair', label: 'Skin & Hair Loss' },
    { id: 'respiratory', label: 'Respiratory & Allergies' },
    { id: 'womens', label: 'Women’s Health / PCOS' },
    { id: 'neuropathy', label: 'Joints & Pain' },
    { id: 'pediatric', label: 'Child Health' },
    { id: 'male', label: 'Men’s Health' }
  ];

  const filteredTreatments = useMemo(() => {
    return TREATMENTS_DATA.filter(t => {
      const matchCat = selectedCategory === 'all' || t.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchQuery = !query || 
        t.title.toLowerCase().includes(query) ||
        t.shortDescription.toLowerCase().includes(query) ||
        t.categoryLabel.toLowerCase().includes(query) ||
        t.symptoms.some(s => s.toLowerCase().includes(query));
      return matchCat && matchQuery;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="pt-32 sm:pt-36 lg:pt-40 pb-20 space-y-12 max-w-7xl mx-auto px-4 sm:px-8">
      
      {/* Header Banner */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 rounded-full text-xs font-semibold backdrop-blur-md">
          <Logo size="sm" showText={false} />
          <span>Evidence-Based Classical Homeopathy</span>
        </div>
        <h1 className="font-display font-bold text-3xl sm:text-5xl text-white">
          Our Specialized <span className="text-emerald-400">Clinical Protocols</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          Select a clinical specialty below to explore root causes, symptoms covered, constitutional homeopathic advantages, and expected recovery timelines.
        </p>
      </div>

      {/* Search & Category Filter Bar */}
      <div className="bg-white p-4 sm:p-6 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
        
        {/* Search Input */}
        <div className="relative max-w-xl mx-auto">
          <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search condition (e.g., Piles, Thyroid, Hair Loss, Asthma, PCOS, Eczema)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-slate-100 border border-slate-300 rounded-2xl text-sm font-semibold text-slate-900 placeholder-slate-500 focus:bg-white focus:border-[#1B4332] focus:ring-2 focus:ring-[#1B4332]/20 outline-none transition-all shadow-inner"
          />
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 no-scrollbar justify-start sm:justify-center">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#1B4332] text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

      </div>

      {/* Treatments Cards Grid */}
      {filteredTreatments.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTreatments.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectTreatment(item)}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#D8F3DC] text-[#2D6A4F] text-xs font-semibold">
                    {item.categoryLabel}
                  </span>
                  <span className="text-xs font-bold text-[#006970]">
                    {item.successRate}% Success
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl text-[#1B4332] group-hover:text-[#006970] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                  {item.shortDescription}
                </p>

                <div className="space-y-1.5 pt-2 border-t border-slate-100">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                    Key Symptoms Addressed:
                  </span>
                  {item.symptoms.slice(0, 3).map((sym, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2D6A4F] shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{sym}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between text-xs font-display font-bold text-[#1B4332]">
                <span>View Full Clinical Protocol</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 space-y-3">
          <p className="text-slate-600 text-sm font-medium">No specialized treatment matching "{searchQuery}".</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
            className="text-xs font-bold text-[#1B4332] underline"
          >
            Clear filters
          </button>
        </div>
      )}

      {/* Booking CTA */}
      <div className="p-8 sm:p-12 rounded-[2.5rem] bg-[#1B4332] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center sm:text-left">
          <h3 className="font-display font-bold text-2xl text-white">
            Unsure which protocol fits your exact symptoms?
          </h3>
          <p className="text-xs sm:text-sm text-emerald-100">
            Dr. Subhash conducts individual case analysis to identify your constitutional remedy.
          </p>
        </div>

        <button
          onClick={() => onOpenBookingModal()}
          className="bg-white text-[#1B4332] px-6 py-3.5 rounded-2xl font-display font-bold text-xs sm:text-sm shadow-lg hover:bg-[#D8F3DC] transition-colors shrink-0"
        >
          Book Consultation Now
        </button>
      </div>

    </div>
  );
};
