import { FadeUp } from "../FadeUp";

const pillars = [
    {
        num: "01",
        title: "Личность & Путь",
        subtitle: "Слой души",
        color: "bg-rose-50 text-rose-600",
        topics: [
            "Честные истории: детство, семья, путь к себе",
            "Работа над собой: любовь к себе, принятие",
            "Размышления о жизни и ценностях",
            "Мечты: семья, дети, личная жизнь",
        ],
    },
    {
        num: "02",
        title: "Работа & Экспертность",
        subtitle: "Слой трансформации",
        color: "bg-emerald-50 text-emerald-600",
        topics: [
            "Игропрактика «Денежный Магнит»",
            "Истории трансформаций участниц",
            "Работа с мышлением и установками",
            "Путь от страхов к проявленности",
        ],
    },
    {
        num: "03",
        title: "Чувства & Жизнь",
        subtitle: "Живой слой",
        color: "bg-sky-50 text-sky-600",
        topics: [
            "Движение, динамика, энергия",
            "Общение с друзьями, тусовки",
            "Семейные сборы, путешествия",
            "Настоящая жизнь без фильтров",
        ],
    },
];

export function StrategyContent() {
    return (
        <section className="py-28 bg-white">
            <div className="container mx-auto px-6">

                <FadeUp className="text-center mb-20">
                    <span className="text-emerald-600 font-bold uppercase tracking-widest text-xs mb-4 block">Контент-Стратегия</span>
                    <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">Три Кита Контента</h2>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                        Транслируем <strong>чувства, личную жизнь, размышления, работу, путь</strong>.
                    </p>
                </FadeUp>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {pillars.map((pillar, i) => (
                        <FadeUp key={i} delay={i * 0.1}>
                            <div className="bg-gray-50 p-10 rounded-[2rem] h-full">
                                <span className="text-5xl font-bold text-gray-200">{pillar.num}</span>
                                <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mt-4 mb-2 ${pillar.color}`}>
                                    {pillar.subtitle}
                                </div>
                                <h3 className="text-2xl font-bold mb-6">{pillar.title}</h3>
                                <p className="text-sm text-gray-400 uppercase tracking-wider mb-4">О чём писать:</p>
                                <ul className="space-y-3">
                                    {pillar.topics.map((topic, j) => (
                                        <li key={j} className="flex items-start gap-3 text-gray-700 text-base leading-relaxed">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" />
                                            {topic}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </FadeUp>
                    ))}
                </div>

                {/* Formula */}
                <FadeUp>
                    <div className="bg-zinc-900 text-white p-12 md:p-16 rounded-[3rem] text-center">
                        <p className="text-sm text-gray-400 uppercase tracking-widest mb-8">Формула Бренда</p>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-2xl md:text-3xl font-bold">
                            <span><span className="text-rose-400">Личность</span><br /><span className="text-base font-normal text-gray-400">вызывает доверие</span></span>
                            <span className="text-gray-600 text-4xl">+</span>
                            <span><span className="text-emerald-400">Экспертность</span><br /><span className="text-base font-normal text-gray-400">продаёт</span></span>
                            <span className="text-gray-600 text-4xl">+</span>
                            <span><span className="text-sky-400">Энергия</span><br /><span className="text-base font-normal text-gray-400">привлекает</span></span>
                        </div>
                    </div>
                </FadeUp>
            </div>
        </section>
    );
}
