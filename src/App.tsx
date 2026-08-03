import React, { useState } from 'react';
import { PageType, TreatmentItem } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { TreatmentDetailModal } from './components/TreatmentDetailModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { TreatmentsPage } from './pages/TreatmentsPage';
import { OnlineConsultationPage } from './pages/OnlineConsultationPage';
import { SymptomCheckerPage } from './pages/SymptomCheckerPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingType, setBookingType] = useState<'clinic' | 'online'>('clinic');
  const [selectedTreatment, setSelectedTreatment] = useState<TreatmentItem | null>(null);

  const handleNavigate = (page: PageType) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBookingModal = (type: 'clinic' | 'online' = 'clinic') => {
    setBookingType(type);
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-['Inter',sans-serif] relative overflow-x-hidden">
      {/* Ambient Frosted Glass Background Light Orbs */}
      <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-600/20 rounded-full blur-[130px] pointer-events-none z-0"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-teal-600/15 rounded-full blur-[140px] pointer-events-none z-0"></div>
      <div className="fixed top-[25%] right-[5%] w-[35%] h-[40%] bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="fixed bottom-[20%] left-[5%] w-[35%] h-[35%] bg-cyan-500/10 rounded-full blur-[110px] pointer-events-none z-0"></div>

      {/* Navigation Header */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenBookingModal={handleOpenBookingModal}
      />

      {/* Main Active Page Content */}
      <main className="flex-1 relative z-10">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenBookingModal={handleOpenBookingModal}
            onSelectTreatment={(treatment) => setSelectedTreatment(treatment)}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenBookingModal={handleOpenBookingModal}
          />
        )}

        {currentPage === 'treatments' && (
          <TreatmentsPage
            onNavigate={handleNavigate}
            onOpenBookingModal={handleOpenBookingModal}
            onSelectTreatment={(treatment) => setSelectedTreatment(treatment)}
          />
        )}

        {currentPage === 'online-consultation' && (
          <OnlineConsultationPage
            onNavigate={handleNavigate}
            onOpenBookingModal={handleOpenBookingModal}
          />
        )}

        {currentPage === 'symptom-checker' && (
          <SymptomCheckerPage
            onNavigate={handleNavigate}
            onOpenBookingModal={handleOpenBookingModal}
            onSelectTreatment={(treatment) => setSelectedTreatment(treatment)}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onNavigate={handleNavigate}
            onOpenBookingModal={handleOpenBookingModal}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBookingModal={handleOpenBookingModal}
      />

      {/* Floating WhatsApp Quick Action Button */}
      <FloatingWhatsApp />

      {/* Modals */}
      <AppointmentModal
        isOpen={bookingModalOpen}
        initialType={bookingType}
        onClose={() => setBookingModalOpen(false)}
      />

      <TreatmentDetailModal
        treatment={selectedTreatment}
        onClose={() => setSelectedTreatment(null)}
        onOpenBookingModal={handleOpenBookingModal}
      />

    </div>
  );
}
