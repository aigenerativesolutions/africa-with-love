'use client';

import { motion } from 'framer-motion';
import { Heart, Users, Sprout, Eye, HandHeart, Shield } from 'lucide-react';
import Link from 'next/link';

const values = [
  {
    icon: Heart,
    title: 'Amor en acción',
    description: 'Creemos que el amor se demuestra con hechos. Cada proyecto es una expresión tangible de cariño hacia nuestras comunidades.',
  },
  {
    icon: Users,
    title: 'Comunidad',
    description: 'Trabajamos junto a las comunidades, no para ellas. Las escuchamos, aprendemos y construimos juntos.',
  },
  {
    icon: Sprout,
    title: 'Autosustentabilidad',
    description: 'Nuestro objetivo es dejar capacidades, no dependencias. Enseñamos a pescar, no solo damos el pescado.',
  },
  {
    icon: Eye,
    title: 'Transparencia',
    description: 'Cada donación es sagrada. Rendimos cuentas claras de cada peso invertido en nuestros proyectos.',
  },
  {
    icon: HandHeart,
    title: 'Dignidad',
    description: 'Tratamos a cada persona con el respeto y la dignidad que merece, reconociendo su valor intrínseco.',
  },
  {
    icon: Shield,
    title: 'Compromiso',
    description: '12 años de presencia constante demuestran que estamos aquí para quedarnos y seguir creciendo juntos.',
  },
];

export function AboutValues() {
  return (
    <section className="section-padding bg-sand-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block font-sans text-sm font-semibold text-terracotta-500 uppercase tracking-wider mb-4">
            Lo que nos guía
          </span>
          <h2 className="font-serif text-charcoal-800 mb-4">
            Nuestros valores
          </h2>
          <p className="font-sans text-lg text-charcoal-600 max-w-2xl mx-auto">
            Estos principios fundamentan cada decisión que tomamos y cada proyecto que emprendemos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-terracotta-100 text-terracotta-500 mb-6">
                <value.icon className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-charcoal-800 mb-3">
                {value.title}
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-charcoal-600 mb-6">
            ¿Compartes estos valores? Únete a nuestra misión.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/proyectos" className="btn-primary">
              Ver proyectos
            </Link>
            <Link href="/donar" className="btn-outline">
              Hacer una donación
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
