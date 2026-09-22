'use client';

import { useEffect, useRef, useState } from 'react';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-in' | 'fade-left' | 'fade-right' | 'scale';
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  threshold?: number;
}

const animationClasses = {
  'fade-up': {
    hidden: 'opacity-0 translate-y-8',
    visible: 'opacity-100 translate-y-0',
  },
  'fade-in': {
    hidden: 'opacity-0',
    visible: 'opacity-100',
  },
  'fade-left': {
    hidden: 'opacity-0 -translate-x-8',
    visible: 'opacity-100 translate-x-0',
  },
  'fade-right': {
    hidden: 'opacity-0 translate-x-8',
    visible: 'opacity-100 translate-x-0',
  },
  scale: {
    hidden: 'opacity-0 scale-95',
    visible: 'opacity-100 scale-100',
  },
};

export default function AnimateOnScroll({
  children,
  className = '',
  animation = 'fade-up',
  direction,
  delay = 0,
  threshold = 0.1,
}: AnimateOnScrollProps) {
  const effectiveAnimation = direction
    ? direction === 'up'
      ? 'fade-up'
      : direction === 'left'
      ? 'fade-left'
      : direction === 'right'
      ? 'fade-right'
      : 'fade-up'
    : animation;
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      const timer = setTimeout(() => setIsVisible(true), 0);
      return () => clearTimeout(timer);
    }

    const handleChange = (e: MediaQueryListEvent) => {
      if (e.matches) setIsVisible(true);
    };
    mediaQuery.addEventListener('change', handleChange);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const anim = animationClasses[effectiveAnimation] || animationClasses['fade-up'];

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${isVisible ? anim.visible : anim.hidden} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
