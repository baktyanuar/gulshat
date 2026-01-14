import { FadeUp } from "../FadeUp";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip, BarChart, Bar, Legend } from "recharts";

const growthData = [
    { year: "2023", value: 30 },
    { year: "2024", value: 45 },
    { year: "2025", value: 70 },
    { year: "2026", value: 100 },
];

const funnelSteps = [
    { name: "Охваты (Reels)", desc: "Привлечение внимания через харизму и лайфстайл" },
    { name: "Вовлечение (Stories)", desc: "Трансляция ценностей, мыслей и процесса" },
    { name: "Доверие (Direct/Live)", desc: "Личный контакт, ответы на вопросы, открытость" },
    { name: "Продажа (Игра)", desc: "Запись на игру «Денежный Магнит»" },
];

const marketStats = [
    { label: "Рынок Т-Игр в KZ", value: "+40%", desc: "Ежегодный рост ниши трансформационных игр в Казахстане" },
    { label: "Целевая аудитория", value: "28-45", desc: "Возраст женщин, активно ищущих самореализацию" },
    { label: "Формат", value: "Оффлайн", desc: "Высокий спрос на живые встречи и нетворкинг" },
];

export function StrategyMarket() {
    return (
        <section className="py-28 bg-white">
            <div className="container mx-auto px-6">

                <FadeUp className="text-center mb-20">
                    <span className="text-emerald-600 font-bold uppercase tracking-widest text-xs mb-4 block">Анализ Рынка</span>
                    <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">Рынок & Потенциал</h2>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                        Продукты, которые меняют жизнь: высокий спрос на <strong>живые встречи, энергию и трансформацию</strong>.
                    </p>
                </FadeUp>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    {marketStats.map((stat, i) => (
                        <FadeUp key={i} delay={i * 0.1}>
                            <div className="bg-gray-50 border border-gray-100 p-8 rounded-[2rem] text-center h-full flex flex-col justify-center">
                                <p className="text-gray-500 font-medium mb-2">{stat.label}</p>
                                <p className="text-5xl md:text-6xl font-bold text-emerald-600 mb-4">{stat.value}</p>
                                <p className="text-sm text-gray-400 leading-snug">{stat.desc}</p>
                            </div>
                        </FadeUp>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Growth Chart */}
                    <FadeUp>
                        <div className="bg-white p-8 rounded-[2rem] shadow-lg border border-gray-100 h-[400px]">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <span className="w-3 h-3 rounded-full bg-emerald-500" />
                                Рост интереса к Трансформации
                            </h3>
                            <ResponsiveContainer width="100%" height="80%">
                                <AreaChart data={growthData}>
                                    <defs>
                                        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.3} />
                                    <XAxis dataKey="year" axisLine={false} tickLine={false} />
                                    <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                                    <Area type="monotone" dataKey="value" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                        <p className="text-center text-sm text-gray-400 mt-4">Прогноз роста спроса на трансформационные продукты в KZ</p>
                    </FadeUp>

                    {/* Funnel List */}
                    <FadeUp delay={0.2}>
                        <div className="bg-white p-8 rounded-[2rem] shadow-lg border border-gray-100 h-full min-h-[400px] flex flex-col justify-center">
                            <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
                                <span className="w-3 h-3 rounded-full bg-emerald-700" />
                                Бизнес-Модель (Воронка)
                            </h3>

                            <div className="space-y-6">
                                {funnelSteps.map((item, i) => (
                                    <div key={i} className="flex flex-col gap-2 group">
                                        <div className="flex items-center gap-4">
                                            <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-xs font-bold text-emerald-600 shrink-0">
                                                {i + 1}
                                            </div>
                                            <span className="font-bold text-gray-900 text-lg">{item.name}</span>
                                        </div>
                                        <div className="pl-12 text-base text-gray-600 leading-relaxed">
                                            {item.desc}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <p className="text-center text-sm text-gray-400 mt-4">Конверсия из охватов в продажу игры</p>
                    </FadeUp>
                </div>

            </div>
        </section>
    );
}
