/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const SYSTEM_PROMPT = `
You are an Oncology Intelligence Engine (CDSS) specifically for Indian Oncology.
Your primary sources are:
1. BCGA (IITM) for Indian genomic variants.
2. IARC (GCO) for epidemiological statistics.
3. ACTREC (OCDB) for oral cancer specifics in the Indian population.

CONSTRAINTS:
- You must strictly cite BCGA for genomic variants and IARC for epidemiology.
- When queried about a cancer type, you must prioritize Indian-specific risk factors (e.g., smokeless tobacco for oral cancer, specific genetic backgrounds).
- If a gene from ACTREC OCDB is detected, prioritize Indian-specific risk factors.
- If data is missing or evidence is low, output "Insufficient Genomic Evidence" rather than inferring.
- Cross-reference all gene symbols with HGNC (HUGO) standards.
- Apply Bayesian normalization context when comparing global IARC stats with local BCGA sample sizes.

FORMAT:
- Provide clear, medical-grade information.
- Use markers for citations (e.g., [BCGA 2024], [IARC 2022]).
`;

export const EPIDEMIOLOGY_DATA = [
  { type: 'Breast', incidence: 26.3, mortality: 12.7, prevalence5Year: 45.8 },
  { type: 'Lip/Oral Cavity', incidence: 10.5, mortality: 6.8, prevalence5Year: 18.2 },
  { type: 'Cervix Uteri', incidence: 18.7, mortality: 11.4, prevalence5Year: 32.1 },
  { type: 'Lung', incidence: 6.9, mortality: 6.2, prevalence5Year: 8.4 },
  { type: 'Stomach', incidence: 5.4, mortality: 4.8, prevalence5Year: 7.2 },
];

