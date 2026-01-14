import { FadeUp } from "../FadeUp";

export function StrategyHero() {
    return (
        <header className="min-h-screen flex items-center justify-center bg-zinc-900 text-white relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-emerald-900/20 blur-[200px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <FadeUp>
                    <p className="text-emerald-400 font-bold uppercase tracking-[0.3em] text-sm mb-8">
                        Личный Бренд & Стратегия
                    </p>

                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-[0.9]">
                        Энергия.<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Харизма.</span><br />
                        Трансформация.
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12">
                        Бренд женщины, которая <strong className="text-white">прошла путь сама</strong> и теперь ведёт других.
                        Не эксперт — <strong className="text-white">проводник в изменения</strong>.
                        Через живой формат, энергию и настоящие истории.
                    </p>

                    <a href="#foundation" className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 rounded-full font-bold transition-colors">
                        Смотреть Стратегию
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </a>
                </FadeUp>
            </div>

            {/* Bottom Quote */}
            <div className="absolute bottom-12 left-0 right-0 text-center">
                <FadeUp delay={0.3}>
                    <p className="text-lg text-gray-500 font-serif italic">Гульшат Абдимурат</p>
                    <p className="text-sm text-gray-600 mt-2">Игропрактик «Денежный Магнит» · Наставник · Подруга</p>
                </FadeUp>
            </div>
        </header>
    );
}
