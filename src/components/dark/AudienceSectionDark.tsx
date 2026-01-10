import { FadeUp } from '../FadeUp';
import { Globe, Sparkles, Users, BookOpen } from 'lucide-react';

const audienceSegments = [
  {
    icon: <Users className="w-5 h-5" />,
    title: 'Женщины 30+ в поиске смыслов',
    description: 'Им важно не «как больше успевать», а как жить в согласии с собой, своими ценностями и реальностью.',
  },
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: 'Уставшие "Достигаторы"',
    description: 'Им близка не идея «лёгкости любой ценой», а мудрый баланс между усилием, состоянием и жизнью.',
  },
  {
    icon: <Globe className="w-5 h-5" />,
    title: 'Эстеты и Визуалы',
    description: 'Им интересно, как устроена жизнь в деталях: стиль, подача, вкус. Они покупают глазами.',
  },
  {
    icon: <BookOpen className="w-5 h-5" />,
    title: 'Ищущие глубину',
    description: 'Они ищут мотивацию, внутреннюю ясность, опору и зрелый взгляд на жизнь.',
  },
];

export function AudienceSectionDark() {
  return (
    <section id="audience" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <FadeUp className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">
            Всё, что вы хотели — можно <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500 underline decoration-amber-500/50 decoration-wavy underline-offset-8">получить</span>
          </h2>
          <p className="text-white/50 text-lg mt-6">Целевая аудитория</p>
        </FadeUp>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {audienceSegments.map((segment, index) => (
            <FadeUp key={segment.title} delay={index * 0.05}>
              <div className="group p-6 border border-white/10 rounded-xl hover:border-amber-500/50 transition-all duration-300 bg-white/[0.02] hover:bg-white/[0.05] text-center h-full">
                <div className="w-12 h-12 mx-auto mb-4 border border-white/20 rounded-xl flex items-center justify-center text-white/60 group-hover:text-amber-400 group-hover:border-amber-500/50 transition-colors">
                  {segment.icon}
                </div>
                <h4 className="font-serif text-lg text-white mb-2">{segment.title}</h4>
                <p className="font-sans text-xs text-white/40 leading-relaxed">{segment.description}</p>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Chat-like section */}
        <FadeUp delay={0.2}>
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col gap-4">
              {/* User message */}
              <div className="self-start max-w-sm">
                <div className="bg-white/10 rounded-2xl rounded-bl-md px-5 py-3">
                  <p className="text-white/80 text-sm">— Неужели это для меня?!</p>
                </div>
              </div>
              
              {/* Bot response */}
              <div className="self-end max-w-md">
                <div className="bg-gradient-to-r from-amber-500/20 to-amber-600/20 border border-amber-500/30 rounded-2xl rounded-br-md px-6 py-5">
                  <p className="text-white/90 text-sm leading-relaxed">
                    — Да! Если вы узнали себя в этих описаниях — бренд Сауле создан для вас. Здесь нет давления, только состояние ✨
                  </p>
                  <div className="mt-4 pt-4 border-t border-amber-500/20">
                    <p className="text-amber-400 text-xs font-medium">@saulesherniyaz</p>
                    <p className="text-white/40 text-xs mt-1">Quiet Luxury Mentoring</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
