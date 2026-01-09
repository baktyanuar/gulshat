import { FadeUp } from './FadeUp';
import { ArrowRight } from 'lucide-react';

const strategies = [
  {
    number: '01',
    title: 'Эстетика & Быт',
    subtitle: 'Визуальный слой',
    borderColor: 'border-gold',
    accentColor: 'text-gold',
    image:
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    items: [
      'Утро, кофе, детали сервировки (продажа вкуса к жизни)',
      'Фэншуй и расхламление пространства',
      'Стиль «Тихая роскошь» в одежде и интерьере',
    ],
  },
  {
    number: '02',
    title: 'Мышление',
    subtitle: 'Экспертный слой',
    borderColor: 'border-sage',
    accentColor: 'text-sage',
    image:
      'https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    items: [
      'Психология денег: как пробить потолок',
      'Трансформация личности после 30-40 лет',
      'Как совмещать бизнес-хватки и женскую легкость',
    ],
  },
  {
    number: '03',
    title: 'Личность',
    subtitle: 'Слой души',
    borderColor: 'border-beige-800',
    accentColor: 'text-beige-800',
    image:
      'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    items: [
      'Честные истории: отношения с сыном, путь к себе',
      'Поиск партнера: критерии и ценности',
      'Духовные опоры: Ислам, сила Рода',
    ],
  },
];

export function StrategySection() {
  return (
    <section id="strategy" className="py-24 bg-card relative">
      <div className="container mx-auto px-6">
        <FadeUp className="text-center mb-16">
          <span className="text-gold font-sans text-xs tracking-ultra uppercase">
            Контент-Маркетинг
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-beige-900 mt-2">
            Три Кита Личного Бренда
          </h2>
          <p className="font-sans font-light mt-4 text-muted-foreground max-w-2xl mx-auto">
            Чтобы продавать на высокий чек, нужно транслировать не просто пользу, а{' '}
            <strong>образ жизни</strong> и <strong>смыслы</strong>.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {strategies.map((strategy, index) => (
            <FadeUp key={strategy.number} delay={index * 0.1}>
              <div
                className={`bg-background p-8 rounded-sm border-t-4 ${strategy.borderColor} shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group`}
              >
                <div className="mb-6 relative">
                  <span className="text-8xl font-serif text-card absolute -top-10 -left-4 -z-10 drop-shadow-md">
                    {strategy.number}
                  </span>
                  <h3 className="font-serif text-3xl text-beige-900 z-10 relative">
                    {strategy.title}
                  </h3>
                  <span
                    className={`text-xs font-sans uppercase tracking-widest ${strategy.accentColor} block mt-1 font-bold`}
                  >
                    {strategy.subtitle}
                  </span>
                </div>
                <div className="h-56 mb-6 overflow-hidden relative">
                  <img
                    src={strategy.image}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    alt={strategy.title}
                  />
                  <div className="absolute inset-0 border border-foreground/5"></div>
                </div>
                <p className="font-sans text-xs font-bold uppercase tracking-widest text-beige-900 mb-4 border-b border-gold/30 pb-2 inline-block">
                  О чем писать:
                </p>
                <ul className="space-y-3 font-sans font-light text-sm text-muted-foreground">
                  {strategy.items.map((item) => (
                    <li key={item} className="flex items-start">
                      <span
                        className={`w-1.5 h-1.5 ${strategy.accentColor.replace('text-', 'bg-')} rounded-full mt-1.5 mr-3 flex-shrink-0`}
                      ></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Synergy Formula */}
        <FadeUp className="mt-20 text-center">
          <div className="inline-block p-8 border border-gold/30 bg-card/80 backdrop-blur max-w-4xl relative">
            <span className="text-4xl text-gold/20 absolute top-4 left-4">"</span>
            <h4 className="font-serif text-2xl text-beige-900 mb-2">Формула Синергии</h4>
            <p className="font-sans font-light text-muted-foreground text-lg flex flex-wrap items-center justify-center gap-2">
              <span className="font-medium text-gold">Эстетика</span>
              <span>привлекает внимание</span>
              <ArrowRight className="w-4 h-4 opacity-50" />
              <span className="font-medium text-beige-900">Личность</span>
              <span>вызывает доверие</span>
              <ArrowRight className="w-4 h-4 opacity-50" />
              <span className="font-medium text-sage">Экспертность</span>
              <span>продает.</span>
            </p>
            <span className="text-4xl text-gold/20 absolute bottom-4 right-4">"</span>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
