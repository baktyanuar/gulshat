import { FadeUp } from '../FadeUp';
import { Check } from 'lucide-react';

const timeline = [
  'Придумать идею (для тех, у кого её нет)',
  'Выбрать нишу и определить аудиторию',
  'Создать продуктовую линейку',
  'Запустить первые продажи',
];

const products = [
  {
    tier: 'Low Ticket',
    title: 'Гайды по Эстетике',
    description: 'Фэншуй дома, сервировка, расхламление. Легкий вход в воронку.',
    price: 'от 5 000 ₸',
  },
  {
    tier: 'Main Product',
    title: 'Курс / Мастер-группа',
    description: 'Мышление, деньги, состояние.',
    price: 'от 50 000 ₸',
    highlighted: true,
  },
  {
    tier: 'VIP',
    title: 'Индивидуальное сопровождение',
    description: 'Личный контакт, глубина и живое поле. Точечная консультационная работа.',
    price: 'от 300 000 ₸',
  },
  {
    tier: 'Offline',
    title: 'Женские Встречи',
    description: 'Бранчи, камерные встречи, трансформационные игры.',
    price: 'по запросу',
  },
];

export function MonetizationSectionDark() {
  return (
    <section id="monetization" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <FadeUp className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">
            Что вы успеете за <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500 underline decoration-amber-500/50 decoration-wavy underline-offset-8">2 недели</span> после покупки
          </h2>
          <p className="text-white/50 text-lg mt-6">если изучите материалы интенсива</p>
        </FadeUp>

        {/* Timeline */}
        <FadeUp className="mb-24">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              {/* Line */}
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-amber-500 via-amber-500/50 to-transparent"></div>
              
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <div key={index} className="flex items-start gap-6 pl-0">
                    <div className="w-12 h-12 rounded-full bg-amber-500/20 border border-amber-500/50 flex items-center justify-center flex-shrink-0 relative z-10">
                      <Check className="w-5 h-5 text-amber-400" />
                    </div>
                    <div className="pt-3">
                      <p className="text-white/80 text-lg">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Products */}
        <FadeUp className="text-center mb-12">
          <h3 className="font-serif text-3xl text-white">Продуктовая Линейка</h3>
          <p className="text-white/40 mt-2">Бренд — это бизнес-система</p>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((product, index) => (
            <FadeUp key={product.title} delay={index * 0.05}>
              <div className={`group relative p-6 rounded-2xl border transition-all duration-300 h-full ${
                product.highlighted 
                  ? 'bg-gradient-to-b from-amber-500/20 to-amber-600/10 border-amber-500/50 hover:border-amber-400' 
                  : 'bg-white/[0.02] border-white/10 hover:border-white/30'
              }`}>
                <span className={`text-xs font-medium uppercase tracking-[0.15em] mb-3 block ${
                  product.highlighted ? 'text-amber-400' : 'text-white/40'
                }`}>
                  {product.tier}
                </span>
                <h4 className="font-serif text-xl text-white mb-2">{product.title}</h4>
                <p className="font-sans text-sm text-white/40 leading-relaxed mb-4">
                  {product.description}
                </p>
                <p className={`text-sm font-medium ${product.highlighted ? 'text-amber-400' : 'text-white/60'}`}>
                  {product.price}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Quote */}
        <FadeUp className="mt-16 text-center">
          <div className="inline-block max-w-2xl">
            <p className="font-serif italic text-2xl text-white/70">
              «Люди платят большие деньги за состояние, рядом с которым они растут.»
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
