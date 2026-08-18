import React from 'react';
import {
  ShieldCheck,
  Sparkles,
  Droplets,
  Sun,
  Flame,
  CheckCircle2,
  Calendar,
  Layers,
  Award,
  ArrowRight,
  ShieldAlert,
} from 'lucide-react';
import { PageId } from '../types';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';

interface CeramicCoatingPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: (serviceId?: string) => void;
}

export const CeramicCoatingPage: React.FC<CeramicCoatingPageProps> = ({
  onNavigate,
  onOpenBooking,
}) => {
  const coatingTiers = [
    {
      id: 'tier-3yr',
      name: 'Apex Shield 3-Year Ceramic',
      warranty: '3-Year Written Warranty',
      hardness: '9H Pencil Hardness',
      layers: '2 Base Coats + 1 Top Gloss Layer',
      price: 899,
      description: 'Ideal for daily drivers looking for hydrophobic ease of washing, UV clear coat preservation, and intense glossy depth.',
      inclusions: [
        'Multi-stage decontamination & clay bar prep wash',
        '1-Stage Machine Polish (enhances gloss & removes light haze)',
        'Full 9H SiO2 ceramic application on painted panels',
        'Hydrophobic windshield rain coating',
        'Infrared short-wave thermal lamp cure',
      ],
    },
    {
      id: 'tier-5yr',
      name: 'Apex Graphene Pro 5-Year',
      badge: 'MOST POPULAR',
      warranty: '5-Year Written Warranty',
      hardness: '10H Graphene Infused',
      layers: '3 Coats + Graphene Matrix',
      price: 1299,
      description: 'Reduced heat absorption, extreme slickness, higher contact angle (118°), and heightened resistance against water spotting and road salts.',
      inclusions: [
        'Complete decontamination & chemical iron extraction',
        '2-Stage Multi-Pass Paint Correction (removes 85-90%+ defects)',
        'Graphene Pro base layer with flexible covalent bonding',
        'Hydrophobic ceramic top gloss layer',
        'Wheel faces & caliper ceramic protection',
        'Complete exterior glass hydrophobic shield',
        'Studio infrared bake & official Carfax warranty registry',
      ],
    },
    {
      id: 'tier-7yr',
      name: 'Apex Concourse 7-Year Ultra',
      badge: 'ULTIMATE ARMOR',
      warranty: '7-Year / Lifetime Care Warranty',
      hardness: '10H+ Multi-Layer Matrix',
      layers: '4 Coats + Self-Healing Topcoat',
      price: 1799,
      description: 'Our flagship multi-layer ceramic system designed for exotics, collector vehicles, and owners demanding permanent candy gloss.',
      inclusions: [
        'Concourse 3-Stage Paint Correction (95%+ defect elimination)',
        'High-solids ceramic primer + dual 9H base layers',
        'Self-healing high slickness topcoat',
        'Wheels-off barrel, face, and suspension ceramic coating',
        'Full interior leather & fabric ceramic barrier',
        'All exterior trim & carbon fiber pieces ceramic sealed',
        'Annual complimentary inspection wash & warranty maintenance',
      ],
    },
  ];

  const ceramicBenefits = [
    {
      icon: Droplets,
      title: 'Extreme 115°+ Hydrophobic Contact Angle',
      description: 'Water, mud, and contaminants bead up and roll off immediately, making routine hand washes fast and effortless.',
    },
    {
      icon: Sun,
      title: 'Total UV & Oxidation Shielding',
      description: 'Prevents harmful ultraviolet rays from fading, hazing, or chalking clear coat, preserving rich color pigmentation.',
    },
    {
      icon: ShieldCheck,
      title: 'Chemical & Environmental Defense',
      description: 'Resists acidic bird droppings, tree sap, bug splatters, road salt, and harsh detergents (pH 2 to pH 12).',
    },
    {
      icon: Flame,
      title: 'High Thermal & Scratch Resistance',
      description: 'Infrared-cured 9H crystalline glass structure adds a sacrificial layer that defends against light swirl micro-marring.',
    },
  ];

  return (
    <div id="ceramic-coating-page-root" className="pt-28 pb-20">
      {/* Hero Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-slate-950 via-slate-900 to-amber-950/40 border border-amber-500/30 p-8 sm:p-14 lg:p-16 shadow-2xl">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Certified 9H & Graphene Nanotechnology</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-[1.08]">
              Permanent Gloss. <br />
              <span className="text-amber-400">Unmatched Protection.</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              Our certified ceramic coatings form a permanent crystalline molecular bond with your vehicle’s clear coat. Experience self-cleaning water beading, deep candy gloss, and years of warranty-backed defense against Southern California sun and road grime.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onOpenBooking('ceramic-coating')}
                className="px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950 shadow-xl shadow-amber-500/25 flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve Ceramic Bay Appointment</span>
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById('ceramic-tiers');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-4 rounded-xl font-semibold text-xs text-slate-300 hover:text-white bg-slate-900 border border-slate-700"
              >
                Compare 3-Yr vs 5-Yr vs 7-Yr
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Core Scientific Benefits */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400">
            Nanotechnology Science
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
            Why Ceramic Outperforms Waxes & Sealants
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ceramicBenefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <div
                key={i}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3 hover:border-amber-500/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">{b.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{b.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Ceramic Before/After */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-950 border border-slate-800 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400">
              Visual Demonstration
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white uppercase">
              Hydrophobic Gloss in Action
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
              Slide to inspect the extreme depth and liquid wet-look reflection achieved on ceramic coated panels.
            </p>
          </div>

          <BeforeAfterSlider initialCategory="ceramic-coating" />
        </div>
      </div>

      {/* Ceramic Coating Tiers */}
      <div id="ceramic-tiers" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400">
            Warranty Backed Systems
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
            Select Your Ceramic Armor Tier
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {coatingTiers.map((tier) => (
            <div
              key={tier.id}
              className={`relative rounded-3xl p-8 flex flex-col justify-between ${
                tier.badge
                  ? 'bg-gradient-to-b from-slate-900 via-slate-900 to-amber-950/30 border-2 border-amber-400 shadow-2xl shadow-amber-500/15'
                  : 'bg-slate-900/60 border border-slate-800'
              }`}
            >
              {tier.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950 text-[10px] font-black uppercase tracking-widest shadow-md">
                    {tier.badge}
                  </span>
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white">{tier.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-amber-400 font-semibold">{tier.warranty}</span>
                    <span className="text-slate-600">•</span>
                    <span className="text-xs text-slate-400">{tier.hardness}</span>
                  </div>
                </div>

                <div>
                  <span className="text-xs text-slate-400 block uppercase">Starting at</span>
                  <span className="text-4xl font-black text-amber-400">${tier.price}</span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">{tier.description}</p>

                <div className="space-y-2 pt-2 border-t border-slate-800">
                  <span className="text-[11px] font-bold uppercase text-slate-300 block">
                    What is included:
                  </span>
                  {tier.inclusions.map((inc, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8 mt-6 border-t border-slate-800">
                <button
                  onClick={() => onOpenBooking('ceramic-coating')}
                  className="w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950 flex items-center justify-center gap-2 hover:scale-105 transition-transform cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Reserve This Coating</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Infrared Curing Explanation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-950 border border-slate-800 flex flex-col lg:flex-row items-center gap-8">
          <div className="w-full lg:w-1/2 aspect-[16/10] rounded-2xl overflow-hidden border border-slate-700 bg-slate-900">
            <img
              src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1000&q=80"
              alt="Infrared Thermal Curing Bay"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full lg:w-1/2 space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400">
              Studio Technology
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white uppercase">
              Short-Wave Infrared Thermal Curing
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Unlike amateur mobile detailers who let coatings air-dry in unpredictable dust and humidity, Apex bakes every ceramic-coated panel under calibrated short-wave infrared heat lamps at 160°F.
            </p>
            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>Instant full 9H cross-linking hardness</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>Eliminates the 24-hour water exposure vulnerability window</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>Ensures maximum gloss depth and manufacturer warranty validation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
