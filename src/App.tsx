import React, { useState, useEffect } from 'react';
import { PageId, VehicleSize } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { StickyMobileBar } from './components/StickyMobileBar';
import { SEOHead } from './components/SEOHead';

// Pages
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { PricingPage } from './pages/PricingPage';
import { CeramicCoatingPage } from './pages/CeramicCoatingPage';
import { PaintCorrectionPage } from './pages/PaintCorrectionPage';
import { GalleryPage } from './pages/GalleryPage';
import { AboutPage } from './pages/AboutPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { FAQPage } from './pages/FAQPage';
import { ContactBookingPage } from './pages/ContactBookingPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [bookingPrefill, setBookingPrefill] = useState<{
    serviceId?: string;
    vehicleType?: VehicleSize;
  }>({});

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBooking = (serviceId?: string, vehicleType?: VehicleSize) => {
    setBookingPrefill({ serviceId, vehicleType });
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Render current view
  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} onOpenBooking={handleOpenBooking} />;
      case 'services':
        return <ServicesPage onNavigate={handleNavigate} onOpenBooking={handleOpenBooking} />;
      case 'pricing':
        return <PricingPage onNavigate={handleNavigate} onOpenBooking={handleOpenBooking} />;
      case 'ceramic-coating':
        return (
          <CeramicCoatingPage onNavigate={handleNavigate} onOpenBooking={handleOpenBooking} />
        );
      case 'paint-correction':
        return (
          <PaintCorrectionPage onNavigate={handleNavigate} onOpenBooking={handleOpenBooking} />
        );
      case 'gallery':
        return <GalleryPage onNavigate={handleNavigate} onOpenBooking={handleOpenBooking} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigate} onOpenBooking={() => handleOpenBooking()} />;
      case 'reviews':
        return (
          <ReviewsPage onNavigate={handleNavigate} onOpenBooking={() => handleOpenBooking()} />
        );
      case 'faq':
        return <FAQPage onNavigate={handleNavigate} onOpenBooking={() => handleOpenBooking()} />;
      case 'contact':
        return (
          <ContactBookingPage
            initialServiceId={bookingPrefill.serviceId}
            initialVehicleType={bookingPrefill.vehicleType}
          />
        );
      default:
        return <HomePage onNavigate={handleNavigate} onOpenBooking={handleOpenBooking} />;
    }
  };

  return (
    <div id="apex-app-root" className="min-h-screen bg-[#080C14] text-slate-100 flex flex-col selection:bg-amber-500 selection:text-slate-950 font-sans antialiased">
      {/* Dynamic SEO & Schema.org JSON-LD */}
      <SEOHead currentPage={currentPage} />

      {/* Sticky Header Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Main Page Content */}
      <main id="main-content" className="flex-1">
        {renderCurrentPage()}
      </main>

      {/* Comprehensive Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Sticky Mobile Conversion Bar */}
      <StickyMobileBar
        onOpenBooking={() => handleOpenBooking()}
        onOpenQuote={() => handleOpenBooking()}
      />
    </div>
  );
}
