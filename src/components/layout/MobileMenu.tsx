'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { X, Phone, MessageCircle } from 'lucide-react';
import { usePathname } from 'next/navigation';

interface NavLink {
  name: string;
  href: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: NavLink[];
}

export function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-50 md:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Menu Panel */}
      <div
        ref={menuRef}
        className={`fixed inset-y-0 right-0 w-full max-w-sm bg-white z-50 md:hidden transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div className="flex items-center gap-2">
            <Image
              src="/images/logo.jpg"
              alt="NandaN Clinic Logo"
              width={32}
              height={32}
              className="rounded-full object-cover w-8 h-8"
            />
            <span className="font-bold text-text-primary text-lg">NandaN Clinic</span>
          </div>
          <button
            type="button"
            className="p-2 rounded-md text-text-secondary hover:text-teal-primary hover:bg-mint-soft focus:outline-none"
            onClick={onClose}
          >
            <span className="sr-only">Close menu</span>
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-2">
          {links.map((link) => {
            const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== '/');
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={onClose}
                className={`block px-4 py-3 rounded-lg text-lg font-medium transition-colors ${
                  isActive
                    ? 'bg-mint-soft text-teal-primary'
                    : 'text-text-primary hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-border bg-gray-50 space-y-4 pb-[env(safe-area-inset-bottom)]">
          <Link
            href="/appointment"
            onClick={onClose}
            className="flex w-full items-center justify-center px-5 py-3 rounded-xl bg-teal-primary text-white text-base font-semibold hover:bg-teal-secondary transition-colors"
          >
            Book Appointment
          </Link>
          <div className="grid grid-cols-2 gap-4">
            <a
              href="tel:7395811646"
              className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white border border-border text-text-primary text-sm font-medium hover:bg-gray-50"
            >
              <Phone className="w-4 h-4 text-teal-primary" />
              Call
            </a>
            <a
              href="https://wa.me/917395811646"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366] text-sm font-medium hover:bg-[#25D366]/20"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
