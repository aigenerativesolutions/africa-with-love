'use client';

import { motion } from 'framer-motion';

const timelineEvents = [
  {
    year: '2012',
    title: 'El primer viaje',
    description: 'Luis viaja por primera vez a Uganda, donde conoce comunidades que cambiarían su vida para siempre.',
  },
  {
    year: '2014',
    title: 'Primera escuela',
    description: 'Se construye la primera escuela del proyecto, permitiendo que 150 niños accedan a educación formal.',
  },
  {
    year: '2016',
    title: 'Programa de voluntariado',
    description: 'Se formaliza el programa de voluntariado, permitiendo que más personas se sumen a la misión.',
  },
  {
    year: '2019',
    title: 'Agricultura sostenible',
    description: 'Se lanza el programa de agricultura sostenible, capacitando a familias para la autosuficiencia.',
  },
  {
    year: '2022',
    title: 'Acceso al agua',
    description: 'Se instalan los primeros pozos de agua potable, beneficiando a más de 500 personas.',
  },
  {
    year: '2023',
    title: '12 años de impacto',
    description: 'Africa With Love celebra 12 años de misión continua, con 5 escuelas y 15 comunidades transformadas.',
  },
];

export function AboutTimeline() {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block font-sans text-sm font-semibold text-terracotta-500 uppercase tracking-wider mb-4">
            Nuestro recorrido
          </span>
          <h2 className="font-serif text-charcoal-800 mb-4">
            12 años de historia
          </h2>
          <p className="font-sans text-lg text-charcoal-600 max-w-2xl mx-auto">
            Cada año marca un nuevo capítulo en nuestra misión de amor y servicio.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-sand-300 md:-translate-x-1/2" />

          {/* Events */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Year Marker */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-terracotta-500 rounded-full flex items-center justify-center md:-translate-x-1/2 shadow-lg z-10">
                  <div className="w-3 h-3 bg-white rounded-full" />
                </div>

                {/* Content */}
                <div
                  className={`md:w-1/2 pl-16 md:pl-0 ${
                    index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'
                  }`}
                >
                  <span className="inline-block font-serif text-2xl font-bold text-terracotta-500 mb-2">
                    {event.year}
                  </span>
                  <h3 className="font-serif text-xl font-semibold text-charcoal-800 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-charcoal-600">
                    {event.description}
                  </p>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
