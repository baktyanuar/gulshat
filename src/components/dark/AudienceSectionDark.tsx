import { FadeUp } from '../FadeUp';

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

export function AudienceSectionDark() {
  return (
    <section id="audience" className="py-28 bg-[#080808] relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute -right-40 top-1/2 -translate-y-1/2 text-[30rem] font-serif text-amber-500/[0.03] pointer-events-none select-none leading-none">
        Q
      </div>
      
      {/* Ambient glow */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[150px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-20">
          <FadeUp className="lg:w-1/2">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-gradient-to-r from-amber-500 to-transparent"></div>
              <span className="text-amber-500 font-sans text-xs tracking-[0.3em] uppercase">
                Целевая Аудитория
              </span>
            </div>
            <h2 className="font-serif text-5xl md:text-6xl text-white mb-12">Для кого этот блог?</h2>

            <div className="space-y-10">
              {audienceSegments.map((segment, index) => (
                <div key={segment.number} className="group">
                  <div className="flex items-start gap-6">
                    <span className="text-6xl font-serif text-amber-500/20 group-hover:text-amber-500/40 transition-colors leading-none">
                      {segment.number}
                    </span>
                    <div className="flex-1">
                      <h4 className="font-serif text-2xl text-white group-hover:text-amber-200 transition-colors mb-3">
                        {segment.title}
                      </h4>
                      <p className="font-sans text-sm font-light text-amber-100/50 leading-relaxed">
                        {segment.description}
                      </p>
                    </div>
                  </div>
                  {index < audienceSegments.length - 1 && (
                    <div className="mt-10 h-px bg-gradient-to-r from-amber-500/20 via-amber-500/10 to-transparent"></div>
                  )}
                </div>
              ))}
            </div>
          </FadeUp>

          <FadeUp className="lg:w-1/2" delay={0.2}>
            <div className="relative">
              {/* Card */}
              <div className="bg-gradient-to-b from-[#151515] to-[#0a0a0a] p-10 border border-amber-500/20 shadow-2xl shadow-amber-900/10">
                {/* Corner accents */}
                <div className="absolute top-0 right-0 w-20 h-20">
                  <div className="absolute top-4 right-4 w-full h-full border-t border-r border-amber-500/30"></div>
                </div>
                <div className="absolute bottom-0 left-0 w-20 h-20">
                  <div className="absolute bottom-4 left-4 w-full h-full border-b border-l border-amber-500/30"></div>
                </div>
                
                <div className="text-center mb-10">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20">
                    <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
                    <p className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-amber-400">
                      Аватар Подписчика
                    </p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {[
                    '«Мне нравится её состояние и взгляд на жизнь.»',
                    '«Я хочу такую же спокойную, зрелую уверенность.»',
                    '«Я готова платить за окружение, энергию и где есть глубина, вкус и статус.»'
                  ].map((quote, i) => (
                    <div key={i} className="relative pl-6 border-l border-amber-500/30">
                      <p className="font-serif text-lg text-amber-100/70 italic">{quote}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-10 pt-8 border-t border-amber-500/10 flex justify-center">
                  <div className="flex -space-x-3">
                    {['bg-amber-900/50', 'bg-amber-800/50', 'bg-amber-700/50', 'bg-amber-600'].map((bg, i) => (
                      <div key={i} className={`w-10 h-10 rounded-full ${bg} border-2 border-[#151515] flex items-center justify-center`}>
                        {i === 3 && <span className="text-xs font-sans text-black font-medium">+K</span>}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
