import { FadeUp } from '../FadeUp';
import { ArrowRight, MessageCircle } from 'lucide-react';

export function MonetizationSectionDark() {
  return (
    <section id="path" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <FadeUp className="mb-16 max-w-3xl">
          <span className="text-emerald-600 font-bold uppercase tracking-widest text-xs mb-4 block">
            Expertise
          </span>
          <h2 className="heading-section text-gray-900 mb-6">
            Путь в Экспертность
          </h2>
          <p className="text-gray-500 text-lg">
            7 лет я работала в семейном бизнесе у дяди. Но тема самопознания и психологии всегда меня манила.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <FadeUp delay={0.1}>
            <div className="card-lara h-full bg-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110" />
              <h3 className="text-2xl font-bold mb-6 relative z-10">Трансформация</h3>
              <p className="text-gray-600 mb-6 leading-relaxed relative z-10">
                В какой-то момент я прошла игру <strong>«Денежный Магнит»</strong> у подруги (автора игры).
                Мне так понравилось, что я решила стать игропрактиком.
                До этого у меня не было тренингов. Я прошла дотошное обучение у Аяны Нургали.
              </p>
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 relative z-10">
                <p className="font-bold text-gray-900 mb-1">Страхи в начале</p>
                <p className="text-gray-500 text-sm">"Боялась, что не смогу правильно вести игру, наврежу людям. Было сложно из-за памяти."</p>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="card-lara h-full bg-gradient-emerald text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
              <h3 className="text-2xl font-bold mb-6">Почему "Денежный Магнит"?</h3>
              <p className="text-white/90 mb-8 leading-relaxed">
                У меня было тяжелое детство, и мне интересны истории судеб других людей.
                Через игру я помогаю людям и сама получаю облегчение.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">1</div>
                  <span>За это мне легко брать деньги</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">2</div>
                  <span>Это живой формат и общение</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">3</div>
                  <span>Я проводник в изменения</span>
                </li>
              </ul>
            </div>
          </FadeUp>
        </div>

        {/* Product / Offer */}
        <FadeUp>
          <div className="card-lara bg-white border-2 border-emerald-100 text-center">
            <div>
              <h3 className="text-3xl font-bold mb-2">Игропрактик «Денежный Магнит»</h3>
              <p className="text-gray-500">Основной продукт: Трансформация мышления через игру.</p>
            </div>
          </div>
        </FadeUp>

      </div>
    </section>
  );
}
