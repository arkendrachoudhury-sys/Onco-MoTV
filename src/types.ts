/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface CancerEpidemiology {
  type: string;
  incidence: number; // per 100,000
  mortality: number; // per 100,000
  prevalence5Year: number;
}

export interface GenomicVariant {
  gene: string;
  mutation: string;
  frequencyIndia: number;
  frequencyGlobal: number;
  clinicalSignificance: 'Pathogenic' | 'Likely Pathogenic' | 'VUS' | 'Benign';
  source: 'BCGA' | 'ACTREC' | 'cBioPortal';
}
