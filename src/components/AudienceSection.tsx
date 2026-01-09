import { FadeUp } from './FadeUp';

const audienceSegments = [
  {
    number: '01',
    title: 'Женщины 30+ в поиске смыслов',
    description:
      'У них уже закрыты базовые потребности. Они ищут не "как заработать на еду", а "как жить счастливо и богато".',
  },
  {
    number: '02',
    title: 'Уставшие "Достигаторы"',
    description:
      'Бизнес-леди, которые устали от мужских энергий и хотят прийти к деньгам через женское состояние и легкость.',
  },
  {
    number: '03',
    title: 'Эстеты и Визуалы',
    description:
      'Те, кто вдохновляется красотой быта, сервировкой, уходом за собой. Они покупают глазами.',
  },
];

export function AudienceSection() {
  return (
    <section id="audience" className="py-24 bg-background relative overflow-hidden">
      {/* Decoration */}
      <div className="absolute -right-20 top-20 text-[20rem] font-serif text-gold opacity-5 pointer-events-none select-none">
        Q
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <FadeUp className="md:w-1/2">
            <span className="text-gold font-sans text-xs tracking-ultra uppercase mb-2 block">
              Целевая Аудитория
            </span>
            <h2 className="font-serif text-5xl text-beige-900 mb-8">Для кого этот блог?</h2>

            <div className="space-y-6">
              {audienceSegments.map((segment, index) => (
                <div key={segment.number}>
                  <div className="flex items-start">
                    <span className="text-4xl text-gold/40 font-serif mr-4">{segment.number}</span>
                    <div>
                      <h4 className="font-serif text-xl text-beige-900">{segment.title}</h4>
                      <p className="font-sans text-sm font-light text-muted-foreground mt-1">
                        {segment.description}
                      </p>
                    </div>
                  </div>
                  {index < audienceSegments.length - 1 && <div className="line-gold mt-6"></div>}
                </div>
              ))}
            </div>
          </FadeUp>

          <FadeUp className="md:w-1/2" delay={0.2}>
            <div className="bg-card p-8 shadow-xl rotate-1 rounded-sm border border-beige-100">
              <div className="text-center mb-6">
                <p className="font-sans text-xs font-bold uppercase tracking-widest text-beige-900">
                  Аватар Подписчика
                </p>
              </div>
              <div className="space-y-4 font-serif text-lg text-center text-muted-foreground italic">
                <p>«Я хочу быть как она.»</p>
                <p>«Я хочу такую же спокойную уверенность.»</p>
                <p>«Я готова платить за окружение и энергию.»</p>
              </div>
              <div className="mt-8 flex justify-center">
                <div className="w-10 h-10 rounded-full bg-beige-200 border-2 border-card"></div>
                <div className="w-10 h-10 rounded-full bg-beige-300 border-2 border-card -ml-4"></div>
                <div className="w-10 h-10 rounded-full bg-beige-800/30 border-2 border-card -ml-4"></div>
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gold text-card text-xs font-sans border-2 border-card -ml-4">
                  TK
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
