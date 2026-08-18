import React, { useEffect } from 'react';
import { PageId } from '../types';
import { BUSINESS_CONFIG, FAQ_ITEMS, CORE_SERVICES } from '../data/businessConfig';

interface SEOHeadProps {
  currentPage: PageId;
}

export const SEOHead: React.FC<SEOHeadProps> = ({ currentPage }) => {
  useEffect(() => {
    // Dynamic page title mapping
    const titles: Record<PageId, string> = {
      home: `${BUSINESS_CONFIG.name} | Luxury Auto Detailing, Paint Correction & Ceramic Coating`,
      services: `Professional Auto Detailing Services | ${BUSINESS_CONFIG.name}`,
      pricing: `Transparent Detailing & Ceramic Coating Pricing | ${BUSINESS_CONFIG.name}`,
      'ceramic-coating': `9H Ceramic & Graphene Coating (3-7 Yr Warranty) | ${BUSINESS_CONFIG.name}`,
      'paint-correction': `Multi-Stage Paint Correction & Swirl Defect Removal | ${BUSINESS_CONFIG.name}`,
      gallery: `Client Vehicle Gallery & Before/After Portfolio | ${BUSINESS_CONFIG.name}`,
      about: `About Our Master Detailers & Cleanroom Studio | ${BUSINESS_CONFIG.name}`,
      reviews: `Customer Reviews & 5-Star Testimonials | ${BUSINESS_CONFIG.name}`,
      faq: `Frequently Asked Questions | Detailing & Ceramic Care | ${BUSINESS_CONFIG.name}`,
      contact: `Book Detailing Appointment & Studio Location | ${BUSINESS_CONFIG.name}`,
    };

    document.title = titles[currentPage] || `${BUSINESS_CONFIG.name} | Luxury Detailing`;

    // Inject JSON-LD structured data
    const structuredData = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': ['AutoRepair', 'LocalBusiness'],
          '@id': 'https://apexautodetail.com/#business',
          name: BUSINESS_CONFIG.name,
          url: 'https://apexautodetail.com',
          telephone: BUSINESS_CONFIG.phone,
          email: BUSINESS_CONFIG.email,
          priceRange: '$$$',
          image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80',
          address: {
            '@type': 'PostalAddress',
            streetAddress: BUSINESS_CONFIG.address.street,
            addressLocality: BUSINESS_CONFIG.address.city,
            addressRegion: BUSINESS_CONFIG.address.state,
            postalCode: BUSINESS_CONFIG.address.zip,
            addressCountry: 'US',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: '33.6839',
            longitude: '-117.9189',
          },
          openingHoursSpecification: [
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
              opens: '07:30',
              closes: '18:30',
            },
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: 'Saturday',
              opens: '08:00',
              closes: '17:00',
            },
          ],
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: BUSINESS_CONFIG.stats.rating.toString(),
            reviewCount: BUSINESS_CONFIG.stats.reviewCount.toString(),
          },
          areaServed: BUSINESS_CONFIG.serviceAreas.map((area) => ({
            '@type': 'City',
            name: area,
          })),
        },
        {
          '@type': 'Service',
          serviceType: 'Ceramic Coating & Paint Correction',
          provider: {
            '@id': 'https://apexautodetail.com/#business',
          },
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Auto Detailing Services',
            itemListElement: CORE_SERVICES.map((s, index) => ({
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: s.title,
                description: s.shortDescription,
              },
              price: s.startingPrice,
              priceCurrency: 'USD',
              position: index + 1,
            })),
          },
        },
        {
          '@type': 'FAQPage',
          mainEntity: FAQ_ITEMS.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        },
      ],
    };

    let scriptTag = document.getElementById('apex-jsonld-schema') as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'apex-jsonld-schema';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.text = JSON.stringify(structuredData);
  }, [currentPage]);

  return null;
};