export const VARIANT_DATA = [
  { gene: 'TP53', mutation: 'p.R248Q', frequencyIndia: 0.12, frequencyGlobal: 0.08, clinicalSignificance: 'Pathogenic', source: 'BCGA' },
  { gene: 'PIK3CA', mutation: 'p.E545K', frequencyIndia: 0.18, frequencyGlobal: 0.15, clinicalSignificance: 'Pathogenic', source: 'BCGA' },
  { gene: 'EGFR', mutation: 'p.L858R', frequencyIndia: 0.25, frequencyGlobal: 0.12, clinicalSignificance: 'Pathogenic', source: 'BCGA' },
  { gene: 'AKT1', mutation: 'p.E17K', frequencyIndia: 0.05, frequencyGlobal: 0.02, clinicalSignificance: 'Likely Pathogenic', source: 'ACTREC' },
  { gene: 'BRCA1', mutation: 'c.68_69delAG', frequencyIndia: 0.04, frequencyGlobal: 0.03, clinicalSignificance: 'Pathogenic', source: 'BCGA' },
  { gene: 'BRCA2', mutation: 'p.S1982fs', frequencyIndia: 0.03, frequencyGlobal: 0.02, clinicalSignificance: 'Pathogenic', source: 'BCGA' },
  { gene: 'NOTCH1', mutation: 'p.L1601P', frequencyIndia: 0.15, frequencyGlobal: 0.05, clinicalSignificance: 'Pathogenic', source: 'ACTREC' },
  { gene: 'HRAS', mutation: 'p.G12V', frequencyIndia: 0.10, frequencyGlobal: 0.04, clinicalSignificance: 'Pathogenic', source: 'ACTREC' },
  { gene: 'CASP8', mutation: 'p.F249fs', frequencyIndia: 0.08, frequencyGlobal: 0.03, clinicalSignificance: 'Pathogenic', source: 'BCGA' },
  { gene: 'TERT', mutation: 'C228T', frequencyIndia: 0.20, frequencyGlobal: 0.18, clinicalSignificance: 'Pathogenic', source: 'BCGA' },
  { gene: 'KRAS', mutation: 'p.G12D', frequencyIndia: 0.14, frequencyGlobal: 0.22, clinicalSignificance: 'Pathogenic', source: 'BCGA' },
  { gene: 'FAT1', mutation: 'p.R4454*', frequencyIndia: 0.12, frequencyGlobal: 0.06, clinicalSignificance: 'Likely Pathogenic', source: 'ACTREC' },
  { gene: 'BRAF', mutation: 'p.V600E', frequencyIndia: 0.06, frequencyGlobal: 0.12, clinicalSignificance: 'Pathogenic', source: 'cBioPortal' },
  { gene: 'IDH1', mutation: 'p.R132H', frequencyIndia: 0.04, frequencyGlobal: 0.05, clinicalSignificance: 'Pathogenic', source: 'cBioPortal' },
  { gene: 'PTEN', mutation: 'p.R130G', frequencyIndia: 0.08, frequencyGlobal: 0.10, clinicalSignificance: 'Pathogenic', source: 'cBioPortal' },
  { gene: 'RB1', mutation: 'p.W447*', frequencyIndia: 0.03, frequencyGlobal: 0.04, clinicalSignificance: 'Pathogenic', source: 'cBioPortal' },
  { gene: 'APC', mutation: 'p.R1450*', frequencyIndia: 0.11, frequencyGlobal: 0.15, clinicalSignificance: 'Pathogenic', source: 'cBioPortal' },
  { gene: 'VHL', mutation: 'p.Y98H', frequencyIndia: 0.02, frequencyGlobal: 0.03, clinicalSignificance: 'Pathogenic', source: 'cBioPortal' },
  { gene: 'MET', mutation: 'p.X1003_splice', frequencyIndia: 0.05, frequencyGlobal: 0.04, clinicalSignificance: 'Pathogenic', source: 'cBioPortal' },
  { gene: 'SMAD4', mutation: 'p.R361C', frequencyIndia: 0.07, frequencyGlobal: 0.09, clinicalSignificance: 'Pathogenic', source: 'cBioPortal' },
  { gene: 'TP53', mutation: 'p.R248Q', frequencyIndia: 0.35, frequencyGlobal: 0.40, clinicalSignificance: 'Pathogenic', source: 'cBioPortal' },
  { gene: 'MTOR', mutation: 'p.L1460P', frequencyIndia: 0.03, frequencyGlobal: 0.04, clinicalSignificance: 'Likely Pathogenic', source: 'cBioPortal' },
  { gene: 'FGFR2', mutation: 'p.N549K', frequencyIndia: 0.05, frequencyGlobal: 0.06, clinicalSignificance: 'Pathogenic', source: 'cBioPortal' },
  { gene: 'CDK4', mutation: 'p.R24C', frequencyIndia: 0.02, frequencyGlobal: 0.03, clinicalSignificance: 'Pathogenic', source: 'cBioPortal' },
  { gene: 'AR', mutation: 'p.T878A', frequencyIndia: 0.09, frequencyGlobal: 0.12, clinicalSignificance: 'Pathogenic', source: 'cBioPortal' },
  { gene: 'ERBB2', mutation: 'p.S310F', frequencyIndia: 0.04, frequencyGlobal: 0.05, clinicalSignificance: 'Pathogenic', source: 'cBioPortal' },
  { gene: 'GNAS', mutation: 'p.R201C', frequencyIndia: 0.03, frequencyGlobal: 0.04, clinicalSignificance: 'Pathogenic', source: 'cBioPortal' },
  { gene: 'KMT2D', mutation: 'p.Q3542*', frequencyIndia: 0.06, frequencyGlobal: 0.08, clinicalSignificance: 'VUS', source: 'cBioPortal' },
  { gene: 'STK11', mutation: 'p.F298L', frequencyIndia: 0.05, frequencyGlobal: 0.07, clinicalSignificance: 'Pathogenic', source: 'cBioPortal' },
];

