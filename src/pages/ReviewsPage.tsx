import React, { useState } from 'react';
import {
  Sparkles,
  Star,
  CheckCircle2,
  Calendar,
  MessageSquare,
  ThumbsUp,
  ShieldCheck,
} from 'lucide-react';
import { PageId } from '../types';
import { TESTIMONIALS, BUSINESS_CONFIG } from '../data/businessConfig';

interface ReviewsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export const ReviewsPage: React.FC<ReviewsPageProps> = ({ onNavigate, onOpenBooking }) => {
  const [filter, setFilter] = useState<string>('all');

  const filteredReviews =
    filter === 'all'
      ? TESTIMONIALS
      : TESTIMONIALS.filter((t) => t.service.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div id="reviews-page-root" className="pt-28 pb-20">
      {/* Header & Rating Breakdown */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest">
          <Star className="w-3.5 h-3.5 fill-amber-400" />
          <span>Verified Client Impressions</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight">
          Customer Reviews & Testimonials
        </h1>
        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
          See why luxury car collectors, busy professionals, and car enthusiasts in Orange County trust Apex with their vehicles.
        </p>

        {/* Rating Scorecard Banner */}
        <div className="max-w-xl mx-auto mt-8 p-6 rounded-3xl bg-slate-950 border border-slate-800 flex items-center justify-around">
          <div>
            <div className="text-4xl sm:text-5xl font-black text-white">{BUSINESS_CONFIG.stats.rating}</div>
            <div className="flex text-amber-400 justify-center my-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <div className="text-[11px] text-slate-400">{BUSINESS_CONFIG.stats.reviewCount}+ Google Reviews</div>
          </div>

          <div className="h-16 w-px bg-slate-800"></div>

          <div className="space-y-1 text-left text-xs">
            <div className="flex items-center gap-2 text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>100% Verified Car Owners</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>100% Satisfaction Rate</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <ThumbsUp className="w-4 h-4 text-amber-400" />
              <span>Top-Rated Studio in OC</span>
            </div>
          </div>
        </div>

        {/* Filter pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
          {[
            { id: 'all', label: 'All Reviews' },
            { id: 'ceramic', label: 'Ceramic Coating' },
            { id: 'paint correction', label: 'Paint Correction' },
            { id: 'full detail', label: 'Full Detail' },
            { id: 'mobile', label: 'Mobile Detailing' },
          ].map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                filter === f.id
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between space-y-4 hover:border-slate-700 transition-colors shadow-xl"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] text-slate-500">{review.date}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                  "{review.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center gap-3">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-11 h-11 rounded-full object-cover border border-slate-700"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white">{review.name}</span>
                    {review.verified && (
                      <span className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        Verified
                      </span>
                    )}
                  </div>
                  <div className="text-[11px] text-slate-400 line-clamp-1">{review.vehicle}</div>
                  <div className="text-[10px] text-amber-400/80">{review.service}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Bar */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-slate-950 border border-slate-800 text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white uppercase">
            Experience the 5-Star Apex Treatment
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto">
            Book your appointment today and see why our clients never go back to ordinary car washes.
          </p>
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950 shadow-lg cursor-pointer hover:scale-105 transition-transform"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Your Detail</span>
          </button>
        </div>
      </div>
    </div>
  );
};
