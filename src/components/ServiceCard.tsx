import React from 'react';
import { Clock, ArrowRight, Check, Sparkles } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceCardProps {
  service: ServiceItem;
  onSelectService: (serviceId: string) => void;
  onBookNow: (serviceId: string) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  onSelectService,
  onBookNow,
}) => {
  return (
    <div
      id={`service-card-${service.id}`}
      className="group relative bg-slate-900/70 hover:bg-slate-900/90 rounded-2xl sm:rounded-3xl border border-slate-800 hover:border-amber-500/50 transition-all duration-300 overflow-hidden flex flex-col shadow-xl hover:shadow-2xl hover:shadow-amber-500/10"
    >
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>

        {/* Popular Badge */}
        {service.popular && (
          <div className="absolute top-3 right-3">
            <span className="px-2.5 py-1 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950 text-[10px] font-extrabold uppercase tracking-widest shadow-lg">
              MOST POPULAR
            </span>
          </div>
        )}

        {/* Duration Badge */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-950/80 backdrop-blur-md border border-slate-800 text-[11px] text-slate-300">
          <Clock className="w-3.5 h-3.5 text-amber-400" />
          <span>{service.duration}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
              {service.title}
            </h3>
            <div className="text-right shrink-0">
              <span className="text-[10px] text-slate-400 block uppercase tracking-wider">Starts at</span>
              <span className="text-amber-400 font-extrabold text-lg sm:text-xl">${service.startingPrice}</span>
            </div>
          </div>

          <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
            {service.shortDescription}
          </p>

          {/* Quick Inclusions */}
          <div className="pt-2 space-y-1.5">
            {service.inclusions.slice(0, 3).map((inc, i) => (
              <div key={i} className="flex items-start gap-2 text-[11px] sm:text-xs text-slate-300">
                <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span className="line-clamp-1">{inc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-3 border-t border-slate-800/80 flex items-center gap-2">
          <button
            onClick={() => onSelectService(service.id)}
            className="flex-1 py-2.5 px-3 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-950/70 hover:bg-slate-800 border border-slate-800 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
          >
            <span>Details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => onBookNow(service.id)}
            className="flex-1 py-2.5 px-3 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 flex items-center justify-center gap-1 shadow-md shadow-amber-500/20 transition-all cursor-pointer hover:scale-[1.02]"
          >
            <Sparkles className="w-3.5 h-3.5 text-slate-950" />
            <span>Book</span>
          </button>
        </div>
      </div>
    </div>
  );
};
