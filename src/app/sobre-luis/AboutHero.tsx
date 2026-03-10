'use client';

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import type { Founder } from '@/lib/content';

interface AboutHeroProps {
  founder: Founder;
}

export function AboutHero({ founder }: AboutHeroProps) {
  return (
    <section className="relative min-h-[70vh] flex items-center pt-20">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?q=80&w=2067')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/90 via-charcoal-900/70 to-charcoal-900/50" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-2 mb-6"
            >
              <Heart className="w-6 h-6 text-terracotta-400" fill="currentColor" />
              <span className="font-sans text-sm font-semibold text-terracotta-400 uppercase tracking-wider">
                El fundador
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold mb-6"
            >
              {founder.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8"
            >
              {founder.bio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-6"
            >
              <div className="text-center">
                <span className="block font-serif text-4xl font-bold text-terracotta-400">12</span>
                <span className="text-white/70 text-sm">Años de misión</span>
              </div>
              <div className="text-center">
                <span className="block font-serif text-4xl font-bold text-terracotta-400">18</span>
                <span className="text-white/70 text-sm">Viajes realizados</span>
              </div>
              <div className="text-center">
                <span className="block font-serif text-4xl font-bold text-terracotta-400">15</span>
                <span className="text-white/70 text-sm">Comunidades</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070"
                alt={founder.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-terracotta-500/20 rounded-2xl -z-10" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-forest-500/20 rounded-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
