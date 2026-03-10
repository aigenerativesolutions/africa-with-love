import Link from 'next/link';
import { Heart, Mail, Phone, MapPin, Instagram, Facebook, Youtube } from 'lucide-react';
import { getSiteConfig } from '@/lib/content';

export function Footer() {
  const siteConfig = getSiteConfig();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-800 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Heart className="w-8 h-8 text-terracotta-400" fill="currentColor" />
              <span className="font-serif text-2xl font-semibold">
                Africa With Love
              </span>
            </Link>
            <p className="text-sand-300 leading-relaxed mb-6">
              {siteConfig.tagline}. {siteConfig.description}
            </p>
            <div className="flex gap-4">
              {siteConfig.contact.instagram && (
                <a
                  href={siteConfig.contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-charcoal-700 flex items-center justify-center text-sand-300 hover:bg-terracotta-500 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              )}
              {siteConfig.contact.facebook && (
                <a
                  href={siteConfig.contact.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-charcoal-700 flex items-center justify-center text-sand-300 hover:bg-terracotta-500 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              )}
              {siteConfig.contact.youtube && (
                <a
                  href={siteConfig.contact.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-charcoal-700 flex items-center justify-center text-sand-300 hover:bg-terracotta-500 hover:text-white transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">
              Enlaces
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-sand-300 hover:text-terracotta-400 transition-colors"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre-luis"
                  className="text-sand-300 hover:text-terracotta-400 transition-colors"
                >
                  Sobre Luis
                </Link>
              </li>
              <li>
                <Link
                  href="/proyectos"
                  className="text-sand-300 hover:text-terracotta-400 transition-colors"
                >
                  Proyectos
                </Link>
              </li>
              <li>
                <Link
                  href="/donar"
                  className="text-sand-300 hover:text-terracotta-400 transition-colors"
                >
                  Donar
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="text-sand-300 hover:text-terracotta-400 transition-colors"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">
              Contacto
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-start gap-3 text-sand-300 hover:text-terracotta-400 transition-colors"
                >
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>{siteConfig.contact.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="flex items-start gap-3 text-sand-300 hover:text-terracotta-400 transition-colors"
                >
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>{siteConfig.contact.phone}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sand-300">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>{siteConfig.contact.address}</span>
                </div>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">
              Únete a la misión
            </h4>
            <p className="text-sand-300 mb-6">
              Tu apoyo hace posible que sigamos construyendo esperanza en Uganda.
            </p>
            <Link
              href="/donar"
              className="inline-flex items-center justify-center px-6 py-3 bg-terracotta-500 text-white font-sans font-medium rounded-full transition-all duration-300 hover:bg-terracotta-600 hover:shadow-lg"
            >
              <Heart className="w-5 h-5 mr-2" />
              Donar ahora
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-charcoal-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sand-400 text-sm">
              &copy; {currentYear} Africa With Love. Todos los derechos reservados.
            </p>
            <p className="text-sand-400 text-sm flex items-center gap-1">
              Hecho con <Heart className="w-4 h-4 text-terracotta-400" fill="currentColor" /> desde Chile
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
