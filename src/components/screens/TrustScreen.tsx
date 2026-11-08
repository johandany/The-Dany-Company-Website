import React, { useState } from 'react';
import { ScreenType, TrustGrant } from '../../types';
import { ASSETS, INITIAL_TRUST_GRANTS } from '../../data/mockData';
import {
  ShieldCheck,
  CheckCircle2,
  Trees,
  GraduationCap,
  HeartPulse,
  Droplets,
  Award,
  Filter,
  Search,
  Sparkles,
  HeartHandshake,
  Download
} from 'lucide-react';

interface TrustScreenProps {
  onNavigate: (screen: ScreenType) => void;
}

export const TrustScreen: React.FC<TrustScreenProps> = ({ onNavigate }) => {
  const [grants, setGrants] = useState<TrustGrant[]>(INITIAL_TRUST_GRANTS);
  const [categoryFilter, setCategoryFilter] = useState<string>('All');
  const [pledgeAmount, setPledgeAmount] = useState<number>(25000);
  const [pledgeCategory, setPledgeCategory] = useState<string>('Education');
  const [pledgeName, setPledgeName] = useState('');
  const [pledgeEmail, setPledgeEmail] = useState('');
  const [pledgeConfirmed, setPledgeConfirmed] = useState(false);

  const filteredGrants = grants.filter(
    (g) => categoryFilter === 'All' || g.category === categoryFilter
  );

  const totalDisbursed = grants.reduce((acc, g) => acc + g.amountInr, 0);
  const totalBeneficiaries = grants.reduce((acc, g) => acc + g.beneficiariesCount, 0);

  const handlePledgeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pledgeName || !pledgeEmail) return;

    const newGrant: TrustGrant = {
      id: `GRT-2026-0${grants.length + 1}`,
      initiative: `Community Grant: ${pledgeCategory} Outreach`,
      category: pledgeCategory as TrustGrant['category'],
      beneficiariesCount: Math.round(pledgeAmount / 75),
      amountInr: pledgeAmount,
      location: 'Melamanjampatty Village Region',
      status: 'In Execution',
      auditId: `RICE-AUD-${Math.floor(8850 + Math.random() * 100)}`,
      date: new Date().toISOString().split('T')[0]
    };

    setGrants([newGrant, ...grants]);
    setPledgeConfirmed(true);
  };

  return (
    <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-10 space-y-20">
      {/* 1. Header & Trust Emblem Hero */}
      <div className="rounded-xl p-8 sm:p-14 bg-gradient-to-br from-[#ffffff] via-[#fbfbf9] to-[#f4f4f2] dark:from-[#0b192c] dark:via-[#07101c] dark:to-[#002117] border border-emerald-600/40 shadow-sm relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          {/* Logo & Seal */}
          <div className="md:col-span-4 flex justify-center">
            <div className="relative group">
              <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full p-2 bg-white shadow-xl border-4 border-emerald-600/60 flex items-center justify-center">
                <img
                  src={ASSETS.riceTrustLogo}
                  alt="RICE Trust Melamanjampatty Official Seal"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <div className="mt-3 text-center">
                <span className="text-[11px] font-sans-editorial uppercase tracking-widest text-emerald-700 dark:text-emerald-400 font-bold block">
                  Registered Non-Profit Trust
                </span>
                <span className="text-xs text-[#75777d] dark:text-[#dadad8] font-sans-editorial">
                  Melamanjampatty, Tamil Nadu, India
                </span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="md:col-span-8 space-y-5">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
              <span className="text-xs uppercase tracking-[0.16em] font-sans-editorial font-bold text-emerald-800 dark:text-emerald-300">
                Purposeful Philanthropy Arm · Rooted In Community
              </span>
            </div>

            <h1 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-medium text-[#0b192c] dark:text-[#fbfbf9] tracking-tight">
              RICE Trust Melamanjampatty
            </h1>

            <p className="text-base text-[#44474c] dark:text-[#dadad8] font-sans-editorial leading-relaxed max-w-2xl">
              Established with the moral conviction that engineering mastery must bear tangible fruit in our ancestral rural communities. RICE Trust drives digital literacy laboratories, university engineering fellowships, climate afforestation, and healthcare infrastructure across Melamanjampatty and the Cauvery basin.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-sans-editorial">
              <div className="flex items-center gap-1.5 text-emerald-800 dark:text-emerald-300 font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>100% Zero-Administrative Leakage Policy</span>
              </div>
              <span className="text-[#c5c6cd]" aria-hidden="true">·</span>
              <div className="flex items-center gap-1.5 text-[#44474c] dark:text-[#dadad8]">
                <span>All operations independently verified</span>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Counters Strip */}
        <div className="mt-12 pt-8 border-t border-emerald-600/20 grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs font-sans-editorial">
          <div>
            <span className="text-[#75777d] dark:text-[#c5c6cd] block text-[10px] uppercase tracking-wider">TOTAL GRANTS DISBURSED</span>
            <p className="font-serif-luxury text-3xl font-semibold text-emerald-700 dark:text-emerald-400 tabular-nums">
              ₹{(totalDisbursed / 100000).toFixed(2)} Lakhs
            </p>
          </div>
          <div>
            <span className="text-[#75777d] dark:text-[#c5c6cd] block text-[10px] uppercase tracking-wider">STUDENTS & LIVES TOUCHED</span>
            <p className="font-serif-luxury text-3xl font-semibold text-[#0b192c] dark:text-[#fedeb2] tabular-nums">
              {totalBeneficiaries.toLocaleString()}+
            </p>
          </div>
          <div>
            <span className="text-[#75777d] dark:text-[#c5c6cd] block text-[10px] uppercase tracking-wider">VILLAGE DIGITAL LABS</span>
            <p className="font-serif-luxury text-3xl font-semibold text-[#0b192c] dark:text-[#fedeb2] tabular-nums">
              4 Active
            </p>
          </div>
          <div>
            <span className="text-[#75777d] dark:text-[#c5c6cd] block text-[10px] uppercase tracking-wider">AFFORESTATION COVER</span>
            <p className="font-serif-luxury text-3xl font-semibold text-emerald-700 dark:text-emerald-400 tabular-nums">
              14,500+ Trees
            </p>
          </div>
        </div>
      </div>

      {/* 2. Four Core Philanthropic Pillars */}
      <div className="space-y-6">
        <div className="space-y-2">
          <span className="text-xs uppercase tracking-[0.16em] font-sans-editorial font-bold text-emerald-800 dark:text-emerald-300">
            Strategic Trust Mandates
          </span>
          <h2 className="font-serif-luxury text-3xl font-medium text-[#0b192c] dark:text-[#fbfbf9]">
            Four Fields of Sustained Impact
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="rounded-lg p-6 bg-[#ffffff] dark:bg-[#0b192c] border border-[#e2e3e1] dark:border-emerald-600/30 space-y-3">
            <div className="w-10 h-10 rounded bg-emerald-50 dark:bg-emerald-950 flex items-center justify-center text-emerald-700 dark:text-emerald-300">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h3 className="font-serif-luxury text-xl font-semibold text-[#0b192c] dark:text-[#fbfbf9]">
              Digital Literacy & Schools
            </h3>
            <p className="text-xs text-[#44474c] dark:text-[#dadad8] font-sans-editorial leading-relaxed">
              Equipping Melamanjampatty rural schools with modern workstations, coding curricula, and high-speed satellite connectivity.
            </p>
          </div>

          <div className="rounded-lg p-6 bg-[#ffffff] dark:bg-[#0b192c] border border-[#e2e3e1] dark:border-emerald-600/30 space-y-3">
            <div className="w-10 h-10 rounded bg-emerald-50 dark:bg-emerald-950 flex items-center justify-center text-emerald-700 dark:text-emerald-300">
              <Trees className="w-5 h-5" />
            </div>
            <h3 className="font-serif-luxury text-xl font-semibold text-[#0b192c] dark:text-[#fbfbf9]">
              Youth Climate Action
            </h3>
            <p className="text-xs text-[#44474c] dark:text-[#dadad8] font-sans-editorial leading-relaxed">
              Partnering with youth parliament initiatives led by CSM Johan K to plant native biodiversity belts and establish rainwater micro-catchments.
            </p>
          </div>

          <div className="rounded-lg p-6 bg-[#ffffff] dark:bg-[#0b192c] border border-[#e2e3e1] dark:border-emerald-600/30 space-y-3">
            <div className="w-10 h-10 rounded bg-emerald-50 dark:bg-emerald-950 flex items-center justify-center text-emerald-700 dark:text-emerald-300">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-serif-luxury text-xl font-semibold text-[#0b192c] dark:text-[#fbfbf9]">
              Higher Education Grants
            </h3>
            <p className="text-xs text-[#44474c] dark:text-[#dadad8] font-sans-editorial leading-relaxed">
              Full tuition scholarships for first-generation university scholars entering computer science, engineering, and environmental governance.
            </p>
          </div>

          <div className="rounded-lg p-6 bg-[#ffffff] dark:bg-[#0b192c] border border-[#e2e3e1] dark:border-emerald-600/30 space-y-3">
            <div className="w-10 h-10 rounded bg-emerald-50 dark:bg-emerald-950 flex items-center justify-center text-emerald-700 dark:text-emerald-300">
              <Droplets className="w-5 h-5" />
            </div>
            <h3 className="font-serif-luxury text-xl font-semibold text-[#0b192c] dark:text-[#fbfbf9]">
              Rural Infrastructure
            </h3>
            <p className="text-xs text-[#44474c] dark:text-[#dadad8] font-sans-editorial leading-relaxed">
              Purified reverse-osmosis drinking water kiosks, mobile health checkups for village elders, and solar lighting installations.
            </p>
          </div>
        </div>
      </div>

      {/* 3. Public Transparency Ledger */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.16em] font-sans-editorial font-bold text-emerald-800 dark:text-emerald-300">
              Institutional Governance
            </span>
            <h2 className="font-serif-luxury text-3xl font-medium text-[#0b192c] dark:text-[#fbfbf9]">
              Public Transparency & Disbursement Ledger
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-[#75777d] font-sans-editorial">Filter:</span>
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="py-1.5 px-3 text-xs font-sans-editorial rounded bg-[#ffffff] dark:bg-[#07101c] border border-[#dcd8cf] dark:border-emerald-600/30 text-[#1a1c1b] dark:text-[#fbfbf9] focus:outline-none"
            >
              <option value="All">All Mandates</option>
              <option value="Education">Education</option>
              <option value="Environmental Stewardship">Environmental Stewardship</option>
              <option value="Community Health">Community Health</option>
              <option value="Rural Infrastructure">Rural Infrastructure</option>
            </select>
          </div>
        </div>

        <div className="rounded-lg bg-[#ffffff] dark:bg-[#0b192c] border border-[#e2e3e1] dark:border-emerald-600/30 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-sans-editorial">
              <thead>
                <tr className="bg-[#f4f4f2] dark:bg-[#07101c] text-[#725b38] dark:text-emerald-300 uppercase tracking-wider border-b border-[#e2e3e1] dark:border-emerald-600/30">
                  <th className="py-3 px-4 font-semibold">Grant ID</th>
                  <th className="py-3 px-4 font-semibold">Initiative & Target</th>
                  <th className="py-3 px-4 font-semibold">Mandate Category</th>
                  <th className="py-3 px-4 font-semibold">Beneficiaries</th>
                  <th className="py-3 px-4 font-semibold">Disbursed (INR)</th>
                  <th className="py-3 px-4 font-semibold">Audit Tracking</th>
                  <th className="py-3 px-4 font-semibold text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#eeeeec] dark:divide-emerald-950/40 text-[#1a1c1b] dark:text-[#fbfbf9]">
                {filteredGrants.map((grant) => (
                  <tr key={grant.id} className="hover:bg-[#f9f9f7] dark:hover:bg-[#112240]/40 transition-colors">
                    <td className="py-3.5 px-4 font-mono font-medium text-emerald-800 dark:text-emerald-300 tabular-nums">
                      {grant.id}
                    </td>
                    <td className="py-3.5 px-4">
                      <div className="font-semibold text-[#0b192c] dark:text-white">
                        {grant.initiative}
                      </div>
                      <div className="text-[11px] text-[#75777d] dark:text-[#dadad8]">
                        {grant.location}
                      </div>
                    </td>
                    <td className="py-3.5 px-4 text-[#44474c] dark:text-[#dadad8]">
                      {grant.category}
                    </td>
                    <td className="py-3.5 px-4 font-mono tabular-nums">
                      {grant.beneficiariesCount} individuals
                    </td>
                    <td className="py-3.5 px-4 font-mono font-semibold text-emerald-800 dark:text-emerald-300 tabular-nums">
                      ₹{grant.amountInr.toLocaleString('en-IN')}
                    </td>
                    <td className="py-3.5 px-4 font-mono text-[11px] text-[#75777d] dark:text-[#dadad8]">
                      {grant.auditId}
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-50 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-600/30">
                        {grant.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* 4. Interactive Philanthropic Calculator & Pledge Form */}
      <div className="rounded-xl p-8 sm:p-12 bg-[#002117] text-[#fbfbf9] border border-emerald-500/40 shadow-sovereign space-y-8">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs uppercase tracking-[0.16em] font-sans-editorial font-bold text-emerald-400">
            Interactive Community Stewardship
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-medium text-white">
            Pledge or Partner with RICE Trust Melamanjampatty
          </h2>
          <p className="text-sm text-emerald-100/80 font-sans-editorial leading-relaxed">
            Select a community mandate to calculate real-world impact metrics and submit a philanthropic pledge. All contributions are 100% matched by The Dany Company.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Form: 7 cols */}
          <div className="lg:col-span-7">
            {pledgeConfirmed ? (
              <div className="p-8 rounded-lg bg-[#072d21] border border-emerald-400/50 space-y-4 text-center">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h3 className="font-serif-luxury text-2xl font-semibold text-white">
                  Pledge Registered with RICE Trust
                </h3>
                <p className="text-xs text-emerald-100 font-sans-editorial max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{pledgeName}</strong>. Your commitment of ₹{pledgeAmount.toLocaleString('en-IN')} towards <strong>{pledgeCategory}</strong> in Melamanjampatty has been recorded under audit sequence RICE-AUD-2026.
                </p>
                <button
                  type="button"
                  onClick={() => setPledgeConfirmed(false)}
                  className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-[#002117] bg-emerald-400 hover:bg-emerald-300 rounded transition-colors"
                >
                  Submit Another Pledge
                </button>
              </div>
            ) : (
              <form onSubmit={handlePledgeSubmit} className="space-y-5 text-xs font-sans-editorial">
                <div className="space-y-2">
                  <label className="font-bold uppercase tracking-wider text-emerald-300 block">
                    Select Mandate Focus
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {['Education', 'Environmental Stewardship', 'Community Health', 'Rural Infrastructure'].map(
                      (cat) => (
                        <button
                          key={cat}
                          type="button"
                          onClick={() => setPledgeCategory(cat)}
                          className={`p-3 text-left rounded border transition-all cursor-pointer ${
                            pledgeCategory === cat
                              ? 'bg-emerald-700/60 border-emerald-300 text-white font-semibold'
                              : 'bg-emerald-950/40 border-emerald-600/30 text-emerald-200 hover:border-emerald-400'
                          }`}
                        >
                          {cat}
                        </button>
                      )
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-bold uppercase tracking-wider text-emerald-300 block">
                    Pledge Amount: ₹{pledgeAmount.toLocaleString('en-IN')} INR
                  </label>
                  <input
                    type="range"
                    min={5000}
                    max={200000}
                    step={5000}
                    value={pledgeAmount}
                    onChange={(e) => setPledgeAmount(Number(e.target.value))}
                    className="w-full accent-emerald-400 cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-emerald-300/80 font-mono">
                    <span>₹5,000 (Child Kit)</span>
                    <span>₹50,000 (Lab Station)</span>
                    <span>₹2,00,000 (Community Well)</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-bold uppercase tracking-wider text-emerald-300 block mb-1">
                      Your Name / Organization *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. A. Ramanathan"
                      value={pledgeName}
                      onChange={(e) => setPledgeName(e.target.value)}
                      className="w-full px-3 py-2 rounded bg-[#072d21] border border-emerald-500/40 text-white focus:outline-none focus:border-emerald-300"
                    />
                  </div>
                  <div>
                    <label className="font-bold uppercase tracking-wider text-emerald-300 block mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. contact@institution.org"
                      value={pledgeEmail}
                      onChange={(e) => setPledgeEmail(e.target.value)}
                      className="w-full px-3 py-2 rounded bg-[#072d21] border border-emerald-500/40 text-white focus:outline-none focus:border-emerald-300"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 text-xs uppercase tracking-wider font-semibold font-sans-editorial text-[#002117] bg-emerald-400 hover:bg-emerald-300 rounded transition-all shadow-md cursor-pointer"
                >
                  Register Philanthropic Pledge with Trust
                </button>
              </form>
            )}
          </div>

          {/* Right Impact Metric: 5 cols */}
          <div className="lg:col-span-5 rounded-lg p-6 bg-[#072d21] border border-emerald-500/30 space-y-4">
            <span className="text-xs uppercase tracking-wider text-emerald-400 font-sans-editorial font-bold block">
              Calculated On-Ground Impact
            </span>
            <div className="space-y-3 font-sans-editorial text-xs">
              <div className="p-3 rounded bg-emerald-950/60 border border-emerald-600/30">
                <span className="text-emerald-300/80 block text-[10px]">ESTIMATED STUDENTS EMPOWERED</span>
                <p className="font-serif-luxury text-2xl font-semibold text-white tabular-nums">
                  ~{Math.round(pledgeAmount / 75)} Beneficiaries
                </p>
              </div>

              <div className="p-3 rounded bg-emerald-950/60 border border-emerald-600/30">
                <span className="text-emerald-300/80 block text-[10px]">CORPORATE MATCH GUARANTEE</span>
                <p className="font-serif-luxury text-2xl font-semibold text-emerald-300 tabular-nums">
                  +₹{pledgeAmount.toLocaleString('en-IN')} Matched by The Dany Co.
                </p>
              </div>

              <div className="p-3 rounded bg-emerald-950/60 border border-emerald-600/30">
                <span className="text-emerald-300/80 block text-[10px]">GOVERNANCE & AUDIT</span>
                <span className="text-white font-medium">100% Direct Allocation to Melamanjampatty</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
