import { FadeUp } from "../FadeUp";
import saulePortrait from "@/assets/saule-portrait.png";

export function HeroSectionDark() {
  return (
    <header className="relative min-h-screen flex flex-col md:flex-row bg-neu-bg overflow-hidden">
      {/* Left Content */}
      <div className="w-full md:w-1/2 flex items-start justify-center p-6 md:p-16 relative z-10 pt-32 md:pt-40">
        <FadeUp className="text-center md:text-left max-w-lg">
          <div className="inline-flex items-center gap-3 mb-8">
            <span className="text-xs font-sans text-neu-accent uppercase tracking-[0.3em] font-medium">
              Личный Бренд & Стратегия
            </span>
          </div>

          <h1 className="font-serif text-5xl md:text-7xl leading-[1.1] text-neu-text mb-8">
            Мудрость. <br />
            <span className="text-neu-accent italic">
              Роскошь.
            </span> <br />
            Баланс.
          </h1>

          <p className="font-sans text-lg text-neu-text/90 leading-relaxed mb-12">
            Почему этот бренд обречён на успех? Потому что он объединяет <strong className="font-medium text-neu-text">зрелый жизненный путь</strong>, <strong className="font-medium text-neu-text">предпринимательское мышление</strong> и <strong className="font-medium text-neu-text">тонкое чувствование</strong>. Это бренд женщины, у которой есть <strong className="font-medium text-neu-text">опора, вкус и внутренний баланс</strong>. Это то, что сейчас ищет каждая современная женщина.
          </p>

          <a
            href="#strategy"
            className="inline-flex items-center gap-4 px-8 py-4 bg-neu-bg text-neu-accent font-sans text-sm font-bold uppercase tracking-[0.15em] border border-white/40 transition-all duration-300 rounded-full shadow-neu hover:shadow-neu-pressed hover:scale-[0.98] active:scale-95"
          >
            Смотреть Стратегию
          </a>
        </FadeUp>
      </div>

      {/* Right Content - Full Screen Image */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-screen relative">
        <FadeUp delay={0.2} className="h-full w-full">
          <div className="absolute inset-0 bg-neu-bg/10 z-10 md:hidden"></div> {/* Overlay for mobile text readability if needed, though text is above */}
          <img
            src={saulePortrait}
            className="w-full h-full object-cover object-top"
            alt="Saule Sherniyaz"
          />

          {/* Quote Card - Positioned over image */}
          <div className="absolute bottom-8 left-8 right-8 md:right-auto md:max-w-xs bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/40 z-20 hidden md:block">
            <p className="font-serif italic text-lg text-neu-text">
              «Не кричащий успех, а тихое достоинство»
            </p>
            <p className="text-xs font-sans text-neu-accent mt-3 uppercase tracking-[0.15em] font-medium">
              Основной месседж
            </p>
          </div>
        </FadeUp>
      </div>
    </header>
  );
}