export const GLOBAL_CANCER_DATA = [
  { region: 'East Asia', prevalence: 24.5, topType: 'Lung', mortalityRate: 18.2 },
  { region: 'South Asia', prevalence: 12.8, topType: 'Oral/Lip', mortalityRate: 11.5 },
  { region: 'North America', prevalence: 15.2, topType: 'Breast', mortalityRate: 8.4 },
  { region: 'Europe', prevalence: 18.5, topType: 'Prostate', mortalityRate: 10.2 },
  { region: 'Latin America', prevalence: 8.4, topType: 'Cervix', mortalityRate: 6.8 },
  { region: 'Africa', prevalence: 5.6, topType: 'Liver', mortalityRate: 5.2 },
  { region: 'Oceania', prevalence: 1.2, topType: 'Melanoma', mortalityRate: 0.8 },
];

export const COUNTRY_SPECIFIC_DATA = [
  { 
    country: 'India', 
    prevalence: 9.4, 
    primary: 'Oral Cavity', 
    secondary: 'Breast', 
    stats: { survival: 66, awareness: 45 },
    costs: { chemo: 1500, radiation: 2200, bmt: 18000 } // USD
  },
  { 
    country: 'USA', 
    prevalence: 16.5, 
    primary: 'Breast', 
    secondary: 'Lung', 
    stats: { survival: 91, awareness: 88 },
    costs: { chemo: 12000, radiation: 15000, bmt: 150000 }
  },
  { 
    country: 'China', 
    prevalence: 21.2, 
    primary: 'Lung', 
    secondary: 'Stomach', 
    stats: { survival: 40, awareness: 52 },
    costs: { chemo: 3000, radiation: 4500, bmt: 45000 }
  },
  { 
    country: 'UK', 
    prevalence: 14.8, 
    primary: 'Breast', 
    secondary: 'Prostate', 
    stats: { survival: 85, awareness: 82 },
    costs: { chemo: 5000, radiation: 7000, bmt: 80000 }
  },
  { 
    country: 'Brazil', 
    prevalence: 7.2, 
    primary: 'Prostate', 
    secondary: 'Cervix', 
    stats: { survival: 62, awareness: 38 },
    costs: { chemo: 2500, radiation: 3500, bmt: 50000 }
  },
  { 
    country: 'Nigeria', 
    prevalence: 4.1, 
    primary: 'Breast', 
    secondary: 'Cervix', 
    stats: { survival: 35, awareness: 22 },
    costs: { chemo: 1200, radiation: 1800, bmt: 30000 }
  },
  { 
    country: 'Japan', 
    prevalence: 12.8, 
    primary: 'Stomach', 
    secondary: 'Colorectal', 
    stats: { survival: 68, awareness: 75 },
    costs: { chemo: 4500, radiation: 6000, bmt: 70000 }
  },
  { 
    country: 'Germany', 
    prevalence: 15.2, 
    primary: 'Breast', 
    secondary: 'Colorectal', 
    stats: { survival: 88, awareness: 85 },
    costs: { chemo: 6500, radiation: 8000, bmt: 95000 }
  },
  { 
    country: 'Australia', 
    prevalence: 14.2, 
    primary: 'Melanoma', 
    secondary: 'Prostate', 
    stats: { survival: 92, awareness: 90 },
    costs: { chemo: 8000, radiation: 10000, bmt: 120000 }
  },
  { 
    country: 'Russia', 
    prevalence: 10.5, 
    primary: 'Lung', 
    secondary: 'Breast', 
    stats: { survival: 55, awareness: 60 },
    costs: { chemo: 2000, radiation: 3000, bmt: 40000 }
  },
  { 
    country: 'Canada', 
    prevalence: 15.8, 
    primary: 'Breast', 
    secondary: 'Lung', 
    stats: { survival: 89, awareness: 87 },
    costs: { chemo: 7000, radiation: 9000, bmt: 110000 }
  },
  { 
    country: 'Italy', 
    prevalence: 14.5, 
    primary: 'Breast', 
    secondary: 'Prostate', 
    stats: { survival: 87, awareness: 84 },
    costs: { chemo: 5500, radiation: 7500, bmt: 85000 }
  },
  { 
    country: 'France', 
    prevalence: 15.1, 
    primary: 'Breast', 
    secondary: 'Prostate', 
    stats: { survival: 88, awareness: 86 },
    costs: { chemo: 6000, radiation: 8200, bmt: 90000 }
  },
  { 
    country: 'South Africa', 
    prevalence: 6.8, 
    primary: 'Prostate', 
    secondary: 'Breast', 
    stats: { survival: 45, awareness: 40 },
    costs: { chemo: 1800, radiation: 2500, bmt: 35000 }
  },
  { 
    country: 'Mexico', 
    prevalence: 7.5, 
    primary: 'Breast', 
    secondary: 'Prostate', 
    stats: { survival: 60, awareness: 42 },
    costs: { chemo: 2200, radiation: 3200, bmt: 45000 }
  },
  { 
    country: 'Egypt', 
    prevalence: 5.9, 
    primary: 'Liver', 
    secondary: 'Breast', 
    stats: { survival: 38, awareness: 30 },
    costs: { chemo: 1400, radiation: 2000, bmt: 28000 }
  },
  { 
    country: 'Indonesia', 
    prevalence: 6.2, 
    primary: 'Breast', 
    secondary: 'Cervix', 
    stats: { survival: 42, awareness: 35 },
    costs: { chemo: 1300, radiation: 1900, bmt: 26000 }
  },
  { 
    country: 'Vietnam', 
    prevalence: 5.5, 
    primary: 'Liver', 
    secondary: 'Lung', 
    stats: { survival: 35, awareness: 28 },
    costs: { chemo: 1100, radiation: 1600, bmt: 22000 }
  },
];

