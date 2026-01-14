import { FadeUp } from '../FadeUp';

export function FooterDark() {
  return (
    <footer className="bg-black text-white py-20 rounded-t-[3rem] mt-12">
      <div className="container mx-auto px-6 text-center">
        <FadeUp>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8 leading-tight">
            Живи. Люби. Вдохновляй.
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-lg">
            Моя цель — помочь тебе найти свой путь к изобилию и любви к себе через игру и личный пример.
          </p>
        </FadeUp>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2026 Gulshat Abdimurat. Все права защищены.</p>
          <p className="mt-2 md:mt-0">Almaty, Kazakhstan</p>
        </div>
      </div>
    </footer>
  );
}
