import { TreatmentItem } from '../types';

export const TREATMENTS_DATA: TreatmentItem[] = [
  {
    id: 'piles-fissures',
    title: 'Piles & Fissures Care',
    category: 'piles',
    categoryLabel: 'Gastrointestinal',
    shortDescription: 'Gentle, non-surgical homeopathic remedies for hemorrhoids, painful fissures, and chronic constipation.',
    fullDescription: 'Piles (hemorrhoids) and anal fissures are deeply uncomfortable conditions often stemming from chronic digestive sluggishness, portal congestion, and pelvic vein weakness. Dr. Subhash’s constitutional homeopathic protocol strengthens vascular tone, relieves inflammation and burning pain naturally, and regulates bowel movements without laxative dependency or invasive surgical procedures.',
    iconName: 'Activity',
    symptoms: [
      'Painful bowel movements & anal burning sensation',
      'Bleeding during or after stool pass',
      'Swelling or lumps near the anal orifice',
      'Chronic constipation or straining',
      'Itching and localized irritation'
    ],
    homeopathicAdvantage: [
      'Strictly non-surgical and painless natural recovery',
      'Strengthens venous walls to prevent future vein enlargement',
      'Restores gut motility and natural stool consistency',
      'Zero surgical risks, infection, or recovery downtime'
    ],
    typicalTimeline: '2 to 6 weeks for acute pain relief; 3 to 6 months for complete constitutional resolution',
    successRate: 97,
    patientCount: 3200,
    featured: true,
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'thyroid-disorders',
    title: 'Thyroid & Hormonal Health',
    category: 'thyroid',
    categoryLabel: 'Endocrine & Metabolic',
    shortDescription: 'Comprehensive treatment for Hypothyroidism, Hyperthyroidism, and Hashimoto’s thyroiditis.',
    fullDescription: 'Thyroid imbalances disrupt your body’s entire metabolic rhythm, causing unexplained weight changes, hair thinning, fatigue, mood swings, and temperature sensitivity. Homeopathy views the thyroid gland not as an isolated malfunctioning organ, but as part of an interconnected endocrine system. Constitutional treatment stimulates the gland naturally to optimize hormone output.',
    iconName: 'Zap',
    symptoms: [
      'Unexplained weight gain or difficulty losing weight',
      'Persistent sluggish fatigue & low morning energy',
      'Cold hands/feet, dry skin, and hair loss',
      'Irregular menstrual cycles in women',
      'Brain fog, mood swings, and anxiety'
    ],
    homeopathicAdvantage: [
      'Stimulates innate glandular self-regulation',
      'Helps reduce reliance on synthetic hormone pills over time',
      'Addresses underlying emotional stress & metabolic causes',
      'Safe for long-term use with regular TSH level monitoring'
    ],
    typicalTimeline: 'Noticeable energy improvement in 4 weeks; TSH stabilization within 3 to 6 months',
    successRate: 94,
    patientCount: 2450,
    featured: true,
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'hair-loss-scalp',
    title: 'Hair Loss & Alopecia Solutions',
    category: 'skin-hair',
    categoryLabel: 'Dermatology & Hair',
    shortDescription: 'Deep root restoration for Alopecia Areata, Male/Female pattern baldness, and severe dandruff.',
    fullDescription: 'Hair thinning and sudden hair loss (alopecia) reflect internal nutritional deficiencies, hormonal shifts (DHT sensitivity, PCOS), chronic stress, or autoimmune reactions. Our specialized hair care protocol treats hair follicle roots internally while soothing scalp inflammation to promote healthy, strong hair growth.',
    iconName: 'Sparkles',
    symptoms: [
      'Excessive hair shedding during washing or combing',
      'Patchy bald spots (Alopecia Areata)',
      'Receding hairline or crown thinning',
      'Flaky, itchy scalp or scalp psoriasis',
      'Brittle, thin hair strands'
    ],
    homeopathicAdvantage: [
      'Re-activates dormant hair follicles naturally',
      'No chemical side effects (unlike Minoxidil/Finasteride rebound)',
      'Balances stress hormones (cortisol) and androgenic triggers',
      'Nourishes scalp micro-circulation internally'
    ],
    typicalTimeline: 'Hair fall reduction in 3 to 6 weeks; new baby hair growth in 3 to 5 months',
    successRate: 92,
    patientCount: 1850,
    featured: true,
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'skin-eczema-psoriasis',
    title: 'Chronic Skin, Eczema & Psoriasis',
    category: 'skin-hair',
    categoryLabel: 'Dermatology',
    shortDescription: 'Gentle, internal blood purification & immune balance for Psoriasis, Eczema, Acne & Urticaria.',
    fullDescription: 'Skin eruptions are your immune system’s cry for help from within. Suppressing skin issues with steroid creams often drives the condition deeper into respiratory or joint issues. Homeopathy purifies the blood internally and calms hyperactive immune responses to heal skin naturally without harsh ointments.',
    iconName: 'ShieldCheck',
    symptoms: [
      'Silvery scaling patches or red inflamed plaques',
      'Intense skin itching, dryness, and skin cracking',
      'Recurrent hives (urticaria) or allergic rash breakouts',
      'Persistent hormonal facial acne and scarring',
      'Fungal skin infections & hyperpigmentation'
    ],
    homeopathicAdvantage: [
      'Heals from the inside out without topical steroid dependence',
      'Calms overactive autoimmune triggers in skin cells',
      'Prevents seasonal skin allergy relapses',
      'Restores smooth, natural skin texture'
    ],
    typicalTimeline: 'Itching relief in 10-14 days; skin plaque clearing in 3 to 6 months',
    successRate: 93,
    patientCount: 2100,
    featured: false,
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'respiratory-asthma-allergies',
    title: 'Respiratory, Asthma & Allergy Care',
    category: 'respiratory',
    categoryLabel: 'Respiratory System',
    shortDescription: 'Immunity building for Chronic Asthma, Allergic Rhinitis, Bronchitis & Sinusitis.',
    fullDescription: 'Seasonal weather shifts or pollution shouldn’t force you to rely indefinitely on inhalers and antihistamines. Homeopathy desensitizes your respiratory tract to common environmental allergens (dust, pollen, cold air) and strengthens lung immunity naturally.',
    iconName: 'Wind',
    symptoms: [
      'Frequent morning sneezing fits & runny nose',
      'Wheezing, chest tightness, and shortness of breath',
      'Chronic sinus pressure & frontal headaches',
      'Persistent dry or phlegmy cough',
      'Dust, pollen, and cold weather hypersensitivity'
    ],
    homeopathicAdvantage: [
      'Gradually reduces dependence on inhalers & anti-allergy pills',
      'Builds innate respiratory mucosal immunity',
      'Non-sedating natural remedies with no drowsiness',
      'Safe for young children and elderly patients'
    ],
    typicalTimeline: 'Attack frequency reduces in 2 to 4 weeks; long-term desensitization in 4 to 8 months',
    successRate: 95,
    patientCount: 1980,
    featured: true,
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'womens-pcos-fibroids',
    title: 'PCOS, Fibroids & Menstrual Wellness',
    category: 'womens',
    categoryLabel: "Women's Health",
    shortDescription: 'Hormonal equilibrium for PCOS/PCOD, Uterine Fibroids, Ovarian Cysts & Menopause.',
    fullDescription: 'Hormonal health is vital to a woman’s physical and emotional well-being. Homeopathy offers safe, individual-centric constitutional treatment for polycystic ovarian syndrome (PCOS), painful heavy periods, irregular cycles, and uterine fibroids without hormone replacement therapy (HRT) or surgery.',
    iconName: 'HeartHandshake',
    symptoms: [
      'Irregular, delayed, or missed menstrual periods',
      'Facial hair growth (hirsutism) & hormonal acne',
      'Severe menstrual cramps (dysmenorrhea) & heavy bleeding',
      'Pelvic pain & mood swings before cycles',
      'Difficulty conceiving due to ovulatory imbalance'
    ],
    homeopathicAdvantage: [
      'Dissolves ovarian cysts & fibroids naturally',
      'Restores regular monthly ovulatory cycles',
      'No synthetic hormones or contraceptive pill side effects',
      'Enhances natural fertility & reproductive health'
    ],
    typicalTimeline: 'Cycle regularity improvements in 2 to 3 months; cyst shrinkage in 4 to 6 months',
    successRate: 94,
    patientCount: 1750,
    featured: false,
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'arthritis-joint-pain',
    title: 'Arthritis & Musculoskeletal Pain',
    category: 'neuropathy',
    categoryLabel: 'Orthopedics & Rheumatology',
    shortDescription: 'Relief for Osteoarthritis, Rheumatoid Arthritis, Sciatica, Cervical Spondylosis & Gout.',
    fullDescription: 'Joint pain, stiffness, and sciatica nerve discomfort severely restrict your mobility and independence. Homeopathy reduces synovial membrane inflammation, halts cartilage degeneration, and regulates uric acid levels naturally, offering long-term mobility without stomach-irritating painkillers.',
    iconName: 'Activity',
    symptoms: [
      'Morning joint stiffness lasting more than 30 minutes',
      'Swelling, redness, and heat in knee, hand, or toe joints',
      'Shooting nerve pain down the leg (Sciatica)',
      'Neck stiffness & arm numbness (Cervical Spondylosis)',
      'High uric acid & sudden big toe joint throbbing'
    ],
    homeopathicAdvantage: [
      'Reduces joint inflammation without kidney/stomach damage',
      'Protects cartilage health & improves flexibility',
      'Reduces reliance on strong NSAID painkillers',
      'Promotes active, pain-free daily movement'
    ],
    typicalTimeline: 'Pain and morning stiffness ease in 2 to 3 weeks; structural joint comfort in 3 to 6 months',
    successRate: 91,
    patientCount: 1620,
    featured: false,
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'child-immunity-growth',
    title: 'Child Immunity & Pediatric Care',
    category: 'pediatric',
    categoryLabel: 'Pediatric Health',
    shortDescription: 'Gentle, sweet-tasting remedies for frequent colds, enlarged tonsils, bedwetting & growth delays.',
    fullDescription: 'Children respond remarkably well to homeopathy. Because remedies are non-toxic, sweet to taste, and gentle, children take them effortlessly. We treat recurrent tonsillitis, adenoids, poor appetite, teething trouble, and developmental growth concerns naturally.',
    iconName: 'Smile',
    symptoms: [
      'Frequent colds, throat infections, and enlarged tonsils',
      'Mouth breathing & snoring due to swollen adenoids',
      'Poor appetite & low weight gain',
      'Bedwetting (enuresis) in older children',
      'Teething irritability and stomach upsets'
    ],
    homeopathicAdvantage: [
      'Prevents repeated antibiotic cycles for throat & ear infections',
      'Avoids surgical tonsil/adenoid removal in majority cases',
      'Sweet pills loved by infants and toddlers',
      'Builds strong innate childhood immunity'
    ],
    typicalTimeline: 'Acute infection relief in 2 to 5 days; recurrent infection prevention in 3 to 5 months',
    successRate: 96,
    patientCount: 1400,
    featured: false,
    image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'male-vitality-health',
    title: 'Male Health & Vitality Care',
    category: 'male',
    categoryLabel: 'Men’s Health',
    shortDescription: 'Confidential constitutional care for erectile dysfunction, premature ejaculation & prostate health.',
    fullDescription: 'Men’s health issues are frequently compounded by performance anxiety, vascular tightness, hormonal drop, and work stress. Dr. Subhash provides compassionate, strictly confidential consultations focusing on nervous system equilibrium, pelvic vascular flow, and Benign Prostatic Hyperplasia (BPH) management.',
    iconName: 'Shield',
    symptoms: [
      'Erectile weakness or performance anxiety',
      'Premature ejaculation & lack of stamina',
      'Frequent nocturnal urination & weak stream (Prostate/BPH)',
      'Low testosterone symptoms & muscle fatigue',
      'High stress & nervous exhaustion'
    ],
    homeopathicAdvantage: [
      '100% confidential and dignified doctor consultation',
      'Addresses underlying stress & vascular flow root causes',
      'No cardiovascular risks (unlike conventional blue pills)',
      'Restores overall physical stamina and mental confidence'
    ],
    typicalTimeline: 'Stamina and confidence gains in 3 to 4 weeks; urinary flow normalization in 2 to 4 months',
    successRate: 93,
    patientCount: 1250,
    featured: false,
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80'
  }
];
