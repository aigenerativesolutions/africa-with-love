'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, MapPin, Calendar } from 'lucide-react';
import type { Project } from '@/lib/content';

interface ProjectsGridProps {
  projects: Project[];
  showViewAll?: boolean;
  title?: string;
  subtitle?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Link href={`/proyectos/${project.slug}`} className="block">
        <div className="card h-full flex flex-col">
          {/* Image */}
          <div className="relative aspect-[16/10] overflow-hidden">
            <img
              src={project.coverImage || 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=2071'}
              alt={project.title}
              className="w-full h-full object-cover image-hover group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Year Badge */}
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-full px-4 py-1.5 shadow-lg">
              <span className="font-sans text-sm font-semibold text-terracotta-500">
                {project.year}
              </span>
            </div>

            {/* Hover Overlay */}
            <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
              <span className="inline-flex items-center text-white font-sans text-sm font-medium">
                Ver proyecto
                <ArrowRight className="w-4 h-4 ml-2" />
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="font-serif text-xl font-semibold text-charcoal-800 mb-2 group-hover:text-terracotta-500 transition-colors">
              {project.title}
            </h3>

            {project.subtitle && (
              <p className="font-sans text-sm text-terracotta-500 font-medium mb-3">
                {project.subtitle}
              </p>
            )}

            <div className="flex items-center gap-4 text-charcoal-500 text-sm mb-4">
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {project.location}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {project.date}
              </span>
            </div>

            <p className="font-sans text-charcoal-600 line-clamp-3 flex-grow">
              {project.summary}
            </p>

            <div className="mt-4 pt-4 border-t border-sand-200">
              <span className="font-sans text-sm font-medium text-terracotta-500 inline-flex items-center group-hover:gap-2 transition-all">
                Leer más
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

export function ProjectsGrid({
  projects,
  showViewAll = true,
  title = 'Nuestros Proyectos',
  subtitle = 'Cada viaje es una historia de transformación, trabajo en equipo y amor compartido.',
}: ProjectsGridProps) {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-charcoal-800 mb-4">{title}</h2>
          <p className="font-sans text-lg text-charcoal-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>

        {/* View All Button */}
        {showViewAll && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link href="/proyectos" className="btn-outline inline-flex items-center">
              Ver todos los proyectos
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
