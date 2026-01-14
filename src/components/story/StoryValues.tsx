import { FadeUp } from "../FadeUp";

const traits = [
    "Добрая", "Отзывчивая", "Импульсивная", "Эмоциональная", "Обидчивая",
    "Мстительная (если обидят)", "Верующая", "Верная", "Амбициозная", "Ленивая (иногда)"
];

const coreValues = ["Семья", "Друзья", "Справедливость", "Духовность", "Верность", "Помощь"];

const manQualities = [
    "Добрый", "Амбициозный", "Целеустремлённый", "Умеет зарабатывать",
    "Открытый", "Честный", "Справедливый", "Не надменный", "Не эгоист", "Щедрый"
];

export function StoryValues() {
    return (
        <section className="py-28 bg-white">
            <div className="container mx-auto px-6">

                {/* Character Traits */}
                <FadeUp className="mb-24">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="text-emerald-600 font-bold uppercase tracking-widest text-xs mb-4 block">Характер</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Какой я человек?</h2>
                        <div className="flex flex-wrap justify-center gap-3">
                            {traits.map((trait, i) => (
                                <span key={i} className="px-5 py-2.5 bg-gray-100 text-gray-700 rounded-full font-medium">
                                    {trait}
                                </span>
                            ))}
                        </div>
                    </div>
                </FadeUp>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Left: Core Values */}
                    <FadeUp>
                        <div className="bg-gray-50 p-10 md:p-12 rounded-[2.5rem] h-full">
                            <h3 className="text-2xl font-bold mb-8">Мои ценности</h3>
                            <div className="flex flex-wrap gap-3 mb-10">
                                {coreValues.map(tag => (
                                    <span key={tag} className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full font-medium">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <h4 className="font-bold mb-4">Что ценю в людях:</h4>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Честность, отзывчивость, отношение ко мне, ум, справедливость, искренность.
                                Мне нравятся открытые, честные, добрые и амбициозные люди.
                            </p>

                            <div className="bg-white p-6 rounded-2xl border border-gray-100">
                                <h4 className="font-bold mb-2">Духовность</h4>
                                <p className="text-gray-500 text-sm">
                                    Я исповедую Ислам, верю в Аллаха. Но у меня есть свои вопросы,
                                    на которые я ищу ответы. Не всегда разделяю мнения глубоко верующих людей — ищу свой путь.
                                </p>
                            </div>
                        </div>
                    </FadeUp>

                    {/* Right: Ideal Man */}
                    <FadeUp delay={0.2}>
                        <div className="bg-emerald-900 text-white p-10 md:p-12 rounded-[2.5rem] h-full relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-500/20 blur-[100px] rounded-full pointer-events-none" />

                            <h3 className="text-2xl font-bold mb-6 relative z-10">Мужчина рядом</h3>
                            <p className="text-emerald-100/80 mb-8 relative z-10 leading-relaxed">
                                Мечта о личной жизни мотивирует меня. Я уверена, что в скором времени встречу своего мужчину.
                                Для меня важны эти качества:
                            </p>

                            <div className="grid grid-cols-2 gap-4 relative z-10">
                                {manQualities.map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                                        <span className="font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FadeUp>

                </div>

                {/* Blog Role */}
                <FadeUp className="mt-24">
                    <div className="max-w-4xl mx-auto text-center">
                        <h3 className="text-3xl font-bold mb-12">Мой блог — это...</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            <div className="bg-gray-50 p-6 rounded-2xl">
                                <p className="text-xs text-gray-400 uppercase mb-2">Роль</p>
                                <p className="font-bold text-lg">Наставник & Подруга</p>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-2xl">
                                <p className="text-xs text-gray-400 uppercase mb-2">Вайб</p>
                                <p className="font-bold text-lg">Естественность</p>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-2xl">
                                <p className="text-xs text-gray-400 uppercase mb-2">Стиль</p>
                                <p className="font-bold text-lg">Вдохновляю образом жизни</p>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-2xl">
                                <p className="text-xs text-gray-400 uppercase mb-2">Образ</p>
                                <p className="font-bold text-lg">Любящая женщина</p>
                            </div>
                        </div>
                        <p className="text-gray-500 mt-10 text-sm">
                            Чего точно НЕ будет: жёстких продаж, инфо-цыганства, наигранной духовности, личных разборок и семейных конфликтов.
                        </p>
                    </div>
                </FadeUp>
            </div>
        </section>
    );
}
