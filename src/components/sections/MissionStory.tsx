'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Founder } from '@/lib/content';

interface MissionStoryProps {
  founder: Founder;
}

export function MissionStory({ founder }: MissionStoryProps) {
  return (
    <section className="section-padding bg-ivory-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070"
                alt={founder.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/40 to-transparent" />
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-terracotta-500/10 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-forest-500/10 rounded-2xl -z-10" />

            {/* Quote overlay */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg"
            >
              <p className="font-serif text-lg text-charcoal-700 italic">
                &ldquo;Amar es servir. Servir es transformar. Transformar es sembrar esperanza.&rdquo;
              </p>
              <p className="font-sans text-sm text-terracotta-500 mt-2 font-medium">
                — {founder.name}
              </p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block font-sans text-sm font-semibold text-terracotta-500 uppercase tracking-wider mb-4">
              La Historia
            </span>

            <h2 className="font-serif text-charcoal-800 mb-6">
              Una misión nacida del corazón
            </h2>

            <div className="space-y-4 text-charcoal-600 leading-relaxed mb-8">
              <p className="text-lg">
                {founder.bio}
              </p>
              <p>
                Lo que comenzó como un viaje personal se ha convertido en un movimiento
                de amor que trasciende fronteras. Cada año, Luis regresa a Uganda no solo
                para construir infraestructura, sino para tejer lazos humanos que perduran
                más allá de las distancias.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/sobre-luis"
                className="btn-primary inline-flex items-center"
              >
                Conocer a Luis
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/proyectos"
                className="btn-outline inline-flex items-center"
              >
                Ver proyectos
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
