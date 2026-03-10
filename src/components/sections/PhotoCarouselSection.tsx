'use client';

import { motion } from 'framer-motion';
import { PhotoCarousel } from '@/components/ui/PhotoCarousel';

const featuredImages = [
  {
    src: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=2031',
    alt: 'Niños en Uganda sonriendo',
    caption: 'La alegría de los niños es nuestra mayor recompensa',
  },
  {
    src: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=2071',
    alt: 'Comunidad trabajando juntos',
    caption: 'Trabajando hombro a hombro con las comunidades locales',
  },
  {
    src: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?q=80&w=2187',
    alt: 'Escuela construida',
    caption: 'Cada escuela es un paso hacia el futuro',
  },
  {
    src: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=2072',
    alt: 'Paisaje de Uganda',
    caption: 'La belleza de Uganda nos inspira cada día',
  },
  {
    src: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=2070',
    alt: 'Voluntarios con niños',
    caption: 'El amor trasciende todas las fronteras',
  },
];

export function PhotoCarouselSection() {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-charcoal-800 mb-4">
            Momentos que inspiran
          </h2>
          <p className="font-sans text-lg text-charcoal-600 max-w-2xl mx-auto">
            Cada imagen cuenta una historia de amor, esfuerzo y transformación.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <PhotoCarousel images={featuredImages} autoplay={true} interval={5000} />
        </motion.div>
      </div>
    </section>
  );
}
