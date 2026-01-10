import { FadeUp } from '../FadeUp';
import { ArrowRight } from 'lucide-react';

const strategies = [
  {
    number: '01',
    title: 'Эстетика & Быт',
    subtitle: 'Визуальный слой',
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
    items: [
      'Психология денег и внутренних ограничений',
      'Внутренний потолок и зрелые решения',
      'Трансформация личности после 30–40 лет',
      'Реализация без надрыва и внутренний баланс',
    ],
  },
  {
    number: '03',
    title: 'Личность',
    subtitle: 'Слой души',
    items: [
      'Честные истории: отношения с сыном, путь к себе',
      'Поиск партнера: критерии и ценности',
      'Духовные опоры: Ислам, сила Рода',
    ],
  },
];

export function StrategySectionDark() {
  return (
    <section id="strategy" className="py-24 bg-neu-bg relative">
      <div className="container mx-auto px-6">
        <FadeUp className="text-center mb-16">
          <span className="text-neu-accent font-sans text-xs tracking-[0.2em] uppercase block mb-3">
            Контент-Маркетинг
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-neu-text mb-6">
            Три Кита Личного Бренда
          </h2>
          <p className="font-sans text-lg text-neu-text/80 leading-relaxed max-w-2xl mx-auto">
            Чтобы продавать на высокий чек, нужно транслировать не просто пользу, а <strong className="text-neu-text">образ жизни</strong> и <strong className="text-neu-text">смыслы</strong>.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {strategies.map((strategy, index) => (
            <FadeUp key={strategy.number} delay={index * 0.1}>
              <div className="group relative p-8 bg-white rounded-2xl shadow-neu hover:shadow-neu-sm transition-all duration-300 h-full border border-white/60">
                <div className="absolute top-4 right-4 text-6xl font-serif text-neu-text/5 group-hover:text-neu-accent/10 transition-colors pointer-events-none">
                  {strategy.number}
                </div>
                <div className="relative z-10">
                  <h3 className="font-serif text-2xl text-neu-text mb-1">{strategy.title}</h3>
                  <span className="text-xs font-bold font-sans uppercase tracking-[0.15em] text-neu-accent block mb-6">{strategy.subtitle}</span>

                  <p className="font-sans text-xs font-bold uppercase tracking-widest text-neu-text/60 mb-5 border-b border-neu-text/10 pb-2 inline-block">
                    О чем писать:
                  </p>
                  <ul className="space-y-4 font-sans text-base text-neu-text/80">
                    {strategy.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-neu-accent/80 rounded-full mt-2.5 flex-shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Synergy Formula */}
        <FadeUp className="mt-20 text-center">
          <div className="inline-block p-10 bg-white rounded-[2.5rem] shadow-neu border border-white/40 max-w-4xl relative">
            <span className="text-6xl text-neu-text/10 font-serif absolute top-4 left-6">"</span>
            <h4 className="font-serif text-3xl text-neu-text mb-4">Формула Синергии</h4>
            <p className="font-sans font-light text-neu-text/80 text-xl flex flex-wrap items-center justify-center gap-3">
              <span className="font-medium text-neu-accent">Эстетика</span>
              <span>привлекает внимание</span>
              <ArrowRight className="w-5 h-5 opacity-50" />
              <span className="font-medium text-neu-text">Личность</span>
              <span>вызывает доверие</span>
              <ArrowRight className="w-5 h-5 opacity-50" />
              <span className="font-medium text-neu-accent">Экспертность</span>
              <span>продает.</span>
            </p>
            <span className="text-6xl text-neu-text/10 font-serif absolute bottom-0 right-6">"</span>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
