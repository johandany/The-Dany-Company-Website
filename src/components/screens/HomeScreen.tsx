import React from 'react';
import { ScreenType } from '../../types';
import { ASSETS, CORE_CAPABILITIES } from '../../data/mockData';
import { ArrowRight, Shield, Award, Users, ChevronRight, CheckCircle2, Building2, Trees, Sparkles } from 'lucide-react';

interface HomeScreenProps {
  onNavigate: (screen: ScreenType) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-24 md:space-y-32">
      {/* 1. ARCHITECTURAL HERO SECTION */}
      <section className="relative overflow-hidden pt-8 md:pt-14 pb-16">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          {/* Main 2-Column Split Hero */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              {/* Eyebrow in label-caps */}
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#c5a880]" />
                <span className="text-xs uppercase tracking-[0.16em] font-sans-editorial font-bold text-[#725b38] dark:text-[#c5a880]">
                  Regal Architectural High-Tech · Est. With Discipline
                </span>
              </div>

              {/* Newsreader Display Headline */}
              <h1 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#0b192c] dark:text-[#fbfbf9] leading-[1.12]">
                Architectural Precision. <br />
                <span className="italic font-normal text-[#725b38] dark:text-[#fedeb2]">
                  Commanding Authority.
                </span> <br />
                Purposeful Philanthropy.
              </h1>

              {/* Hanken Grotesk Body Description */}
              <p className="text-base sm:text-lg text-[#44474c] dark:text-[#dadad8] leading-relaxed font-sans-editorial max-w-2xl">
                The Dany Company bridges the dignified heritage of classical heraldic crests with high-precision digital engineering. We craft bespoke enterprise software, custom CRMs, cross-platform mobile architectures, and high-impact media—while powering generational rural advancement through <strong className="font-semibold text-[#0b192c] dark:text-[#fbfbf9]">RICE Trust Melamanjampatty</strong>.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('services')}
                  className="px-6 py-3.5 text-xs sm:text-sm font-semibold tracking-wider uppercase font-sans-editorial text-[#fbfbf9] bg-[#0b192c] dark:bg-[#c5a880] dark:text-[#0b192c] rounded border border-[#c5a880]/50 hover:bg-[#112240] dark:hover:bg-[#fedeb2] transition-all shadow-md hover:shadow-[0_0_16px_rgba(197,168,128,0.4)] flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore Architectural Services</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('crm')}
                  className="px-6 py-3.5 text-xs sm:text-sm font-semibold tracking-wider uppercase font-sans-editorial text-[#0b192c] dark:text-[#fedeb2] bg-transparent hover:bg-[#fedeb2]/15 rounded border border-[#c5a880] transition-colors cursor-pointer"
                >
                  Executive Client CRM
                </button>

                <button
                  onClick={() => onNavigate('trust')}
                  className="px-6 py-3.5 text-xs sm:text-sm font-semibold tracking-wider uppercase font-sans-editorial text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 rounded border border-emerald-600/30 hover:bg-emerald-100 dark:hover:bg-emerald-900/40 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Trees className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>RICE Trust Mission</span>
                </button>
              </div>

              {/* Assurance Trust Badges (Unboxed Metadata) */}
              <div className="pt-4 flex flex-wrap items-center gap-3 text-xs text-[#75777d] dark:text-[#c5c6cd] font-sans-editorial">
                <span>ISO 27001 Security Baseline</span>
                <span aria-hidden="true">·</span>
                <span>Sub-50ms Global Edge Latency</span>
                <span aria-hidden="true">·</span>
                <span>100% Audited Philanthropy</span>
              </div>
            </div>

