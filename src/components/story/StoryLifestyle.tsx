import { FadeUp } from "../FadeUp";
import { Coffee, Car, Users, Sparkles, Heart, Globe, Wallet, Star } from "lucide-react";

const balanceItems = [
    { icon: Users, title: "Семья", desc: "Большая семья — братья, дяди, снохи, их дети. Отношений пока нет, но мечтаю о своей семье." },
    { icon: Heart, title: "Друзья", desc: "Друзей немного, но они настоящие. Всегда открыта для новых знакомств и подруг." },
    { icon: Coffee, title: "Хобби", desc: "Движение по городу, посиделки в кофейнях, тусовки с подругами, танцы. Люблю быть занятой." },
    { icon: Sparkles, title: "Тело", desc: "В целом довольна. Хочу сбросить 5 кг, подключить спорт, пройти чекап, правильно питаться." },
    { icon: Star, title: "Духовность", desc: "Ислам, вера в Аллаха. Есть вопросы, ищу свой путь. Не всегда разделяю мнение глубоко верующих." },
    { icon: Wallet, title: "Капитал", desc: "Квартира в Алматы (аренда), автомобиль. Доход от семейного бизнеса." },
    { icon: Globe, title: "Медийность", desc: "Сейчас на старте. Работаю над развитием Инстаграма и личного бренда." },
    { icon: Car, title: "Яркость жизни", desc: "Путешествия, большие компании, семейные сборы, мероприятия. Наслаждаюсь моментом." },
];

export function StoryLifestyle() {
    return (
        <section className="py-28 bg-gray-50">
            <div className="container mx-auto px-6">
                <FadeUp className="text-center mb-16">
                    <span className="text-emerald-600 font-bold uppercase tracking-widest text-xs mb-4 block">Колесо баланса</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Из чего состоит моя жизнь</h2>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                        Домашний быт, общение с друзьями, решение вопросов семейного бизнеса, тусовки. <br />
                        Мне нравится, когда «кипишь» и много движения.
                    </p>
                </FadeUp>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {balanceItems.map((item, i) => (
                        <FadeUp key={i} delay={i * 0.05}>
                            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-lg transition-shadow h-full">
                                <item.icon className="w-10 h-10 text-emerald-500 mb-6" />
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        </FadeUp>
                    ))}
                </div>

                <FadeUp className="mt-20">
                    <div className="bg-emerald-900 text-white p-12 md:p-16 rounded-[3rem] text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
                        <p className="text-2xl md:text-4xl font-serif italic mb-8 relative z-10 leading-relaxed">
                            «Мой обычный день: кофе, телефонные звонки по работе дяди, выезды, Инстаграм, отдых дома. <br className="hidden md:block" />
                            Главное, что я сейчас решаю — учусь любить себя и наслаждаться моментом.»
                        </p>
                        <p className="text-emerald-300 relative z-10">
                            — Главная внутренняя сила: Энергия и харизма
                        </p>
                    </div>
                </FadeUp>
            </div>
        </section>
    );
}
