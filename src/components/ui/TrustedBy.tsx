import React from 'react';

interface TrustedBrand {
  id: string;
  name: string;
  logoLight: string;
  logoAlt: string;
  logoClassName: string;
}

const TRUSTED_BRANDS: TrustedBrand[] = [
  {
    id: 'shipmate',
    name: 'Shipmate Logistics',
    logoLight: '/logos/shipmate-hq.png',
    logoAlt: 'Shipmate Logistics',
    logoClassName: 'h-24 sm:h-28 w-auto max-w-[90%] object-contain',
  },
  {
    id: 'iit-jodhpur',
    name: 'IIT Jodhpur',
    logoLight: '/logos/iit-jodhpur-hq.png',
    logoAlt: 'IIT Jodhpur',
    logoClassName: 'h-24 sm:h-28 w-auto max-w-[90%] object-contain',
  },
  {
    id: 'dps',
    name: 'Delhi Public School',
    logoLight: '/logos/dps-hq.png',
    logoAlt: 'Delhi Public School',
    logoClassName: 'h-24 sm:h-28 w-auto max-w-[90%] object-contain',
  },
  {
    id: 'orange-future-tech',
    name: 'Orange Future Tech',
    logoLight: '/logos/orange-future-tech-hq.png',
    logoAlt: 'Orange Future Tech',
    logoClassName: 'w-full h-20 sm:h-24 max-w-[92%] object-contain',
  },
  {
    id: 'cocoadotts',
    name: 'Cocoadotts',
    logoLight: '/logos/cocoadotts-hq.png',
    logoAlt: 'Cocoadotts',
    logoClassName: 'h-20 sm:h-24 w-auto max-w-[88%] object-contain',
  },
];

export const TrustedBy: React.FC = () => {
  return (
    <section className="w-full py-8 sm:py-12 border-y border-slate-200/80 dark:border-slate-800/80 bg-slate-50/60 dark:bg-[#070B14]/75 backdrop-blur-md relative overflow-hidden select-none">
      {/* Decorative Warm Ambient Glow & Subtle Foliage Accents matching reference */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[220px] bg-gradient-to-r from-orange-100/30 via-amber-100/20 to-orange-100/30 dark:from-orange-500/5 dark:via-amber-500/5 dark:to-orange-500/5 rounded-full blur-3xl pointer-events-none" />

        {/* Subtle orange leaf line doodles in background matching reference design */}
        <div className="absolute top-2 left-1/4 -translate-x-1/2 w-6 h-6 opacity-30 dark:opacity-20 text-brand-orange-500">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10c0-2.8-1.1-5.3-3-7.1M12 2v20" />
          </svg>
        </div>
        <div className="absolute top-3 right-1/3 w-5 h-5 opacity-25 dark:opacity-15 text-brand-orange-500 rotate-12">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
            <path d="M11 20A7 7 0 0 1 4 13C4 9.13 7.13 6 11 6c3.87 0 7 3.13 7 7 0 2.22-1.04 4.2-2.65 5.48M11 20V6m0 14c2.5-3 6-5 6-10" />
          </svg>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header Label: ── TRUSTED BY ── with subtle lines */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 max-w-xs sm:max-w-sm mx-auto mb-6 sm:mb-8">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-300 to-slate-400/80 dark:via-slate-700 dark:to-slate-600" />
          <span className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.25em] uppercase text-slate-600 dark:text-slate-300 select-none">
            TRUSTED BY
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-slate-300 to-slate-400/80 dark:via-slate-700 dark:to-slate-600" />
        </div>

        {/* 5 Brand Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 lg:gap-5">
          {TRUSTED_BRANDS.map((brand, index) => (
            <div
              key={brand.id}
              className={`group bg-white dark:bg-[#0D1322] border border-slate-200/90 dark:border-slate-800 hover:border-brand-orange-500/50 dark:hover:border-brand-orange-500/50 rounded-2xl sm:rounded-[22px] overflow-hidden shadow-subtle-card hover:shadow-hover-card transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 ${
                index === 4
                  ? 'col-span-2 sm:col-span-1 max-w-[260px] sm:max-w-none mx-auto w-full'
                  : ''
              }`}
            >
              {/* Top Half: Large, Prominent Centered Logo Area on Pure White Background */}
              <div className="h-32 sm:h-36 bg-white flex items-center justify-center p-3 sm:p-4 relative">
                <img
                  src={brand.logoLight}
                  alt={brand.logoAlt}
                  className={`${brand.logoClassName} transition-transform duration-300 group-hover:scale-105`}
                />
              </div>

              {/* Subtle Horizontal Divider Line */}
              <div className="w-full h-px bg-slate-100 dark:bg-slate-800/80" />

              {/* Bottom Half: Brand Name Only */}
              <div className="py-3.5 px-3 sm:py-4 sm:px-4 text-center flex items-center justify-center">
                <h4 className="text-xs sm:text-sm font-bold font-display text-slate-900 dark:text-white leading-tight group-hover:text-brand-orange-600 dark:group-hover:text-brand-orange-400 transition-colors">
                  {brand.name}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
