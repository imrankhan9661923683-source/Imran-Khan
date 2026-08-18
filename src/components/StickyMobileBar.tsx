import React from 'react';
import { Phone, Calendar, Sparkles } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/businessConfig';

interface StickyMobileBarProps {
  onOpenBooking: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({ onOpenBooking }) => {
  return (
    <div
      id="sticky-mobile-cta-bar"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#090D14]/95 backdrop-blur-xl border-t border-slate-800/90 px-4 py-2.5 shadow-[0_-10px_25px_rgba(0,0,0,0.6)]"
    >
      <div className="flex items-center gap-2.5 max-w-md mx-auto">
        {/* Click-to-call direct */}
        <a
          id="mobile-sticky-call-btn"
          href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
          className="flex-1 py-2.5 px-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 hover:text-white flex items-center justify-center gap-2 text-xs font-bold active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 text-amber-400" />
          <span>Call ({BUSINESS_CONFIG.phone})</span>
        </a>

        {/* Instant Book CTA */}
        <button
          id="mobile-sticky-book-btn"
          onClick={onOpenBooking}
          className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 flex items-center justify-center gap-2 text-xs font-extrabold uppercase tracking-wider shadow-lg shadow-amber-500/25 active:scale-95 transition-transform"
        >
          <Calendar className="w-4 h-4 text-slate-950" />
          <span>Book Detail</span>
        </button>
      </div>
    </div>
  );
};
