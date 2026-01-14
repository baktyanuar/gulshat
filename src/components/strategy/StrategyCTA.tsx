import { FadeUp } from "../FadeUp";

export function StrategyCTA() {
    return (
        <section className="py-28 bg-zinc-900 text-white rounded-t-[3rem]">
            <div className="container mx-auto px-6 text-center">

                <FadeUp>
                    <span className="text-emerald-400 font-bold uppercase tracking-widest text-xs mb-6 block">Готовы?</span>
                    <h2 className="text-4xl md:text-6xl font-bold mb-8">Готовы создавать бренд?</h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
                        У Гульшат есть всё: энергия, харизма, прожитый опыт и желание помогать людям.
                        Осталось <strong className="text-white">грамотно это подсветить</strong>.
                    </p>

                    <div className="bg-emerald-600 p-10 md:p-16 rounded-[2rem] max-w-3xl mx-auto">
                        <p className="text-3xl md:text-4xl font-bold mb-6">
                            Это бренд, который вдохновляет.
                        </p>
                        <p className="text-emerald-100 text-lg">
                            Бренд настоящей женщины, которая прошла путь и ведёт других. <br />
                            Не через давление, а через энергию и любовь к себе.
                        </p>
                    </div>
                </FadeUp>

                {/* Footer */}
                <footer className="mt-24 pt-12 border-t border-white/10 text-gray-500 text-sm">
                    <p>© 2026 Гульшат Абдимурат. Бренд-стратегия.</p>
                </footer>
            </div>
        </section>
    );
}
