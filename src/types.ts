export type PageType = 
  | 'home' 
  | 'about' 
  | 'treatments' 
  | 'online-consultation' 
  | 'symptom-checker' 
  | 'contact';

export interface TreatmentItem {
  id: string;
  title: string;
  category: 'piles' | 'thyroid' | 'skin-hair' | 'respiratory' | 'womens' | 'neuropathy' | 'pediatric' | 'male' | 'general';
  categoryLabel: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string; // Lucide icon name representation
  symptoms: string[];
  homeopathicAdvantage: string[];
  typicalTimeline: string;
  successRate: number; // e.g. 96
  patientCount: number;
  featured?: boolean;
  image?: string;
}

export interface Testimonial {
  id: string;
  patientName: string;
  location: string;
  age: number;
  condition: string;
  treatmentDuration: string;
  story: string;
  rating: number;
  consultationType: 'In-Clinic' | 'Online Consultation';
  date: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'medicines' | 'safety' | 'online';
}

export interface AppointmentFormData {
  consultationType: 'clinic' | 'online';
  patientName: string;
  phone: string;
  email: string;
  age: string;
  gender: 'male' | 'female' | 'other';
  city: string;
  conditionCategory: string;
  symptomDetails: string;
  preferredDate: string;
  preferredTimeSlot: string;
}

export interface ShippingStatus {
  orderId: string;
  patientName: string;
  destinationCity: string;
  currentStep: number; // 1 to 4
  courierPartner: string;
  trackingNumber: string;
  estimatedDelivery: string;
  updates: {
    time: string;
    title: string;
    description: string;
  }[];
}
