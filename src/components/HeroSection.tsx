import { FadeUp } from "./FadeUp";
import saulePortrait from "@/assets/saule-portrait.png";

export function HeroSection() {
  return (
    <header className="relative min-h-screen flex items-center pt-20">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background"></div>
        <img
          src="https://images.unsplash.com/photo-1507643179173-39db4ff1cdb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          className="w-full h-full object-cover opacity-10"
          alt="Background"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
        <FadeUp className="md:w-1/2">
          <div className="inline-block px-4 py-1 border border-gold/30 rounded-full mb-6 bg-card/50 backdrop-blur-sm">
            <span className="text-xs font-sans text-gold-dark uppercase tracking-widest">Личный Бренд & Стратегия</span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl leading-tight text-beige-900 mb-6">
            Мудрость. <br />
            <span className="italic text-gold">Роскошь.</span> <br />
            Баланс.
          </h1>
          <p className="font-sans font-light text-lg text-beige-800 leading-relaxed max-w-lg mb-10">
            Почему этот бренд обречён на успех? Потому что он объединяет зрелый жизненный путь, предпринимательское
            мышление и тонкое чувствование. Это бренд женщины, у которой есть опора, вкус и внутренний баланс. Это то,
            что сейчас ищет каждая современная женщина.
          </p>
          <div className="flex gap-4">
            <a
              href="#strategy"
              className="px-8 py-4 bg-beige-900 text-beige-50 font-sans text-xs uppercase tracking-widest hover:bg-gold transition-colors shadow-lg"
            >
              Смотреть Стратегию
            </a>
          </div>
        </FadeUp>

        <FadeUp className="md:w-1/2 relative" delay={0.2}>
          <div className="relative z-10 rounded-t-full overflow-hidden shadow-2xl border-4 border-card h-[600px] w-full max-w-md mx-auto bg-beige-100">
            <img src={saulePortrait} className="w-full h-full object-cover object-top" alt="Saule Sherniyaz" />

            {/* Floating Badge */}
            <div className="absolute bottom-10 right-0 transform translate-x-4 bg-card p-6 shadow-xl border-l-4 border-gold max-w-xs">
              <p className="font-serif italic text-xl text-beige-900">«Не кричащий успех, а тихое достоинство»</p>
              <p className="text-xs font-sans text-muted-foreground mt-2 uppercase tracking-widest">Основной месседж</p>
            </div>
          </div>
          {/* Decorative Circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] border border-gold/20 rounded-full -z-10 animate-pulse-slow"></div>
        </FadeUp>
      </div>
    </header>
  );
}
