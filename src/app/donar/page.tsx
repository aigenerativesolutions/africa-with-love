import { Metadata } from 'next';
import { getSiteConfig } from '@/lib/content';
import { DonationSection } from '@/components/sections/DonationSection';
import { DonationFAQ } from './DonationFAQ';
import { DonationImpact } from './DonationImpact';

export const metadata: Metadata = {
  title: 'Donar',
  description: 'Haz tu donación a Africa With Love y ayuda a transformar comunidades en Uganda. Tu aporte construye escuelas, provee agua limpia y crea oportunidades.',
};

export default function DonatePage() {
  const siteConfig = getSiteConfig();

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-12 bg-gradient-to-b from-terracotta-600 to-terracotta-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="font-serif mb-4">Haz la diferencia</h1>
          <p className="font-sans text-xl text-white/90 max-w-2xl mx-auto">
            Cada donación, sin importar el monto, construye esperanza y transforma vidas.
          </p>
        </div>
      </section>

      {/* Donation Section */}
      <DonationSection donation={siteConfig.donation} variant="full" />

      {/* Impact Section */}
      <DonationImpact />

      {/* FAQ */}
      <DonationFAQ />
    </>
  );
}
