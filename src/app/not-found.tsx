'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Heart } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-ivory-100 pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Heart className="w-10 h-10 text-terracotta-400" fill="currentColor" />
          </div>

          <h1 className="font-serif text-6xl md:text-8xl font-bold text-charcoal-800 mb-4">
            404
          </h1>

          <h2 className="font-serif text-2xl md:text-3xl text-charcoal-700 mb-4">
            Página no encontrada
          </h2>

          <p className="text-charcoal-600 text-lg mb-8 max-w-md mx-auto">
            Lo sentimos, la página que buscas no existe o ha sido movida.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="btn-primary inline-flex items-center"
            >
              <Home className="w-5 h-5 mr-2" />
              Ir al inicio
            </Link>
            <button
              onClick={() => window.history.back()}
              className="btn-outline inline-flex items-center"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Volver atrás
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
