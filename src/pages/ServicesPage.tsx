import React, { useState } from 'react';
import {
  Sparkles,
  Clock,
  Check,
  ArrowRight,
  Shield,
  Sliders,
  Calendar,
  Layers,
  Flame,
  Award,
} from 'lucide-react';
import { PageId } from '../types';
import { CORE_SERVICES, ADD_ON_SERVICES } from '../data/businessConfig';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: (serviceId?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const filteredServices =
    activeTab === 'all'
      ? CORE_SERVICES
      : CORE_SERVICES.filter((s) => s.category === activeTab);

  return (
    <div id="services-page-root" className="pt-28 pb-20">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest">
          <Layers className="w-3.5 h-3.5" />
          <span>Bespoke Detailing Protocols</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight">
          Master Automotive Services
        </h1>
        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
          From multi-stage hand wash decontamination to 9H permanent ceramic armor, explore our comprehensive suite of vehicle preservation treatments.
        </p>

        {/* Filter buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
          {[
            { id: 'all', label: 'All Services (6)' },
            { id: 'detailing', label: 'Hand Detailing' },
            { id: 'correction', label: 'Paint Correction' },
            { id: 'protection', label: 'Ceramic Coating' },
            { id: 'maintenance', label: 'Maintenance Care' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Services Detailed List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {filteredServices.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={service.id}
              id={`service-detail-${service.id}`}
              className="bg-slate-900/60 rounded-3xl border border-slate-800 p-6 sm:p-8 lg:p-10 backdrop-blur-xl shadow-2xl overflow-hidden"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center`}>
                {/* Image / Media */}
                <div className={`lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-700/60 shadow-2xl group">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

                    {service.popular && (
                      <div className="absolute top-3 right-3">
                        <span className="px-3 py-1 rounded-full bg-amber-500 text-slate-950 text-[10px] font-extrabold uppercase tracking-widest shadow-lg">
                          MOST POPULAR
                        </span>
                      </div>
                    )}

                    <div className="absolute bottom-3 left-3 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-950/80 backdrop-blur-md border border-slate-800 text-xs text-slate-200">
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                      <span>{service.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`lg:col-span-7 space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] font-extrabold uppercase tracking-wider">
                        {service.tagline}
                      </span>
                      <div className="text-right">
                        <span className="text-[10px] uppercase text-slate-400 block">Starting at</span>
                        <span className="text-2xl sm:text-3xl font-black text-amber-400">
                          ${service.startingPrice}
                        </span>
                      </div>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight">
                      {service.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {service.fullDescription}
                    </p>
                  </div>

                  {/* Key Inclusions Grid */}
                  <div className="space-y-2 pt-2 border-t border-slate-800">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-200 block">
                      Treatment Inclusions:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                      {service.inclusions.map((inc, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                          <span>{inc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Ideal for note */}
                  <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 text-xs text-slate-400">
                    <strong className="text-amber-400 font-semibold">Recommended for: </strong>
                    {service.idealFor}
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button
                      onClick={() => onOpenBooking(service.id)}
                      className="py-3 px-6 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 shadow-lg shadow-amber-500/20 flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Book This Service</span>
                    </button>

                    {service.id === 'ceramic-coating' && (
                      <button
                        onClick={() => {
                          onNavigate('ceramic-coating');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="py-3 px-5 rounded-xl font-semibold text-xs text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 flex items-center gap-1.5 transition-colors"
                      >
                        <span>Ceramic Coating Guide</span>
                        <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                      </button>
                    )}

                    {service.id === 'paint-correction' && (
                      <button
                        onClick={() => {
                          onNavigate('paint-correction');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="py-3 px-5 rounded-xl font-semibold text-xs text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 flex items-center gap-1.5 transition-colors"
                      >
                        <span>Paint Correction Guide</span>
                        <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Add-ons Catalog */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-950 border border-slate-800 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400">
              Custom Upgrades
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white uppercase">
              A La Carte Studio Add-Ons
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
              Combine any of these specialized treatments with your detailing package during booking.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ADD_ON_SERVICES.map((addon) => (
              <div
                key={addon.id}
                className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-2 hover:border-amber-500/30 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-white">{addon.name}</h4>
                  <span className="text-sm font-extrabold text-amber-400">+${addon.price}</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">{addon.description}</p>
                <div className="text-[11px] text-slate-500 pt-1">
                  Est. time: ~{addon.durationMinutes} minutes
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
