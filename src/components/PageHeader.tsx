export function PageHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <header className="pt-32 pb-12 px-6 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#00d9b2]/5 rounded-full blur-3xl pointer-events-none animate-drift" />
      <div className="max-w-4xl mx-auto relative">
        <span className="text-[#00d9b2] text-xs font-semibold uppercase tracking-[0.25em]">{eyebrow}</span>
        <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 leading-tight">{title}</h1>
        {subtitle && <p className="text-[#8896a8] mt-4 text-lg leading-relaxed max-w-2xl">{subtitle}</p>}
      </div>
    </header>
  );
}
