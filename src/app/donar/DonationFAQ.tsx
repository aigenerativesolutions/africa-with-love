'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const faqs = [
  {
    question: '¿Cómo puedo estar seguro de que mi donación llega a destino?',
    answer: 'Nos tomamos la transparencia muy en serio. Publicamos informes anuales detallados donde mostramos exactamente cómo se utilizan los fondos. Además, compartimos actualizaciones regulares de los proyectos en nuestras redes sociales y con nuestros donantes directamente.',
  },
  {
    question: '¿Puedo hacer donaciones recurrentes?',
    answer: 'Sí, las donaciones recurrentes son la forma más efectiva de ayudar porque nos permiten planificar proyectos a largo plazo. Puedes configurar una transferencia automática mensual usando los datos bancarios proporcionados.',
  },
  {
    question: '¿Las donaciones son deducibles de impuestos?',
    answer: 'Estamos en proceso de obtener la certificación que permite la deducción de impuestos. Mientras tanto, emitimos comprobantes de donación para todos los aportes recibidos.',
  },
  {
    question: '¿Puedo donar en especie (materiales, ropa, etc.)?',
    answer: 'Sí, aceptamos donaciones en especie como material escolar, ropa en buen estado, y otros artículos útiles. Contáctanos para coordinar la entrega y asegurarnos de que los artículos sean apropiados para las necesidades actuales.',
  },
  {
    question: '¿Cómo puedo involucrarme más allá de donar?',
    answer: 'Hay muchas formas de participar: puedes ser voluntario en nuestros viajes anuales, ayudar con la difusión en redes sociales, organizar eventos de recaudación, o colaborar con tus habilidades profesionales. Contáctanos para explorar opciones.',
  },
  {
    question: '¿Qué porcentaje de mi donación va directamente a los proyectos?',
    answer: 'Nos comprometemos a que al menos el 85% de cada donación vaya directamente a los proyectos en terreno. El resto se destina a gastos operacionales mínimos necesarios para mantener la organización funcionando de manera efectiva.',
  },
];

function FAQItem({ question, answer, isOpen, onToggle }: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-sand-200 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full py-6 flex items-center justify-between text-left"
      >
        <span className="font-serif text-lg font-medium text-charcoal-800 pr-8">
          {question}
        </span>
        <ChevronDown
          className={cn(
            'w-5 h-5 text-terracotta-500 flex-shrink-0 transition-transform duration-300',
            isOpen && 'rotate-180'
          )}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-charcoal-600 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function DonationFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding bg-sand-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-charcoal-800 mb-4">
            Preguntas frecuentes
          </h2>
          <p className="font-sans text-lg text-charcoal-600 max-w-2xl mx-auto">
            Resolvemos tus dudas sobre cómo donar y el impacto de tu contribución.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-3xl mx-auto bg-white rounded-2xl p-6 md:p-8 shadow-lg"
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
