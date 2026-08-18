import React from 'react';
import {
  Sparkles,
  Award,
  Shield,
  CheckCircle2,
  Building2,
  Users,
  Calendar,
  Layers,
  HeartHandshake,
} from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS_CONFIG } from '../data/businessConfig';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenBooking }) => {
  const pillars = [
    {
      icon: Award,
      title: 'Certified Master Craftsmen',
      description: 'Our lead technicians hold IDA (International Detailing Association) credentials and manufacturer accreditations from Ceramic Pro, Gtechniq, and XPEL with over 14 years of exotic car focus.',
    },
    {
      icon: Building2,
      title: 'Climate-Controlled Cleanroom Studio',
      description: 'Detailing in open parking lots exposes paint to dust and direct sun. Our Costa Mesa studio maintains constant 70°F temperature, filtered air intake, and daylight 5500K LED arrays.',
    },
    {
      icon: Layers,
      title: 'Multi-Stage Deionized Water',
      description: 'We wash exclusively with 0 PPM (Parts Per Million) demineralized water passed through multi-stage resin tanks. Guarantees zero mineral water spotting or residue.',
    },
    {
      icon: Shield,
      title: '$2M Comprehensive Insurance',
      description: 'Your exotic or luxury asset is fully covered under our garage-keepers liability insurance policy from the moment keys are handed over until final delivery.',
    },
  ];

  return (
    <div id="about-page-root" className="pt-28 pb-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5" />
          <span>The Apex Ethos</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight">
          Uncompromising Automotive Passion
        </h1>
        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Founded with a singular mission: to provide discerning car owners with the highest tier of vehicle restoration and paint protection in Southern California.
        </p>
      </div>

      {/* Story Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight">
              Craftsmanship Over Speed
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              In an industry dominated by rapid 20-minute conveyor-belt car washes that scratch clear coats and leave silicone residue, Apex Auto Detail was created as an antidote.
            </p>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We limit our studio appointments to ensure each vehicle receives the hours of meticulous attention it deserves. Whether it is a daily commute EV or a limited-production Ferrari, our approach remains relentless: gentle chemistry, scientific paint analysis, and absolute perfection.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="text-2xl sm:text-3xl font-black text-amber-400">14+</div>
                <div className="text-xs text-slate-400 mt-0.5">Years of Exotic Detailing</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="text-2xl sm:text-3xl font-black text-amber-400">4,800+</div>
                <div className="text-xs text-slate-400 mt-0.5">Vehicles Restored</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-slate-700 bg-slate-900 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1000&q=80"
                alt="Apex Studio Craftsmen"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 4 Pillars */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400">
            Our Guiding Standards
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
            The Apex Four Pillars
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div
                key={i}
                className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4 hover:border-amber-500/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white">{pillar.title}</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{pillar.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Guarantee Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-slate-950 via-slate-900 to-amber-950/40 border border-amber-500/30 text-center space-y-6">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mx-auto text-amber-400">
            <HeartHandshake className="w-6 h-6" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white uppercase">
            Our 100% Satisfaction Guarantee
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            When you pick up your car, we inspect it together under specialized LED inspection lighting. If any spot fails to meet your highest standards, we rectify it on the spot.
          </p>
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950 shadow-lg cursor-pointer hover:scale-105 transition-transform"
          >
            <Calendar className="w-4 h-4" />
            <span>Schedule Your Experience</span>
          </button>
        </div>
      </div>
    </div>
  );
};
