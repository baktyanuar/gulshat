import { FadeUp } from '../FadeUp';

export function FooterDark() {
  return (
    <footer className="bg-white text-gray-900 py-24 relative">
      <div className="container mx-auto px-6 text-center">
        <FadeUp>
          <h2 className="font-serif text-4xl md:text-6xl mb-8">
            Готовы создавать{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-600 italic">
              легенду?
            </span>
          </h2>
          
          <p className="font-sans font-light text-lg text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed">
            У Сауле есть всё: фактура, внешность, опыт и мудрость. Осталось только грамотно это
            подсветить. Это бренд на миллионы.
          </p>

          <a
            href="#"
            className="inline-flex items-center gap-4 px-10 py-5 bg-amber-500 text-black font-sans text-sm uppercase tracking-[0.15em] hover:bg-amber-400 transition-all duration-300 rounded-full shadow-lg shadow-amber-500/30"
          >
            Хочу также
          </a>

          <div className="mt-20 pt-10 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-6">
            <span className="font-sans text-xs text-gray-400 tracking-[0.1em] uppercase">
              Saule Sherniyaz © 2024
            </span>
            <span className="font-sans text-xs text-gray-400 tracking-[0.1em] uppercase">
              Personal Brand Strategy
            </span>
          </div>
        </FadeUp>
      </div>
    </footer>
  );
}
