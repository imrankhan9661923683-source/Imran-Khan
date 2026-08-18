export type PageId =
  | 'home'
  | 'services'
  | 'pricing'
  | 'ceramic-coating'
  | 'paint-correction'
  | 'gallery'
  | 'about'
  | 'reviews'
  | 'faq'
  | 'contact';

export interface BusinessConfig {
  name: string;
  tagline: string;
  subtagline: string;
  phone: string;
  phoneRaw: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    display: string;
  };
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  stats: {
    rating: number;
    reviewCount: number;
    vehiclesDetailed: number;
    yearsExperience: number;
    guaranteeRate: number;
  };
  serviceAreas: string[];
  socialLinks: {
    instagram: string;
    facebook: string;
    youtube: string;
    tiktok: string;
  };
  certifications: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  startingPrice: number;
  duration: string;
  image: string;
  popular?: boolean;
  category: 'detailing' | 'protection' | 'correction' | 'maintenance';
  inclusions: string[];
  processHighlights: string[];
  idealFor: string;
}

export interface PricingPackage {
  id: string;
  name: string;
  subtitle: string;
  startingPrice: number;
  duration: string;
  badge?: string;
  isPopular?: boolean;
  description: string;
  inclusions: string[];
  excludedFeatures?: string[];
  recommendedFor: string;
}

export interface AddOnService {
  id: string;
  name: string;
  description: string;
  price: number;
  durationMinutes: number;
  iconName: string;
}

export type BeforeAfterCategory = 'interior' | 'exterior' | 'paint-correction' | 'ceramic-coating';

export interface BeforeAfterItem {
  id: string;
  title: string;
  category: BeforeAfterCategory;
  categoryLabel: string;
  carModel: string;
  defectDescription: string;
  resultDescription: string;
  beforeImage: string;
  afterImage: string;
}

export type GalleryCategory = 'all' | 'interior' | 'exterior' | 'paint-correction' | 'ceramic-coating' | 'exotics';

export interface GalleryItem {
  id: string;
  title: string;
  vehicle: string;
  category: GalleryCategory;
  categoryLabel: string;
  image: string;
  serviceCompleted: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  vehicle: string;
  service: string;
  rating: number;
  date: string;
  text: string;
  avatar: string;
  verified: boolean;
}

export interface FAQItem {
  id: string;
  category: 'appointments' | 'duration' | 'mobile' | 'vehicle_size' | 'ceramic_coating' | 'paint_correction' | 'pricing' | 'maintenance';
  categoryLabel: string;
  question: string;
  answer: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}

export interface FeatureCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
  highlight: string;
}

export type VehicleSize = 'coupe' | 'sedan' | 'mid_suv' | 'full_suv' | 'exotic';

export interface VehicleSizeOption {
  id: VehicleSize;
  name: string;
  examples: string;
  multiplier: number;
  icon: string;
}

export interface BookingFormData {
  name: string;
  phone: string;
  email: string;
  vehicleMake: string;
  vehicleModel: string;
  vehicleYear: string;
  vehicleType: VehicleSize;
  selectedService: string;
  selectedAddOns: string[];
  preferredDate: string;
  preferredTime: string;
  serviceLocation: 'studio' | 'mobile';
  address: string;
  additionalNotes: string;
}
