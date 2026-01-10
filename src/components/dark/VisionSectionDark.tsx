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
    title: 'Твердый Бэкграунд',
    description:
      'Сауле Шернияз – не просто блогер, а предприниматель с реальным опытом и активами. За её словами стоит прожитая жизнь: бизнес, инвестиции в недвижимость, ответственность за семью и долгосрочные решения.',
  },
  {
    icon: <SpaIcon />,
    title: 'Мягкая Сила',
    description:
      'Психология, коучинг FIA, игропрактика и эзотерика объединены в единую систему. Сауле работает через состояние, в котором изменения происходят естественно.',
  },
  {
    icon: <Eye className="w-6 h-6" />,
    title: 'Эстетический Интеллект',
    description:
      'Эстетика — это язык мышления и способ передачи ценностей. Визуал блога формирует ощущение порядка, вкуса и внутренней культуры.',
  },
];

export function VisionSectionDark() {
  return (
    <section id="vision" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <FadeUp className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-gray-900">
            Что такое <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-600 underline decoration-amber-500/30 decoration-wavy underline-offset-8">Quiet Luxury</span>?
          </h2>
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full">
            <span className="text-sm text-gray-500">Фундамент бренда Сауле Шернияз</span>
          </div>
        </FadeUp>

        <FadeUp className="max-w-3xl mx-auto text-center mb-16">
          <p className="font-sans text-lg text-gray-600 leading-relaxed">
            Рынок перенасыщен "успешным успехом" и агрессивными продажами. Сауле занимает свободную нишу{' '}
            <strong className="text-gray-900">Quiet Luxury Mentoring</strong> — мудрость без давления, роскошь без крика, результат через состояние.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <FadeUp key={card.title} delay={index * 0.1}>
              <div className="group p-8 border border-gray-200 rounded-2xl hover:border-amber-300 hover:shadow-xl transition-all duration-300 bg-white h-full">
                <div className="w-14 h-14 bg-amber-50 rounded-xl flex items-center justify-center mb-6 text-amber-600 group-hover:bg-amber-100 transition-colors">
                  {card.icon}
                </div>
                <h3 className="font-serif text-2xl mb-3 text-gray-900">{card.title}</h3>
                <p className="font-sans text-sm text-gray-500 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
