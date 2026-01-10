import { FadeUp } from '../FadeUp';
import { ArrowRight } from 'lucide-react';

const strategies = [
  {
    number: '01',
    title: 'Эстетика & Быт',
    subtitle: 'Визуальный слой',
    accentColor: 'amber',
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
    accentColor: 'emerald',
    image:
      'https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
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
    accentColor: 'rose',
    image:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    items: [
      'Честные истории: отношения с сыном, путь к себе',
      'Поиск партнера: критерии и ценности',
      'Духовные опоры: Ислам, сила Рода',
    ],
  },
];

const colorMap: Record<string, { border: string; text: string; bg: string; glow: string }> = {
  amber: {
    border: 'border-amber-500',
    text: 'text-amber-400',
    bg: 'bg-amber-500',
    glow: 'shadow-amber-500/20',
  },
  emerald: {
    border: 'border-emerald-500',
    text: 'text-emerald-400',
    bg: 'bg-emerald-500',
    glow: 'shadow-emerald-500/20',
  },
  rose: {
    border: 'border-rose-400',
    text: 'text-rose-400',
    bg: 'bg-rose-400',
    glow: 'shadow-rose-400/20',
  },
};

export function StrategySectionDark() {
  return (
    <section id="strategy" className="py-28 bg-[#0a0a0a] relative">
      <div className="container mx-auto px-6">
        <FadeUp className="text-center mb-20">
          <div className="inline-flex items-center gap-4 mb-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
            <span className="text-amber-500 font-sans text-xs tracking-[0.3em] uppercase">
              Контент-Маркетинг
            </span>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
          </div>
          <h2 className="font-serif text-4xl md:text-6xl text-white mt-4">
            Три Кита Личного Бренда
          </h2>
          <p className="font-sans font-light mt-6 text-amber-100/50 max-w-2xl mx-auto text-lg">
            Чтобы продавать на высокий чек, нужно транслировать не просто пользу, а{' '}
            <strong className="text-amber-400">образ жизни</strong> и <strong className="text-amber-400">смыслы</strong>.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {strategies.map((strategy, index) => {
            const colors = colorMap[strategy.accentColor];
            return (
              <FadeUp key={strategy.number} delay={index * 0.1}>
                <div
                  className={`relative bg-[#0d0d0d] border-t-2 ${colors.border} hover:shadow-xl ${colors.glow} transition-all duration-500 group overflow-hidden`}
                >
                  {/* Number watermark */}
                  <div className="absolute top-4 right-4 text-8xl font-serif text-white/[0.03] leading-none">
                    {strategy.number}
                  </div>
                  
                  <div className="p-8 relative z-10">
                    <div className="mb-6">
                      <h3 className="font-serif text-3xl text-white group-hover:text-amber-200 transition-colors">
                        {strategy.title}
                      </h3>
                      <span className={`text-xs font-sans uppercase tracking-[0.2em] ${colors.text} block mt-2 font-medium`}>
                        {strategy.subtitle}
                      </span>
                    </div>
                    
                    <div className="h-52 mb-8 overflow-hidden relative">
                      <img
                        src={strategy.image}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                        alt={strategy.title}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent"></div>
                    </div>
                    
                    <div className="mb-6">
                      <div className={`inline-flex items-center gap-2 px-3 py-1.5 border ${colors.border} bg-[#0a0a0a]`}>
                        <span className={`w-1.5 h-1.5 ${colors.bg} rounded-full`}></span>
                        <span className="font-sans text-xs font-medium uppercase tracking-[0.15em] text-white/70">
                          О чем писать
                        </span>
                      </div>
                    </div>
                    
                    <ul className="space-y-4">
                      {strategy.items.map((item) => (
                        <li key={item} className="flex items-start gap-3 font-sans font-light text-sm text-amber-100/50">
                          <span className={`w-1 h-1 ${colors.bg} rounded-full mt-2 flex-shrink-0`}></span>
                          <span className="group-hover:text-amber-100/70 transition-colors">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>

        {/* Synergy Formula */}
        <FadeUp className="mt-24 text-center">
          <div className="relative inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 via-emerald-500/20 to-rose-400/20 blur-xl"></div>
            <div className="relative bg-[#0d0d0d] p-10 border border-amber-500/20 max-w-4xl">
              {/* Quote marks */}
              <span className="absolute top-4 left-6 text-5xl text-amber-500/20 font-serif">"</span>
              <span className="absolute bottom-4 right-6 text-5xl text-amber-500/20 font-serif">"</span>
              
              <h4 className="font-serif text-2xl text-white mb-4">Формула Синергии</h4>
              <div className="font-sans font-light text-lg flex flex-wrap items-center justify-center gap-3 text-amber-100/60">
                <span className="font-medium text-amber-400">Эстетика</span>
                <span>привлекает внимание</span>
                <ArrowRight className="w-4 h-4 text-amber-500/50" />
                <span className="font-medium text-white">Личность</span>
                <span>вызывает доверие</span>
                <ArrowRight className="w-4 h-4 text-amber-500/50" />
                <span className="font-medium text-emerald-400">Экспертность</span>
                <span>продает.</span>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
