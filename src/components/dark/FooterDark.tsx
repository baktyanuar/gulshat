import { FadeUp } from '../FadeUp';

export function FooterDark() {
  return (
    <footer className="bg-neu-bg text-neu-text py-24 relative border-t border-white/40">
      <div className="container mx-auto px-6 text-center">
        <FadeUp>
          <h2 className="font-serif text-4xl md:text-6xl mb-8">
            Готовы создавать{' '}
            <span className="text-neu-accent italic">
              легенду?
            </span>
          </h2>

          <p className="font-sans text-lg text-neu-text/80 max-w-2xl mx-auto mb-12 leading-relaxed">
            У Сауле есть всё: фактура, внешность, опыт и мудрость. Осталось только грамотно это
            подсветить. Это бренд на миллионы.
          </p>



          <div className="mt-20 pt-10 border-t border-white/20 flex flex-col sm:flex-row justify-between items-center gap-4">
            <span className="font-sans text-xs text-neu-text/50 tracking-[0.1em] uppercase">
              Saule Sherniyaz © 2026
            </span>
            <span className="font-sans text-xs text-neu-text/50 tracking-[0.1em] uppercase">
              Personal Brand Strategy by Ayana Nurgali
            </span>
          </div>
        </FadeUp>
      </div>
    </footer>
  );
}
