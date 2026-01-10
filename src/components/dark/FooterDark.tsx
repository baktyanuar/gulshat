import { FadeUp } from '../FadeUp';

export function FooterDark() {
  return (
    <footer className="bg-[#050505] text-white py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-500/5 rounded-full blur-[150px]"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <FadeUp>
          <div className="inline-flex items-center gap-4 mb-8">
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
            <div className="w-3 h-3 rotate-45 border border-amber-500"></div>
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
          </div>
          
          <h2 className="font-serif text-5xl md:text-7xl mb-8">
            <span className="text-white">Готовы создавать </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 italic">
              легенду?
            </span>
          </h2>
          
          <p className="font-sans font-light text-lg text-amber-100/40 max-w-2xl mx-auto mb-16 leading-relaxed">
            У Сауле есть всё: фактура, внешность, опыт и мудрость. Осталось только грамотно это
            подсветить. Это бренд на миллионы.
          </p>

          <div className="mt-20 pt-10 border-t border-amber-500/10 flex flex-col sm:flex-row justify-between items-center gap-6">
            <span className="font-sans text-xs text-amber-100/30 tracking-[0.15em] uppercase">
              Saule Sherniyaz © 2024
            </span>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
              <span className="font-sans text-xs text-amber-100/30 tracking-[0.15em] uppercase">
                Personal Brand Strategy
              </span>
            </div>
          </div>
        </FadeUp>
      </div>
    </footer>
  );
}
