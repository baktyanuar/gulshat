import { FadeUp } from '../FadeUp';
import { Gem, Eye } from 'lucide-react';

function SpaIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 3c-4 4-4 8-4 8s0 2.5 4 6c4-3.5 4-6 4-6s0-4-4-8z" />
      <path d="M12 22v-5" />
      <path d="M8 19c-2-1-3-3-3-5 0 0 3-1 7 2" />
      <path d="M16 19c2-1 3-3 3-5 0 0-3-1-7 2" />
    </svg>
  );
}

const cards = [
  {
    icon: <Gem className="w-6 h-6" />,
    iconColor: 'text-amber-400',
    title: 'Твердый Бэкграунд',
    description:
      'Сауле Шернияз – не просто блогер, а предприниматель с реальным опытом и активами. За её словами стоит прожитая жизнь: бизнес, инвестиции в недвижимость, ответственность за семью и долгосрочные решения. Именно поэтому её позиция считывается как устойчивая и вызывает естественное доверие — ей не нужно казаться, она уже есть.',
  },
  {
    icon: <SpaIcon />,
    iconColor: 'text-emerald-400',
    title: 'Мягкая Сила',
    description: (
      <>
        <strong className="text-amber-200">Психология, коучинг FIA, игропрактика и эзотерика</strong> объединены в единую, цельную систему. Сауле Шернияз работает не через давление, а через <strong className="text-amber-200">состояние</strong>, в котором изменения происходят естественно и без внутреннего сопротивления. Игра <strong className="text-amber-200">«Денежный магнит»</strong> в её подходе — не развлечение, а инструмент глубинной работы с мышлением, установками и отношением к деньгам.
      </>
    ),
  },
  {
    icon: <Eye className="w-6 h-6" />,
    iconColor: 'text-amber-300',
    title: 'Эстетический Интеллект',
    description: (
      <>
        Эстетика для Сауле Шернияз — это язык мышления и способ передачи ценностей. Визуал блога, стиль жизни, пространство, детали — всё формирует ощущение порядка, вкуса и внутренней культуры. Такая подача создаёт доверие и притягивает зрелую, платежеспособную аудиторию, чувствительную к качеству и состоянию.
      </>
    ),
  },
];

export function VisionSectionDark() {
  return (
    <section id="vision" className="py-28 bg-[#0a0a0a] relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4a574' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <FadeUp className="text-center mb-20">
          <div className="inline-flex items-center gap-4 mb-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
            <span className="text-amber-500 font-sans text-xs tracking-[0.3em] uppercase">
              Фундамент Бренда
            </span>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
          </div>
          <h2 className="font-serif text-4xl md:text-6xl text-white mt-4">Почему Сауле?</h2>
          <p className="font-sans font-light mt-6 text-amber-100/50 max-w-2xl mx-auto text-lg">
            Рынок перенасыщен "успешным успехом" и агрессивными продажами. <br />
            Сауле занимает свободную нишу <strong className="text-amber-400">Quiet Luxury Mentoring</strong>.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <FadeUp key={card.title} delay={index * 0.1}>
              <div className="group relative bg-gradient-to-b from-[#151515] to-[#0d0d0d] p-10 h-full border border-amber-500/10 hover:border-amber-500/30 transition-all duration-500">
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-amber-500/30"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-amber-500/30"></div>
                
                <div className={`w-14 h-14 bg-amber-500/10 flex items-center justify-center mb-8 ${card.iconColor}`}>
                  {card.icon}
                </div>
                <h3 className="font-serif text-2xl mb-4 text-white group-hover:text-amber-200 transition-colors">{card.title}</h3>
                <div className="font-sans font-light text-sm text-amber-100/50 leading-relaxed">
                  {card.description}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
