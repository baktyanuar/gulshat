import { FadeUp } from "../FadeUp";
import { Target, Sparkles, Heart, Check } from "lucide-react";

const dreams = [
    "Создать свою семью",
    "Родить детей",
    "Жить в шикарных условиях",
    "Открыть свой бизнес"
];

const growthAreas = [
    {
        icon: Target,
        title: "Самореализация",
        goals: ["Развитие Инстаграма", "Стать шикарным игропрактиком", "Получать восторженные отзывы"]
    },
    {
        icon: Sparkles,
        title: "Самопознание",
        goals: ["Расти психологически", "Познавать себя глубже", "Решать внутренние блоки"]
    },
    {
        icon: Heart,
        title: "Тело & Здоровье",
        goals: ["Похудеть на 5 кг", "Пройти чекап", "Правильное питание и спорт"]
    },
];

export function StoryDreams() {
    return (
        <section className="py-28 bg-zinc-900 text-white rounded-t-[3rem]">
            <div className="container mx-auto px-6">

                {/* Growth Areas */}
                <FadeUp className="mb-24">
                    <div className="text-center mb-16">
                        <span className="text-emerald-400 font-bold uppercase tracking-widest text-xs mb-4 block">Вектор Роста</span>
                        <h2 className="text-4xl md:text-5xl font-bold">К чему я иду прямо сейчас</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {growthAreas.map((area, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors">
                                <div className="w-14 h-14 bg-emerald-500/20 rounded-2xl flex items-center justify-center text-emerald-400 mb-6">
                                    <area.icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold mb-4">{area.title}</h3>
                                <ul className="space-y-3 text-gray-300">
                                    {area.goals.map((goal, j) => (
                                        <li key={j} className="flex items-start gap-3">
                                            <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                                            <span>{goal}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </FadeUp>

                {/* Dreams */}
                <FadeUp className="text-center mb-20">
                    <h3 className="text-3xl font-bold mb-12">О чём я мечтаю?</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        {dreams.map((dream, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
                                <span className="text-lg font-medium">{dream}</span>
                            </div>
                        ))}
                    </div>
                </FadeUp>

                {/* Mission */}
                <FadeUp>
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="bg-emerald-600 p-10 md:p-12 rounded-3xl">
                            <h3 className="font-bold text-2xl mb-4">Моя Большая Миссия</h3>
                            <p className="text-white/90 text-lg leading-relaxed">
                                «Хотела бы заняться благотворительностью — помогать тем, кто живёт в плохих условиях.
                                Это то, что меня мотивирует и придаёт смысл.»
                            </p>
                        </div>
                    </div>
                </FadeUp>

                {/* Content Boundaries */}
                <FadeUp className="mt-24">
                    <div className="max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold text-center mb-10">Границы контента</h3>
                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <p className="text-emerald-400 font-bold mb-4 uppercase text-xs tracking-widest">Показываю</p>
                                <ul className="space-y-2 text-gray-300">
                                    <li>• Чувства</li>
                                    <li>• Личная жизнь</li>
                                    <li>• Размышления</li>
                                    <li>• Работа</li>
                                    <li>• Путь</li>
                                </ul>
                            </div>
                            <div>
                                <p className="text-red-400 font-bold mb-4 uppercase text-xs tracking-widest">Не показываю</p>
                                <ul className="space-y-2 text-gray-300">
                                    <li>• Личные разборки</li>
                                    <li>• Семейные конфликты</li>
                                    <li>• Ссоры с друзьями</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </FadeUp>

                {/* Footer */}
                <footer className="mt-24 pt-12 border-t border-white/10 text-center text-gray-500 text-sm">
                    <p>© 2026 Gulshat Abdimurat. Распаковка личности.</p>
                </footer>
            </div>
        </section>
    );
}
