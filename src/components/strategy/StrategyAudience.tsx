import { FadeUp } from "../FadeUp";

const audiences = [
    {
        num: "01",
        title: "Женщины, ищущие трансформацию",
        desc: "Те, кто хочет разобраться в себе, понять свои установки про деньги и жизнь. Им нужен не очередной курс, а живой опыт и проводник, который прошёл путь сам.",
    },
    {
        num: "02",
        title: "Ищущие вдохновение и мотивацию",
        desc: "Женщины, которые хотят чувствовать тепло и энергию. Им близка идея проживания пути вместе, а не «делай как я говорю». Они ценят искренность.",
    },
    {
        num: "03",
        title: "Интересующиеся самопознанием",
        desc: "Те, кто открыт к игропрактике и трансформационным играм. Им интересен формат, где можно прожить опыт в группе, а не просто послушать теорию.",
    },
];

const quotes = [
    "«Хочу быть как она — уверенной и проявленной.»",
    "«Мне нравится её энергия и открытость.»",
    "«Она настоящая, не играет роль.»",
];

export function StrategyAudience() {
    return (
        <section className="py-28 bg-gray-50">
            <div className="container mx-auto px-6">

                <FadeUp className="text-center mb-20">
                    <span className="text-emerald-600 font-bold uppercase tracking-widest text-xs mb-4 block">Целевая Аудитория</span>
                    <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">Для кого этот блог?</h2>
                </FadeUp>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {audiences.map((item, i) => (
                        <FadeUp key={i} delay={i * 0.1}>
                            <div className="bg-white p-10 rounded-[2rem] shadow-sm h-full">
                                <span className="text-6xl font-bold text-emerald-100">{item.num}</span>
                                <h3 className="text-2xl font-bold mt-4 mb-4">{item.title}</h3>
                                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                            </div>
                        </FadeUp>
                    ))}
                </div>

                {/* Avatar */}
                <FadeUp>
                    <div className="bg-emerald-900 text-white p-12 md:p-16 rounded-[3rem] text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />

                        <h3 className="text-2xl font-bold mb-4 relative z-10">Что люди хотят чувствовать</h3>
                        <p className="text-emerald-200 mb-10 relative z-10">Из брифа: «Желание быть как я, вдохновение, мотивацию, тепло, женственность»</p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                            {quotes.map((quote, i) => (
                                <div key={i} className="bg-white/10 p-6 rounded-2xl">
                                    <p className="text-lg font-serif italic text-emerald-100">{quote}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </FadeUp>
            </div>
        </section>
    );
}
