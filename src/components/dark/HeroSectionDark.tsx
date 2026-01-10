import { FadeUp } from "../FadeUp";
import saulePortrait from "@/assets/saule-portrait.png";

export function HeroSectionDark() {
  return (
    <header className="relative min-h-screen flex items-center pt-20 bg-[#0a0a0a] overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/10 via-transparent to-amber-950/20"></div>
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-amber-600/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-16">
        {/* Left Content */}
        <FadeUp className="md:w-1/2">
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="w-12 h-px bg-gradient-to-r from-amber-500 to-transparent"></div>
            <span className="text-xs font-sans text-amber-400/80 uppercase tracking-[0.3em]">
              Личный Бренд & Стратегия
            </span>
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.1] text-white mb-8">
            Мудрость. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 italic">
              Роскошь.
            </span> <br />
            Баланс.
          </h1>
          
          <p className="font-sans font-light text-lg text-amber-100/60 leading-relaxed max-w-lg mb-12">
            Почему этот бренд обречён на успех? Потому что он объединяет зрелый жизненный путь, предпринимательское
            мышление и тонкое чувствование. Это бренд женщины, у которой есть опора, вкус и внутренний баланс. Это то,
            что сейчас ищет каждая современная женщина.
          </p>
          
          <a
            href="#strategy"
            className="group inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-sans text-xs uppercase tracking-[0.2em] hover:from-amber-400 hover:to-amber-500 transition-all duration-300 shadow-lg shadow-amber-500/20"
          >
            Смотреть Стратегию
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </FadeUp>

        {/* Right Content - Portrait */}
        <FadeUp className="md:w-1/2 relative" delay={0.2}>
          <div className="relative">
            {/* Decorative Frame */}
            <div className="absolute -inset-4 border border-amber-500/20 rounded-t-full"></div>
            <div className="absolute -inset-8 border border-amber-500/10 rounded-t-full"></div>
            
            {/* Main Image */}
            <div className="relative rounded-t-full overflow-hidden h-[600px] w-full max-w-md mx-auto bg-gradient-to-b from-amber-900/20 to-transparent">
              <img
                src={saulePortrait}
                className="w-full h-full object-cover object-top"
                alt="Saule Sherniyaz"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
            </div>

            {/* Quote Card */}
            <div className="absolute bottom-20 -right-4 md:right-0 transform md:translate-x-8 bg-[#111]/90 backdrop-blur-sm p-6 border-l-2 border-amber-500 max-w-xs shadow-2xl">
              <p className="font-serif italic text-lg text-amber-100/90">
                «Не кричащий успех, а тихое достоинство»
              </p>
              <p className="text-xs font-sans text-amber-500/70 mt-3 uppercase tracking-[0.2em]">
                Основной месседж
              </p>
            </div>
          </div>
        </FadeUp>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
    </header>
  );
}
