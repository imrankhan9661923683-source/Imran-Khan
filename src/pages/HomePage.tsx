import React, { useState } from 'react';
import {
  Sparkles,
  Calendar,
  Phone,
  ArrowRight,
  Shield,
  Star,
  Award,
  Clock,
  CheckCircle2,
  MapPin,
  ChevronDown,
  ChevronUp,
  Sliders,
  Flame,
  Check,
  Building2,
  Truck,
  ExternalLink,
} from 'lucide-react';
import { PageId, GalleryCategory } from '../types';
import {
  BUSINESS_CONFIG,
  CORE_SERVICES,
  PRICING_PACKAGES,
  WHY_CHOOSE_US,
  PROCESS_STEPS,
  GALLERY_ITEMS,
  TESTIMONIALS,
  FAQ_ITEMS,
} from '../data/businessConfig';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { ServiceCard } from '../components/ServiceCard';
import { BookingSection } from '../components/BookingSection';
import { GalleryLightbox } from '../components/GalleryLightbox';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: (serviceId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenBooking }) => {
  // FAQ accordion state
  const [openFaqId, setOpenFaqId] = useState<string>(FAQ_ITEMS[0].id);

  // Gallery category filter state
  const [galleryFilter, setGalleryFilter] = useState<GalleryCategory>('all');

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? '' : id);
  };

  const filteredGallery =
    galleryFilter === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === galleryFilter);

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const trustHighlights = [
    { label: 'Premium Products', sub: 'German & Swiss Chemistry', icon: Sparkles },
    { label: 'Experienced Technicians', sub: '14+ Yrs IDA Certified', icon: Award },
    { label: 'Attention to Detail', sub: '64-Point LED Check-in', icon: Sliders },
    { label: 'Convenient Booking', sub: 'Studio & Mobile Units', icon: Calendar },
    { label: 'Satisfaction Focused', sub: '100% Client Guarantee', icon: Shield },
  ];

  return (
    <div id="home-page-root" className="w-full">
      {/* ---------------- 1 & 2. HERO SECTION ---------------- */}
      <section
        id="hero-section"
        className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden"
      >
        {/* Cinematic Backdrop Image with Deep Vignette & Mesh Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=2000&q=85"
            alt="Apex Luxury Auto Detailing Studio"
            className="w-full h-full object-cover object-center scale-105 animate-in fade-in zoom-in-95 duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080C14] via-[#080C14]/75 to-[#080C14]/60"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#080C14_80%)]"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest backdrop-blur-md shadow-lg shadow-amber-500/10 animate-in fade-in slide-in-from-top-4 duration-500">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Southern California’s Premier Detailing & Coating Studio</span>
          </div>

          {/* Main Headline */}
          <h1
            id="hero-headline"
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white uppercase leading-[1.08] drop-shadow-2xl"
          >
            Your Car Deserves <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent">
              More Than a Basic Wash.
            </span>
          </h1>

          {/* Supporting Text */}
          <p
            id="hero-subtext"
            className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed drop-shadow"
          >
            Premium auto detailing, paint correction, and ceramic coating designed to restore, protect, and elevate your vehicle.
          </p>

          {/* Dual Conversion CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              id="hero-primary-book-btn"
              onClick={() => onOpenBooking()}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-extrabold text-sm uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 shadow-2xl shadow-amber-500/30 flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-slate-950" />
              <span>Book Your Detail</span>
            </button>

            <button
              id="hero-secondary-quote-btn"
              onClick={() => {
                const el = document.getElementById('booking-quote-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700 hover:border-amber-400/60 backdrop-blur-md flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </button>
          </div>

          {/* Quick Stat Indicators */}
          <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto border-t border-slate-800/60 text-center">
            <div>
              <div className="text-xl sm:text-2xl font-extrabold text-white">4.9 / 5.0</div>
              <div className="text-[11px] text-slate-400 flex items-center justify-center gap-1 mt-0.5">
                <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                <span>380+ Verified Reviews</span>
              </div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-extrabold text-white">4,800+</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Vehicles Detailed</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-extrabold text-white">9H 115°</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Hydrophobic Ceramic</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-extrabold text-white">100%</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Satisfaction Guarantee</div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- 3. TRUST SECTION ---------------- */}
      <section id="trust-section" className="py-12 bg-slate-950 border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
            {trustHighlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 flex flex-col items-center text-center space-y-2 hover:border-amber-500/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white tracking-tight">{item.label}</h4>
                    <p className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5">{item.sub}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- 4. SERVICES SECTION ---------------- */}
      <section id="services-section" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800 pb-8">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400">
              Master Level Detailing
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
              Tailored Automotive Services
            </h2>
            <p className="text-sm text-slate-400">
              Every vehicle undergoes a specialized treatment protocol using pH-neutral chemistry, cleanroom microfibers, and certified tools.
            </p>
          </div>

          <button
            onClick={() => {
              onNavigate('services');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 hover:text-amber-300 self-start md:self-auto"
          >
            <span>Explore All 6 Packages & Inclusions</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CORE_SERVICES.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelectService={(id) => {
                if (id === 'ceramic-coating') {
                  onNavigate('ceramic-coating');
                } else if (id === 'paint-correction') {
                  onNavigate('paint-correction');
                } else {
                  onNavigate('services');
                }
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onBookNow={(id) => onOpenBooking(id)}
            />
          ))}
        </div>
      </section>

      {/* ---------------- 5. BEFORE & AFTER SECTION ---------------- */}
      <section id="before-after-section" className="py-20 bg-slate-950/70 border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400">
              Interactive Transformation
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
              Before & After Comparison
            </h2>
            <p className="text-sm text-slate-400">
              Slide to reveal the dramatic difference our multi-stage correction, interior steam sanitization, and 9H ceramic coatings produce.
            </p>
          </div>

          <BeforeAfterSlider />
        </div>
      </section>

      {/* ---------------- 6. FEATURED PACKAGE SECTION ---------------- */}
      <section id="featured-package-section" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden border border-amber-500/40 bg-gradient-to-br from-slate-900 via-slate-900 to-amber-950/30 p-8 sm:p-12 lg:p-14 shadow-2xl">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500 text-slate-950 text-xs font-black uppercase tracking-widest">
                <Flame className="w-3.5 h-3.5 fill-slate-950" />
                <span>Most Popular Client Choice</span>
              </div>

              <div className="space-y-2">
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
                  The Apex Signature Full Detail
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  The complete inside-and-out restoration. Combines 230°F dry thermal steam interior sanitation, deep leather nourishment, complete paint decontamination, and a 6-month silica ceramic sealant.
                </p>
              </div>

              {/* Inclusions checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  'Complete interior thermal steam sanitization',
                  'Deep carpet & seat extraction (removes spills & oils)',
                  'Full leather cleansing & matte UV protection balm',
                  'Clay bar & iron fallout paint decontamination',
                  'Precision wheel barrel & exhaust tip detailing',
                  '6-Month SiO2 Ceramic spray sealant applied',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
                    <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-slate-800">
                <div>
                  <span className="text-xs text-slate-400 block uppercase">Starting Price</span>
                  <div className="text-3xl font-extrabold text-amber-400">$249</div>
                </div>
                <div className="h-8 w-px bg-slate-800"></div>
                <div>
                  <span className="text-xs text-slate-400 block uppercase">Estimated Duration</span>
                  <div className="text-lg font-bold text-white flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-amber-400" />
                    <span>4.0 – 5.5 Hours</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center space-y-4">
              <div className="w-full max-w-sm rounded-2xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-950">
                <img
                  src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=800&q=80"
                  alt="Apex Full Detail"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>

              <button
                id="featured-book-now-btn"
                onClick={() => onOpenBooking('full-detail')}
                className="w-full max-w-sm py-4 rounded-xl font-extrabold text-xs uppercase tracking-wider bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 shadow-xl shadow-amber-500/25 flex items-center justify-center gap-2 hover:scale-105 transition-transform cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-slate-950" />
                <span>Book Full Detail Package</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- 7. WHY CHOOSE US (6 CARDS) ---------------- */}
      <section id="why-choose-us-section" className="py-20 bg-slate-950 border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400">
              The Apex Standard
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
              Why Discerning Drivers Choose Apex
            </h2>
            <p className="text-sm text-slate-400">
              We treat every vehicle like a bespoke masterpiece, combining laboratory-grade chemistry with master artisan techniques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_US.map((card) => (
              <div
                key={card.id}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/40 transition-colors space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-800 text-amber-400 border border-slate-700">
                      {card.highlight}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white">{card.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- 8. PROCESS SECTION (5 STEPS) ---------------- */}
      <section id="process-section" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400">
            Frictionless Concierge
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
            Our 5-Step Detailing Experience
          </h2>
          <p className="text-sm text-slate-400">
            From initial quote to showroom handover, our workflow guarantees transparency, convenience, and impeccable results.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 relative">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.number}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between space-y-4 hover:border-amber-500/40 transition-colors"
            >
              <div className="space-y-3">
                <div className="text-2xl font-black text-amber-400/40 font-mono tracking-tighter">
                  {step.number}
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white">{step.title}</h3>
                <p className="text-[11px] font-semibold text-amber-400 uppercase tracking-wide">
                  {step.subtitle}
                </p>
                <p className="text-xs text-slate-400 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- 9. GALLERY SECTION ---------------- */}
      <section id="gallery-preview-section" className="py-20 bg-slate-950 border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400">
                Craftsmanship in Action
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
                Client Vehicle Gallery
              </h2>
              <p className="text-sm text-slate-400">
                Browse our recent work across supercars, luxury sedans, bespoke SUVs, and daily drivers.
              </p>
            </div>

            {/* Filter pills */}
            <div className="flex flex-wrap items-center gap-2">
              {[
                { id: 'all', label: 'All Work' },
                { id: 'ceramic-coating', label: 'Ceramic Coating' },
                { id: 'paint-correction', label: 'Paint Correction' },
                { id: 'interior', label: 'Interior' },
                { id: 'exotics', label: 'Supercars' },
              ].map((f) => (
                <button
                  key={f.id}
                  onClick={() => setGalleryFilter(f.id as GalleryCategory)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-colors cursor-pointer ${
                    galleryFilter === f.id
                      ? 'bg-amber-500 text-slate-950 font-bold'
                      : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* Masonry / Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGallery.slice(0, 6).map((item, idx) => (
              <div
                key={item.id}
                onClick={() => handleOpenLightbox(idx)}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-800 cursor-pointer bg-slate-900"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

                <div className="absolute bottom-4 left-4 right-4 text-left space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-slate-950/80 px-2 py-0.5 rounded border border-amber-500/20">
                    {item.categoryLabel}
                  </span>
                  <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-slate-300 line-clamp-1">{item.serviceCompleted}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <button
              onClick={() => {
                onNavigate('gallery');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-bold uppercase tracking-wider text-white transition-colors"
            >
              <span>View Complete Portfolio (All Vehicles)</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </button>
          </div>
        </div>
      </section>

      {/* Lightbox for gallery preview */}
      <GalleryLightbox
        items={filteredGallery}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onPrev={() => setLightboxIndex((prev) => (prev > 0 ? prev - 1 : filteredGallery.length - 1))}
        onNext={() => setLightboxIndex((prev) => (prev < filteredGallery.length - 1 ? prev + 1 : 0))}
        onBookService={(name) => onOpenBooking(name)}
      />

      {/* ---------------- 10. TESTIMONIALS SECTION ---------------- */}
      <section id="testimonials-section" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800 pb-8">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400">
              Verified Client Feedback
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
              Trusted by Discerning Owners
            </h2>
            <p className="text-sm text-slate-400">
              Read real impressions from owners of Porsche, Tesla, BMW, Ferrari, and Range Rover vehicles.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-2">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs font-bold text-white">4.9 / 5 Rating</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between space-y-4 hover:border-slate-700 transition-colors"
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
                  className="w-10 h-10 rounded-full object-cover border border-slate-700"
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
      </section>

      {/* ---------------- 11. PRICING SECTION ---------------- */}
      <section id="pricing-section" className="py-20 bg-slate-950 border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400">
              Clear & Transparent
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
              Detailing & Protection Packages
            </h2>
            <p className="text-sm text-slate-400">
              No hidden fees. Every package is fully itemized and backed by our satisfaction guarantee.
            </p>
          </div>

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
                    <span>Estimated Duration: <strong>{pkg.duration}</strong></span>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">{pkg.description}</p>

                  {/* Inclusions list */}
                  <div className="space-y-2 pt-2 border-t border-slate-800">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-300 block">
                      Included in this package:
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
                    <span>Select & Book Package</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pricing Disclaimer Requirement */}
          <div className="text-center pt-2">
            <p className="text-xs text-slate-400 max-w-2xl mx-auto italic">
              * Disclaimer: Pricing shown is for demonstration purposes and may vary based on vehicle size, condition, and selected services. Final quotes are confirmed during check-in.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------- 12. BOOKING / QUOTE REQUEST SECTION ---------------- */}
      <section id="booking-quote-section" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BookingSection />
      </section>

      {/* ---------------- 13. LOCATION & SERVICE AREA SECTION ---------------- */}
      <section id="location-section" className="py-20 bg-slate-950 border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400">
              Studio & Mobile Reach
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
              Studio Location & Service Coverage
            </h2>
            <p className="text-sm text-slate-400">
              Drop off your vehicle at our climate-controlled Costa Mesa studio or request our fully self-contained mobile unit at your home.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Location Details Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">Apex Flagship Studio</h3>
                    <p className="text-xs text-slate-300 mt-1">{BUSINESS_CONFIG.address.street}</p>
                    <p className="text-xs text-slate-400">
                      {BUSINESS_CONFIG.address.city}, {BUSINESS_CONFIG.address.state} {BUSINESS_CONFIG.address.zip}
                    </p>
                  </div>
                </div>

                <div className="space-y-2 text-xs pt-2 border-t border-slate-800">
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="text-slate-400">Studio Phone:</span>
                    <a href={`tel:${BUSINESS_CONFIG.phoneRaw}`} className="text-amber-400 font-semibold hover:underline">
                      {BUSINESS_CONFIG.phone}
                    </a>
                  </div>
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="text-slate-400">Email:</span>
                    <a href={`mailto:${BUSINESS_CONFIG.email}`} className="text-slate-200 hover:underline">
                      {BUSINESS_CONFIG.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Operating Hours Card */}
              <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3 text-xs">
                <div className="flex items-center gap-2 text-amber-400 font-bold uppercase tracking-wider">
                  <Clock className="w-4 h-4" />
                  <span>Studio Hours of Operation</span>
                </div>
                <div className="space-y-1.5 text-slate-300">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Monday – Friday:</span>
                    <span className="font-semibold">7:30 AM – 6:30 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Saturday:</span>
                    <span className="font-semibold">8:00 AM – 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Sunday:</span>
                    <span className="text-amber-400 font-medium">By Appointment Only</span>
                  </div>
                </div>
              </div>

              {/* Mobile Service Areas */}
              <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                  <Truck className="w-4 h-4" />
                  <span>Mobile Detailing Coverage</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {BUSINESS_CONFIG.serviceAreas.map((area) => (
                    <span
                      key={area}
                      className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 text-xs"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Simulated Google Maps Placeholder View */}
            <div className="lg:col-span-7">
              <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80"
                  alt="Apex Studio Location Map"
                  className="w-full h-full object-cover filter contrast-125 brightness-75 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>

                {/* Pin Card on Map */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 rounded-2xl bg-slate-950/90 border border-amber-500/50 backdrop-blur-xl shadow-2xl flex items-center gap-3 text-left">
                  <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center shadow-lg">
                    <MapPin className="w-5 h-5 fill-slate-950" />
                  </div>
                  <div>
                    <span className="text-xs font-black uppercase text-amber-400">Apex Auto Detail Studio</span>
                    <p className="text-xs text-white font-medium">{BUSINESS_CONFIG.address.street}</p>
                    <p className="text-[10px] text-slate-400">{BUSINESS_CONFIG.address.city}, CA 92626</p>
                  </div>
                </div>

                <div className="absolute bottom-4 right-4">
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950/80 text-xs font-semibold text-white border border-slate-700 hover:border-amber-400 transition-colors"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3 h-3 text-amber-400" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- 14. FAQ ACCORDION SECTION (8+ QUESTIONS) ---------------- */}
      <section id="faq-section" className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-slate-400">
            Everything you need to know about our techniques, ceramic coatings, timeframes, and mobile services.
          </p>
        </div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 overflow-hidden transition-colors hover:border-slate-700"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-white">
                    {faq.question}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-amber-400 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ---------------- 15. FINAL HIGH-CONVERSION CTA ---------------- */}
      <section id="final-cta-section" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-slate-950 via-slate-900 to-amber-950/40 border border-amber-500/30 p-8 sm:p-14 text-center space-y-6 shadow-2xl">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mx-auto text-amber-400">
            <Sparkles className="w-6 h-6 stroke-[2.5]" />
          </div>

          <div className="space-y-2 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
              Ready to Bring Your Vehicle Back to Its Best?
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              Schedule your studio appointment or mobile detail today. Transparent pricing, master craftsmanship, and guaranteed showroom results.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onOpenBooking()}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-extrabold text-xs sm:text-sm uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 shadow-xl shadow-amber-500/25 flex items-center justify-center gap-2 cursor-pointer hover:scale-105 transition-transform"
            >
              <Calendar className="w-4 h-4 text-slate-950" />
              <span>Book Your Detail</span>
            </button>

            <a
              href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-xs sm:text-sm text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 flex items-center justify-center gap-2 transition-colors"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call ({BUSINESS_CONFIG.phone})</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
