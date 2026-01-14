import { FadeUp } from '../FadeUp';
import { Target, Sparkles, Heart } from 'lucide-react';

export function StrategySectionDark() {
  return (
    <section id="dreams" className="py-24 bg-gray-900 text-white rounded-t-[3rem] -mb-12 relative z-10">
      <div className="container mx-auto px-6">
        <FadeUp className="text-center mb-16">
          <h2 className="heading-section text-white mb-6">
            Вектор Роста <span className="text-purple-400">&</span> Мечты
          </h2>
          <p className="text-gray-400">К чему я иду прямо сейчас.</p>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FadeUp delay={0.1}>
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl h-full hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-400 mb-6">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">Самореализация</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Развитие Инстаграма</li>
                <li>• Стать шикарным игропрактиком</li>
                <li>• Получать восторженные отзывы</li>
              </ul>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl h-full hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 bg-pink-500/20 rounded-full flex items-center justify-center text-pink-400 mb-6">
                <Sparkles size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">Самопознание</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Расти духовно и ментально</li>
                <li>• Познавать себя глубже</li>
                <li>• Решать психологические затыки</li>
              </ul>
            </div>
          </FadeUp>

          <FadeUp delay={0.3}>
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl h-full hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 mb-6">
                <Heart size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">Тело и Здоровье</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Похудеть на 5 кг</li>
                <li>• Пройти чекап организма</li>
                <li>• Правильное питание и спорт</li>
              </ul>
            </div>
          </FadeUp>
        </div>

        <FadeUp className="mt-16 text-center">
          <div className="inline-block px-10 py-6 border border-white/20 rounded-full backdrop-blur-md bg-white/5">
            <p className="text-lg md:text-xl font-light">
              ✨ <span className="font-bold text-white">Главная Мечта:</span> Создать семью, родить детей, жить в шикарных условиях и открыть свой бизнес.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
