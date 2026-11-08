import React, { useState } from 'react';
import { ScreenType } from '../../types';
import { CORE_CAPABILITIES } from '../../data/mockData';
import { Check, ArrowRight, ShieldCheck, Cpu, Database, Smartphone, Layers, FileDown, CheckCircle2 } from 'lucide-react';

interface ServicesScreenProps {
  onNavigate: (screen: ScreenType) => void;
  onSelectServiceForInquiry?: (serviceName: string) => void;
}

export const ServicesScreen: React.FC<ServicesScreenProps> = ({ onNavigate, onSelectServiceForInquiry }) => {
  // Interactive Blueprint Simulator State
  const [selectedDomain, setSelectedDomain] = useState<string>('Custom Enterprise Software & ERP');
  const [scaleTier, setScaleTier] = useState<'Standard' | 'Enterprise' | 'Sovereign'>('Enterprise');
  const [securityTier, setSecurityTier] = useState<'Standard SOC-2' | 'ISO 27001 + Strict RBAC' | 'Bank-Grade Cryptography'>('ISO 27001 + Strict RBAC');
  const [selectedAddons, setSelectedAddons] = useState<string[]>([
    'Real-Time Telemetry Pipeline',
    'Automated Compliance Auditing'
  ]);
  const [specGenerated, setSpecGenerated] = useState(false);

  const addonOptions = [
    { id: 'Real-Time Telemetry Pipeline', label: 'Real-Time Telemetry Pipeline (gRPC / Kafka)', costWeeks: 2, costBudget: 35000 },
    { id: 'Automated Compliance Auditing', label: 'Automated Regulatory Compliance & Cryptographic Audit Logs', costWeeks: 3, costBudget: 45000 },
    { id: 'Multi-Region Disaster Recovery', label: 'Multi-Region Instant Failover (99.99% Availability)', costWeeks: 3, costBudget: 55000 },
    { id: 'Biometric Mobile Enclave', label: 'Biometric Mobile Security & Enclave Key Storage', costWeeks: 2, costBudget: 30000 }
  ];

  const toggleAddon = (addonId: string) => {
    if (selectedAddons.includes(addonId)) {
      setSelectedAddons(selectedAddons.filter((a) => a !== addonId));
    } else {
      setSelectedAddons([...selectedAddons, addonId]);
    }
  };

  // Calculate estimates
  const baseCost = scaleTier === 'Standard' ? 75000 : scaleTier === 'Enterprise' ? 180000 : 350000;
  const baseWeeks = scaleTier === 'Standard' ? 8 : scaleTier === 'Enterprise' ? 16 : 26;
  const addonCost = selectedAddons.reduce((acc, curr) => {
    const item = addonOptions.find((a) => a.id === curr);
    return acc + (item ? item.costBudget : 0);
  }, 0);
  const addonWeeks = selectedAddons.reduce((acc, curr) => {
    const item = addonOptions.find((a) => a.id === curr);
    return acc + (item ? item.costWeeks : 0);
  }, 0);

  const totalEstimate = baseCost + addonCost;
  const totalWeeks = baseWeeks + addonWeeks;

  return (
    <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-10 space-y-20">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <span className="text-xs uppercase tracking-[0.16em] font-sans-editorial font-bold text-[#725b38] dark:text-[#c5a880]">
          Engineering Catalog & Systems Architecture
        </span>
        <h1 className="font-serif-luxury text-4xl sm:text-5xl font-medium text-[#0b192c] dark:text-[#fbfbf9] tracking-tight">
          Bespoke Digital Systems Engineered for Institutional Permanence
        </h1>
        <p className="text-base text-[#44474c] dark:text-[#dadad8] font-sans-editorial leading-relaxed">
          We do not assemble disposable web templates or generic off-the-shelf wrappers. Every system engineered at The Dany Company is built from first principles with mathematical rigor, clean architectural boundaries, and relentless uptime guarantees.
        </p>
      </div>

      {/* 4 Deep Disciplines */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {CORE_CAPABILITIES.map((cap) => (
          <div
            key={cap.number}
            className="rounded-lg p-8 bg-[#ffffff] dark:bg-[#0b192c] border border-[#e2e3e1] dark:border-[rgba(197,168,128,0.25)] space-y-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between border-b border-[#eeeeec] dark:border-[rgba(197,168,128,0.15)] pb-4">
              <span className="font-serif-luxury text-3xl font-semibold text-[#c5a880]">
                {cap.number}
              </span>
              <span className="text-xs uppercase tracking-widest text-[#75777d] dark:text-[#c5c6cd] font-sans-editorial font-medium">
                Core Discipline
              </span>
            </div>

            <div className="space-y-2">
              <h2 className="font-serif-luxury text-2xl font-semibold text-[#0b192c] dark:text-[#fbfbf9]">
                {cap.title}
              </h2>
              <p className="text-sm text-[#44474c] dark:text-[#dadad8] font-sans-editorial leading-relaxed">
                {cap.subtitle}
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <span className="text-[11px] uppercase tracking-wider font-bold text-[#725b38] dark:text-[#c5a880] font-sans-editorial block">
                Engineering Guarantees
              </span>
              <ul className="space-y-2.5">
                {cap.features.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-[#1a1c1b] dark:text-[#f1f1ef] font-sans-editorial">
                    <CheckCircle2 className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-[#eeeeec] dark:border-[rgba(197,168,128,0.15)]">
              <button
                onClick={() => {
                  if (onSelectServiceForInquiry) {
                    onSelectServiceForInquiry(cap.title);
                  }
                  onNavigate('contact');
                }}
                className="w-full py-2.5 text-xs uppercase tracking-wider font-semibold font-sans-editorial text-[#0b192c] dark:text-[#fedeb2] border border-[#c5a880] hover:bg-[#fedeb2]/15 rounded transition-colors text-center cursor-pointer"
              >
                Inquire for {cap.title.split('&')[0]}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Architecture Proposal Simulator */}
      <section className="rounded-xl p-8 sm:p-12 bg-[#ffffff] dark:bg-[#07101c] border border-[#c5a880]/40 shadow-sovereign space-y-10">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs uppercase tracking-[0.16em] font-sans-editorial font-bold text-[#725b38] dark:text-[#c5a880]">
            Interactive Systems Configurator
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-medium text-[#0b192c] dark:text-[#fbfbf9]">
            Architecture Blueprint & Sprint Scope Estimator
          </h2>
          <p className="text-sm text-[#44474c] dark:text-[#dadad8] font-sans-editorial leading-relaxed">
            Simulate your institutional deployment requirements. Model engineering sprints, compliance overhead, and receive a customized architectural proposal specification.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Controls: Left 7 columns */}
          <div className="lg:col-span-7 space-y-8">
            {/* Step 1: Core System Domain */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-[#0b192c] dark:text-[#fbfbf9] font-sans-editorial block">
                1. System Discipline & Domain
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Custom Enterprise Software & ERP',
                  'High-Load Institutional CRM',
                  'Executive Mobile & Web Suite',
                  'Cinematic Digital Brand Flagship'
                ].map((domain) => (
                  <button
                    key={domain}
                    type="button"
                    onClick={() => setSelectedDomain(domain)}
                    className={`p-3.5 text-left text-xs font-sans-editorial rounded border transition-all cursor-pointer ${
                      selectedDomain === domain
                        ? 'border-[#c5a880] bg-[#fedeb2]/25 dark:bg-[#112240] text-[#0b192c] dark:text-[#fedeb2] font-semibold'
                        : 'border-[#e2e3e1] dark:border-[rgba(197,168,128,0.2)] text-[#44474c] dark:text-[#dadad8] hover:border-[#c5a880]/50'
                    }`}
                  >
                    {domain}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Deployment Scale */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-[#0b192c] dark:text-[#fbfbf9] font-sans-editorial block">
                2. Operational Scale & Redundancy Tier
              </label>
              <div className="grid grid-cols-3 gap-3">
                {(['Standard', 'Enterprise', 'Sovereign'] as const).map((tier) => (
                  <button
                    key={tier}
                    type="button"
                    onClick={() => setScaleTier(tier)}
                    className={`p-3 text-center text-xs font-sans-editorial rounded border transition-all cursor-pointer ${
                      scaleTier === tier
                        ? 'border-[#c5a880] bg-[#0b192c] dark:bg-[#c5a880] text-[#fbfbf9] dark:text-[#0b192c] font-semibold'
                        : 'border-[#e2e3e1] dark:border-[rgba(197,168,128,0.2)] text-[#44474c] dark:text-[#dadad8] hover:border-[#c5a880]/50'
                    }`}
                  >
                    <div className="font-semibold">{tier}</div>
                    <div className="text-[10px] opacity-80 mt-0.5">
                      {tier === 'Standard' ? '< 10k users' : tier === 'Enterprise' ? '< 250k users' : 'Institutional / Global'}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Security & Governance */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-[#0b192c] dark:text-[#fbfbf9] font-sans-editorial block">
                3. Security & Compliance Mandate
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {([
                  'Standard SOC-2',
                  'ISO 27001 + Strict RBAC',
                  'Bank-Grade Cryptography'
                ] as const).map((sec) => (
                  <button
                    key={sec}
                    type="button"
                    onClick={() => setSecurityTier(sec)}
                    className={`p-3 text-center text-xs font-sans-editorial rounded border transition-all cursor-pointer ${
                      securityTier === sec
                        ? 'border-[#c5a880] bg-[#fedeb2]/25 dark:bg-[#112240] text-[#0b192c] dark:text-[#fedeb2] font-semibold'
                        : 'border-[#e2e3e1] dark:border-[rgba(197,168,128,0.2)] text-[#44474c] dark:text-[#dadad8] hover:border-[#c5a880]/50'
                    }`}
                  >
                    {sec}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Architectural Addons */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-[#0b192c] dark:text-[#fbfbf9] font-sans-editorial block">
                4. Specialized Technical Modules
              </label>
              <div className="space-y-2">
                {addonOptions.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className="flex items-center justify-between p-3 rounded border border-[#e2e3e1] dark:border-[rgba(197,168,128,0.2)] hover:border-[#c5a880]/50 cursor-pointer text-xs font-sans-editorial"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-4 h-4 rounded border flex items-center justify-center ${
                            isChecked
                              ? 'bg-[#0b192c] dark:bg-[#c5a880] border-[#0b192c] dark:border-[#c5a880]'
                              : 'border-[#75777d]'
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3 text-[#fbfbf9] dark:text-[#0b192c]" />}
                        </div>
                        <span className="text-[#1a1c1b] dark:text-[#f1f1ef]">{addon.label}</span>
                      </div>
                      <span className="text-[#75777d] dark:text-[#c5c6cd] font-mono tabular-nums">
                        +{addon.costWeeks} wks
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Output Card: Right 5 columns */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 rounded-lg p-6 sm:p-8 bg-[#0b192c] text-[#fbfbf9] border border-[#c5a880]/60 shadow-lg space-y-6">
              <div className="flex items-center justify-between border-b border-[#c5a880]/30 pb-4">
                <span className="text-xs uppercase tracking-widest text-[#c5a880] font-sans-editorial font-bold">
                  Blueprint Output
                </span>
                <span className="text-[11px] font-mono text-[#dadad8] tabular-nums">
                  SPEC-REV-2026
                </span>
              </div>

              <div className="space-y-1">
                <span className="text-[11px] text-[#dadad8] font-sans-editorial block">SELECTED DISCIPLINE</span>
                <h3 className="font-serif-luxury text-xl font-semibold text-[#fedeb2]">
                  {selectedDomain}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-4 py-2 border-y border-[#c5a880]/20 text-xs font-sans-editorial">
                <div>
                  <span className="text-[#dadad8] block text-[10px]">ESTIMATED TIMELINE</span>
                  <p className="font-serif-luxury text-2xl font-semibold text-white tabular-nums">
                    ~{totalWeeks} Weeks
                  </p>
                  <span className="text-[10px] text-[#c5c6cd]">Dedicated agile sprints</span>
                </div>
                <div>
                  <span className="text-[#dadad8] block text-[10px]">INVESTMENT BRACKET</span>
                  <p className="font-serif-luxury text-2xl font-semibold text-[#fedeb2] tabular-nums">
                    ${(totalEstimate / 1000).toFixed(0)}k USD
                  </p>
                  <span className="text-[10px] text-[#c5c6cd]">Fixed-deliverable contract</span>
                </div>
              </div>

              <div className="space-y-2 text-xs font-sans-editorial">
                <span className="text-[#dadad8] block text-[10px]">INCLUDED STANDARDS</span>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 rounded bg-[#112240] text-[11px] text-[#fedeb2] border border-[#c5a880]/30">
                    {scaleTier} SLA
                  </span>
                  <span className="px-2 py-1 rounded bg-[#112240] text-[11px] text-[#fedeb2] border border-[#c5a880]/30">
                    {securityTier}
                  </span>
                  <span className="px-2 py-1 rounded bg-[#112240] text-[11px] text-[#fedeb2] border border-[#c5a880]/30">
                    Lead: CSM Johan K / Senior Cadre
                  </span>
                </div>
              </div>

              <div className="space-y-3 pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setSpecGenerated(true);
                    setTimeout(() => onNavigate('contact'), 700);
                  }}
                  className="w-full py-3 text-xs uppercase tracking-wider font-semibold font-sans-editorial text-[#0b192c] bg-[#c5a880] hover:bg-[#fedeb2] rounded transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
                >
                  <FileDown className="w-4 h-4" />
                  <span>{specGenerated ? 'Spec Prepared · Redirecting...' : 'Commission This Architectural Spec'}</span>
                </button>

                <p className="text-[11px] text-center text-[#dadad8] font-sans-editorial">
                  Includes full technical architecture dossier & non-disclosure protection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
