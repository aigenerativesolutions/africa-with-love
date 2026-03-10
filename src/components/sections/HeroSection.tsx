'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowDown, Heart } from 'lucide-react';

interface HeroSectionProps {
  title?: string;
  tagline?: string;
  description?: string;
  backgroundImage?: string;
}

export function HeroSection({
  title = 'Africa With Love',
  tagline = '12 años caminando junto a comunidades de Uganda y alrededores',
  description = 'Construyendo escuelas, fortaleciendo pueblos y sembrando autosustentabilidad.',
  backgroundImage = 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=2072',
}: HeroSectionProps) {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${backgroundImage}')` }}
        />
        <div className="gradient-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <Heart className="w-8 h-8 text-terracotta-400" fill="currentColor" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold mb-6 text-shadow"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-sans text-xl md:text-2xl lg:text-3xl text-white/90 max-w-4xl mx-auto mb-4 text-shadow"
        >
          {tagline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-sans text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-10"
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/sobre-luis"
            className="btn-secondary text-base px-8 py-4"
          >
            Conocer la misión
          </Link>
          <Link
            href="/donar"
            className="inline-flex items-center justify-center px-8 py-4 bg-terracotta-500 text-white font-sans font-medium rounded-full transition-all duration-300 hover:bg-terracotta-600 hover:shadow-lg text-base"
          >
            <Heart className="w-5 h-5 mr-2" />
            Donar ahora
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        onClick={scrollToContent}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/80 hover:text-white transition-colors cursor-pointer"
        aria-label="Desplazar hacia abajo"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="w-8 h-8" />
        </motion.div>
      </motion.button>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ivory-100 to-transparent" />
    </section>
  );
}
