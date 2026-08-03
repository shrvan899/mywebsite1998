export interface SymptomGroup {
  id: string;
  category: string;
  symptoms: {
    id: string;
    label: string;
    description: string;
    relatedTreatmentId: string;
    homeopathicNote: string;
  }[];
}

export const SYMPTOMS_GROUPS: SymptomGroup[] = [
  {
    id: 'digestive',
    category: 'Gastrointestinal & Anorectal',
    symptoms: [
      {
        id: 'sym-piles',
        label: 'Painful Piles / Anal Burning / Bleeding',
        description: 'Swollen veins or burning sensation during or after passing stool',
        relatedTreatmentId: 'piles-fissures',
        homeopathicNote: 'Homeopathy targets portal vein congestion and digestive sluggishness, offering painless non-surgical healing.'
      },
      {
        id: 'sym-constipation',
        label: 'Chronic Constipation & Hard Stool',
        description: 'Infrequent bowel movements, straining, or dry intestinal passage',
        relatedTreatmentId: 'piles-fissures',
        homeopathicNote: 'Re-establishes natural peristaltic rhythm without causing laxative dependency.'
      },
      {
        id: 'sym-acidity',
        label: 'Acid Reflux, Bloating & GERD',
        description: 'Heartburn, sour belching, chest discomfort after meals',
        relatedTreatmentId: 'piles-fissures',
        homeopathicNote: 'Normalizes stomach acid production and digestive enzyme secretion naturally.'
      }
    ]
  },
  {
    id: 'endocrine',
    category: 'Thyroid & Hormonal Imbalance',
    symptoms: [
      {
        id: 'sym-thyroid-fatigue',
        label: 'Hypothyroidism (High TSH, Weight Gain)',
        description: 'Constant sluggishness, unexplained weight gain, feeling excessively cold',
        relatedTreatmentId: 'thyroid-disorders',
        homeopathicNote: 'Gently stimulates the thyroid gland to restore metabolic balance and energy.'
      },
      {
        id: 'sym-pcos-periods',
        label: 'Irregular Periods & PCOS/PCOD',
        description: 'Delayed cycles, facial acne, hirsutism, or ovarian cysts',
        relatedTreatmentId: 'womens-pcos-fibroids',
        homeopathicNote: 'Balances pituitary-ovarian axis to promote regular natural ovulation.'
      }
    ]
  },
  {
    id: 'skin-hair',
    category: 'Skin & Scalp Health',
    symptoms: [
      {
        id: 'sym-hairfall',
        label: 'Excessive Hair Loss / Circular Bald Patches',
        description: 'Hair thinning, Alopecia Areata patches, or scalp itching',
        relatedTreatmentId: 'hair-loss-scalp',
        homeopathicNote: 'Nourishes micro-vascular hair roots and calms autoimmune follicle attacks.'
      },
      {
        id: 'sym-psoriasis-eczema',
        label: 'Skin Scaling, Eczema & Itching Rash',
        description: 'Red patches with silver scales, dry skin cracking, hives',
        relatedTreatmentId: 'skin-eczema-psoriasis',
        homeopathicNote: 'Cleanses toxins internally without suppressing skin through topical steroids.'
      }
    ]
  },
  {
    id: 'respiratory-joint',
    category: 'Respiratory & Joint Pain',
    symptoms: [
      {
        id: 'sym-asthma-allergy',
        label: 'Allergic Rhinitis, Sneezing & Wheezing Asthma',
        description: 'Morning sneezing fits, sinus pressure, chest tightness in cold air',
        relatedTreatmentId: 'respiratory-asthma-allergies',
        homeopathicNote: 'Desensitizes airway mucosa to allergens, building innate lung immunity.'
      },
      {
        id: 'sym-joint-knee-pain',
        label: 'Arthritis, Knee Pain & Sciatica',
        description: 'Morning stiffness, swollen joints, shooting nerve pain down the leg',
        relatedTreatmentId: 'arthritis-joint-pain',
        homeopathicNote: 'Reduces synovial membrane inflammation and maintains cartilage flexibility.'
      }
    ]
  }
];
