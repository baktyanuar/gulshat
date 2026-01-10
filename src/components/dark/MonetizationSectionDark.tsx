import { FadeUp } from '../FadeUp';

const products = [
  {
    tier: 'Low Ticket',
    tierColor: 'text-amber-100/40',
    title: 'Гайды по Эстетике',
    description: 'Фэншуй дома, сервировка, расхламление. Легкий вход в воронку.',
  },
  {
    tier: 'Main Product',
    tierColor: 'text-amber-400',
    title: 'Курс / Мастер-группа',
    description: 'Мышление, деньги, состояние.',
  },
  {
    tier: 'VIP',
    tierColor: 'text-white',
    title: 'Индивидуальное сопровождение',
    description: 'Для женщин, которым важен личный контакт, глубина и живое поле. Про мышление, жизненные решения, деньги и внутреннюю устойчивость. Не обучение, точечная личная консультационная работа.',
  },
  {
    tier: 'Offline',
    tierColor: 'text-emerald-400',
    title: 'Женские Встречи',
    description: 'Бранчи, камерные встречи, трансформационные игры, живое поле Сауле.',
  },
];

export function MonetizationSectionDark() {
  return (
    <section id="monetization" className="py-28 bg-[#080808] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[200px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          <FadeUp className="lg:w-1/3 lg:sticky lg:top-32">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-gradient-to-r from-amber-500 to-transparent"></div>
              <span className="text-amber-500 font-sans text-xs tracking-[0.3em] uppercase">
                Монетизация
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-8">Продуктовая Линейка</h2>
            <p className="font-sans font-light text-amber-100/50 mb-10 leading-relaxed">
              Бренд строится не только ради лайков. Это бизнес-система. Мы продаем не воздух, а
              трансформацию.
            </p>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500/50 to-amber-600/50 blur"></div>
              <div className="relative bg-[#0a0a0a] p-6 border-l-2 border-amber-500">
                <p className="font-serif italic text-xl text-amber-100/90">
                  «Люди платят большие деньги за состояние, рядом с которым они растут.»
                </p>
              </div>
            </div>
          </FadeUp>

          <FadeUp className="lg:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {products.map((product, index) => (
                <div
                  key={product.title}
                  className="group relative bg-gradient-to-b from-[#111] to-[#0a0a0a] p-8 border border-amber-500/10 hover:border-amber-500/30 transition-all duration-500"
                >
                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-amber-500/20 to-transparent transform rotate-45 translate-x-8 -translate-y-8"></div>
                  </div>
                  
                  <div className="relative z-10">
                    <span className={`text-xs font-bold ${product.tierColor} uppercase tracking-[0.2em] mb-4 block`}>
                      {product.tier}
                    </span>
                    <h3 className="font-serif text-2xl text-white mb-3 group-hover:text-amber-200 transition-colors">
                      {product.title}
                    </h3>
                    <p className="font-sans font-light text-sm text-amber-100/40 leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