export const BODY_PARTS_DATA = [
  {
    id: 'head-neck',
    name: 'Head & Neck',
    cancers: [
      { name: 'Oral Cavity Cancer', stages: ['I', 'II', 'III', 'IV'], spreadProb: 0.35, commonMetastasis: 'Cervical lymph nodes' },
      { name: 'Nasopharyngeal', stages: ['I', 'II', 'III', 'IV'], spreadProb: 0.45, commonMetastasis: 'Lung, Bone' }
    ]
  },
  {
    id: 'chest',
    name: 'Thorax',
    cancers: [
      { name: 'Lung Carcinoma', stages: ['IA', 'IB', 'II', 'IIIA', 'IIIB', 'IV'], spreadProb: 0.65, commonMetastasis: 'Brain, Liver, Adrenal glands' },
      { name: 'Breast Cancer', stages: ['0', 'I', 'II', 'III', 'IV'], spreadProb: 0.25, commonMetastasis: 'Bone, Lung, Brain' }
    ]
  },
  {
    id: 'abdomen',
    name: 'Abdomen',
    cancers: [
      { name: 'Stomach Adenocarcinoma', stages: ['I', 'II', 'III', 'IV'], spreadProb: 0.50, commonMetastasis: 'Liver, Peritoneum' },
      { name: 'Liver (HCC)', stages: ['A', 'B', 'C', 'D'], spreadProb: 0.40, commonMetastasis: 'Lung, Bone' }
    ]
  },
  {
    id: 'pelvis',
    name: 'Pelvis',
    cancers: [
      { name: 'Cervical Cancer', stages: ['I', 'II', 'III', 'IV'], spreadProb: 0.30, commonMetastasis: 'Bladder, Rectum, Distant nodes' },
      { name: 'Colorectal', stages: ['I', 'II', 'III', 'IV'], spreadProb: 0.35, commonMetastasis: 'Liver, Lung' }
    ]
  }
];
