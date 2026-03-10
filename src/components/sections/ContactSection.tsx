'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Instagram, Facebook, Youtube, Loader2, CheckCircle } from 'lucide-react';
import type { Contact } from '@/lib/content';

interface ContactSectionProps {
  contact: Contact;
  variant?: 'default' | 'full';
}

export function ContactSection({ contact, variant = 'default' }: ContactSectionProps) {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const ContactInfo = () => (
    <div className="space-y-6">
      <a
        href={`mailto:${contact.email}`}
        className="flex items-start gap-4 p-4 bg-sand-50 rounded-xl hover:bg-sand-100 transition-colors group"
      >
        <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-terracotta-100 text-terracotta-500 group-hover:bg-terracotta-500 group-hover:text-white transition-colors">
          <Mail className="w-5 h-5" />
        </span>
        <div>
          <span className="block text-sm text-charcoal-500">Email</span>
          <span className="block font-medium text-charcoal-800">{contact.email}</span>
        </div>
      </a>

      <a
        href={`tel:${contact.phone}`}
        className="flex items-start gap-4 p-4 bg-sand-50 rounded-xl hover:bg-sand-100 transition-colors group"
      >
        <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-terracotta-100 text-terracotta-500 group-hover:bg-terracotta-500 group-hover:text-white transition-colors">
          <Phone className="w-5 h-5" />
        </span>
        <div>
          <span className="block text-sm text-charcoal-500">Teléfono</span>
          <span className="block font-medium text-charcoal-800">{contact.phone}</span>
        </div>
      </a>

      <a
        href={`https://wa.me/${contact.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-start gap-4 p-4 bg-sand-50 rounded-xl hover:bg-sand-100 transition-colors group"
      >
        <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-green-100 text-green-600 group-hover:bg-green-500 group-hover:text-white transition-colors">
          <MessageCircle className="w-5 h-5" />
        </span>
        <div>
          <span className="block text-sm text-charcoal-500">WhatsApp</span>
          <span className="block font-medium text-charcoal-800">Escríbenos</span>
        </div>
      </a>

      <div className="flex items-start gap-4 p-4 bg-sand-50 rounded-xl">
        <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-forest-100 text-forest-600">
          <MapPin className="w-5 h-5" />
        </span>
        <div>
          <span className="block text-sm text-charcoal-500">Ubicación</span>
          <span className="block font-medium text-charcoal-800">{contact.address}</span>
        </div>
      </div>

      {/* Social Links */}
      <div className="pt-6 border-t border-sand-200">
        <p className="text-sm text-charcoal-500 mb-4">Síguenos en redes sociales</p>
        <div className="flex gap-3">
          {contact.instagram && (
            <a
              href={contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-sand-100 flex items-center justify-center text-charcoal-600 hover:bg-terracotta-500 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          )}
          {contact.facebook && (
            <a
              href={contact.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-sand-100 flex items-center justify-center text-charcoal-600 hover:bg-terracotta-500 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
          )}
          {contact.youtube && (
            <a
              href={contact.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-sand-100 flex items-center justify-center text-charcoal-600 hover:bg-terracotta-500 hover:text-white transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );

  const ContactForm = () => (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-charcoal-700 mb-2">
            Nombre
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-sand-300 bg-white text-charcoal-800 placeholder:text-charcoal-400 focus:border-terracotta-400 focus:ring-2 focus:ring-terracotta-400/20 transition-colors"
            placeholder="Tu nombre"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-charcoal-700 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-sand-300 bg-white text-charcoal-800 placeholder:text-charcoal-400 focus:border-terracotta-400 focus:ring-2 focus:ring-terracotta-400/20 transition-colors"
            placeholder="tu@email.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-charcoal-700 mb-2">
          Asunto
        </label>
        <select
          id="subject"
          name="subject"
          value={formState.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-xl border border-sand-300 bg-white text-charcoal-800 focus:border-terracotta-400 focus:ring-2 focus:ring-terracotta-400/20 transition-colors"
        >
          <option value="">Selecciona un asunto</option>
          <option value="voluntariado">Quiero ser voluntario</option>
          <option value="donacion">Consultas sobre donaciones</option>
          <option value="informacion">Información general</option>
          <option value="colaboracion">Propuesta de colaboración</option>
          <option value="otro">Otro</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-charcoal-700 mb-2">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          value={formState.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 rounded-xl border border-sand-300 bg-white text-charcoal-800 placeholder:text-charcoal-400 focus:border-terracotta-400 focus:ring-2 focus:ring-terracotta-400/20 transition-colors resize-none"
          placeholder="Escribe tu mensaje aquí..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting || isSubmitted}
        className="w-full btn-primary text-base py-4 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Enviando...
          </>
        ) : isSubmitted ? (
          <>
            <CheckCircle className="w-5 h-5 mr-2" />
            ¡Mensaje enviado!
          </>
        ) : (
          <>
            <Send className="w-5 h-5 mr-2" />
            Enviar mensaje
          </>
        )}
      </button>
    </form>
  );

  if (variant === 'full') {
    return (
      <section className="section-padding bg-ivory-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="font-serif text-charcoal-800 mb-4">Contáctanos</h1>
            <p className="font-sans text-lg text-charcoal-600 max-w-2xl mx-auto">
              ¿Tienes preguntas, quieres ser voluntario o simplemente deseas saber más
              sobre nuestra misión? Estamos aquí para ti.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h2 className="font-serif text-2xl font-semibold text-charcoal-800 mb-6">
                Información de contacto
              </h2>
              <ContactInfo />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h2 className="font-serif text-2xl font-semibold text-charcoal-800 mb-6">
                Envíanos un mensaje
              </h2>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  // Default compact version for home page
  return (
    <section className="section-padding bg-sand-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-charcoal-800 mb-4">¿Quieres unirte a la misión?</h2>
          <p className="font-sans text-lg text-charcoal-600 max-w-2xl mx-auto">
            Ya sea como voluntario, donante o simplemente para saber más, estamos aquí para ti.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
