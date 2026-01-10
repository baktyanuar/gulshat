import { FadeUp } from '../FadeUp';
import { Check, X } from 'lucide-react';

const oldWay = [
  'Агрессивные продажи и манипуляции',
  'Нужно "выгорать" ради результата',
  '3-6 месяцев без отдыха',
  'Постоянное напряжение и стресс',
  'Мужские энергии и давление',
];

const newWay = [
  'Мягкая сила через состояние',
  'Результат в гармонии с собой',
  'Трансформация без надрыва',
  'Внутренняя устойчивость',
  'Баланс усилий и лёгкости',
];

const strategies = [
  {
    number: '01',
    title: 'Эстетика & Быт',
    subtitle: 'Визуальный слой',
    items: [
      'Утро, кофе, детали сервировки',
      'Фэншуй и расхламление',
      'Стиль «Тихая роскошь»',
    ],
  },
  {
    number: '02',
    title: 'Мышление',
    subtitle: 'Экспертный слой',
    items: [
      'Психология денег',
      'Внутренний потолок',
      'Трансформация 30–40+',
      'Реализация без надрыва',
    ],
  },
  {
    number: '03',
    title: 'Личность',
    subtitle: 'Слой души',
    items: [
      'Честные истории',
      'Поиск партнера',
      'Духовные опоры',
    ],
  },
];

export function StrategySectionDark() {
  return (
    <section id="strategy" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        {/* Comparison Section */}
        <FadeUp className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">
            Старый путь или <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-600 underline decoration-amber-500/30 decoration-wavy underline-offset-8">Quiet Luxury</span>
          </h2>
        </FadeUp>

        <div className="grid md:grid-cols-2 gap-8 mb-24 max-w-4xl mx-auto">
          {/* Old Way */}
          <FadeUp>
            <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="flex items-center gap-2 mb-6">
                <h3 className="font-serif text-2xl text-gray-400">Старый подход</h3>
                <span className="text-2xl">😔</span>
              </div>
              <ul className="space-y-4">
                {oldWay.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-500">
                    <X className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>

          {/* New Way */}
          <FadeUp delay={0.1}>
            <div className="p-8 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl border border-amber-100">
              <div className="flex items-center gap-2 mb-6">
                <h3 className="font-serif text-2xl text-amber-900">Quiet Luxury</h3>
                <span className="text-2xl">💛</span>
              </div>
              <ul className="space-y-4">
                {newWay.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-amber-800">
                    <Check className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>
        </div>

        {/* Content Strategy */}
        <FadeUp className="text-center mb-12">
          <h3 className="font-serif text-3xl text-gray-900">Три Кита Контента</h3>
          <p className="text-gray-500 mt-2">Чтобы продавать на высокий чек</p>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {strategies.map((strategy, index) => (
            <FadeUp key={strategy.number} delay={index * 0.1}>
              <div className="group relative p-8 bg-white border border-gray-200 rounded-2xl hover:border-amber-300 hover:shadow-lg transition-all duration-300 h-full">
                <div className="absolute top-4 right-4 text-6xl font-serif text-gray-100 group-hover:text-amber-100 transition-colors">
                  {strategy.number}
                </div>
                <div className="relative z-10">
                  <h4 className="font-serif text-2xl text-gray-900 mb-1">{strategy.title}</h4>
                  <span className="text-xs font-sans uppercase tracking-[0.15em] text-amber-600 font-medium">
                    {strategy.subtitle}
                  </span>
                  <ul className="mt-6 space-y-3">
                    {strategy.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-gray-600 text-sm">
                        <span className="w-1.5 h-1.5 bg-amber-400 rounded-full"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
