import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  Car,
  User,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Sparkles,
  Shield,
  Send,
  Building2,
  Truck,
} from 'lucide-react';
import { VehicleSize, BookingFormData } from '../types';
import { BUSINESS_CONFIG, CORE_SERVICES, ADD_ON_SERVICES, VEHICLE_SIZES } from '../data/businessConfig';

interface BookingSectionProps {
  initialServiceId?: string;
  initialVehicleType?: VehicleSize;
  initialAddOns?: string[];
  initialEstimate?: number;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  initialServiceId = 'full-detail',
  initialVehicleType = 'sedan',
  initialAddOns = [],
  initialEstimate,
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    phone: '',
    email: '',
    vehicleMake: '',
    vehicleModel: '',
    vehicleYear: new Date().getFullYear().toString(),
    vehicleType: initialVehicleType,
    selectedService: initialServiceId,
    selectedAddOns: initialAddOns,
    preferredDate: '',
    preferredTime: '08:30 AM',
    serviceLocation: 'studio',
    address: '',
    additionalNotes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState('');

  const timeSlots = [
    '08:00 AM – Early Drop-off',
    '10:30 AM – Morning Session',
    '01:00 PM – Midday Session',
    '03:30 PM – Afternoon Slot',
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddOnToggle = (id: string) => {
    setFormData((prev) => ({
      ...prev,
      selectedAddOns: prev.selectedAddOns.includes(id)
        ? prev.selectedAddOns.filter((item) => item !== id)
        : [...prev.selectedAddOns, id],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API booking dispatch & calendar hold
    setTimeout(() => {
      const code = `APX-${Math.floor(1000 + Math.random() * 9000)}`;
      setConfirmationCode(code);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      vehicleMake: '',
      vehicleModel: '',
      vehicleYear: new Date().getFullYear().toString(),
      vehicleType: 'sedan',
      selectedService: 'full-detail',
      selectedAddOns: [],
      preferredDate: '',
      preferredTime: '08:30 AM',
      serviceLocation: 'studio',
      address: '',
      additionalNotes: '',
    });
  };

  const currentSelectedService =
    CORE_SERVICES.find((s) => s.id === formData.selectedService) || CORE_SERVICES[2];

  if (isSubmitted) {
    return (
      <div id="booking-confirmation-view" className="max-w-3xl mx-auto bg-slate-900/90 rounded-3xl border border-emerald-500/30 p-8 sm:p-10 shadow-2xl backdrop-blur-xl text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400">
          <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-400">
            Booking & Quote Request Received
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            Thank You, {formData.name || 'Valued Client'}!
          </h3>
          <p className="text-sm text-slate-300 max-w-lg mx-auto">
            Your appointment reservation has been dispatched to our concierge team. We will call and text your mobile number (<span className="text-white font-semibold">{formData.phone}</span>) shortly to finalize inspection check-in details.
          </p>
        </div>

        {/* Confirmation Details Card */}
        <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 text-left space-y-4 max-w-xl mx-auto">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <span className="text-xs text-slate-400 font-medium">Reservation Code:</span>
            <span className="text-sm font-mono font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded border border-amber-500/30">
              {confirmationCode}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4 text-xs">
            <div>
              <span className="text-slate-400 block">Vehicle:</span>
              <span className="font-semibold text-white">
                {formData.vehicleYear} {formData.vehicleMake} {formData.vehicleModel}
              </span>
            </div>
            <div>
              <span className="text-slate-400 block">Service Package:</span>
              <span className="font-semibold text-white">{currentSelectedService.title}</span>
            </div>
            <div>
              <span className="text-slate-400 block">Preferred Date:</span>
              <span className="font-semibold text-white">{formData.preferredDate || 'Earliest Available'}</span>
            </div>
            <div>
              <span className="text-slate-400 block">Location:</span>
              <span className="font-semibold text-white">
                {formData.serviceLocation === 'studio' ? 'Costa Mesa Studio' : 'Mobile Detailing Unit'}
              </span>
            </div>
          </div>

          {formData.selectedAddOns.length > 0 && (
            <div className="pt-2 border-t border-slate-800 text-xs">
              <span className="text-slate-400 block mb-1">Add-ons Requested:</span>
              <div className="flex flex-wrap gap-1.5">
                {formData.selectedAddOns.map((id) => {
                  const item = ADD_ON_SERVICES.find((a) => a.id === id);
                  return item ? (
                    <span key={id} className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[11px]">
                      {item.name}
                    </span>
                  ) : null;
                })}
              </div>
            </div>
          )}
        </div>

        {/* Action Options */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <a
            href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
            className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950 flex items-center justify-center gap-2 shadow-lg"
          >
            <Phone className="w-4 h-4" />
            <span>Call Concierge Now ({BUSINESS_CONFIG.phone})</span>
          </a>

          <button
            onClick={handleReset}
            className="w-full sm:w-auto px-6 py-3 rounded-xl font-semibold text-xs text-slate-300 hover:text-white border border-slate-700 bg-slate-900 hover:bg-slate-800 transition-colors"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div id="booking-form-wrapper" className="w-full bg-slate-900/80 rounded-3xl border border-slate-800 p-6 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-xl">
      <div className="max-w-3xl mx-auto mb-8 text-center space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Priority Studio & Mobile Scheduling</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Request Your Detail & Custom Quote
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
          Complete the form below to secure your vehicle’s slot. Our master technicians will contact you to confirm timing, vehicle requirements, and exact pricing.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8 max-w-4xl mx-auto">
        {/* Step A: Service Location Choice */}
        <div className="space-y-3">
          <label className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
            <span>1. Service Location</span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setFormData((p) => ({ ...p, serviceLocation: 'studio' }))}
              className={`p-4 rounded-2xl border text-left flex items-start gap-3 transition-colors cursor-pointer ${
                formData.serviceLocation === 'studio'
                  ? 'bg-amber-500/15 border-amber-400 text-white shadow-md'
                  : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700'
              }`}
            >
              <Building2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold text-white block">Apex Studio Drop-Off (Costa Mesa)</span>
                <span className="text-[11px] text-slate-400 block mt-0.5">
                  Climate-controlled dust-free studio, ideal for ceramic curing & deep correction.
                </span>
              </div>
            </button>

            <button
              type="button"
              onClick={() => setFormData((p) => ({ ...p, serviceLocation: 'mobile' }))}
              className={`p-4 rounded-2xl border text-left flex items-start gap-3 transition-colors cursor-pointer ${
                formData.serviceLocation === 'mobile'
                  ? 'bg-amber-500/15 border-amber-400 text-white shadow-md'
                  : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700'
              }`}
            >
              <Truck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold text-white block">Concierge Mobile Detailing</span>
                <span className="text-[11px] text-slate-400 block mt-0.5">
                  We come to your home or office in Orange County with spot-free water & power.
                </span>
              </div>
            </button>
          </div>

          {formData.serviceLocation === 'mobile' && (
            <div className="pt-2 animate-in fade-in duration-200">
              <label htmlFor="booking-address" className="text-xs font-medium text-slate-300 block mb-1">
                Service Address (Home / Office Location in Orange County) *
              </label>
              <div className="relative">
                <MapPin className="w-4 h-4 text-amber-400 absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  id="booking-address"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Street address, City, Zip Code"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>
          )}
        </div>

        {/* Step B: Vehicle Information */}
        <div className="space-y-4">
          <label className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
            <Car className="w-4 h-4" />
            <span>2. Vehicle Specifications</span>
          </label>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div>
              <label htmlFor="vehicleMake" className="text-xs font-medium text-slate-300 block mb-1">
                Make *
              </label>
              <input
                type="text"
                id="vehicleMake"
                name="vehicleMake"
                required
                value={formData.vehicleMake}
                onChange={handleInputChange}
                placeholder="e.g. Porsche, Tesla, BMW"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
              />
            </div>

            <div>
              <label htmlFor="vehicleModel" className="text-xs font-medium text-slate-300 block mb-1">
                Model *
              </label>
              <input
                type="text"
                id="vehicleModel"
                name="vehicleModel"
                required
                value={formData.vehicleModel}
                onChange={handleInputChange}
                placeholder="e.g. 911 GT3, Model S, M4"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
              />
            </div>

            <div>
              <label htmlFor="vehicleYear" className="text-xs font-medium text-slate-300 block mb-1">
                Year *
              </label>
              <input
                type="text"
                id="vehicleYear"
                name="vehicleYear"
                required
                value={formData.vehicleYear}
                onChange={handleInputChange}
                placeholder="e.g. 2024"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
              />
            </div>

            <div>
              <label htmlFor="vehicleType" className="text-xs font-medium text-slate-300 block mb-1">
                Body / Size Class *
              </label>
              <select
                id="vehicleType"
                name="vehicleType"
                value={formData.vehicleType}
                onChange={handleInputChange}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
              >
                {VEHICLE_SIZES.map((size) => (
                  <option key={size.id} value={size.id}>
                    {size.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Step C: Service & Add-Ons Selection */}
        <div className="space-y-4">
          <label className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4" />
            <span>3. Service Package & Desired Add-Ons</span>
          </label>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="selectedService" className="text-xs font-medium text-slate-300 block mb-1">
                Core Service Package *
              </label>
              <select
                id="selectedService"
                name="selectedService"
                value={formData.selectedService}
                onChange={handleInputChange}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
              >
                {CORE_SERVICES.map((svc) => (
                  <option key={svc.id} value={svc.id}>
                    {svc.title} (Starting at ${svc.startingPrice})
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center">
              <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300 w-full">
                <span className="text-amber-400 font-bold block mb-0.5">Package Highlights:</span>
                <span className="line-clamp-2">{currentSelectedService.shortDescription}</span>
              </div>
            </div>
          </div>

          {/* Add-ons checkboxes */}
          <div className="space-y-2 pt-2">
            <span className="text-xs font-medium text-slate-300 block">Select Additional Services:</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
              {ADD_ON_SERVICES.map((addon) => {
                const isChecked = formData.selectedAddOns.includes(addon.id);
                return (
                  <label
                    key={addon.id}
                    className={`p-2.5 rounded-xl border text-xs flex items-center gap-2 cursor-pointer transition-colors ${
                      isChecked
                        ? 'bg-amber-500/10 border-amber-400 text-white'
                        : 'bg-slate-950/50 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => handleAddOnToggle(addon.id)}
                      className="rounded border-slate-700 text-amber-500 focus:ring-amber-400"
                    />
                    <span className="flex-1 line-clamp-1">{addon.name}</span>
                    <span className="text-amber-400 font-bold">+${addon.price}</span>
                  </label>
                );
              })}
            </div>
          </div>
        </div>

        {/* Step D: Preferred Date & Time */}
        <div className="space-y-4">
          <label className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            <span>4. Scheduling Preferences</span>
          </label>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="preferredDate" className="text-xs font-medium text-slate-300 block mb-1">
                Preferred Date *
              </label>
              <input
                type="date"
                id="preferredDate"
                name="preferredDate"
                required
                value={formData.preferredDate}
                onChange={handleInputChange}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
              />
            </div>

            <div>
              <label htmlFor="preferredTime" className="text-xs font-medium text-slate-300 block mb-1">
                Preferred Arrival Window *
              </label>
              <select
                id="preferredTime"
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleInputChange}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
              >
                {timeSlots.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Step E: Contact Information */}
        <div className="space-y-4">
          <label className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
            <User className="w-4 h-4" />
            <span>5. Client Information</span>
          </label>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label htmlFor="clientName" className="text-xs font-medium text-slate-300 block mb-1">
                Full Name *
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  id="clientName"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="e.g. Marcus Vance"
                  className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>

            <div>
              <label htmlFor="clientPhone" className="text-xs font-medium text-slate-300 block mb-1">
                Phone Number (For SMS Updates) *
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                <input
                  type="tel"
                  id="clientPhone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="(949) 555-0192"
                  className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>

            <div>
              <label htmlFor="clientEmail" className="text-xs font-medium text-slate-300 block mb-1">
                Email Address *
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                <input
                  type="email"
                  id="clientEmail"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="name@domain.com"
                  className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="additionalNotes" className="text-xs font-medium text-slate-300 block mb-1">
              Vehicle Condition & Special Requests (Optional)
            </label>
            <textarea
              id="additionalNotes"
              name="additionalNotes"
              rows={3}
              value={formData.additionalNotes}
              onChange={handleInputChange}
              placeholder="Mention paint swirls, pet hair, ceramic coating interest, or specific concerns..."
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 resize-none"
            ></textarea>
          </div>
        </div>

        {/* Submit & Guarantee */}
        <div className="space-y-4 pt-4 border-t border-slate-800">
          <button
            id="submit-booking-quote-btn"
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 px-6 rounded-2xl font-bold text-sm uppercase tracking-wider bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 shadow-xl shadow-amber-500/25 flex items-center justify-center gap-2 cursor-pointer transition-all duration-200 hover:scale-[1.01] disabled:opacity-50"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></span>
                Processing Reservation...
              </span>
            ) : (
              <>
                <Send className="w-4 h-4 text-slate-950" />
                <span>Request My Quote & Reserve Date</span>
              </>
            )}
          </button>

          <div className="flex flex-wrap items-center justify-center gap-6 text-[11px] text-slate-400">
            <div className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-amber-400" />
              <span>Zero obligation estimate</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Prompt phone/SMS confirmation</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>100% Satisfaction Guarantee</span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
