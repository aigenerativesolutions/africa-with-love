'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, MapPin, Calendar, Filter } from 'lucide-react';
import type { Project } from '@/lib/content';
import { cn } from '@/lib/utils';

interface ProjectsPageContentProps {
  projects: Project[];
  years: number[];
}

export function ProjectsPageContent({ projects, years }: ProjectsPageContentProps) {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  const filteredProjects = selectedYear
    ? projects.filter((p) => p.year === selectedYear)
    : projects;

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-charcoal-800 to-charcoal-900">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=2071')`,
            }}
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center text-white"
          >
            <h1 className="font-serif mb-4">Nuestros Proyectos</h1>
            <p className="font-sans text-xl text-white/80 max-w-2xl mx-auto">
              Cada viaje es una historia de transformación. Explora los proyectos
              que hemos realizado a lo largo de 12 años de misión.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-20 z-30 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4 overflow-x-auto pb-2 scrollbar-hide">
            <div className="flex items-center gap-2 text-charcoal-500 flex-shrink-0">
              <Filter className="w-5 h-5" />
              <span className="text-sm font-medium">Filtrar por año:</span>
            </div>
            <button
              onClick={() => setSelectedYear(null)}
              className={cn(
                'px-4 py-2 rounded-full text-sm font-medium transition-colors flex-shrink-0',
                selectedYear === null
                  ? 'bg-terracotta-500 text-white'
                  : 'bg-sand-100 text-charcoal-600 hover:bg-sand-200'
              )}
            >
              Todos
            </button>
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={cn(
                  'px-4 py-2 rounded-full text-sm font-medium transition-colors flex-shrink-0',
                  selectedYear === year
                    ? 'bg-terracotta-500 text-white'
                    : 'bg-sand-100 text-charcoal-600 hover:bg-sand-200'
                )}
              >
                {year}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-ivory-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedYear || 'all'}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.slug} project={project} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-charcoal-500 text-lg">
                No hay proyectos para el año seleccionado.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
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
