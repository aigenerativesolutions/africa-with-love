import { Metadata } from 'next';
import { getSiteConfig } from '@/lib/content';
import { ContactSection } from '@/components/sections/ContactSection';
import { ContactMap } from './ContactMap';

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Contáctanos para ser voluntario, hacer preguntas sobre donaciones, o simplemente conocer más sobre Africa With Love.',
};

export default function ContactPage() {
  const siteConfig = getSiteConfig();

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-12 bg-gradient-to-b from-forest-600 to-forest-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="font-serif mb-4">Hablemos</h1>
          <p className="font-sans text-xl text-white/90 max-w-2xl mx-auto">
            Estamos aquí para responder tus preguntas y conectarte con nuestra misión.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection contact={siteConfig.contact} variant="full" />

      {/* Map Section */}
      <ContactMap />
    </>
  );
}
