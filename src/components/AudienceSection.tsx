import { FadeUp } from './FadeUp';

const audienceSegments = [
  {
    number: '01',
    title: 'Женщины 30+ в поиске смыслов',
    description:
      'У них уже закрыты базовые потребности. Им важно не «как больше успевать», а как жить в согласии с собой, своими ценностями и реальностью. Они ищут мотивацию, внутреннюю ясность, опору и зрелый взгляд на жизнь.',
  },
  {
    number: '02',
    title: 'Уставшие "Достигаторы"',
    description:
      'Женщины, которые многое умеют, несут ответственность и привыкли справляться сами. Им близка не идея «лёгкости любой ценой», а мудрый баланс между усилием, состоянием и жизнью. Они хотят расти – в деньгах, реализации и качестве жизни – без внутреннего надрыва и постоянного напряжения.',
  },
  {
    number: '03',
    title: 'Эстеты и Визуалы',
    description:
      'Те, кто вдохновляются красотой, порядком и атмосферой. Им интересно, как устроена жизнь в деталях: стиль, подача, вкус. Они покупают глазами.',
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
                <p>«Мне нравится её состояние и взгляд на жизнь.»</p>
                <p>«Я хочу такую же спокойную, зрелую уверенность.»</p>
                <p>«Я готова платить за окружение, энергию и где есть глубина, вкус и статус.»</p>
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
