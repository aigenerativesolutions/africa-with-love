'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Users,
  School,
  Droplets,
  Leaf,
  Quote,
  Play,
} from 'lucide-react';
import type { Project } from '@/lib/content';
import { ImageGallery } from '@/components/ui/ImageGallery';

interface ProjectPageContentProps {
  project: Project;
}

export function ProjectPageContent({ project }: ProjectPageContentProps) {
  // Map impact keys to icons and labels
  const impactItems = Object.entries(project.impact)
    .filter(([, value]) => value !== undefined)
    .map(([key, value]) => {
      const icons: Record<string, { icon: React.ElementType; label: string }> = {
        beneficiaries: { icon: Users, label: 'Beneficiarios' },
        volunteers: { icon: Users, label: 'Voluntarios' },
        classrooms: { icon: School, label: 'Aulas construidas' },
        teachers_trained: { icon: Users, label: 'Maestros capacitados' },
        wells: { icon: Droplets, label: 'Pozos de agua' },
        committee_trained: { icon: Users, label: 'Comité capacitado' },
        families_trained: { icon: Users, label: 'Familias capacitadas' },
        hectares: { icon: Leaf, label: 'Hectáreas cultivadas' },
      };
      return {
        key,
        value,
        icon: icons[key]?.icon || Users,
        label: icons[key]?.label || key,
      };
    });

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end pt-20">
        <div className="absolute inset-0">
          <img
            src={project.coverImage || 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=2071'}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/50 to-transparent" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/proyectos"
              className="inline-flex items-center text-white/80 hover:text-white transition-colors mb-6"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Volver a proyectos
            </Link>

            <div className="flex items-center gap-4 mb-4">
              <span className="bg-terracotta-500 text-white px-4 py-1.5 rounded-full text-sm font-medium">
                {project.year}
              </span>
              <div className="flex items-center gap-4 text-white/80 text-sm">
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {project.location}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {project.date}
                </span>
              </div>
            </div>

            <h1 className="font-serif text-white text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">
              {project.title}
            </h1>

            {project.subtitle && (
              <p className="text-xl md:text-2xl text-white/90">
                {project.subtitle}
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      {impactItems.length > 0 && (
        <section className="bg-terracotta-500 py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              {impactItems.map((item, index) => (
                <motion.div
                  key={item.key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center text-white"
                >
                  <item.icon className="w-8 h-8 mx-auto mb-2 opacity-80" />
                  <span className="block font-serif text-3xl font-bold">
                    {item.value?.toLocaleString()}
                  </span>
                  <span className="text-sm text-white/80">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Content */}
      <section className="section-padding bg-ivory-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-8 shadow-lg mb-12"
            >
              <h2 className="font-serif text-2xl font-semibold text-charcoal-800 mb-4">
                Resumen del proyecto
              </h2>
              <p className="text-lg text-charcoal-600 leading-relaxed">
                {project.summary}
              </p>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="prose prose-lg max-w-none mb-16"
            >
              {project.description.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-charcoal-600 leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </motion.div>

            {/* Testimonials */}
            {project.testimonials && project.testimonials.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-16"
              >
                <h2 className="font-serif text-2xl font-semibold text-charcoal-800 mb-8 text-center">
                  Testimonios
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {project.testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl p-8 shadow-lg relative"
                    >
                      <Quote className="w-10 h-10 text-terracotta-200 absolute top-6 right-6" />
                      <p className="font-serif text-lg text-charcoal-700 italic mb-4 relative z-10">
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>
                      <div>
                        <span className="block font-medium text-charcoal-800">
                          {testimonial.author}
                        </span>
                        <span className="text-sm text-charcoal-500">
                          {testimonial.role}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Gallery */}
      {project.gallery && project.gallery.length > 0 && (
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
                Galería de fotos
              </h2>
              <p className="font-sans text-lg text-charcoal-600">
                Imágenes que capturan la esencia de este proyecto
              </p>
            </motion.div>

            <ImageGallery images={project.gallery} />
          </div>
        </section>
      )}

      {/* Videos */}
      {project.videos && project.videos.length > 0 && (
        <section className="section-padding bg-sand-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="font-serif text-charcoal-800 mb-4">Videos</h2>
              <p className="font-sans text-lg text-charcoal-600">
                Mira el impacto de este proyecto en acción
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {project.videos.map((video, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-video rounded-2xl overflow-hidden bg-charcoal-200">
                    {video.thumbnail && (
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                      <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="w-8 h-8 text-terracotta-500 ml-1" fill="currentColor" />
                      </div>
                    </div>
                  </div>
                  <h3 className="font-serif text-lg font-medium text-charcoal-800 mt-4">
                    {video.title}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-terracotta-500 to-terracotta-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-serif text-white mb-4">
              ¿Quieres ser parte del próximo proyecto?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Tu apoyo hace posible que sigamos transformando comunidades.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/donar"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-terracotta-500 font-sans font-medium rounded-full transition-all hover:bg-sand-50 hover:shadow-lg"
              >
                Hacer una donación
              </Link>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-sans font-medium rounded-full transition-all hover:bg-white hover:text-terracotta-500"
              >
                Ser voluntario
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
