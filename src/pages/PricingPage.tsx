import React from 'react';
import { Sparkles, Calendar, Check, X, Clock, HelpCircle, Shield, ArrowRight } from 'lucide-react';
import { PageId, VehicleSize } from '../types';
import { PRICING_PACKAGES, VEHICLE_SIZES } from '../data/businessConfig';
import { QuoteCalculator } from '../components/QuoteCalculator';

interface PricingPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: (serviceId?: string, vehicleType?: VehicleSize) => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onNavigate, onOpenBooking }) => {
  const comparisonMatrix = [
    { feature: 'Exterior Foam Bath & Hand Wash', express: true, full: true, premium: true },
    { feature: 'Wheel Faces, Barrels & Tires Cleaned', express: true, full: true, premium: true },
    { feature: 'Interior Cabin Vacuum & Window Clean', express: true, full: true, premium: true },
    { feature: 'Door Jambs Cleaned & Protected', express: true, full: true, premium: true },
    { feature: 'Iron Fallout & Clay Bar Decontamination', express: false, full: true, premium: true },
    { feature: '230°F Steam Sanitization on AC Vents', express: false, full: true, premium: true },
    { feature: 'Hot-Water Carpet & Seat Deep Extraction', express: false, full: true, premium: true },
    { feature: 'Leather Deep Cleansing & Matte UV Balm', express: false, full: true, premium: true },
    { feature: 'Engine Bay Steam Clean & Satin Dressing', express: false, full: true, premium: true },
    { feature: '6-Month SiO2 Ceramic Sealant Spray', express: false, full: true, premium: false },
    { feature: 'Micrometer Clear Coat Depth Analysis', express: false, full: false, premium: true },
    { feature: 'Multi-Stage Paint Correction (Swirl Eradication)', express: false, full: false, premium: true },
    { feature: '3-Year 9H Professional Ceramic Coating', express: false, full: false, premium: true },
    { feature: 'Infrared Short-Wave Thermal Curing Bay', express: false, full: false, premium: true },
    { feature: 'Official Ceramic Warranty Registration', express: false, full: false, premium: true },
  ];

  return (
    <div id="pricing-page-root" className="pt-28 pb-20">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Transparent Automotive Care</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight">
          Pricing & Package Comparison
        </h1>
        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
          No hidden fees or unexpected surcharges. Select the package that fits your vehicle’s condition and preservation goals.
        </p>
      </div>

      {/* 3 Pricing Package Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                pkg.isPopular
                  ? 'bg-gradient-to-b from-slate-900 via-slate-900 to-amber-950/20 border-2 border-amber-400 shadow-2xl shadow-amber-500/10 lg:-translate-y-2'
                  : 'bg-slate-900/60 border border-slate-800 hover:border-slate-700'
              }`}
            >
              {pkg.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950 text-[10px] font-black uppercase tracking-widest shadow-md">
                    {pkg.badge}
                  </span>
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white">{pkg.name}</h3>
                  <p className="text-xs text-slate-400 mt-1">{pkg.subtitle}</p>
                </div>

                <div className="flex items-baseline gap-1">
                  <span className="text-xs text-slate-400 font-semibold uppercase">Starts at</span>
                  <span className="text-4xl font-black text-amber-400 tracking-tight">
                    ${pkg.startingPrice}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span>Duration: <strong>{pkg.duration}</strong></span>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">{pkg.description}</p>

                {/* Inclusions */}
                <div className="space-y-2 pt-2 border-t border-slate-800">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-300 block">
                    Core inclusions:
                  </span>
                  {pkg.inclusions.map((inc, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8 mt-6 border-t border-slate-800/80">
                <button
                  onClick={() => onOpenBooking(pkg.id)}
                  className={`w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    pkg.isPopular
                      ? 'bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950 hover:from-amber-300 hover:to-amber-500 shadow-lg shadow-amber-500/25'
                      : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                  }`}
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book {pkg.name}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing disclaimer */}
        <div className="mt-8 text-center">
          <p className="text-xs text-slate-400 italic max-w-3xl mx-auto">
            * Disclaimer: Pricing shown is for demonstration purposes and may vary based on vehicle size, condition, and selected services. Final pricing is confirmed after a complimentary multi-point check-in inspection.
          </p>
        </div>
      </div>

      {/* Interactive Cost & Duration Calculator Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <QuoteCalculator
          onProceedToBooking={(prefill) => {
            onOpenBooking(prefill.packageId, prefill.vehicleType);
          }}
        />
      </div>

      {/* Side-by-Side Comprehensive Comparison Table */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-slate-950 rounded-3xl border border-slate-800 p-6 sm:p-10 shadow-2xl overflow-x-auto">
          <div className="text-center space-y-2 mb-8">
            <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400">
              Detailed Feature Matrix
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white uppercase">
              Side-by-Side Comparison
            </h3>
          </div>

          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-slate-800">
                <th className="py-4 px-4 text-xs font-bold uppercase text-slate-400">Treatment Feature</th>
                <th className="py-4 px-4 text-xs font-bold uppercase text-slate-300 text-center">Express ($99)</th>
                <th className="py-4 px-4 text-xs font-bold uppercase text-amber-400 text-center">Full Detail ($249)</th>
                <th className="py-4 px-4 text-xs font-bold uppercase text-slate-300 text-center">Premium Protection ($899)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-xs">
              {comparisonMatrix.map((row, i) => (
                <tr key={i} className="hover:bg-slate-900/50 transition-colors">
                  <td className="py-3 px-4 font-medium text-slate-200">{row.feature}</td>
                  <td className="py-3 px-4 text-center">
                    {row.express ? (
                      <Check className="w-4 h-4 text-amber-400 mx-auto" />
                    ) : (
                      <X className="w-4 h-4 text-slate-600 mx-auto" />
                    )}
                  </td>
                  <td className="py-3 px-4 text-center bg-amber-500/5">
                    {row.full ? (
                      <Check className="w-4 h-4 text-amber-400 mx-auto" />
                    ) : (
                      <X className="w-4 h-4 text-slate-600 mx-auto" />
                    )}
                  </td>
                  <td className="py-3 px-4 text-center">
                    {row.premium ? (
                      <Check className="w-4 h-4 text-amber-400 mx-auto" />
                    ) : (
                      <X className="w-4 h-4 text-slate-600 mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
