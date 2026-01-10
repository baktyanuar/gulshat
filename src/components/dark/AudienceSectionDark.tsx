import { FadeUp } from '../FadeUp';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Card, CardContent } from '../ui/card';
import avatar1 from '@/assets/avatars/avatar1.png';
import avatar2 from '@/assets/avatars/avatar2.png';
import avatar3 from '@/assets/avatars/avatar3.png';
import avatar4 from '@/assets/avatars/avatar4.png';

const audienceSegments = [
  {
    number: '01',
    title: 'Женщины 30+ в поиске смыслов',
    description: (
      <>
        У них уже закрыты базовые потребности. Им важно не «как больше успевать», а как <strong className="font-medium text-neu-text">жить в согласии с собой</strong>, своими ценностями и реальностью. Они ищут <strong className="font-medium text-neu-text">мотивацию, внутреннюю ясность, опору</strong> и зрелый взгляд на жизнь.
      </>
    ),
  },
  {
    number: '02',
    title: 'Уставшие "Достигаторы"',
    description: (
      <>
        Женщины, которые многое умеют, несут ответственность и привыкли справляться сами. Им близка не идея «лёгкости любой ценой», а <strong className="font-medium text-neu-text">мудрый баланс между усилием, состоянием и жизнью</strong>. Они хотят расти – в деньгах, реализации и качестве жизни – <strong className="font-medium text-neu-text">без внутреннего надрыва</strong> и постоянного напряжения.
      </>
    ),
  },
  {
    number: '03',
    title: 'Эстеты и Визуалы',
    description: (
      <>
        Те, кто вдохновляются красотой, порядком и атмосферой. Им интересно, как устроена жизнь в деталях: стиль, подача, вкус. <strong className="font-medium text-neu-text">Они покупают глазами.</strong>
      </>
    ),
  },
];

const quotes = [
  '«Мне нравится её состояние и взгляд на жизнь.»',
  '«Я хочу такую же спокойную, зрелую уверенность.»',
  '«Я готова платить за окружение, где есть глубина, вкус и статус.»',
];

export function AudienceSectionDark() {
  return (
    <section id="audience" className="py-24 bg-neu-bg relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-start gap-16">
          {/* Left: Header + List */}
          <FadeUp className="md:w-1/2">
            <span className="text-neu-accent font-sans text-xs tracking-[0.2em] uppercase block mb-3">
              Целевая Аудитория
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-neu-text mb-10">
              Для кого этот блог?
            </h2>

            <div className="space-y-6">
              {audienceSegments.map((segment, index) => (
                <Card key={segment.number} className="bg-white border-white/60 shadow-neu hover:shadow-neu-sm transition-all duration-300 rounded-2xl">
                  <CardContent className="p-8 flex items-start gap-6">
                    <span className="font-serif text-4xl text-neu-text/20 leading-none flex-shrink-0 pt-1">
                      {segment.number}
                    </span>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-serif text-2xl text-neu-text mb-3">{segment.title}</h4>
                      <p className="font-sans text-base text-neu-text/80 leading-relaxed">
                        {segment.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </FadeUp>

          {/* Right: Avatar Card */}
          <FadeUp className="md:w-1/2" delay={0.2}>
            <div className="bg-neu-bg p-8 pt-12 relative">
              {/* Decorative background element behind the avatar section if needed, 
                   but user asked for white cards. The main container can stay neutral 
                   to let the white cards pop. */}

              <div className="text-center mb-10">
                <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-neu-text/70 bg-white/50 inline-block px-4 py-2 rounded-full border border-white/40 backdrop-blur-sm">
                  Аватар Подписчика
                </p>
              </div>

              <div className="space-y-4 font-serif text-lg text-neu-text/80 italic mb-10">
                {quotes.map((quote, idx) => (
                  <Card key={idx} className="bg-white border-white/60 shadow-neu-sm transform hover:scale-[1.02] transition-transform duration-300">
                    <CardContent className="p-6 text-center">
                      <p>{quote}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="flex justify-center items-center -space-x-4 pb-4">
                <Avatar className="w-14 h-14 border-2 border-white z-0 shadow-lg ring-2 ring-white/20">
                  <AvatarImage src={avatar1} className="object-cover" />
                  <AvatarFallback>U1</AvatarFallback>
                </Avatar>
                <Avatar className="w-14 h-14 border-2 border-white z-10 shadow-lg ring-2 ring-white/20">
                  <AvatarImage src={avatar2} className="object-cover" />
                  <AvatarFallback>U2</AvatarFallback>
                </Avatar>
                <Avatar className="w-14 h-14 border-2 border-white z-20 shadow-lg ring-2 ring-white/20">
                  <AvatarImage src={avatar3} className="object-cover" />
                  <AvatarFallback>U3</AvatarFallback>
                </Avatar>
                <Avatar className="w-14 h-14 border-2 border-white z-30 shadow-lg ring-2 ring-white/20">
                  <AvatarImage src={avatar4} className="object-cover" />
                  <AvatarFallback>U4</AvatarFallback>
                </Avatar>
                <Avatar className="w-14 h-14 border-2 border-white z-40 shadow-lg ring-2 ring-white/20 bg-neu-accent flex items-center justify-center">
                  <AvatarImage src="" />
                  <AvatarFallback className="bg-neu-accent text-white font-sans text-xs font-bold">TK</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
