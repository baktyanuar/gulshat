import { FadeUp } from './FadeUp';

export function Footer() {
  return (
    <footer className="bg-beige-900 text-beige-100 py-20 border-t border-gold/20">
      <div className="container mx-auto px-6 text-center">
        <FadeUp>
          <h2 className="font-serif text-5xl md:text-6xl mb-8 text-beige-50">
            Готовы создавать легенду?
          </h2>
          <p className="font-sans font-light text-lg opacity-80 max-w-2xl mx-auto mb-12">
            У Сауле есть всё: фактура, внешность, опыт и мудрость. Осталось только грамотно это
            подсветить. Это бренд на миллионы.
          </p>

          <div className="mt-20 pt-10 border-t border-beige-50/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-sans opacity-50">
            <span>Saule Sherniyaz © 2024</span>
            <span>Personal Brand Strategy</span>
          </div>
        </FadeUp>
      </div>
    </footer>
  );
}
