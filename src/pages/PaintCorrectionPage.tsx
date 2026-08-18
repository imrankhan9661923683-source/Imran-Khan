import React from 'react';
import {
  Sparkles,
  Gauge,
  Layers,
  Calendar,
  CheckCircle2,
  AlertTriangle,
  Sun,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';
import { PageId } from '../types';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';

interface PaintCorrectionPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: (serviceId?: string) => void;
}

export const PaintCorrectionPage: React.FC<PaintCorrectionPageProps> = ({
  onNavigate,
  onOpenBooking,
}) => {
  const correctionStages = [
    {
      stage: 'Stage 1',
      title: 'Gloss Enhancement Polish',
      defectRemoval: '50% – 65% Defect Removal',
      time: '4 – 6 Hours',
      price: 449,
      description: 'A single-stage dual-action machine polish using micro-fine abrasives. Removes light wash haze, oxidation, and restores intense surface depth and reflection.',
      bestFor: 'Newer vehicles, lease returns, and paintwork with light micro-marring.',
    },
    {
      stage: 'Stage 2',
      title: 'Multi-Pass Correction (Signature)',
      badge: 'RECOMMENDED',
      defectRemoval: '80% – 90% Defect Removal',
      time: '8 – 12 Hours',
      price: 749,
      description: 'A dedicated 2-step process. Step 1 compounds heavy swirl marks, towel scratches, and water etching. Step 2 jewels the clear coat with a fine finishing pad to eliminate holograms.',
      bestFor: 'Vehicles with visible spider-webbing swirls, automatic car wash damage, and daily drivers.',
    },
    {
      stage: 'Stage 3',
      title: 'Concourse Precision & Wet Sanding',
      badge: 'SHOW CAR PERFECTION',
      defectRemoval: '95%+ Mirror Clarity',
      time: '16 – 24+ Hours (2 Days)',
      price: 1199,
      description: 'Our most comprehensive correction. Incorporates 3000/5000 grit micro-wet sanding on isolated deep scratches (RIDS), rotary heavy leveling, dual-action intermediate compounding, and ultra-fine finishing jeweling.',
      bestFor: 'Supercars, collector vehicles, black finishes, and concourse show entrants.',
    },
  ];

  return (
    <div id="paint-correction-page-root" className="pt-28 pb-20">
      {/* Hero Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-slate-950 via-slate-900 to-amber-950/40 border border-amber-500/30 p-8 sm:p-14 lg:p-16 shadow-2xl">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest">
              <Gauge className="w-3.5 h-3.5" />
              <span>Micrometer Precision Paint Leveling</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-[1.08]">
              Eradicate Swirls. <br />
              <span className="text-amber-400">Restore Mirror Clarity.</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              Swirl marks, automated car wash scratches, and buffer holograms diffuse light and make your vehicle look dull. Our IDA-certified master detailers safely level clear coat to restore true optical depth without relying on temporary silicone filler glazes.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onOpenBooking('paint-correction')}
                className="px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950 shadow-xl shadow-amber-500/25 flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Paint Correction Consultation</span>
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById('correction-stages');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-4 rounded-xl font-semibold text-xs text-slate-300 hover:text-white bg-slate-900 border border-slate-700"
              >
                View Correction Stages
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Before & After for Paint Correction */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-950 border border-slate-800 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400">
              Optical Transformation
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
              Swirl & Hologram Defect Eradication
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
              Slide to view how multi-stage compounding eliminates wash scratches and restores deep reflections on Porsche Guards Red.
            </p>
          </div>

          <BeforeAfterSlider initialCategory="paint-correction" />
        </div>
      </div>

      {/* Clear Coat Preservation & Paint Gauge Technology */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/60 border border-slate-800 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase">
              <ShieldCheck className="w-4 h-4" />
              <span>Paint Safety Protocol</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight">
              Why We Measure Clear Coat in Microns
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Your car’s factory clear coat is roughly the thickness of a Post-it note (35 to 50 microns). Inexperienced detailers using harsh rotary pads can burn through or deplete this vital layer.
            </p>

            <div className="space-y-3 text-xs sm:text-sm text-slate-300">
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3">
                <Gauge className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Digital Ultrasonic Thickness Mapping</span>
                  <span className="text-slate-400 text-xs">
                    We map every panel (hood, doors, fenders) to ensure adequate clear coat thickness before any polishing commences.
                  </span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3">
                <Sun className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">5500K LED Sunlight Spectrum Inspection</span>
                  <span className="text-slate-400 text-xs">
                    We inspect clear coat under calibrated daylight spectrum inspection arrays that reveal flaws invisible to the naked eye.
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-700 bg-slate-950 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1000&q=80"
              alt="Apex Technician Paint Correction"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-950/90 border border-slate-800 text-xs text-slate-300 flex items-center justify-between">
              <span>Non-Destructive Polishing</span>
              <span className="text-amber-400 font-bold">&lt;2 Microns Clear Coat Removed</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3 Correction Stages */}
      <div id="correction-stages" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400">
            Precision Levels
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
            Paint Correction Packages
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {correctionStages.map((st) => (
            <div
              key={st.stage}
              className={`relative rounded-3xl p-8 flex flex-col justify-between ${
                st.badge
                  ? 'bg-gradient-to-b from-slate-900 via-slate-900 to-amber-950/30 border-2 border-amber-400 shadow-2xl shadow-amber-500/15'
                  : 'bg-slate-900/60 border border-slate-800'
              }`}
            >
              {st.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950 text-[10px] font-black uppercase tracking-widest shadow-md">
                    {st.badge}
                  </span>
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <span className="text-xs font-mono font-bold text-amber-400 uppercase">{st.stage}</span>
                  <h3 className="text-xl font-bold text-white mt-1">{st.title}</h3>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="px-2 py-0.5 rounded bg-amber-500/15 text-amber-400 text-xs font-bold">
                      {st.defectRemoval}
                    </span>
                    <span className="text-xs text-slate-400">• {st.time}</span>
                  </div>
                </div>

                <div>
                  <span className="text-xs text-slate-400 block uppercase">Starting at</span>
                  <span className="text-4xl font-black text-amber-400">${st.price}</span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">{st.description}</p>

                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400">
                  <strong className="text-white block mb-0.5">Recommended for:</strong>
                  {st.bestFor}
                </div>
              </div>

              <div className="pt-8 mt-6 border-t border-slate-800">
                <button
                  onClick={() => onOpenBooking('paint-correction')}
                  className="w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950 flex items-center justify-center gap-2 hover:scale-105 transition-transform cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book {st.stage} Correction</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
