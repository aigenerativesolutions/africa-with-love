'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/sobre-luis', label: 'Sobre Luis' },
  { href: '/proyectos', label: 'Proyectos' },
  { href: '/donar', label: 'Donar' },
  { href: '/contacto', label: 'Contacto' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const isHomePage = pathname === '/';

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled || !isHomePage
            ? 'bg-white/95 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        )}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <Heart
                className={cn(
                  'w-8 h-8 transition-colors duration-300',
                  isScrolled || !isHomePage
                    ? 'text-terracotta-500'
                    : 'text-white'
                )}
                fill="currentColor"
              />
              <span
                className={cn(
                  'font-serif text-xl md:text-2xl font-semibold transition-colors duration-300',
                  isScrolled || !isHomePage
                    ? 'text-charcoal-800'
                    : 'text-white'
                )}
              >
                Africa With Love
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'relative font-sans text-sm font-medium transition-colors duration-300 py-2',
                    isScrolled || !isHomePage
                      ? 'text-charcoal-600 hover:text-terracotta-500'
                      : 'text-white/90 hover:text-white',
                    pathname === link.href &&
                      (isScrolled || !isHomePage
                        ? 'text-terracotta-500'
                        : 'text-white')
                  )}
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.span
                      layoutId="navbar-indicator"
                      className={cn(
                        'absolute -bottom-1 left-0 right-0 h-0.5 rounded-full',
                        isScrolled || !isHomePage
                          ? 'bg-terracotta-500'
                          : 'bg-white'
                      )}
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              ))}

              <Link
                href="/donar"
                className={cn(
                  'btn-primary text-sm',
                  isScrolled || !isHomePage
                    ? ''
                    : 'bg-white text-terracotta-500 hover:bg-sand-100'
                )}
              >
                Donar ahora
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                'md:hidden p-2 rounded-lg transition-colors',
                isScrolled || !isHomePage
                  ? 'text-charcoal-800 hover:bg-sand-100'
                  : 'text-white hover:bg-white/10'
              )}
              aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-charcoal-900/50 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-2xl"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 border-b border-sand-200">
                  <Link
                    href="/"
                    className="flex items-center gap-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Heart className="w-7 h-7 text-terracotta-500" fill="currentColor" />
                    <span className="font-serif text-lg font-semibold text-charcoal-800">
                      Africa With Love
                    </span>
                  </Link>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-lg text-charcoal-600 hover:bg-sand-100"
                    aria-label="Cerrar menú"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <nav className="flex-1 p-6">
                  <ul className="space-y-2">
                    {navLinks.map((link, index) => (
                      <motion.li
                        key={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={cn(
                            'block py-3 px-4 rounded-xl font-sans text-lg transition-colors',
                            pathname === link.href
                              ? 'bg-terracotta-50 text-terracotta-600 font-medium'
                              : 'text-charcoal-700 hover:bg-sand-50'
                          )}
                        >
                          {link.label}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                <div className="p-6 border-t border-sand-200">
                  <Link
                    href="/donar"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="btn-primary w-full justify-center text-base"
                  >
                    <Heart className="w-5 h-5 mr-2" />
                    Donar ahora
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
