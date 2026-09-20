interface SectionHeaderProps {
  number?: string;
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({
  number,
  label,
  title,
  description,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''}`}>
      {number && (
        <span className={`text-sm font-mono tracking-widest ${light ? 'text-white/60' : 'text-[#159A8C]'}`}>
          {number}
        </span>
      )}
      {label && (
        <p className={`text-sm font-semibold uppercase tracking-[0.2em] mb-3 ${light ? 'text-white/80' : 'text-[#0F766E]'}`}>
          {label}
        </p>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${light ? 'text-white' : 'text-[#24323A]'}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-lg md:text-xl max-w-2xl ${centered ? 'mx-auto' : ''} ${light ? 'text-white/80' : 'text-[#66757C]'}`}>
          {description}
        </p>
      )}
    </div>
  );
}
