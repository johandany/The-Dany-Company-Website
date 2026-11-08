import React, { useState } from 'react';
import { ScreenType } from '../../types';
import { ASSETS } from '../../data/mockData';
import { ShieldCheck, CheckCircle2, Lock, FileText, Send, Building2, Mail, Phone, Clock } from 'lucide-react';

interface ContactScreenProps {
  onNavigate: (screen: ScreenType) => void;
  preselectedService?: string;
}

export const ContactScreen: React.FC<ContactScreenProps> = ({ onNavigate, preselectedService }) => {
  const [fullName, setFullName] = useState('');
  const [organization, setOrganization] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [inquiryType, setInquiryType] = useState(preselectedService || 'Custom Enterprise Software & ERP');
  const [budgetTier, setBudgetTier] = useState('$50,000 – $150,000 USD');
  const [requiresNda, setRequiresNda] = useState(true);
  const [timeline, setTimeline] = useState('Immediate (Next 30 Days)');
  const [message, setMessage] = useState('');
  const [submittedTicket, setSubmittedTicket] = useState<{ id: string; date: string } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !organization) return;

    const ticketId = `DANY-INQ-${Math.floor(1000 + Math.random() * 9000)}`;
    const ticketDate = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    setSubmittedTicket({ id: ticketId, date: ticketDate });
  };

  return (
    <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-10 space-y-16">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <span className="text-xs uppercase tracking-[0.16em] font-sans-editorial font-bold text-[#725b38] dark:text-[#c5a880]">
          Institutional Consultations & RFP
        </span>
        <h1 className="font-serif-luxury text-4xl sm:text-5xl font-medium text-[#0b192c] dark:text-[#fbfbf9] tracking-tight">
          Commission an Architectural Consultation
        </h1>
        <p className="text-base text-[#44474c] dark:text-[#dadad8] font-sans-editorial leading-relaxed">
          We work with enterprise leadership, founders, and institutional patrons who demand uncompromising precision. Submit your technical brief or explore philanthropic collaboration with RICE Trust Melamanjampatty.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Form (7 cols) */}
        <div className="lg:col-span-7">
          {submittedTicket ? (
            <div className="rounded-xl p-8 sm:p-10 bg-[#ffffff] dark:bg-[#0b192c] border-2 border-[#c5a880] shadow-sovereign space-y-6 text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-50 dark:bg-emerald-950 flex items-center justify-center text-emerald-600 dark:text-emerald-300 mx-auto border border-emerald-500/40">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest font-mono text-[#c5a880]">
                  {submittedTicket.id} · OFFICIAL DISPATCH
                </span>
                <h2 className="font-serif-luxury text-3xl font-semibold text-[#0b192c] dark:text-[#fbfbf9]">
                  Architectural Brief Received
                </h2>
                <p className="text-xs text-[#44474c] dark:text-[#dadad8] font-sans-editorial max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{fullName}</strong>. Your consultation inquiry on behalf of <strong>{organization}</strong> has been assigned to our senior architecture team led by <strong>CSM Johan K</strong>.
                </p>
              </div>

              <div className="p-4 rounded bg-[#f9f9f7] dark:bg-[#112240] border border-[#e2e3e1] dark:border-[rgba(197,168,128,0.2)] text-left text-xs font-sans-editorial space-y-2 max-w-md mx-auto">
                <div className="flex justify-between">
                  <span className="text-[#75777d]">Reference Docket:</span>
                  <strong className="text-[#0b192c] dark:text-[#fedeb2] font-mono">{submittedTicket.id}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#75777d]">Service Scope:</span>
                  <span className="text-[#0b192c] dark:text-[#fbfbf9]">{inquiryType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#75777d]">Mutual NDA Status:</span>
                  <span className="text-emerald-700 dark:text-emerald-400 font-semibold">
                    {requiresNda ? 'Enforced & Countersigned' : 'Standard Inquiries'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#75777d]">Expected SLA Response:</span>
                  <span className="text-[#0b192c] dark:text-[#fbfbf9]">Within 4 Business Hours</span>
                </div>
              </div>

              <div className="pt-2 flex justify-center gap-4">
                <button
                  type="button"
                  onClick={() => setSubmittedTicket(null)}
                  className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#0b192c] dark:text-[#fedeb2] border border-[#c5a880] rounded hover:bg-[#fedeb2]/15 transition-colors cursor-pointer"
                >
                  Submit Another Brief
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('home')}
                  className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#0b192c] dark:bg-[#c5a880] dark:text-[#0b192c] rounded hover:bg-[#112240] transition-colors cursor-pointer"
                >
                  Return to Overview
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="rounded-xl p-8 sm:p-10 bg-[#ffffff] dark:bg-[#0b192c] border border-[#e2e3e1] dark:border-[rgba(197,168,128,0.25)] shadow-sm space-y-6 text-xs font-sans-editorial">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-bold uppercase tracking-wider text-[#725b38] dark:text-[#c5a880] block mb-1.5">
                    Executive Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Marcus Vance"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded bg-[#f9f9f7] dark:bg-[#07101c] border border-[#dcd8cf] dark:border-[rgba(197,168,128,0.3)] text-[#1a1c1b] dark:text-[#fbfbf9] focus:outline-none focus:border-[#c5a880] focus:ring-2 focus:ring-[#c5a880]/20"
                  />
                </div>

                <div>
                  <label className="font-bold uppercase tracking-wider text-[#725b38] dark:text-[#c5a880] block mb-1.5">
                    Institution / Enterprise *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sterling Capital Group"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded bg-[#f9f9f7] dark:bg-[#07101c] border border-[#dcd8cf] dark:border-[rgba(197,168,128,0.3)] text-[#1a1c1b] dark:text-[#fbfbf9] focus:outline-none focus:border-[#c5a880] focus:ring-2 focus:ring-[#c5a880]/20"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-bold uppercase tracking-wider text-[#725b38] dark:text-[#c5a880] block mb-1.5">
                    Corporate Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. mvance@sterling.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded bg-[#f9f9f7] dark:bg-[#07101c] border border-[#dcd8cf] dark:border-[rgba(197,168,128,0.3)] text-[#1a1c1b] dark:text-[#fbfbf9] focus:outline-none focus:border-[#c5a880] focus:ring-2 focus:ring-[#c5a880]/20"
                  />
                </div>

                <div>
                  <label className="font-bold uppercase tracking-wider text-[#725b38] dark:text-[#c5a880] block mb-1.5">
                    Direct Telephone
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. +1 (555) 019-2834"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded bg-[#f9f9f7] dark:bg-[#07101c] border border-[#dcd8cf] dark:border-[rgba(197,168,128,0.3)] text-[#1a1c1b] dark:text-[#fbfbf9] focus:outline-none focus:border-[#c5a880] focus:ring-2 focus:ring-[#c5a880]/20"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-bold uppercase tracking-wider text-[#725b38] dark:text-[#c5a880] block mb-1.5">
                    Engagement Discipline
                  </label>
                  <select
                    value={inquiryType}
                    onChange={(e) => setInquiryType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded bg-[#f9f9f7] dark:bg-[#07101c] border border-[#dcd8cf] dark:border-[rgba(197,168,128,0.3)] text-[#1a1c1b] dark:text-[#fbfbf9] focus:outline-none focus:border-[#c5a880]"
                  >
                    <option value="Custom Enterprise Software & ERP">Custom Enterprise Software & ERP</option>
                    <option value="High-Throughput Custom CRM">High-Throughput Custom CRM</option>
                    <option value="Mobile Application Architecture">Mobile Application Architecture</option>
                    <option value="Cinematic Media & Digital Identity">Cinematic Media & Digital Identity</option>
                    <option value="RICE Trust Melamanjampatty Partnership">RICE Trust Melamanjampatty Partnership</option>
                  </select>
                </div>

                <div>
                  <label className="font-bold uppercase tracking-wider text-[#725b38] dark:text-[#c5a880] block mb-1.5">
                    Budget Allocation Bracket
                  </label>
                  <select
                    value={budgetTier}
                    onChange={(e) => setBudgetTier(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded bg-[#f9f9f7] dark:bg-[#07101c] border border-[#dcd8cf] dark:border-[rgba(197,168,128,0.3)] text-[#1a1c1b] dark:text-[#fbfbf9] focus:outline-none focus:border-[#c5a880]"
                  >
                    <option value="$25,000 – $50,000 USD">$25,000 – $50,000 USD</option>
                    <option value="$50,000 – $150,000 USD">$50,000 – $150,000 USD</option>
                    <option value="$150,000 – $500,000 USD">$150,000 – $500,000 USD</option>
                    <option value="$500,000+ Sovereign Tier">$500,000+ Sovereign Tier</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="font-bold uppercase tracking-wider text-[#725b38] dark:text-[#c5a880] block mb-1.5">
                  Target Launch Schedule
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    'Immediate (Next 30 Days)',
                    'Q2 / Q3 2026',
                    'Strategic Exploration'
                  ].map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setTimeline(item)}
                      className={`p-2.5 text-center rounded border transition-colors cursor-pointer ${
                        timeline === item
                          ? 'bg-[#0b192c] dark:bg-[#c5a880] text-[#fbfbf9] dark:text-[#0b192c] font-semibold border-[#c5a880]'
                          : 'bg-[#f9f9f7] dark:bg-[#07101c] border-[#dcd8cf] dark:border-[rgba(197,168,128,0.2)] text-[#44474c] dark:text-[#dadad8]'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="font-bold uppercase tracking-wider text-[#725b38] dark:text-[#c5a880] block mb-1.5">
                  Technical Scope & Mission Requirements
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Detail expected system throughput, compliance benchmarks, uptime guarantees, or philanthropic intentions..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded bg-[#f9f9f7] dark:bg-[#07101c] border border-[#dcd8cf] dark:border-[rgba(197,168,128,0.3)] text-[#1a1c1b] dark:text-[#fbfbf9] focus:outline-none focus:border-[#c5a880] focus:ring-2 focus:ring-[#c5a880]/20"
                />
              </div>

              {/* NDA Checkbox (Matching design specification: 4px radius box with #0B192C border and gold check) */}
              <div
                onClick={() => setRequiresNda(!requiresNda)}
                className="flex items-center gap-3 p-3 rounded bg-[#f9f9f7] dark:bg-[#112240] border border-[#dcd8cf] dark:border-[rgba(197,168,128,0.2)] cursor-pointer"
              >
                <div
                  className={`w-4 h-4 rounded-[4px] border-[1.5px] border-[#0b192c] dark:border-[#c5a880] flex items-center justify-center ${
                    requiresNda ? 'bg-[#0b192c] dark:bg-[#c5a880]' : 'bg-transparent'
                  }`}
                >
                  {requiresNda && (
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#c5a880] dark:text-[#0b192c]" />
                  )}
                </div>
                <div className="flex-1">
                  <span className="font-semibold text-[#0b192c] dark:text-[#fbfbf9] block">
                    Execute Mutual Non-Disclosure Agreement (NDA) Prior to Call
                  </span>
                  <span className="text-[11px] text-[#75777d] dark:text-[#dadad8]">
                    Strict confidentiality and trade secret protection guaranteed under institutional charter.
                  </span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 text-xs font-semibold uppercase tracking-wider font-sans-editorial text-[#fbfbf9] bg-[#0b192c] dark:bg-[#c5a880] dark:text-[#0b192c] rounded border border-[#c5a880]/50 hover:bg-[#112240] transition-all shadow-md hover:shadow-[0_0_16px_rgba(197,168,128,0.4)] flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Submit RFP / Strategic Consultation Request</span>
              </button>
            </form>
          )}
        </div>

        {/* Right Column: Institutional Trust Sidebar (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Institutional Guarantee Card */}
          <div className="rounded-xl p-8 bg-[#0b192c] text-[#fbfbf9] border border-[#c5a880]/50 shadow-sovereign space-y-6">
            <div className="flex items-center gap-3">
              <img
                src={ASSETS.danyCrest}
                alt="The Dany Company Crest"
                referrerPolicy="no-referrer"
                className="w-12 h-12 rounded-full border border-[#c5a880] bg-white p-0.5"
              />
              <div>
                <h3 className="font-serif-luxury text-xl font-semibold text-white">
                  The Dany Company Assurance
                </h3>
                <span className="text-[10px] uppercase tracking-widest text-[#c5a880] font-sans-editorial block">
                  Confidential Architectural Review
                </span>
              </div>
            </div>

            <ul className="space-y-3 text-xs font-sans-editorial text-[#dadad8]">
              <li className="flex items-start gap-2.5">
                <Lock className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                <span>Strict bilateral NDA executed prior to any architectural disclosure.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                <span>Direct review by CSM Johan K and senior systems engineering cadre.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                <span>4-hour guaranteed initial docket response for enterprise inquiries.</span>
              </li>
            </ul>

            <div className="pt-4 border-t border-[#c5a880]/20 space-y-2 text-xs font-sans-editorial">
              <span className="text-[#dadad8] block text-[10px] uppercase tracking-wider">
                HEADQUARTERS & SANCTUM
              </span>
              <p className="text-white font-medium">
                Melamanjampatty, Tamil Nadu · Global Distributed Infrastructure
              </p>
              <p className="text-[#c5c6cd]">
                Primary Dispatches: inquiries@thedanycompany.com
              </p>
            </div>
          </div>

          {/* Philanthropic Synergy Card */}
          <div className="rounded-xl p-6 bg-[#ffffff] dark:bg-[#112240]/40 border border-emerald-600/30 space-y-3">
            <div className="flex items-center gap-3">
              <img
                src={ASSETS.riceTrustLogo}
                alt="RICE Trust Logo"
                referrerPolicy="no-referrer"
                className="w-10 h-10 rounded-full border border-emerald-600 bg-white p-0.5"
              />
              <div>
                <h4 className="font-serif-luxury text-lg font-semibold text-[#0b192c] dark:text-[#fedeb2]">
                  Corporate Philanthropy Synergy
                </h4>
                <span className="text-[10px] uppercase tracking-widest text-emerald-700 dark:text-emerald-400 font-sans-editorial block">
                  RICE Trust Melamanjampatty
                </span>
              </div>
            </div>

            <p className="text-xs text-[#44474c] dark:text-[#dadad8] font-sans-editorial leading-relaxed">
              A fixed allocation of all commercial software retainer fees is directly contributed to RICE Trust Melamanjampatty to fund village digital labs and youth environmental programs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
