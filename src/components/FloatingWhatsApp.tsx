import React, { useState } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [userMsg, setUserMsg] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userMsg.trim()) return;
    const encoded = encodeURIComponent(`Hello Subhash Homoeo Clinic,\n${userMsg}`);
    window.open(`https://wa.me/919341872726?text=${encoded}`, '_blank');
    setUserMsg('');
    setOpen(false);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40">
      
      {/* Popover Dialogue */}
      {open && (
        <div className="mb-3 bg-slate-900/90 backdrop-blur-2xl border border-white/15 rounded-3xl shadow-2xl w-[calc(100vw-2rem)] sm:w-80 overflow-hidden animate-in slide-in-from-bottom-5 duration-200 text-slate-100">
          <div className="bg-white/10 backdrop-blur-md border-b border-white/10 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center font-bold text-sm text-emerald-300">
                SH
              </div>
              <div>
                <h5 className="font-display font-bold text-sm text-white">Subhash Homoeo Clinic</h5>
                <p className="text-[11px] text-emerald-300 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Online for Patient Support
                </p>
              </div>
            </div>

            <button 
              onClick={() => setOpen(false)}
              className="text-slate-300 hover:text-white p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-4 bg-slate-950/60 space-y-3 text-xs text-slate-300">
            <div className="bg-white/5 p-3 rounded-2xl shadow-sm border border-white/10 space-y-1">
              <p className="font-medium text-white">Dr. Subhash Clinical Desk</p>
              <p className="text-slate-300">
                Namaste! How can we assist you with your health query or appointment today?
              </p>
              <span className="text-[10px] text-slate-400 block text-right">Just now</span>
            </div>
          </div>

          <form onSubmit={handleSend} className="p-3 bg-slate-900 border-t border-white/10 flex gap-2">
            <input
              type="text"
              placeholder="Type your health query..."
              value={userMsg}
              onChange={(e) => setUserMsg(e.target.value)}
              className="flex-1 px-3 py-2 bg-white/5 border border-white/15 rounded-xl text-xs text-white placeholder-slate-400 focus:bg-white/10 focus:border-emerald-400 outline-none"
            />
            <button
              type="submit"
              className="p-2.5 bg-emerald-500 text-slate-950 font-bold rounded-xl hover:bg-emerald-400 transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}

      {/* Main Floating Trigger */}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all group relative"
        aria-label="WhatsApp Support"
      >
        <MessageCircle className="w-7 h-7 fill-current" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white flex items-center justify-center text-[9px] font-bold">
          1
        </span>
      </button>

    </div>
  );
};
