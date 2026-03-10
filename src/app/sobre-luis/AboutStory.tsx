'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import type { Founder } from '@/lib/content';

interface AboutStoryProps {
  founder: Founder;
}

export function AboutStory({ founder }: AboutStoryProps) {
  const storyParagraphs = founder.fullBio.split('\n\n');

  return (
    <section className="section-padding bg-ivory-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-block font-sans text-sm font-semibold text-terracotta-500 uppercase tracking-wider mb-4">
              La Historia
            </span>
            <h2 className="font-serif text-charcoal-800">
              Una vida dedicada al servicio
            </h2>
          </motion.div>

          {/* Story Content */}
          <div className="grid md:grid-cols-12 gap-12">
            {/* Main Story */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="md:col-span-8 space-y-6"
            >
              {storyParagraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-charcoal-600 text-lg leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </motion.div>

            {/* Sidebar with Quote and Images */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:col-span-4 space-y-8"
            >
              {/* Quote */}
              <div className="bg-terracotta-500 rounded-2xl p-6 text-white relative">
                <Quote className="w-10 h-10 text-white/30 absolute top-4 right-4" />
                <p className="font-serif text-lg italic mb-4 relative z-10">
                  &ldquo;El verdadero éxito no se mide en lo que acumulas, sino en las vidas que tocas.&rdquo;
                </p>
                <span className="font-sans text-sm text-white/80">
                  — Luis Castillo
                </span>
              </div>

              {/* Small Images */}
              <div className="space-y-4">
                <div className="aspect-[4/3] rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=2031"
                    alt="Luis con niños de Uganda"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="aspect-[4/3] rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=2070"
                    alt="Comunidad de Uganda"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
