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



export function VisionSectionDark() {
  return (
    <section id="vision" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <FadeUp className="text-center mb-16">
          <span className="text-neu-accent font-sans text-xs tracking-[0.2em] uppercase block mb-3">
            Фундамент Бренда
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-neu-text">
            Почему Сауле Шернияз?
          </h2>
        </FadeUp>

        <FadeUp className="max-w-3xl mx-auto text-center mb-16">
          <p className="font-sans text-lg text-neu-text/80 leading-relaxed">
            Рынок перенасыщен «успешным успехом», громкими обещаниями и агрессивными продажами. <br />
            Saule занимает свободную нишу <strong className="text-neu-text">Quiet Luxury Mentoring</strong> — про зрелость, состояние и внутреннюю опору, а не про показную демонстрацию результатов. <br />
            Это формат влияния, где доверие рождается из личности, а не из шума.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FadeUp delay={0}>
            <div className="group p-8 rounded-2xl shadow-neu hover:shadow-neu-sm transition-all duration-300 bg-white h-full border border-white/60">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-neu-accent shadow-neu-pressed transition-colors bg-neu-bg">
                <Gem className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl mb-3 text-neu-text">Твердый Бэкграунд</h3>
              <p className="font-sans text-base text-neu-text/80 leading-relaxed">
                Сауле Шернияз – не просто блогер, а <strong className="text-neu-text font-medium">предприниматель с реальным опытом и активами</strong>. За её словами стоит прожитая жизнь: <strong className="text-neu-text font-medium">бизнес, инвестиции в недвижимость</strong>, ответственность за семью и долгосрочные решения. Именно поэтому её позиция считывается как устойчивая и вызывает естественное доверие — ей не нужно казаться, она уже есть.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="group p-8 rounded-2xl shadow-neu hover:shadow-neu-sm transition-all duration-300 bg-white h-full border border-white/60">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-neu-accent shadow-neu-pressed transition-colors bg-neu-bg">
                <SpaIcon />
              </div>
              <h3 className="font-serif text-2xl mb-3 text-neu-text">Мягкая Сила</h3>
              <p className="font-sans text-base text-neu-text/80 leading-relaxed">
                <strong className="text-neu-text">Психология, коучинг FIA, игропрактика и эзотерика</strong> объединены в единую, цельную систему. Сауле Шернияз работает не через давление, а через <strong className="text-neu-text">состояние</strong>, в котором изменения происходят естественно и без внутреннего сопротивления. Игра <strong className="text-neu-text">«Денежный магнит»</strong> в её подходе — не развлечение, а инструмент глубинной работы с мышлением, установками и отношением к деньгам.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="group p-8 rounded-2xl shadow-neu hover:shadow-neu-sm transition-all duration-300 bg-white h-full border border-white/60">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-neu-accent shadow-neu-pressed transition-colors bg-neu-bg">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl mb-3 text-neu-text">Эстетический Интеллект</h3>
              <p className="font-sans text-base text-neu-text/80 leading-relaxed">
                Эстетика для Сауле Шернияз — это <strong className="text-neu-text font-medium">язык мышления</strong> и способ передачи ценностей. Визуал блога, стиль жизни, пространство, детали — всё формирует ощущение <strong className="text-neu-text font-medium">порядка, вкуса и внутренней культуры</strong>. Такая подача создаёт доверие и притягивает зрелую, платежеспособную аудиторию, чувствительную к качеству и состоянию.
              </p>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
