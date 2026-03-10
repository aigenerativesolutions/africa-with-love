'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Calendar, Users, School, Plane, Heart, GraduationCap } from 'lucide-react';
import type { Impact } from '@/lib/content';

interface ImpactStatsProps {
  impact: Impact;
}

interface StatItemProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix?: string;
  delay: number;
}

function AnimatedNumber({ value, delay }: { value: number; delay: number }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(() => {
        const duration = 2000;
        const steps = 60;
        const increment = value / steps;
        let current = 0;
        const timer = setInterval(() => {
          current += increment;
          if (current >= value) {
            setDisplayValue(value);
            clearInterval(timer);
          } else {
            setDisplayValue(Math.floor(current));
          }
        }, duration / steps);
        return () => clearInterval(timer);
      }, delay * 1000);
      return () => clearTimeout(timeout);
    }
  }, [isInView, value, delay]);

  return <span ref={ref}>{displayValue.toLocaleString()}</span>;
}

function StatItem({ icon, value, label, suffix = '', delay }: StatItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      className="text-center group"
    >
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-terracotta-100 text-terracotta-500 mb-4 group-hover:bg-terracotta-500 group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <div className="font-serif text-4xl md:text-5xl font-bold text-charcoal-800 mb-2">
        <AnimatedNumber value={value} delay={delay} />
        {suffix}
      </div>
      <p className="font-sans text-charcoal-600">{label}</p>
    </motion.div>
  );
}

export function ImpactStats({ impact }: ImpactStatsProps) {
  const stats = [
    {
      icon: <Calendar className="w-7 h-7" />,
      value: impact.years,
      label: 'Años de misión',
      suffix: '',
    },
    {
      icon: <Users className="w-7 h-7" />,
      value: impact.communities,
      label: 'Comunidades apoyadas',
      suffix: '',
    },
    {
      icon: <School className="w-7 h-7" />,
      value: impact.schools,
      label: 'Escuelas construidas',
      suffix: '',
    },
    {
      icon: <Plane className="w-7 h-7" />,
      value: impact.trips,
      label: 'Viajes realizados',
      suffix: '',
    },
    {
      icon: <Heart className="w-7 h-7" />,
      value: impact.volunteers,
      label: 'Voluntarios',
      suffix: '+',
    },
    {
      icon: <GraduationCap className="w-7 h-7" />,
      value: impact.children,
      label: 'Niños beneficiados',
      suffix: '+',
    },
  ];

  return (
    <section className="section-padding bg-sand-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-charcoal-800 mb-4">Nuestro Impacto</h2>
          <p className="font-sans text-lg text-charcoal-600 max-w-2xl mx-auto">
            Cada número representa historias de esperanza, comunidades transformadas
            y sueños que se hacen realidad.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6">
          {stats.map((stat, index) => (
            <StatItem
              key={stat.label}
              {...stat}
              delay={0.1 + index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
