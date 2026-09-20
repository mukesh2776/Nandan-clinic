import Link from 'next/link';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
  ariaLabel?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-[#0F766E] text-white hover:bg-[#159A8C] focus:ring-[#0F766E]/30',
  secondary: 'bg-[#E8F6F3] text-[#0F766E] hover:bg-[#d1ede8] focus:ring-[#0F766E]/20',
  outline: 'border-2 border-[#0F766E] text-[#0F766E] hover:bg-[#F3FAF8] focus:ring-[#0F766E]/20',
  ghost: 'text-[#0F766E] hover:bg-[#F3FAF8] focus:ring-[#0F766E]/10',
  accent: 'bg-[#E58A6A] text-white hover:bg-[#d47a5a] focus:ring-[#E58A6A]/30',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  ariaLabel,
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-4 disabled:opacity-50 disabled:cursor-not-allowed';
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
