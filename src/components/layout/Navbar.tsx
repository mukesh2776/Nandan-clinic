'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { MobileMenu } from './MobileMenu';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Doctors', href: '/doctors' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-lg border-b border-border shadow-sm'
            : 'bg-white border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/images/logo.jpg"
                  alt="NandaN Clinic Logo"
                  width={40}
                  height={40}
                  className="rounded-full object-cover w-10 h-10"
                />
                <span className="font-bold text-text-primary text-xl hidden sm:block">
                  NandaN Clinic
                </span>
              </Link>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== '/');
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative text-sm font-medium transition-colors hover:text-teal-primary ${
                      isActive ? 'text-teal-primary' : 'text-text-secondary'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-teal-primary rounded-t-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* CTA & Mobile Toggle */}
            <div className="flex items-center space-x-4">
              <Link
                href="/appointment"
                className="hidden md:inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-teal-primary text-white text-sm font-medium hover:bg-teal-secondary transition-colors"
              >
                Book Appointment
              </Link>
              <Link
                href="/appointment"
                className="md:hidden inline-flex items-center justify-center px-4 py-2 rounded-lg bg-teal-primary text-white text-sm font-medium"
              >
                Book
              </Link>
              <button
                type="button"
                className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-text-secondary hover:text-teal-primary hover:bg-mint-soft focus:outline-none"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-expanded={isMobileMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                <Menu className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        links={navLinks}
      />
    </>
  );
}
