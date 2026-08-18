import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Sparkles, MoveHorizontal, CheckCircle, ShieldAlert } from 'lucide-react';
import { BeforeAfterCategory } from '../types';
import { BEFORE_AFTER_ITEMS } from '../data/businessConfig';

interface BeforeAfterSliderProps {
  initialCategory?: BeforeAfterCategory;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  initialCategory = 'paint-correction',
}) => {
  const [activeCategory, setActiveCategory] = useState<BeforeAfterCategory>(initialCategory);
  const [sliderPosition, setSliderPosition] = useState<number>(50); // percentage (0 to 100)
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const categories: { id: BeforeAfterCategory; label: string }[] = [
    { id: 'paint-correction', label: 'Paint Correction' },
    { id: 'ceramic-coating', label: 'Ceramic Coating' },
    { id: 'interior', label: 'Interior Spa' },
    { id: 'exterior', label: 'Exterior Decontamination' },
  ];

  const currentItem =
    BEFORE_AFTER_ITEMS.find((item) => item.category === activeCategory) || BEFORE_AFTER_ITEMS[0];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleTouchStart = () => setIsDragging(true);

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        handleMove(e.clientX);
      }
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging && e.touches[0]) {
        handleMove(e.touches[0].clientX);
      }
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, handleMove]);

  return (
    <div id="before-after-interactive-section" className="w-full">
      {/* Category Selection Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              id={`ba-tab-${cat.id}`}
              onClick={() => {
                setActiveCategory(cat.id);
                setSliderPosition(50);
              }}
              className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                isActive
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-lg shadow-amber-500/20 scale-105'
                  : 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:border-slate-700'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Main Interactive Comparison Display */}
      <div className="bg-slate-900/60 rounded-3xl border border-slate-800 p-4 sm:p-6 lg:p-8 backdrop-blur-xl shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Comparison Slider Box */}
          <div className="lg:col-span-8">
            <div
              ref={containerRef}
              className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden select-none cursor-ew-resize border border-slate-700/60 shadow-inner group"
              onMouseDown={handleMouseDown}
              onTouchStart={handleTouchStart}
              onClick={(e) => handleMove(e.clientX)}
            >
              {/* After Image (Background / Base Layer) */}
              <img
                src={currentItem.afterImage}
                alt={`After: ${currentItem.title}`}
                className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
                loading="lazy"
              />

              {/* Before Image (Clipped Overlay Layer) */}
              <div
                className="absolute inset-y-0 left-0 overflow-hidden pointer-events-none"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={currentItem.beforeImage}
                  alt={`Before: ${currentItem.title}`}
                  className="absolute inset-0 w-full h-full object-cover object-center max-w-none pointer-events-none"
                  style={{
                    width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                    height: '100%',
                  }}
                  loading="lazy"
                />
              </div>

              {/* Badges */}
              <div className="absolute top-4 left-4 z-20 pointer-events-none">
                <span className="px-3 py-1.5 rounded-lg bg-slate-950/85 backdrop-blur-md text-[11px] font-extrabold uppercase tracking-widest text-rose-400 border border-rose-500/30 shadow-lg">
                  BEFORE DEFECTS
                </span>
              </div>

              <div className="absolute top-4 right-4 z-20 pointer-events-none">
                <span className="px-3 py-1.5 rounded-lg bg-slate-950/85 backdrop-blur-md text-[11px] font-extrabold uppercase tracking-widest text-emerald-400 border border-emerald-500/30 shadow-lg">
                  AFTER APEX DETAIL
                </span>
              </div>

              {/* Draggable Divider Line & Knob */}
              <div
                className="absolute inset-y-0 z-30 pointer-events-none flex items-center justify-center"
                style={{ left: `${sliderPosition}%` }}
              >
                {/* Vertical Line */}
                <div className="w-0.5 h-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)]"></div>

                {/* Knob */}
                <div className="absolute w-11 h-11 rounded-full bg-slate-950 border-2 border-amber-400 shadow-2xl flex items-center justify-center text-amber-400 transform -translate-x-1/2 group-hover:scale-110 transition-transform">
                  <MoveHorizontal className="w-5 h-5 stroke-[2.5]" />
                </div>
              </div>

              {/* Interactive Helper Overlay hint */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
                <div className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-[10px] uppercase font-bold tracking-widest text-slate-300 border border-slate-700/80 flex items-center gap-1.5 shadow-lg">
                  <MoveHorizontal className="w-3 h-3 text-amber-400" />
                  <span>Drag slider left / right</span>
                </div>
              </div>
            </div>
          </div>

          {/* Details & Specs Pane */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <span className="inline-block px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
                {currentItem.categoryLabel}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {currentItem.title}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Vehicle: <span className="text-slate-200 font-medium">{currentItem.carModel}</span>
              </p>
            </div>

            {/* Before Condition Card */}
            <div className="p-4 rounded-xl bg-slate-950/70 border border-rose-500/20 space-y-1.5">
              <div className="flex items-center gap-2 text-rose-400 text-xs font-bold uppercase tracking-wider">
                <ShieldAlert className="w-4 h-4" />
                <span>Initial Condition</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {currentItem.defectDescription}
              </p>
            </div>

            {/* After Condition Card */}
            <div className="p-4 rounded-xl bg-slate-950/70 border border-emerald-500/20 space-y-1.5">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <CheckCircle className="w-4 h-4" />
                <span>Apex Studio Result</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {currentItem.resultDescription}
              </p>
            </div>

            <div className="pt-2 flex items-center justify-between text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>100% Optical Clarity Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
