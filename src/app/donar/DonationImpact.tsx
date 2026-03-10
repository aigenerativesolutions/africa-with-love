'use client';

import { motion } from 'framer-motion';
import { BookOpen, Droplets, Utensils, GraduationCap } from 'lucide-react';

const impactTiers = [
  {
    amount: '$10.000',
    icon: BookOpen,
    title: 'Material escolar',
    description: 'Provee cuadernos, lápices y materiales básicos para 5 estudiantes durante un año escolar.',
  },
  {
    amount: '$25.000',
    icon: Utensils,
    title: 'Alimentación',
    description: 'Financia el almuerzo escolar de un niño durante un mes completo.',
  },
  {
    amount: '$50.000',
    icon: Droplets,
    title: 'Agua limpia',
    description: 'Contribuye a la mantención de pozos de agua que benefician a familias enteras.',
  },
  {
    amount: '$100.000',
    icon: GraduationCap,
    title: 'Beca educativa',
    description: 'Cubre la matrícula y materiales de un estudiante durante un semestre.',
  },
];

export function DonationImpact() {
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
            ¿Qué logra tu donación?
          </h2>
          <p className="font-sans text-lg text-charcoal-600 max-w-2xl mx-auto">
            Cada peso que donas tiene un impacto real y medible en las comunidades que servimos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {impactTiers.map((tier, index) => (
            <motion.div
              key={tier.amount}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-sand-50 rounded-2xl p-6 text-center hover:bg-sand-100 transition-colors"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-terracotta-100 text-terracotta-500 mb-4">
                <tier.icon className="w-7 h-7" />
              </div>
              <span className="block font-serif text-2xl font-bold text-terracotta-500 mb-2">
                {tier.amount}
              </span>
              <h3 className="font-serif text-lg font-semibold text-charcoal-800 mb-2">
                {tier.title}
              </h3>
              <p className="text-charcoal-600 text-sm">
                {tier.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-charcoal-500 mt-8 text-sm"
        >
          * Montos referenciales en pesos chilenos. Cualquier monto es bienvenido y apreciado.
        </motion.p>
      </div>
    </section>
  );
}
