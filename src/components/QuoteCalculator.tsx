import React, { useState, useMemo } from 'react';
import { Sparkles, Calculator, Check, Plus, ShieldCheck, ArrowRight, Car, Truck } from 'lucide-react';
import { VehicleSize } from '../types';
import {
  VEHICLE_SIZES,
  PRICING_PACKAGES,
  ADD_ON_SERVICES,
} from '../data/businessConfig';

interface QuoteCalculatorProps {
  onProceedToBooking: (prefillData: {
    vehicleType: VehicleSize;
    packageId: string;
    addOnIds: string[];
    estimatedTotal: number;
  }) => void;
}

export const QuoteCalculator: React.FC<QuoteCalculatorProps> = ({ onProceedToBooking }) => {
  const [selectedSize, setSelectedSize] = useState<VehicleSize>('sedan');
  const [selectedPackageId, setSelectedPackageId] = useState<string>('full-detail');
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [paintCorrectionStage, setPaintCorrectionStage] = useState<string>('none');
  const [ceramicTier, setCeramicTier] = useState<string>('none');

  const selectedSizeObj = VEHICLE_SIZES.find((s) => s.id === selectedSize) || VEHICLE_SIZES[1];
  const selectedPackage = PRICING_PACKAGES.find((p) => p.id === selectedPackageId) || PRICING_PACKAGES[1];

  const paintCorrectionOptions = [
    { id: 'none', name: 'No Extra Paint Correction', price: 0, time: 0 },
    { id: 'stage-1', name: 'Stage 1 Gloss Enhancement (50-65% defect removal)', price: 199, time: 2 },
    { id: 'stage-2', name: 'Stage 2 Multi-Pass Correction (80-90% swirl removal)', price: 399, time: 4 },
    { id: 'concourse', name: 'Concourse 3-Stage & Jeweling (95%+ optical mirror)', price: 649, time: 7 },
  ];

  const ceramicOptions = [
    { id: 'none', name: 'Standard Protection Included in Package', price: 0, time: 0 },
    { id: 'ceramic-3yr', name: '3-Year 9H Ceramic Coating (SiO2 Matrix)', price: 449, time: 3 },
    { id: 'graphene-5yr', name: '5-Year Graphene Matrix Pro Shield', price: 699, time: 4 },
    { id: 'ultra-7yr', name: '7-Year Ultra Ceramic + Lifetime Warranty Guard', price: 949, time: 6 },
  ];

  const toggleAddOn = (id: string) => {
    setSelectedAddOns((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const calculatedQuote = useMemo(() => {
    const baseRaw = selectedPackage.startingPrice;
    const baseWithMultiplier = Math.round(baseRaw * selectedSizeObj.multiplier);

    const pcOpt = paintCorrectionOptions.find((p) => p.id === paintCorrectionStage);
    const pcPrice = pcOpt ? pcOpt.price : 0;
    const pcTime = pcOpt ? pcOpt.time : 0;

    const cerOpt = ceramicOptions.find((c) => c.id === ceramicTier);
    const cerPrice = cerOpt ? cerOpt.price : 0;
    const cerTime = cerOpt ? cerOpt.time : 0;

    let addOnTotal = 0;
    let addOnTimeMinutes = 0;
    selectedAddOns.forEach((addonId) => {
      const addon = ADD_ON_SERVICES.find((a) => a.id === addonId);
      if (addon) {
        addOnTotal += addon.price;
        addOnTimeMinutes += addon.durationMinutes;
      }
    });

    const totalEstimate = baseWithMultiplier + pcPrice + cerPrice + addOnTotal;

    // Approximate duration in hours
    const baseHours = selectedPackageId === 'express-detail' ? 2 : selectedPackageId === 'full-detail' ? 4.5 : 8;
    const totalHours = (baseHours + pcTime + cerTime + addOnTimeMinutes / 60).toFixed(1);

    return {
      baseWithMultiplier,
      pcPrice,
      cerPrice,
      addOnTotal,
      totalEstimate,
      totalHours,
    };
  }, [selectedSizeObj, selectedPackage, selectedPackageId, paintCorrectionStage, ceramicTier, selectedAddOns]);

  const handleBookNow = () => {
    onProceedToBooking({
      vehicleType: selectedSize,
      packageId: selectedPackageId,
      addOnIds: selectedAddOns,
      estimatedTotal: calculatedQuote.totalEstimate,
    });
  };

  return (
    <div id="instant-quote-calculator" className="w-full bg-slate-900/80 rounded-3xl border border-slate-800 p-6 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-xl">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
          <Calculator className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Instant Detailing Cost & Time Estimator
          </h3>
          <p className="text-xs sm:text-sm text-slate-400">
            Customize your vehicle specifications, service tiers, and add-ons for an instant, transparent quote.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Interactive Selectors */}
        <div className="lg:col-span-7 space-y-8">
          {/* Step 1: Vehicle Size */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold uppercase tracking-wider text-amber-400">
                1. Select Vehicle Size & Class
              </label>
              <span className="text-[11px] text-slate-400">Size factor applies to wash & surface area</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {VEHICLE_SIZES.map((size) => {
                const isSelected = selectedSize === size.id;
                return (
                  <button
                    key={size.id}
                    type="button"
                    onClick={() => setSelectedSize(size.id)}
                    className={`p-3 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? 'bg-amber-500/15 border-amber-400 shadow-md shadow-amber-500/10 text-white'
                        : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-900'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold">{size.name}</span>
                      {size.id === 'coupe' || size.id === 'sedan' ? (
                        <Car className="w-4 h-4 text-amber-400" />
                      ) : (
                        <Truck className="w-4 h-4 text-amber-400" />
                      )}
                    </div>
                    <p className="text-[10px] text-slate-400 line-clamp-1">{size.examples}</p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Base Package */}
          <div className="space-y-3">
            <label className="text-xs font-bold uppercase tracking-wider text-amber-400">
              2. Select Core Detailing Package
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {PRICING_PACKAGES.map((pkg) => {
                const isSelected = selectedPackageId === pkg.id;
                return (
                  <button
                    key={pkg.id}
                    type="button"
                    onClick={() => setSelectedPackageId(pkg.id)}
                    className={`p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer relative ${
                      isSelected
                        ? 'bg-gradient-to-b from-amber-500/20 to-amber-950/30 border-amber-400 shadow-lg shadow-amber-500/15 text-white'
                        : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-900'
                    }`}
                  >
                    {pkg.badge && (
                      <span className="absolute top-2 right-2 px-1.5 py-0.5 rounded bg-amber-500 text-[9px] font-extrabold text-slate-950 uppercase">
                        {pkg.badge}
                      </span>
                    )}
                    <h4 className="text-sm font-bold text-white">{pkg.name}</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">{pkg.subtitle}</p>
                    <div className="mt-3 text-amber-400 font-extrabold text-lg">
                      ${pkg.startingPrice}
                      <span className="text-[10px] text-slate-400 font-normal ml-1">base</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 3: Paint Correction Level */}
          <div className="space-y-3">
            <label className="text-xs font-bold uppercase tracking-wider text-amber-400">
              3. Paint Correction & Swirl Level (Optional)
            </label>

            <div className="space-y-2">
              {paintCorrectionOptions.map((option) => {
                const isSelected = paintCorrectionStage === option.id;
                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setPaintCorrectionStage(option.id)}
                    className={`w-full p-3 rounded-xl border text-left flex items-center justify-between transition-colors cursor-pointer ${
                      isSelected
                        ? 'bg-amber-500/15 border-amber-400 text-white'
                        : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                          isSelected ? 'border-amber-400 bg-amber-500' : 'border-slate-600'
                        }`}
                      >
                        {isSelected && <Check className="w-3 h-3 text-slate-950 stroke-[3]" />}
                      </div>
                      <span className="text-xs font-medium">{option.name}</span>
                    </div>
                    <span className="text-xs font-bold text-amber-400">
                      {option.price === 0 ? 'Included' : `+$${option.price}`}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 4: Add-On Services */}
          <div className="space-y-3">
            <label className="text-xs font-bold uppercase tracking-wider text-amber-400">
              4. Premium Studio Add-Ons
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {ADD_ON_SERVICES.map((addon) => {
                const isChecked = selectedAddOns.includes(addon.id);
                return (
                  <button
                    key={addon.id}
                    type="button"
                    onClick={() => toggleAddOn(addon.id)}
                    className={`p-3 rounded-xl border text-left flex items-start gap-2.5 transition-colors cursor-pointer ${
                      isChecked
                        ? 'bg-amber-500/15 border-amber-400 text-white'
                        : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded border mt-0.5 shrink-0 flex items-center justify-center ${
                        isChecked ? 'border-amber-400 bg-amber-500' : 'border-slate-600'
                      }`}
                    >
                      {isChecked ? <Check className="w-3 h-3 text-slate-950 stroke-[3]" /> : <Plus className="w-2.5 h-2.5 text-slate-500" />}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-white">{addon.name}</span>
                        <span className="text-xs font-bold text-amber-400">+${addon.price}</span>
                      </div>
                      <p className="text-[10px] text-slate-400 mt-0.5 line-clamp-1">{addon.description}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Live Itemized Summary Card */}
        <div className="lg:col-span-5">
          <div className="sticky top-28 bg-slate-950/90 rounded-2xl border border-slate-800 p-6 space-y-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <span className="text-xs font-extrabold uppercase tracking-widest text-slate-400">
                Your Customized Quote
              </span>
              <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase">
                Instant Estimate
              </span>
            </div>

            {/* Itemized breakdown */}
            <div className="space-y-3 text-xs">
              <div className="flex items-center justify-between text-slate-300">
                <span>
                  {selectedPackage.name} ({selectedSizeObj.name})
                </span>
                <span className="font-semibold text-white">${calculatedQuote.baseWithMultiplier}</span>
              </div>

              {calculatedQuote.pcPrice > 0 && (
                <div className="flex items-center justify-between text-slate-300">
                  <span>Paint Correction Selection</span>
                  <span className="font-semibold text-white">+${calculatedQuote.pcPrice}</span>
                </div>
              )}

              {calculatedQuote.cerPrice > 0 && (
                <div className="flex items-center justify-between text-slate-300">
                  <span>Ceramic Coating Upgrade</span>
                  <span className="font-semibold text-white">+${calculatedQuote.cerPrice}</span>
                </div>
              )}

              {selectedAddOns.length > 0 && (
                <div className="space-y-1.5 pt-1 border-t border-slate-900">
                  <span className="text-[10px] font-bold uppercase text-amber-400">Selected Add-ons:</span>
                  {selectedAddOns.map((id) => {
                    const item = ADD_ON_SERVICES.find((a) => a.id === id);
                    if (!item) return null;
                    return (
                      <div key={id} className="flex items-center justify-between text-slate-400 text-[11px] pl-2">
                        <span>• {item.name}</span>
                        <span className="text-slate-300">+${item.price}</span>
                      </div>
                    );
                  })}
                </div>
              )}

              <div className="flex items-center justify-between text-slate-400 pt-2 border-t border-slate-800">
                <span>Estimated Studio Time:</span>
                <span className="font-semibold text-slate-200">~{calculatedQuote.totalHours} Hours</span>
              </div>
            </div>

            {/* Total Highlight */}
            <div className="p-4 rounded-xl bg-gradient-to-br from-amber-500/10 via-amber-600/5 to-slate-900 border border-amber-500/30 space-y-1">
              <span className="text-[10px] uppercase font-bold tracking-widest text-amber-400">
                Estimated Starting Price
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  ${calculatedQuote.totalEstimate}
                </span>
                <span className="text-xs text-slate-400 font-medium">+ tax</span>
              </div>
              <p className="text-[10px] text-slate-400 leading-tight pt-1">
                Final pricing is verified after a complimentary 5-minute paint and cabin inspection upon check-in.
              </p>
            </div>

            {/* Action Button */}
            <button
              id="calc-book-btn"
              type="button"
              onClick={handleBookNow}
              className="w-full py-3.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-[1.02]"
            >
              <span>Book Appointment With This Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>No Deposit Required to Request an Estimate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
