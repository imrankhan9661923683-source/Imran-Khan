import React, { useState } from 'react';
import { Sparkles, Calendar, Filter, Eye, ArrowRight } from 'lucide-react';
import { PageId, GalleryCategory } from '../types';
import { GALLERY_ITEMS } from '../data/businessConfig';
import { GalleryLightbox } from '../components/GalleryLightbox';

interface GalleryPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: (serviceId?: string) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onNavigate, onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories: { id: GalleryCategory; label: string }[] = [
    { id: 'all', label: 'All Portfolio' },
    { id: 'ceramic-coating', label: 'Ceramic Coating' },
    { id: 'paint-correction', label: 'Paint Correction' },
    { id: 'interior', label: 'Interior Spa' },
    { id: 'exterior', label: 'Exterior Details' },
    { id: 'exotics', label: 'Supercars & Exotics' },
  ];

  const filteredItems =
    activeCategory === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div id="gallery-page-root" className="pt-28 pb-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Showroom Proof of Craftsmanship</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight">
          Client Vehicle Gallery
        </h1>
        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Explore high-definition photos of exotic supercars, luxury SUVs, and detailed cabin restorations completed in our studio.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20 font-extrabold'
                  : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="group relative aspect-[4/3] rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 cursor-pointer shadow-xl hover:shadow-2xl hover:border-amber-500/40 transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity"></div>

              {/* View Overlay Icon */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-950/80 border border-slate-700 flex items-center justify-center text-slate-300 group-hover:bg-amber-500 group-hover:text-slate-950 group-hover:border-amber-400 transition-colors">
                <Eye className="w-4 h-4" />
              </div>

              {/* Caption */}
              <div className="absolute bottom-4 left-4 right-4 space-y-1 text-left">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-slate-950/80 px-2 py-0.5 rounded border border-amber-500/20">
                  {item.categoryLabel}
                </span>
                <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 line-clamp-1">{item.serviceCompleted}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-slate-950 border border-slate-800 text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white uppercase">
            Ready to Feature Your Vehicle in Our Gallery?
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto">
            Book your appointment now and experience the transformation firsthand.
          </p>
          <button
            onClick={() => onOpenBooking()}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950 shadow-lg hover:scale-105 transition-transform cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Your Transformation</span>
          </button>
        </div>
      </div>

      <GalleryLightbox
        items={filteredItems}
        currentIndex={currentIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onPrev={() => setCurrentIndex((prev) => (prev > 0 ? prev - 1 : filteredItems.length - 1))}
        onNext={() => setCurrentIndex((prev) => (prev < filteredItems.length - 1 ? prev + 1 : 0))}
        onBookService={(service) => onOpenBooking(service)}
      />
    </div>
  );
};
