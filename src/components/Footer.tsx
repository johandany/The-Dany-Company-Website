import React from 'react';
import { ScreenType } from '../types';
import { ASSETS } from '../data/mockData';
import { ShieldCheck, HeartHandshake, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (screen: ScreenType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="w-full bg-[#0b192c] text-[#fbfbf9] border-t border-[rgba(197,168,128,0.3)] mt-24">
      {/* Upper Footer: Dual Arm Institutional Overview */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          {/* Brand & Crest Column */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-4">
              <img
                src={ASSETS.danyCrest}
                alt="The Dany Company Crest"
                referrerPolicy="no-referrer"
                className="w-14 h-14 object-contain rounded-full border border-[#c5a880]/50 bg-white p-0.5 shadow-md"
              />
              <div>
                <h3 className="font-serif-luxury text-2xl font-semibold tracking-tight text-[#fbfbf9]">
                  The Dany Company
                </h3>
                <p className="text-xs tracking-[0.14em] uppercase text-[#c5a880] font-sans-editorial font-medium">
                  Creative Technology · Software Architecture · Media
                </p>
              </div>
            </div>

            <p className="text-sm text-[#dadad8] leading-relaxed font-sans-editorial max-w-md">
              An elite creative technology agency and software architecture practice. We build high-throughput enterprise systems, custom CRMs, cross-platform mobile platforms, and cinematic brand identities with uncompromising precision.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-[#c5a880] font-sans-editorial">
              <ShieldCheck className="w-4 h-4 text-[#c5a880]" />
              <span>ISO 27001 Security Standard · Zero-Debt Code Policy</span>
            </div>
          </div>

          {/* Philanthropic Synergy Column: RICE Trust */}
          <div className="md:col-span-4 space-y-4 rounded border border-[rgba(197,168,128,0.25)] bg-[#112240]/40 p-6">
            <div className="flex items-center gap-3">
              <img
                src={ASSETS.riceTrustLogo}
                alt="RICE Trust Logo"
                referrerPolicy="no-referrer"
                className="w-10 h-10 object-contain rounded-full border border-emerald-500/50 bg-white p-0.5"
              />
              <div>
                <h4 className="font-serif-luxury text-lg font-semibold text-[#fedeb2]">
                  RICE Trust Melamanjampatty
                </h4>
                <p className="text-[11px] uppercase tracking-wider text-emerald-400 font-sans-editorial">
                  Purposeful Philanthropy Arm
                </p>
              </div>
            </div>

            <p className="text-xs text-[#dadad8] leading-relaxed font-sans-editorial">
              Anchored in Melamanjampatty, Tamil Nadu. Dedicated to rural digital education, youth environmental governance, and community infrastructure.
            </p>

            <button
              onClick={() => onNavigate('trust')}
              className="inline-flex items-center gap-1.5 text-xs text-[#fedeb2] hover:text-white font-medium underline underline-offset-4 cursor-pointer"
            >
              <span>View Public Transparency Ledger</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-[#c5a880] font-sans-editorial">
              Direct Portals
            </h4>
            <ul className="space-y-2.5 text-sm font-sans-editorial text-[#dadad8]">
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Architectural Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('crm')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Executive Client CRM
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('trust')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  RICE Trust Initiatives
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('leadership')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Leadership & NCC Cadre
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Consultation & RFP
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Lower Divider & Quiet Legal Bar */}
        <div className="mt-14 pt-8 border-t border-[rgba(197,168,128,0.2)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#75777d] font-sans-editorial">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} The Dany Company & RICE Trust. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-6">
            <span>Melamanjampatty · Global Engineering</span>
            <span aria-hidden="true">·</span>
            <span>Regal Architectural High-Tech</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
