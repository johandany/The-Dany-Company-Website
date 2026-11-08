export type ScreenType = 'home' | 'services' | 'crm' | 'trust' | 'leadership' | 'contact';

export interface CrmProject {
  id: string;
  clientName: string;
  projectName: string;
  category: 'Enterprise Cloud' | 'Custom CRM' | 'Mobile Suite' | 'Media & Brand';
  leadArchitect: string;
  contractValue: number; // in USD
  status: 'In Architecture' | 'Active Sprint' | 'Security Audit' | 'Live in Production';
  progress: number; // 0-100
  uptimeSla: string;
  startDate: string;
  targetLaunch: string;
  techStack: string[];
  description: string;
}

export interface TrustGrant {
  id: string;
  initiative: string;
  category: 'Education' | 'Environmental Stewardship' | 'Community Health' | 'Rural Infrastructure';
  beneficiariesCount: number;
  amountInr: number;
  location: string;
  status: 'Disbursed' | 'In Execution' | 'Verified Impact';
  auditId: string;
  date: string;
}

export interface ArchitectureConfig {
  systemScale: 'Startup Tier' | 'Enterprise Growth' | 'Sovereign Institutional';
  domainType: 'Custom Enterprise ERP' | 'FinTech / High-Throughput CRM' | 'Cross-Platform Mobile Suite' | 'Cinematic Media Platform';
  securityCompliance: 'Standard SOC2' | 'ISO 27001 + Strict RBAC' | 'Bank-Grade Sovereign Cryptography';
  estimatedWeeks: number;
  estimatedBudgetUsd: number;
}
