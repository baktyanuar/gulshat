import { FadeUp } from './FadeUp';
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
    icon: <Gem className="w-6 h-6 text-gold" />,
    title: 'Твердый Бэкграунд',
    description:
      'Сауле Шернияз – не просто блогер, а предприниматель с реальным опытом и активами. За её словами стоит прожитая жизнь: бизнес, инвестиции в недвижимость, ответственность за семью и долгосрочные решения. Именно поэтому её позиция считывается как устойчивая и вызывает естественное доверие — ей не нужно казаться, она уже есть.',
  },
  {
    icon: <span className="text-sage"><SpaIcon /></span>,
    title: 'Мягкая Сила',
    description: (
      <>
        <strong>Психология, коучинг FIA, игропрактика и эзотерика</strong> объединены в единую, цельную систему. Сауле Шернияз работает не через давление, а через <strong>состояние</strong>, в котором изменения происходят естественно и без внутреннего сопротивления. Игра <strong>«Денежный магнит»</strong> в её подходе — не развлечение, а инструмент глубинной работы с мышлением, установками и отношением к деньгам.
      </>
    ),
  },
  {
    icon: <Eye className="w-6 h-6 text-beige-900" />,
    title: 'Эстетический Интеллект',
    description:
      'Визуал блога сам по себе продает. Сервировка, интерьер, стиль жизни — это «витрина», которая притягивает платежеспособную аудиторию.',
  },
];

export function VisionSection() {
  return (
    <section id="vision" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <FadeUp className="text-center mb-16">
          <span className="text-gold font-sans text-xs tracking-ultra uppercase">
            Фундамент Бренда
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-beige-900 mt-2">Почему Сауле?</h2>
          <p className="font-sans font-light mt-4 text-muted-foreground max-w-2xl mx-auto">
            Рынок перенасыщен "успешным успехом" и агрессивными продажами. <br />
            Сауле занимает свободную нишу <strong>Quiet Luxury Mentoring</strong>.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <FadeUp key={card.title} delay={index * 0.1}>
              <div className="glass-card p-10 h-full">
                <div className="w-14 h-14 bg-beige-100 rounded-full flex items-center justify-center mb-6">
                  {card.icon}
                </div>
                <h3 className="font-serif text-2xl mb-3 text-beige-900">{card.title}</h3>
                <div className="font-sans font-light text-sm text-muted-foreground leading-relaxed">
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
