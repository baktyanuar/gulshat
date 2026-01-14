import { FadeUp } from "../FadeUp";
import { Sparkles, Heart, Zap } from "lucide-react";
import portrait from "@/assets/Image_202601141440.jpeg";

export function StrategyFoundation() {
    return (
        <section id="foundation" className="py-28 bg-white">
            <div className="container mx-auto px-6">

                <FadeUp className="text-center mb-20">
                    <span className="text-emerald-600 font-bold uppercase tracking-widest text-xs mb-4 block">Основной Месседж</span>
                    <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">Фундамент Бренда</h2>
                    <p className="text-2xl text-gray-500 max-w-3xl mx-auto font-light">
                        Почему <strong className="text-gray-900">Гульшат Абдимурат</strong>?
                    </p>
                </FadeUp>

                {/* Photo + Statement */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
                    <FadeUp>
                        <div className="relative">
                            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl">
                                <img src={portrait} alt="Gulshat Abdimurat" className="w-full aspect-[4/5] object-cover object-top" />
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-emerald-200 rounded-[2.5rem] -z-10" />
                        </div>
                    </FadeUp>

                    <FadeUp delay={0.2}>
                        <div className="bg-gray-50 p-10 md:p-12 rounded-[2rem]">
                            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                                Гульшат — не теоретик и не «эксперт из интернета».
                                <br /><br />
                                Она <strong className="text-emerald-600">проводник в изменения</strong> — женщина, которая прошла путь трансформации сама и теперь ведёт других.
                                Не через давление или жёсткие продажи, а через <em>энергию, харизму и живое проживание</em>.
                                <br /><br />
                                Это формат наставника и подруги, где доверие рождается из настоящей истории.
                            </p>
                        </div>
                    </FadeUp>
                </div>

                {/* Three Pillars */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <FadeUp>
                        <div className="bg-white border border-gray-100 p-10 rounded-[2rem] shadow-sm hover:shadow-lg transition-shadow h-full">
                            <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 mb-8">
                                <Heart size={32} />
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold mb-4">Прожитый Путь</h3>
                            <p className="text-gray-600 text-base leading-relaxed">
                                За словами Гульшат стоит реальная история: потеря мамы в 5 лет,
                                преодоление кризисов, работа с психологами, трансформация в 36-38 лет.
                                Её слова <strong>откликаются</strong> — она говорит из опыта.
                            </p>
                        </div>
                    </FadeUp>

                    <FadeUp delay={0.1}>
                        <div className="bg-white border border-gray-100 p-10 rounded-[2rem] shadow-sm hover:shadow-lg transition-shadow h-full">
                            <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 mb-8">
                                <Zap size={32} />
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold mb-4">Энергия & Харизма</h3>
                            <p className="text-gray-600 text-base leading-relaxed">
                                Главная внутренняя сила — это <strong>энергия</strong>.
                                Гульшат работает через состояние, а не через давление.
                                Игра «Денежный Магнит» — инструмент глубинной работы с мышлением,
                                а не развлечение.
                            </p>
                        </div>
                    </FadeUp>

                    <FadeUp delay={0.2}>
                        <div className="bg-white border border-gray-100 p-10 rounded-[2rem] shadow-sm hover:shadow-lg transition-shadow h-full">
                            <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 mb-8">
                                <Sparkles size={32} />
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold mb-4">Естественность</h3>
                            <p className="text-gray-600 text-base leading-relaxed">
                                Роль: <strong>Наставник + Подруга</strong>. Никаких жёстких продаж,
                                инфоцыганства или показной духовности.
                                Вдохновение образом жизни, проживание пути вместе с аудиторией.
                            </p>
                        </div>
                    </FadeUp>
                </div>
            </div>
        </section>
    );
}
