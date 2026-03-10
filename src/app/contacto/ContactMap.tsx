'use client';

import { motion } from 'framer-motion';
import { MapPin, Globe, Heart } from 'lucide-react';

export function ContactMap() {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-charcoal-800 mb-4">
            Desde Chile a Uganda
          </h2>
          <p className="font-sans text-lg text-charcoal-600 max-w-2xl mx-auto">
            Nuestra base está en Chile, pero nuestro corazón late en Uganda.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Chile Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-sand-50 rounded-2xl overflow-hidden"
          >
            <div className="aspect-[16/9] relative">
              <img
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021"
                alt="Santiago, Chile"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                <MapPin className="w-5 h-5" />
                <span className="font-medium">Santiago, Chile</span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <Globe className="w-5 h-5 text-terracotta-500" />
                <h3 className="font-serif text-xl font-semibold text-charcoal-800">
                  Nuestra base
                </h3>
              </div>
              <p className="text-charcoal-600">
                Desde Santiago coordinamos las operaciones, recaudamos fondos y
                preparamos cada viaje a Uganda. Es aquí donde sueños se convierten
                en planes de acción.
              </p>
            </div>
          </motion.div>

          {/* Uganda Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-sand-50 rounded-2xl overflow-hidden"
          >
            <div className="aspect-[16/9] relative">
              <img
                src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=2072"
                alt="Uganda"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                <MapPin className="w-5 h-5" />
                <span className="font-medium">Uganda, África</span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <Heart className="w-5 h-5 text-terracotta-500" fill="currentColor" />
                <h3 className="font-serif text-xl font-semibold text-charcoal-800">
                  Nuestro hogar
                </h3>
              </div>
              <p className="text-charcoal-600">
                En Uganda están las comunidades que nos han acogido como familia.
                Cada visita es un reencuentro, cada proyecto un paso más hacia
                un futuro mejor.
              </p>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12 p-8 bg-forest-50 rounded-2xl max-w-3xl mx-auto"
        >
          <p className="text-forest-700 text-lg">
            <strong>¿Quieres visitarnos en Uganda?</strong> Cada año organizamos
            viajes de voluntariado donde puedes vivir la experiencia de primera
            mano. Contáctanos para más información sobre el próximo viaje.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
