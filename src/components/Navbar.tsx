import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, Shield, Sparkles, ChevronDown } from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS_CONFIG } from '../data/businessConfig';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenBooking: (serviceId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenBooking,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: PageId; label: string; hasDropdown?: boolean }[] = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services', hasDropdown: true },
    { id: 'pricing', label: 'Pricing' },
    { id: 'ceramic-coating', label: 'Ceramic Coating' },
    { id: 'paint-correction', label: 'Paint Correction' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'about', label: 'About' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (pageId: PageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080C14]/90 backdrop-blur-md border-b border-slate-800/80 shadow-2xl py-3'
          : 'bg-gradient-to-b from-[#080C14]/95 to-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            id="nav-logo-btn"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group text-left cursor-pointer focus:outline-none"
            aria-label="Apex Auto Detail Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform duration-300 border border-amber-400/30">
              <Sparkles className="w-5 h-5 text-slate-950 stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-extrabold text-lg sm:text-xl tracking-wider text-white uppercase group-hover:text-amber-400 transition-colors">
                  APEX
                </span>
                <span className="text-xs font-semibold px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 tracking-wider">
                  STUDIO
                </span>
              </div>
              <p className="text-[10px] tracking-[0.2em] text-slate-400 uppercase font-medium">
                Auto Detail & Ceramic
              </p>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              if (link.hasDropdown) {
                return (
                  <div
                    key={link.id}
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <button
                      id={`nav-link-${link.id}`}
                      onClick={() => handleNavClick(link.id)}
                      className={`px-3 py-2 text-xs 2xl:text-sm font-medium tracking-wide rounded-lg flex items-center gap-1 transition-colors cursor-pointer ${
                        isActive
                          ? 'text-amber-400 bg-amber-500/10'
                          : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                      }`}
                    >
                      {link.label}
                      <ChevronDown className="w-3.5 h-3.5 opacity-70" />
                    </button>

                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-0 mt-1 w-64 rounded-xl bg-slate-900/95 backdrop-blur-xl border border-slate-800 shadow-2xl p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                        <button
                          onClick={() => handleNavClick('services')}
                          className="w-full text-left px-3 py-2.5 rounded-lg text-xs font-semibold text-amber-400 hover:bg-slate-800 flex items-center justify-between"
                        >
                          <span>All Detailing Services</span>
                          <span className="text-[10px] bg-amber-500/20 px-1.5 py-0.5 rounded">6 Packages</span>
                        </button>
                        <div className="h-px bg-slate-800 my-1"></div>
                        <button
                          onClick={() => handleNavClick('ceramic-coating')}
                          className="w-full text-left px-3 py-2 rounded-lg text-xs text-slate-300 hover:text-white hover:bg-slate-800/70"
                        >
                          9H Ceramic Coating (3-7 Yr)
                        </button>
                        <button
                          onClick={() => handleNavClick('paint-correction')}
                          className="w-full text-left px-3 py-2 rounded-lg text-xs text-slate-300 hover:text-white hover:bg-slate-800/70"
                        >
                          Multi-Stage Paint Correction
                        </button>
                        <button
                          onClick={() => handleNavClick('pricing')}
                          className="w-full text-left px-3 py-2 rounded-lg text-xs text-slate-300 hover:text-white hover:bg-slate-800/70"
                        >
                          Transparent Pricing Calculator
                        </button>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3 py-2 text-xs 2xl:text-sm font-medium tracking-wide rounded-lg transition-colors cursor-pointer ${
                    isActive
                      ? 'text-amber-400 bg-amber-500/10 font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <a
              id="nav-phone-link"
              href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
              className="flex items-center gap-2 text-slate-300 hover:text-amber-400 transition-colors text-xs font-semibold px-3 py-2 rounded-lg bg-slate-900/60 border border-slate-800 hover:border-slate-700"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{BUSINESS_CONFIG.phone}</span>
            </a>

            <button
              id="nav-book-btn"
              onClick={() => onOpenBooking()}
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs tracking-wider text-slate-950 uppercase bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-slate-950" />
              <span>Book Your Detail</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <a
              id="mobile-phone-quick-dial"
              href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-amber-400 hover:bg-slate-800"
              aria-label="Call Apex Auto Detail"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 hover:text-white hover:bg-slate-800"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0B101B]/98 backdrop-blur-2xl border-b border-slate-800 shadow-2xl px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-2 mb-4">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  id={`mobile-nav-link-${link.id}`}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left px-3.5 py-2.5 rounded-lg text-xs font-medium tracking-wide transition-colors ${
                    isActive
                      ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30 font-semibold'
                      : 'text-slate-300 hover:bg-slate-800/80 hover:text-white bg-slate-900/50'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          <div className="pt-2 border-t border-slate-800/80 flex flex-col gap-2.5">
            <button
              id="mobile-drawer-book-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950 flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Your Detail Now</span>
            </button>

            <a
              id="mobile-drawer-call-btn"
              href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
              className="w-full py-2.5 rounded-xl font-semibold text-xs text-center border border-slate-700 bg-slate-900 text-slate-200 flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Call Concierge: {BUSINESS_CONFIG.phone}</span>
            </a>

            <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-1">
              <Shield className="w-3.5 h-3.5 text-amber-400" />
              <span>IDA Certified Master Detailer • $2M Insured</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
