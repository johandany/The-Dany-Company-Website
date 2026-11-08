import React, { useState } from 'react';
import { ScreenType } from '../../types';
import { ASSETS, LEADERSHIP_PROFILES } from '../../data/mockData';
import { Shield, Award, Users, BookOpen, Quote, ChevronRight, CheckCircle2 } from 'lucide-react';

interface LeadershipScreenProps {
  onNavigate: (screen: ScreenType) => void;
}

export const LeadershipScreen: React.FC<LeadershipScreenProps> = ({ onNavigate }) => {
  const [activeSpeechTab, setActiveSpeechTab] = useState<'climate' | 'cadre'>('climate');

  return (
    <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-10 space-y-20">
      {/* 1. Header */}
      <div className="space-y-4 max-w-3xl">
        <span className="text-xs uppercase tracking-[0.16em] font-sans-editorial font-bold text-[#725b38] dark:text-[#c5a880]">
          Institutional Cadre & Stewardship
        </span>
        <h1 className="font-serif-luxury text-4xl sm:text-5xl font-medium text-[#0b192c] dark:text-[#fbfbf9] tracking-tight">
          Leadership Forged in Duty, Discipline, and National Governance
        </h1>
        <p className="text-base text-[#44474c] dark:text-[#dadad8] font-sans-editorial leading-relaxed">
          At The Dany Company and RICE Trust Melamanjampatty, leadership is not an abstract corporate title—it is an active pledge of duty. From seasoned trusteeship to National Cadet Corps discipline and youth parliamentary statesmanship, our leaders uphold an unbending standard of character.
        </p>
      </div>

      {/* 2. Executive Leadership Profiles */}
      <div className="space-y-16">
        {/* Founder & Senior Managing Trustee */}
        <div className="rounded-xl p-8 sm:p-12 bg-[#ffffff] dark:bg-[#0b192c] border border-[#e2e3e1] dark:border-[rgba(197,168,128,0.25)] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative">
                <img
                  src={ASSETS.founderPhoto}
                  alt="Founder & Senior Managing Trustee"
                  referrerPolicy="no-referrer"
                  className="w-64 sm:w-72 h-80 sm:h-96 object-cover object-top rounded-lg border-2 border-[#c5a880] shadow-sovereign"
                />
                <div className="absolute -bottom-3 -right-3 bg-[#0b192c] text-[#fedeb2] border border-[#c5a880] px-3 py-1 rounded text-[11px] font-sans-editorial uppercase tracking-wider font-semibold">
                  Institutional Patron
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-5 text-left">
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-[0.18em] font-sans-editorial font-bold text-[#725b38] dark:text-[#c5a880]">
                  Foundational Trusteeship
                </span>
                <h2 className="font-serif-luxury text-3xl sm:text-4xl font-semibold text-[#0b192c] dark:text-[#fbfbf9]">
                  Founder & Senior Managing Trustee
                </h2>
                <p className="text-sm text-[#725b38] dark:text-[#fedeb2] font-sans-editorial font-medium">
                  Chairman, The Dany Company · Principal Trustee, RICE Trust Melamanjampatty
                </p>
              </div>

              <p className="text-sm text-[#44474c] dark:text-[#dadad8] font-sans-editorial leading-relaxed">
                Guided by decades of dedicated institutional leadership and community trusteeship. His vision establishes the foundational bedrock of both The Dany Company and RICE Trust Melamanjampatty: that technological mastery and economic enterprise must directly serve human dignity and generational community elevation.
              </p>

              <blockquote className="p-4 rounded bg-[#f9f9f7] dark:bg-[#112240] border-l-2 border-[#c5a880] text-sm italic font-serif-luxury text-[#0b192c] dark:text-[#fedeb2] leading-relaxed">
                "A company that builds without purpose creates mere machinery. True stature is measured by the enduring welfare we cultivate in our homeland."
              </blockquote>

              <div className="pt-2 space-y-2">
                <span className="text-[11px] uppercase tracking-wider font-bold text-[#725b38] dark:text-[#c5a880] font-sans-editorial block">
                  Executive Mandates
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans-editorial text-[#1a1c1b] dark:text-[#f1f1ef]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#c5a880]" />
                    <span>Founder, The Dany Company</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#c5a880]" />
                    <span>Managing Trustee, RICE Trust</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#c5a880]" />
                    <span>Rural Economic Advancement Council</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#c5a880]" />
                    <span>Institutional Ethics & Governance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CSM Johan K: NCC Cadre & Youth Parliamentarian */}
        <div className="rounded-xl p-8 sm:p-12 bg-[#ffffff] dark:bg-[#0b192c] border border-[#c5a880]/40 shadow-sovereign space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative">
                <img
                  src={ASSETS.johanNccPhoto}
                  alt="CSM Johan K in National Cadet Corps Uniform"
                  referrerPolicy="no-referrer"
                  className="w-64 sm:w-72 h-88 sm:h-[420px] object-cover object-top rounded-lg border-2 border-[#c5a880] shadow-xl"
                />
                <div className="absolute -bottom-3 -right-3 bg-[#0b192c] text-[#fedeb2] border border-[#c5a880] px-3 py-1 rounded text-[11px] font-sans-editorial uppercase tracking-wider font-semibold">
                  CSM · NCC Cadre
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-5 text-left">
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-[0.18em] font-sans-editorial font-bold text-[#725b38] dark:text-[#c5a880]">
                  Military Cadre & National Youth Leadership
                </span>
                <h2 className="font-serif-luxury text-3xl sm:text-4xl font-semibold text-[#0b192c] dark:text-[#fbfbf9]">
                  CSM Johan K
                </h2>
                <p className="text-sm text-[#725b38] dark:text-[#fedeb2] font-sans-editorial font-medium">
                  Director of Technology & Operations · Shadow Minister of Environment, Forest & Climate Change
                </p>
              </div>

              <p className="text-sm text-[#44474c] dark:text-[#dadad8] font-sans-editorial leading-relaxed">
                Company Sergeant Major (CSM) in the National Cadet Corps (NCC) and active parliamentary delegate in the National Model Youth Parliament. CSM Johan K bridges strict military-grade discipline, tactical focus, and civic duty with high-throughput distributed software architecture.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-3.5 rounded bg-[#f9f9f7] dark:bg-[#112240] border border-[#e2e3e1] dark:border-[rgba(197,168,128,0.2)] space-y-1">
                  <span className="text-[10px] uppercase font-bold text-[#725b38] dark:text-[#c5a880] block font-sans-editorial">
                    CADRE HONOR
                  </span>
                  <p className="text-xs text-[#0b192c] dark:text-[#fbfbf9] font-sans-editorial font-medium">
                    Decorated NCC Company Sergeant Major with distinction in drill, rifle marksmanship, and unit command.
                  </p>
                </div>

                <div className="p-3.5 rounded bg-[#f9f9f7] dark:bg-[#112240] border border-[#e2e3e1] dark:border-[rgba(197,168,128,0.2)] space-y-1">
                  <span className="text-[10px] uppercase font-bold text-[#725b38] dark:text-[#c5a880] block font-sans-editorial">
                    PARLIAMENTARY ROLE
                  </span>
                  <p className="text-xs text-[#0b192c] dark:text-[#fbfbf9] font-sans-editorial font-medium">
                    Shadow Minister of Environment, Forest and Climate Change (National Youth Assembly).
                  </p>
                </div>
              </div>

              <blockquote className="p-4 rounded bg-[#f9f9f7] dark:bg-[#112240] border-l-2 border-[#c5a880] text-sm italic font-serif-luxury text-[#0b192c] dark:text-[#fedeb2] leading-relaxed">
                "Discipline is not the limitation of freedom, but the precise architecture through which purposeful vision becomes reality."
              </blockquote>
            </div>
          </div>

          {/* Parliamentary Deliberations & Youth Governance Gallery */}
          <div className="pt-8 border-t border-[#eeeeec] dark:border-[rgba(197,168,128,0.2)] space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase tracking-[0.16em] font-sans-editorial font-bold text-[#725b38] dark:text-[#c5a880]">
                  Parliamentary Assembly Records
                </span>
                <h3 className="font-serif-luxury text-2xl font-semibold text-[#0b192c] dark:text-[#fbfbf9]">
                  Youth Parliamentary Addresses & Policy Briefs
                </h3>
              </div>

              <div className="flex items-center gap-2 p-1 rounded bg-[#f4f4f2] dark:bg-[#07101c] border border-[#e2e3e1] dark:border-[rgba(197,168,128,0.2)]">
                <button
                  type="button"
                  onClick={() => setActiveSpeechTab('climate')}
                  className={`px-3 py-1.5 text-xs font-sans-editorial rounded transition-colors cursor-pointer ${
                    activeSpeechTab === 'climate'
                      ? 'bg-[#0b192c] text-[#fedeb2] font-semibold'
                      : 'text-[#75777d] hover:text-[#0b192c] dark:hover:text-white'
                  }`}
                >
                  Climate & Environment Address
                </button>
                <button
                  type="button"
                  onClick={() => setActiveSpeechTab('cadre')}
                  className={`px-3 py-1.5 text-xs font-sans-editorial rounded transition-colors cursor-pointer ${
                    activeSpeechTab === 'cadre'
                      ? 'bg-[#0b192c] text-[#fedeb2] font-semibold'
                      : 'text-[#75777d] hover:text-[#0b192c] dark:hover:text-white'
                  }`}
                >
                  Cadre Ethos & National Duty
                </button>
              </div>
            </div>

            {/* Speeches & Photos Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Photo 1: Addressing Parliament Desk */}
              <div className="md:col-span-5 space-y-3">
                <div className="rounded-lg overflow-hidden border-2 border-[#c5a880]/50 shadow-md">
                  <img
                    src={ASSETS.parliamentSpeechPhoto}
                    alt="CSM Johan K speaking as Shadow Minister of Environment, Forest & Climate Change"
                    referrerPolicy="no-referrer"
                    className="w-full h-72 sm:h-80 object-cover object-top"
                  />
                </div>
                <p className="text-[11px] text-center text-[#75777d] dark:text-[#dadad8] font-sans-editorial italic">
                  CSM Johan K presenting the national ecological preservation bill as Shadow Minister of Environment, Forest & Climate Change.
                </p>
              </div>

              {/* Photo 2: Delegates & Speech Text */}
              <div className="md:col-span-7 space-y-4">
                <div className="rounded-lg overflow-hidden border border-[#e2e3e1] dark:border-[rgba(197,168,128,0.25)] h-48">
                  <img
                    src={ASSETS.parliamentDelegatesPhoto}
                    alt="CSM Johan K addressing youth parliament delegates"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                <div className="p-4 rounded bg-[#f9f9f7] dark:bg-[#112240] border border-[#e2e3e1] dark:border-[rgba(197,168,128,0.2)] space-y-2 text-xs font-sans-editorial">
                  {activeSpeechTab === 'climate' ? (
                    <>
                      <div className="flex items-center justify-between text-[#725b38] dark:text-[#c5a880] font-bold uppercase tracking-wider text-[10px]">
                        <span>SESSION ARCHIVE: PARLIAMENTARY HANSARD · CLAUSE 14</span>
                        <span>OFFICIAL RECORD</span>
                      </div>
                      <p className="text-[#1a1c1b] dark:text-[#fbfbf9] leading-relaxed">
                        "Mr. Speaker, ecological sustainability cannot remain an afterthought relegated to ceremonial declarations. Through RICE Trust in Melamanjampatty, we are proving that rural youth armed with digital tools and high-resolution climate modeling can rejuvenate water basins and establish self-sustaining green corridors. National strength demands environmental vigilance."
                      </p>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center justify-between text-[#725b38] dark:text-[#c5a880] font-bold uppercase tracking-wider text-[10px]">
                        <span>NATIONAL CADRE VALEDICTORY ADDRESS</span>
                        <span>CADET SERGEANT MAJOR</span>
                      </div>
                      <p className="text-[#1a1c1b] dark:text-[#fbfbf9] leading-relaxed">
                        "The National Cadet Corps instills in us that the greatest title is that of a servant to our country. When we engineer software, we treat code as a matter of honor: zero excuses, zero defects, and absolute vigilance. That same cadre discipline is what powers The Dany Company's architectural guarantees."
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Institutional Code of Honor & Governance Charter */}
      <div className="rounded-xl p-8 sm:p-12 bg-[#0b192c] text-[#fbfbf9] border border-[rgba(197,168,128,0.4)] shadow-sovereign space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-[0.2em] font-sans-editorial font-bold text-[#c5a880]">
            The Sovereign Standard
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-medium text-white">
            The Institutional Code of Honor
          </h2>
          <p className="text-sm text-[#dadad8] font-sans-editorial">
            Four unalterable tenets governing our commercial engineering and our philanthropic stewardship.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs font-sans-editorial">
          <div className="p-5 rounded bg-[#112240] border border-[rgba(197,168,128,0.25)] space-y-2">
            <Shield className="w-5 h-5 text-[#c5a880]" />
            <h4 className="font-serif-luxury text-lg font-semibold text-[#fedeb2]">
              Inviolable Integrity
            </h4>
            <p className="text-[#dadad8] leading-relaxed">
              We do not accept contracts that compromise ethical boundaries, data sovereignty, or institutional trust.
            </p>
          </div>

          <div className="p-5 rounded bg-[#112240] border border-[rgba(197,168,128,0.25)] space-y-2">
            <Award className="w-5 h-5 text-[#c5a880]" />
            <h4 className="font-serif-luxury text-lg font-semibold text-[#fedeb2]">
              Cadre Precision
            </h4>
            <p className="text-[#dadad8] leading-relaxed">
              Every system is engineered to survive adversarial audits, extreme loads, and continuous multi-year operational cycles.
            </p>
          </div>

          <div className="p-5 rounded bg-[#112240] border border-[rgba(197,168,128,0.25)] space-y-2">
            <Users className="w-5 h-5 text-[#c5a880]" />
            <h4 className="font-serif-luxury text-lg font-semibold text-[#fedeb2]">
              Grounded Stewardship
            </h4>
            <p className="text-[#dadad8] leading-relaxed">
              Our economic success is directly bound to RICE Trust Melamanjampatty’s community upliftment and youth education.
            </p>
          </div>

          <div className="p-5 rounded bg-[#112240] border border-[rgba(197,168,128,0.25)] space-y-2">
            <BookOpen className="w-5 h-5 text-[#c5a880]" />
            <h4 className="font-serif-luxury text-lg font-semibold text-[#fedeb2]">
              Radical Transparency
            </h4>
            <p className="text-[#dadad8] leading-relaxed">
              All philanthropic grant disbursements are publicly verifiable down to the exact audit identifier and on-ground receipt.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
