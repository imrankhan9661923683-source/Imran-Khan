import React from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Truck,
  Building2,
  Calendar,
  ExternalLink,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { PageId, VehicleSize } from '../types';
import { BUSINESS_CONFIG } from '../data/businessConfig';
import { BookingSection } from '../components/BookingSection';

interface ContactBookingPageProps {
  initialServiceId?: string;
  initialVehicleType?: VehicleSize;
}

export const ContactBookingPage: React.FC<ContactBookingPageProps> = ({
  initialServiceId,
  initialVehicleType,
}) => {
  return (
    <div id="contact-page-root" className="pt-28 pb-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest">
          <Calendar className="w-3.5 h-3.5" />
          <span>Concierge Scheduling & Inquiries</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight">
          Book Your Detail or Get a Quote
        </h1>
        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Schedule your studio service or mobile detailing session. We will review your vehicle specifications and confirm your preferred time slot promptly.
        </p>
      </div>

      {/* Main Grid: Left contact/info, Right booking form */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <BookingSection
          initialServiceId={initialServiceId}
          initialVehicleType={initialVehicleType}
        />

        {/* Location & Studio Information */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-8 border-t border-slate-800">
          <div className="lg:col-span-6 space-y-6">
            <div className="p-8 rounded-3xl bg-slate-900/70 border border-slate-800 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Apex Flagship Detailing Studio</h3>
                  <p className="text-xs text-amber-400 font-semibold">Climate-Controlled Cleanroom Facility</p>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                  <div>
                    <strong className="text-white block">Physical Studio Address:</strong>
                    <span>{BUSINESS_CONFIG.address.street}</span>
                    <br />
                    <span>
                      {BUSINESS_CONFIG.address.city}, {BUSINESS_CONFIG.address.state} {BUSINESS_CONFIG.address.zip}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                  <div>
                    <strong className="text-white block">Concierge Phone:</strong>
                    <a href={`tel:${BUSINESS_CONFIG.phoneRaw}`} className="text-amber-400 hover:underline">
                      {BUSINESS_CONFIG.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                  <div>
                    <strong className="text-white block">Direct Inquiries:</strong>
                    <a href={`mailto:${BUSINESS_CONFIG.email}`} className="text-slate-200 hover:underline">
                      {BUSINESS_CONFIG.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                  <div>
                    <strong className="text-white block">Studio Hours:</strong>
                    <span>Monday – Friday: 7:30 AM – 6:30 PM</span>
                    <br />
                    <span>Saturday: 8:00 AM – 5:00 PM</span>
                    <br />
                    <span className="text-slate-400">Sunday: Closed for private collector appointments</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Coverage areas */}
            <div className="p-6 rounded-3xl bg-slate-900/70 border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <Truck className="w-4 h-4" />
                <span>Mobile Detailing Coverage Area</span>
              </div>
              <p className="text-xs text-slate-400">
                Our fully self-contained mobile vans carry 100 gallons of deionized water and quiet onboard generators across:
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
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

          {/* Interactive Map Visual */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80"
                alt="Costa Mesa Studio Location Map"
                className="w-full h-full object-cover filter contrast-125 brightness-75 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-5 rounded-2xl bg-slate-950/95 border border-amber-500/50 backdrop-blur-xl shadow-2xl flex items-center gap-4 text-left">
                <div className="w-12 h-12 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center shadow-lg">
                  <MapPin className="w-6 h-6 fill-slate-950" />
                </div>
                <div>
                  <span className="text-xs font-black uppercase text-amber-400">Apex Auto Detail Studio</span>
                  <p className="text-xs text-white font-medium">{BUSINESS_CONFIG.address.street}</p>
                  <p className="text-[10px] text-slate-400">{BUSINESS_CONFIG.address.city}, CA {BUSINESS_CONFIG.address.zip}</p>
                </div>
              </div>

              <div className="absolute bottom-4 right-4">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-950/90 text-xs font-bold text-white border border-slate-700 hover:border-amber-400 transition-colors shadow-lg"
                >
                  <span>Open Directions</span>
                  <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
