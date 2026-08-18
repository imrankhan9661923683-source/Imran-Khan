import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { GalleryItem } from '../types';

interface GalleryLightboxProps {
  items: GalleryItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  onBookService: (serviceName?: string) => void;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  items,
  currentIndex,
  isOpen,
  onClose,
  onPrev,
  onNext,
  onBookService,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !items[currentIndex]) return null;

  const currentItem = items[currentIndex];

  return (
    <div
      id="gallery-lightbox-modal"
      className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6 lg:p-10 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-slate-950/80 border border-slate-700 text-slate-300 hover:text-white flex items-center justify-center hover:bg-slate-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media Pane */}
        <div className="relative flex-1 bg-slate-950 flex items-center justify-center min-h-[300px] lg:min-h-[500px]">
          <img
            src={currentItem.image}
            alt={currentItem.title}
            className="w-full h-full object-cover max-h-[70vh]"
          />

          {/* Nav buttons */}
          <button
            onClick={onPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-950/80 border border-slate-700 text-white flex items-center justify-center hover:bg-amber-500 hover:text-slate-950 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={onNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-950/80 border border-slate-700 text-white flex items-center justify-center hover:bg-amber-500 hover:text-slate-950 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Indicator */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-slate-950/80 text-[11px] font-mono text-slate-300 border border-slate-800">
            {currentIndex + 1} / {items.length}
          </div>
        </div>

        {/* Details Pane */}
        <div className="w-full lg:w-80 p-6 flex flex-col justify-between space-y-6 bg-slate-900 border-t lg:border-t-0 lg:border-l border-slate-800 overflow-y-auto">
          <div className="space-y-4">
            <div>
              <span className="px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] font-bold uppercase tracking-wider">
                {currentItem.categoryLabel}
              </span>
              <h3 className="text-xl font-bold text-white mt-2">{currentItem.title}</h3>
              <p className="text-xs text-slate-400 font-medium mt-0.5">{currentItem.vehicle}</p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1">
              <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Service Completed</span>
              </span>
              <p className="text-xs text-slate-200 font-medium">{currentItem.serviceCompleted}</p>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">{currentItem.description}</p>
          </div>

          <div className="pt-4 border-t border-slate-800 space-y-2">
            <button
              onClick={() => {
                onClose();
                onBookService(currentItem.serviceCompleted);
              }}
              className="w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950 flex items-center justify-center gap-1.5 shadow-lg shadow-amber-500/20 cursor-pointer hover:scale-[1.02] transition-transform"
            >
              <Sparkles className="w-4 h-4" />
              <span>Book Similar Treatment</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
