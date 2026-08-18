import React from 'react';
import { Sparkles, Phone, Mail, MapPin, Clock, Shield, Star, Instagram, Facebook, Youtube } from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS_CONFIG, CORE_SERVICES } from '../data/businessConfig';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: (serviceId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking }) => {
  const quickLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'All Services' },
    { id: 'pricing', label: 'Pricing Calculator' },
    { id: 'ceramic-coating', label: '9H Ceramic Coating' },
    { id: 'paint-correction', label: 'Multi-Stage Paint Correction' },
    { id: 'gallery', label: 'Client Gallery' },
    { id: 'about', label: 'About Our Studio' },
    { id: 'reviews', label: 'Customer Reviews' },
    { id: 'faq', label: 'Frequently Asked Questions' },
    { id: 'contact', label: 'Book Appointment' },
  ];

  return (
    <footer id="main-footer" className="bg-[#05080E] border-t border-slate-800/80 text-slate-400 pt-16 pb-24 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/60">
          {/* Column 1: Brand & Philosophy */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center shadow-lg shadow-amber-500/20 border border-amber-400/30">
                <Sparkles className="w-5 h-5 text-slate-950 stroke-[2.5]" />
              </div>
              <div>
                <span className="font-heading font-extrabold text-xl tracking-wider text-white uppercase">
                  APEX AUTO DETAIL
                </span>
                <p className="text-[10px] tracking-[0.2em] text-slate-400 uppercase font-medium">
                  Luxury Detailing & Ceramic Studio
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed max-w-md">
              Restoring, protecting, and elevating premium and exotic vehicles in Southern California. 
              Master-level IDA certified craftsmanship, climate-controlled studio, and guaranteed perfection.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-300">
                <Shield className="w-3.5 h-3.5 text-amber-400" />
                <span>$2M Fully Insured</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-300">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>4.9 / 5 (380+ Verified Reviews)</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={BUSINESS_CONFIG.socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-amber-400 hover:border-amber-500/40 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={BUSINESS_CONFIG.socialLinks.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-amber-400 hover:border-amber-500/40 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={BUSINESS_CONFIG.socialLinks.youtube}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-amber-400 hover:border-amber-500/40 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-200">Navigation</h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.slice(0, 5).map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      onNavigate(link.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-slate-400 hover:text-amber-400 transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              {quickLinks.slice(5).map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      onNavigate(link.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-slate-400 hover:text-amber-400 transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Core Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-200">Services</h4>
            <ul className="space-y-2 text-sm">
              {CORE_SERVICES.map((svc) => (
                <li key={svc.id}>
                  <button
                    onClick={() => {
                      onNavigate('services');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-slate-400 hover:text-amber-400 transition-colors text-left"
                  >
                    {svc.title}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => onOpenBooking()}
                  className="text-amber-400 font-semibold hover:underline text-left pt-1"
                >
                  + Custom Bespoke Quote
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Studio Info & Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-200">Studio & Concierge</h4>
            <div className="space-y-3 text-sm">
              <a
                href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
                className="flex items-start gap-2.5 text-slate-300 hover:text-amber-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">{BUSINESS_CONFIG.phone}</div>
                  <div className="text-[11px] text-slate-400">Direct Concierge Line</div>
                </div>
              </a>

              <a
                href={`mailto:${BUSINESS_CONFIG.email}`}
                className="flex items-start gap-2.5 text-slate-300 hover:text-amber-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-slate-200">{BUSINESS_CONFIG.email}</div>
                  <div className="text-[11px] text-slate-400">Quotes & Inquiries</div>
                </div>
              </a>

              <div className="flex items-start gap-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-slate-200">{BUSINESS_CONFIG.address.street}</div>
                  <div className="text-slate-400 text-xs">
                    {BUSINESS_CONFIG.address.city}, {BUSINESS_CONFIG.address.state} {BUSINESS_CONFIG.address.zip}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2.5 text-slate-300">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div className="text-xs text-slate-400">
                  <div>{BUSINESS_CONFIG.hours.weekdays}</div>
                  <div>{BUSINESS_CONFIG.hours.saturday}</div>
                  <div>{BUSINESS_CONFIG.hours.sunday}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Areas & Certifications Bar */}
        <div className="py-6 border-b border-slate-800/60 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-wrap items-center gap-1.5 justify-center md:justify-start">
            <span className="text-slate-200 font-semibold">Service Coverage:</span>
            {BUSINESS_CONFIG.serviceAreas.map((area, idx) => (
              <span key={area} className="inline-flex items-center">
                <span className="hover:text-slate-200">{area}</span>
                {idx < BUSINESS_CONFIG.serviceAreas.length - 1 && (
                  <span className="mx-1 text-slate-700">•</span>
                )}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2 text-slate-400">
            <span>Official Installer:</span>
            <span className="text-slate-200 font-medium">Ceramic Pro</span>
            <span>•</span>
            <span className="text-slate-200 font-medium">Gtechniq</span>
            <span>•</span>
            <span className="text-slate-200 font-medium">XPEL</span>
          </div>
        </div>

        {/* Bottom Legal Notice */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} {BUSINESS_CONFIG.name}. All Rights Reserved.</p>
          <div className="flex items-center gap-4 text-slate-400">
            <button
              onClick={() => {
                onNavigate('faq');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-slate-300"
            >
              FAQ
            </button>
            <span>•</span>
            <button
              onClick={() => {
                onNavigate('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-slate-300"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => {
                onNavigate('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-slate-300"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
