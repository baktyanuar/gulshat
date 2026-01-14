import { FadeUp } from "../FadeUp";
import { Sparkles } from "lucide-react";

export function StrategyProducts() {
    return (
        <section className="py-28 bg-gray-50">
            <div className="container mx-auto px-6">

                <FadeUp className="text-center mb-20">
                    <span className="text-emerald-600 font-bold uppercase tracking-widest text-xs mb-4 block">Продукт</span>
                    <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">Что продаём?</h2>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                        Один продукт. Один фокус. Максимальная глубина.
                    </p>
                </FadeUp>



                {/* Single Product Card */}
                <FadeUp>
                    <div className="max-w-3xl mx-auto bg-emerald-900 text-white p-12 md:p-16 rounded-[3rem] relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
                        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/20 blur-[100px] rounded-full pointer-events-none" />

                        <div className="relative z-10 text-center">
                            <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center mx-auto mb-8">
                                <Sparkles size={40} className="text-emerald-300" />
                            </div>

                            <p className="text-emerald-300 font-bold uppercase tracking-widest text-sm mb-4">Основной Продукт</p>
                            <h3 className="text-4xl md:text-5xl font-bold mb-6">Трансформационная Игра<br />«Денежный Магнит»</h3>

                            <p className="text-xl text-emerald-100/90 leading-relaxed mb-10 max-w-2xl mx-auto">
                                Глубинная работа с мышлением, установками и отношением к деньгам.
                                Живой формат, групповая работа, реальные трансформации.
                                Не развлечение — инструмент изменений.
                            </p>

                            <div className="flex flex-wrap justify-center gap-4">
                                {["Живой формат", "Групповая работа", "Трансформация мышления", "Работа с установками"].map((tag, i) => (
                                    <span key={i} className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </FadeUp>
            </div>
        </section>
    );
}
