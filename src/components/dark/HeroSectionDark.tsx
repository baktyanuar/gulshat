import { FadeUp } from "../FadeUp";
import saulePortrait from "@/assets/saule-portrait.png";

export function HeroSectionDark() {
  return (
    <header className="relative min-h-screen flex items-center pt-20 bg-[#0a0a0a] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1507643179173-39db4ff1cdb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          className="w-full h-full object-cover opacity-30"
          alt="Background"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/60 via-[#0a0a0a]/40 to-[#0a0a0a]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-16">
        {/* Left Content */}
        <FadeUp className="md:w-1/2 text-center md:text-left">
          <div className="inline-flex items-center gap-3 mb-8">
            <span className="text-xs font-sans text-amber-400 uppercase tracking-[0.3em]">
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
          
          <p className="font-sans font-light text-lg text-white/70 leading-relaxed max-w-lg mb-12 mx-auto md:mx-0">
            Почему этот бренд обречён на успех? Потому что он объединяет зрелый жизненный путь, предпринимательское
            мышление и тонкое чувствование. Это бренд женщины, у которой есть опора, вкус и внутренний баланс.
          </p>
          
          <a
            href="#strategy"
            className="inline-flex items-center gap-4 px-8 py-4 bg-amber-500 text-black font-sans text-sm uppercase tracking-[0.15em] hover:bg-amber-400 transition-all duration-300 rounded-full shadow-lg shadow-amber-500/30"
          >
            Смотреть Стратегию
          </a>
        </FadeUp>

        {/* Right Content - Portrait */}
        <FadeUp className="md:w-1/2 relative" delay={0.2}>
          <div className="relative max-w-md mx-auto">
            {/* Main Image */}
            <div className="relative rounded-t-full overflow-hidden h-[500px] md:h-[600px] w-full bg-gradient-to-b from-amber-900/20 to-transparent border-4 border-white/10">
              <img
                src={saulePortrait}
                className="w-full h-full object-cover object-top"
                alt="Saule Sherniyaz"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
            </div>

            {/* Quote Card */}
            <div className="absolute bottom-16 -left-4 md:left-0 md:-translate-x-8 bg-white p-6 max-w-xs shadow-2xl rounded-lg">
              <p className="font-serif italic text-lg text-gray-900">
                «Не кричащий успех, а тихое достоинство»
              </p>
              <p className="text-xs font-sans text-amber-600 mt-3 uppercase tracking-[0.15em] font-medium">
                Основной месседж
              </p>
            </div>
          </div>
        </FadeUp>
      </div>
    </header>
  );
}
