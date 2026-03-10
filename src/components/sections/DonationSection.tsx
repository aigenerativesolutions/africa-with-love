'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Heart, Copy, Check, CreditCard, Building2, Mail } from 'lucide-react';
import { useState } from 'react';
import type { Donation } from '@/lib/content';

interface DonationSectionProps {
  donation: Donation;
  variant?: 'default' | 'full';
}

function CopyButton({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="group flex items-center justify-between w-full p-4 bg-sand-50 rounded-xl hover:bg-sand-100 transition-colors"
      aria-label={`Copiar ${label}`}
    >
      <div className="text-left">
        <span className="block text-sm text-charcoal-500">{label}</span>
        <span className="block font-mono text-charcoal-800 font-medium">{text}</span>
      </div>
      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-sm group-hover:shadow-md transition-shadow">
        {copied ? (
          <Check className="w-5 h-5 text-forest-500" />
        ) : (
          <Copy className="w-5 h-5 text-charcoal-400 group-hover:text-terracotta-500" />
        )}
      </span>
    </button>
  );
}

export function DonationSection({ donation, variant = 'default' }: DonationSectionProps) {
  if (variant === 'full') {
    return (
      <section className="section-padding bg-ivory-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <span className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-terracotta-100 text-terracotta-500 mb-6">
                <Heart className="w-8 h-8" fill="currentColor" />
              </span>
              <h1 className="font-serif text-charcoal-800 mb-4">Haz tu donación</h1>
              <p className="font-sans text-lg text-charcoal-600 max-w-2xl mx-auto">
                {donation.message}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Bank Transfer */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-forest-100 text-forest-600">
                    <Building2 className="w-6 h-6" />
                  </span>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-charcoal-800">
                      Transferencia Bancaria
                    </h3>
                    <p className="text-sm text-charcoal-500">Chile</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <CopyButton text={donation.bankName} label="Banco" />
                  <CopyButton text={donation.accountHolder} label="Titular" />
                  <CopyButton text={donation.accountNumber} label="Número de cuenta" />
                  <CopyButton text={donation.accountType} label="Tipo de cuenta" />
                  <CopyButton text={donation.rut} label="RUT" />
                  <CopyButton text={donation.email} label="Email para comprobante" />
                </div>
              </motion.div>

              {/* Other Methods */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-6"
              >
                {/* PayPal */}
                {donation.paypal && (
                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-100 text-blue-600">
                        <CreditCard className="w-6 h-6" />
                      </span>
                      <div>
                        <h3 className="font-serif text-xl font-semibold text-charcoal-800">
                          PayPal
                        </h3>
                        <p className="text-sm text-charcoal-500">Internacional</p>
                      </div>
                    </div>
                    <CopyButton text={donation.paypal} label="Email PayPal" />
                  </div>
                )}

                {/* Contact for other methods */}
                <div className="bg-gradient-to-br from-terracotta-500 to-terracotta-600 rounded-2xl p-8 text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/20">
                      <Mail className="w-6 h-6" />
                    </span>
                    <h3 className="font-serif text-xl font-semibold">
                      ¿Otras formas de ayudar?
                    </h3>
                  </div>
                  <p className="text-white/90 mb-6">
                    Si prefieres donar de otra manera o tienes preguntas, no dudes en contactarnos.
                  </p>
                  <Link
                    href="/contacto"
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-white text-terracotta-500 font-sans font-medium rounded-full transition-all hover:bg-sand-50"
                  >
                    Contáctanos
                  </Link>
                </div>

                {/* Trust Note */}
                <div className="bg-forest-50 rounded-2xl p-6 border border-forest-100">
                  <p className="text-forest-700 text-sm leading-relaxed">
                    <strong>Transparencia:</strong> Cada donación es registrada y podrás
                    ver el impacto de tu aporte en nuestros informes anuales y actualizaciones
                    de proyectos.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  // Default compact version for home page
  return (
    <section className="section-padding bg-gradient-to-br from-terracotta-500 to-terracotta-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-white"
          >
            <span className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/20 mb-6">
              <Heart className="w-7 h-7" fill="currentColor" />
            </span>
            <h2 className="font-serif text-white mb-4">
              Tu apoyo hace la diferencia
            </h2>
            <p className="text-xl text-white/90 mb-6">
              {donation.message}
            </p>
            <Link
              href="/donar"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-terracotta-500 font-sans font-medium rounded-full transition-all hover:bg-sand-50 hover:shadow-lg"
            >
              Donar ahora
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-xl"
          >
            <h3 className="font-serif text-xl font-semibold text-charcoal-800 mb-6">
              Datos para transferencia
            </h3>
            <div className="space-y-3">
              <CopyButton text={donation.bankName} label="Banco" />
              <CopyButton text={donation.accountHolder} label="Titular" />
              <CopyButton text={donation.accountNumber} label="Número de cuenta" />
              <CopyButton text={donation.email} label="Email" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