            {/* Right Focal Carrier: Monolithic Regal Crest Showcase */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md">
                {/* Monolithic Backdrop Glass Panel */}
                <div className="relative rounded-lg p-8 sm:p-10 bg-gradient-to-b from-[#ffffff] to-[#f4f4f2] dark:from-[#0b192c] dark:to-[#07101c] border border-[#c5a880]/30 shadow-sovereign overflow-hidden text-center group">
                  {/* Subtle corner flourish */}
                  <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-[#c5a880]/60" />
                  <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-[#c5a880]/60" />
                  <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-[#c5a880]/60" />
                  <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-[#c5a880]/60" />

                  {/* Classical Emblem */}
                  <div className="relative mx-auto w-48 h-48 sm:w-56 sm:h-56 mb-6">
                    <img
                      src={ASSETS.danyCrest}
                      alt="The Dany Company Official Crest"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-contain rounded-full shadow-lg border-2 border-[#c5a880]/60 p-2 bg-[#fbfbf9]"
                    />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-serif-luxury text-2xl font-semibold text-[#0b192c] dark:text-[#fbfbf9]">
                      The Dany Company
                    </h3>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#725b38] dark:text-[#c5a880] font-sans-editorial font-bold">
                      Sovereign Engineering Standard
                    </p>
                    <p className="text-xs text-[#75777d] dark:text-[#dadad8] pt-2 max-w-xs mx-auto font-sans-editorial">
                      Bespoke enterprise software, distributed cloud systems, and institutional CRM infrastructure.
                    </p>
                  </div>

                  <div className="mt-6 pt-5 border-t border-[#c5a880]/20 flex items-center justify-between text-left text-xs font-sans-editorial">
                    <div>
                      <span className="text-[10px] text-[#75777d] dark:text-[#c5c6cd] block">ENGINEERING SLA</span>
                      <strong className="text-[#0b192c] dark:text-[#fedeb2] font-semibold">99.98% High Availability</strong>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-[#75777d] dark:text-[#c5c6cd] block">PHILANTHROPIC ARM</span>
                      <strong className="text-emerald-700 dark:text-emerald-400 font-semibold">RICE Trust</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* KPI Strip (Full-width 4-column below hero split, tabular nums) */}
          <div className="mt-16 pt-8 border-t border-[#e2e3e1] dark:border-[rgba(197,168,128,0.25)]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              <div className="space-y-1">
                <span className="text-xs font-sans-editorial uppercase tracking-wider text-[#75777d] dark:text-[#c5c6cd]">
                  Enterprise Deliveries
                </span>
                <p className="font-serif-luxury text-3xl sm:text-4xl font-semibold text-[#0b192c] dark:text-[#fedeb2] tabular-nums">
                  42+
                </p>
                <p className="text-xs text-[#44474c] dark:text-[#dadad8] font-sans-editorial">
                  Across 6 industry verticals
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-xs font-sans-editorial uppercase tracking-wider text-[#75777d] dark:text-[#c5c6cd]">
                  Infrastructure Uptime
                </span>
                <p className="font-serif-luxury text-3xl sm:text-4xl font-semibold text-[#0b192c] dark:text-[#fedeb2] tabular-nums">
                  99.98%
                </p>
                <p className="text-xs text-[#44474c] dark:text-[#dadad8] font-sans-editorial">
                  Continuous multi-region SLA
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-xs font-sans-editorial uppercase tracking-wider text-[#75777d] dark:text-[#c5c6cd]">
                  Delivery Discipline
                </span>
                <p className="font-serif-luxury text-3xl sm:text-4xl font-semibold text-[#0b192c] dark:text-[#fedeb2] tabular-nums">
                  100%
                </p>
                <p className="text-xs text-[#44474c] dark:text-[#dadad8] font-sans-editorial">
                  On-schedule deployment rate
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-xs font-sans-editorial uppercase tracking-wider text-[#75777d] dark:text-[#c5c6cd]">
                  RICE Trust Impact
                </span>
                <p className="font-serif-luxury text-3xl sm:text-4xl font-semibold text-emerald-700 dark:text-emerald-400 tabular-nums">
                  ₹2.48Cr
                </p>
                <p className="text-xs text-[#44474c] dark:text-[#dadad8] font-sans-editorial">
                  100% Audited community grants
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE CAPABILITIES (BENTO GRID WITH HUMAN EDITORIAL NUMBERING) */}
      <section className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.16em] font-sans-editorial font-bold text-[#725b38] dark:text-[#c5a880]">
              Architectural Disciplines
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-medium text-[#0b192c] dark:text-[#fbfbf9]">
              Four Pillars of Technical Stature
            </h2>
          </div>
          <button
            onClick={() => onNavigate('services')}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#725b38] dark:text-[#fedeb2] hover:underline underline-offset-4 cursor-pointer"
          >
            <span>View Full Engineering Specifications</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CORE_CAPABILITIES.map((cap) => (
            <div
              key={cap.number}
              className="rounded-lg p-8 bg-[#ffffff] dark:bg-[#0b192c] border border-[#e2e3e1] dark:border-[rgba(197,168,128,0.25)] hover:border-[#c5a880] transition-all duration-200 shadow-sm hover:shadow-md space-y-5"
            >
              <div className="flex items-center justify-between">
                <span className="font-serif-luxury text-2xl font-semibold text-[#c5a880]">
                  {cap.number}.
                </span>
                <span className="text-[11px] font-sans-editorial tracking-widest uppercase text-[#75777d] dark:text-[#c5c6cd]">
                  Architectural Pillar
                </span>
              </div>

              <h3 className="font-serif-luxury text-2xl font-semibold text-[#0b192c] dark:text-[#fbfbf9] leading-snug">
                {cap.title}
              </h3>

              <p className="text-sm text-[#44474c] dark:text-[#dadad8] font-sans-editorial leading-relaxed">
                {cap.subtitle}
              </p>

              <ul className="space-y-2.5 pt-2 border-t border-[#eeeeec] dark:border-[rgba(197,168,128,0.15)]">
                {cap.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-[#1a1c1b] dark:text-[#f1f1ef] font-sans-editorial">
                    <CheckCircle2 className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 3. DUAL INSTITUTIONAL SYNERGY: THE DANY COMPANY & RICE TRUST MELAMANJAMPATTY */}
      <section className="bg-gradient-to-b from-[#f4f4f2] to-[#eeeeec] dark:from-[#0e1c2f] dark:to-[#0b192c] py-20 border-y border-[#e2e3e1] dark:border-[rgba(197,168,128,0.25)]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 space-y-14">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-[0.18em] font-sans-editorial font-bold text-[#725b38] dark:text-[#c5a880]">
              The Dual Heritage Paradigm
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-medium text-[#0b192c] dark:text-[#fbfbf9]">
              Enterprise Software Mastery Powering Grounded Social Mission
            </h2>
            <p className="text-sm sm:text-base text-[#44474c] dark:text-[#dadad8] font-sans-editorial leading-relaxed">
              We operate under an uncompromising philosophy: high-yield technology enterprises must serve as engines for generational community dignity and environmental welfare.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* The Dany Company Arm */}
            <div className="rounded-lg p-8 sm:p-10 bg-[#ffffff] dark:bg-[#0b192c] border border-[#c5a880]/40 shadow-sm space-y-6">
              <div className="flex items-center gap-4">
                <img
                  src={ASSETS.danyCrest}
                  alt="The Dany Company Crest"
                  referrerPolicy="no-referrer"
                  className="w-16 h-16 object-contain rounded-full border border-[#c5a880] p-1 bg-[#fbfbf9]"
                />
                <div>
                  <h3 className="font-serif-luxury text-2xl font-semibold text-[#0b192c] dark:text-[#fbfbf9]">
                    The Dany Company
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-[#725b38] dark:text-[#c5a880] font-sans-editorial font-medium">
                    Commercial & Creative Engineering
                  </p>
                </div>
              </div>

              <p className="text-sm text-[#44474c] dark:text-[#dadad8] font-sans-editorial leading-relaxed">
                Building custom software architectures, bespoke CRMs, and enterprise tools for corporations requiring extreme uptime, zero technical debt, and commanding brand presence.
              </p>

              <div className="pt-2 grid grid-cols-2 gap-4 text-xs font-sans-editorial">
                <div className="p-3 rounded bg-[#f9f9f7] dark:bg-[#112240] border border-[#e2e3e1] dark:border-[rgba(197,168,128,0.2)]">
                  <span className="text-[#75777d] dark:text-[#c5c6cd] block text-[10px]">OPERATIONAL FOCUS</span>
                  <span className="font-semibold text-[#0b192c] dark:text-[#fbfbf9]">Enterprise & Fintech Systems</span>
                </div>
                <div className="p-3 rounded bg-[#f9f9f7] dark:bg-[#112240] border border-[#e2e3e1] dark:border-[rgba(197,168,128,0.2)]">
                  <span className="text-[#75777d] dark:text-[#c5c6cd] block text-[10px]">CODE STANDARD</span>
                  <span className="font-semibold text-[#0b192c] dark:text-[#fbfbf9]">Strict Mathematical Rigor</span>
                </div>
              </div>

              <button
                onClick={() => onNavigate('services')}
                className="w-full py-3 text-xs uppercase tracking-wider font-semibold font-sans-editorial text-center text-[#fbfbf9] bg-[#0b192c] dark:bg-[#c5a880] dark:text-[#0b192c] rounded border border-[#c5a880]/50 hover:bg-[#112240] transition-colors cursor-pointer"
              >
                Explore Enterprise Solutions
              </button>
            </div>

            {/* RICE Trust Melamanjampatty Arm */}
            <div className="rounded-lg p-8 sm:p-10 bg-[#ffffff] dark:bg-[#0b192c] border border-emerald-600/40 shadow-sm space-y-6">
              <div className="flex items-center gap-4">
                <img
                  src={ASSETS.riceTrustLogo}
                  alt="RICE Trust Melamanjampatty Logo"
                  referrerPolicy="no-referrer"
                  className="w-16 h-16 object-contain rounded-full border-2 border-emerald-600 p-1 bg-white"
                />
                <div>
                  <h3 className="font-serif-luxury text-2xl font-semibold text-[#0b192c] dark:text-[#fbfbf9]">
                    RICE Trust Melamanjampatty
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-emerald-700 dark:text-emerald-400 font-sans-editorial font-medium">
                    Purposeful Philanthropy & Community Heritage
                  </p>
                </div>
              </div>

              <p className="text-sm text-[#44474c] dark:text-[#dadad8] font-sans-editorial leading-relaxed">
                Direct community welfare centered in Melamanjampatty. Championing rural digital labs, educational fellowships, youth environmental councils, and village water infrastructure.
              </p>

              <div className="pt-2 grid grid-cols-2 gap-4 text-xs font-sans-editorial">
                <div className="p-3 rounded bg-[#f9f9f7] dark:bg-[#112240] border border-emerald-500/20">
                  <span className="text-[#75777d] dark:text-[#c5c6cd] block text-[10px]">REGISTERED HEADQUARTERS</span>
                  <span className="font-semibold text-[#0b192c] dark:text-[#fbfbf9]">Melamanjampatty, Tamil Nadu</span>
                </div>
                <div className="p-3 rounded bg-[#f9f9f7] dark:bg-[#112240] border border-emerald-500/20">
                  <span className="text-[#75777d] dark:text-[#c5c6cd] block text-[10px]">TRANSPARENCY AUDIT</span>
                  <span className="font-semibold text-emerald-700 dark:text-emerald-400">100% Verifiable Public Ledger</span>
                </div>
              </div>

              <button
                onClick={() => onNavigate('trust')}
                className="w-full py-3 text-xs uppercase tracking-wider font-semibold font-sans-editorial text-center text-white bg-emerald-800 dark:bg-emerald-700 hover:bg-emerald-900 rounded border border-emerald-600/50 transition-colors cursor-pointer"
              >
                Access RICE Trust Ledger & Impact
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. EXECUTIVE LEADERSHIP & CADRE SHOWCASE */}
      <section className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.16em] font-sans-editorial font-bold text-[#725b38] dark:text-[#c5a880]">
              Governance & Stewardship
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-medium text-[#0b192c] dark:text-[#fbfbf9]">
              Leadership Rooted in Discipline and Vision
            </h2>
          </div>
          <button
            onClick={() => onNavigate('leadership')}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#725b38] dark:text-[#fedeb2] hover:underline underline-offset-4 cursor-pointer"
          >
            <span>Read Full Governance Transcripts</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Founder & Managing Trustee */}
          <div className="rounded-lg p-6 sm:p-8 bg-[#ffffff] dark:bg-[#0b192c] border border-[#e2e3e1] dark:border-[rgba(197,168,128,0.25)] flex flex-col sm:flex-row gap-6 items-center sm:items-start shadow-sm">
            <img
              src={ASSETS.founderPhoto}
              alt="Founder & Senior Managing Trustee"
              referrerPolicy="no-referrer"
              className="w-36 h-44 object-cover object-top rounded border-2 border-[#c5a880] shadow-md shrink-0"
            />
            <div className="space-y-3 text-left">
              <span className="text-[11px] uppercase tracking-wider font-sans-editorial font-bold text-[#725b38] dark:text-[#c5a880]">
                Institutional Founder & Patron
              </span>
              <h3 className="font-serif-luxury text-2xl font-semibold text-[#0b192c] dark:text-[#fbfbf9]">
                Senior Managing Trustee
              </h3>
              <p className="text-xs text-[#44474c] dark:text-[#dadad8] font-sans-editorial leading-relaxed">
                Steward of the foundational ethos uniting commercial software enterprise with rural advancement and community welfare in Melamanjampatty.
              </p>
              <div className="pt-2 text-xs italic text-[#725b38] dark:text-[#fedeb2] font-serif-luxury border-t border-[#eeeeec] dark:border-[rgba(197,168,128,0.15)]">
                "True stature is measured by the enduring welfare we cultivate in our homeland."
              </div>
            </div>
          </div>

          {/* CSM Johan K: NCC Cadre & Technology Director */}
          <div className="rounded-lg p-6 sm:p-8 bg-[#ffffff] dark:bg-[#0b192c] border border-[#e2e3e1] dark:border-[rgba(197,168,128,0.25)] flex flex-col sm:flex-row gap-6 items-center sm:items-start shadow-sm">
            <img
              src={ASSETS.johanNccPhoto}
              alt="CSM Johan K in NCC Cadre Uniform"
              referrerPolicy="no-referrer"
              className="w-36 h-44 object-cover object-top rounded border-2 border-[#c5a880] shadow-md shrink-0"
            />
            <div className="space-y-3 text-left">
              <span className="text-[11px] uppercase tracking-wider font-sans-editorial font-bold text-[#725b38] dark:text-[#c5a880]">
                NCC Cadre & Director of Technology
              </span>
              <h3 className="font-serif-luxury text-2xl font-semibold text-[#0b192c] dark:text-[#fbfbf9]">
                CSM Johan K
              </h3>
              <p className="text-xs text-[#44474c] dark:text-[#dadad8] font-sans-editorial leading-relaxed">
                Company Sergeant Major (CSM) in the National Cadet Corps and Shadow Minister of Environment, Forest & Climate Change. Infusing military precision into software architecture and national youth governance.
              </p>
              <div className="pt-2 text-xs italic text-[#725b38] dark:text-[#fedeb2] font-serif-luxury border-t border-[#eeeeec] dark:border-[rgba(197,168,128,0.15)]">
                "Discipline is the precise architecture through which purposeful vision becomes reality."
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION / ARCHITECTURAL INQUIRY BANNER */}
      <section className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="rounded-xl p-10 sm:p-14 bg-[#0b192c] text-[#fbfbf9] border border-[#c5a880]/40 shadow-sovereign text-center space-y-6 relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <span className="text-xs uppercase tracking-[0.2em] font-sans-editorial font-bold text-[#c5a880]">
              Institutional Engagement
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight">
              Commission an Architectural Review with Our Engineers
            </h2>
            <p className="text-sm text-[#dadad8] font-sans-editorial leading-relaxed">
              Whether building a high-throughput enterprise CRM, a multi-tenant cloud platform, or partnering with RICE Trust on rural technology initiatives, our doors are open for principled collaboration.
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => onNavigate('contact')}
                className="px-8 py-3.5 text-xs sm:text-sm font-semibold tracking-wider uppercase font-sans-editorial text-[#0b192c] bg-[#c5a880] hover:bg-[#fedeb2] rounded transition-all shadow-md cursor-pointer"
              >
                Schedule Architectural Consultation
              </button>
              <button
                onClick={() => onNavigate('crm')}
                className="px-8 py-3.5 text-xs sm:text-sm font-semibold tracking-wider uppercase font-sans-editorial text-[#fedeb2] border border-[#c5a880] hover:bg-[#c5a880]/15 rounded transition-colors cursor-pointer"
              >
                Explore Live CRM Demonstrator
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
