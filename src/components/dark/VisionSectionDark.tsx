import { FadeUp } from '../FadeUp';
import { Heart, Users, Coffee, Dumbbell, Wallet, Globe, Star, Smile } from 'lucide-react';
import portrait from "@/assets/Image_202601141440.jpeg";

const balanceWheel = [
  {
    icon: Users,
    title: "Семья",
    desc: "Большая семья — братья, дяди, снохи, дети. Маму потеряла в 5 лет, с папой прохладно. Моя семья — это мой клан.",
    color: "bg-blue-50 text-blue-600"
  },
  {
    icon: Smile,
    title: "Друзья",
    desc: "Друзей не много, но они хорошие. Всегда не против новых знакомств и подруг.",
    color: "bg-yellow-50 text-yellow-600"
  },
  {
    icon: Coffee,
    title: "Хобби",
    desc: "Движение по городу, посиделки в кофейнях, тусовки, танцы, решать вопросы. Нравится быть занятой.",
    color: "bg-pink-50 text-pink-600"
  },
  {
    icon: Dumbbell,
    title: "Тело",
    desc: "Телом довольна, но хочу сбросить 5 кг. Понимаю, что спорт нужен с возрастом.",
    color: "bg-green-50 text-green-600"
  },
  {
    icon: Star,
    title: "Духовность",
    desc: "Ислам, вера в Аллаха. Есть вопросы, на которые ищу ответы, не всегда согласна с глубоко верующими.",
    color: "bg-purple-50 text-purple-600"
  },
  {
    icon: Wallet,
    title: "Капитал",
    desc: "Есть квартира и авто. Доход от аренды и семейного бизнеса. Хочу масштаба в медийности.",
    color: "bg-indigo-50 text-indigo-600"
  },
  {
    icon: Globe,
    title: "Яркость",
    desc: "Путешествия, экскурсии, большие компании, семейные сборы. Наслаждаюсь моментом.",
    color: "bg-orange-50 text-orange-600"
  }
];

const traits = [
  "Добрая", "Отзывчивая", "Импульсивная", "Эмоциональная", "Обидчивая", "Мстительная (если обидят)", "Верующая", "Верная", "Амбициозная", "Ленивая (иногда)"
];

export function VisionSectionDark() {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 mb-24">

          <FadeUp className="lg:w-1/3">
            <div className="sticky top-24">
              <div className="relative rounded-[2rem] overflow-hidden aspect-[3/4] shadow-2xl mb-8">
                <img src={portrait} alt="Gulshat Life" className="w-full h-full object-cover object-top" />
              </div>
              <h3 className="heading-section mb-4">Какой я человек?</h3>
              <div className="flex flex-wrap gap-2">
                {traits.map((t, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </FadeUp>

          <div className="lg:w-2/3">
            <FadeUp>
              <span className="text-purple-600 font-bold uppercase tracking-widest text-xs mb-4 block">
                Identity & Life
              </span>
              <h2 className="heading-section text-gray-900 mb-8">
                Личность и <span className="text-transparent bg-clip-text bg-gradient-purple">Жизнь.</span>
              </h2>

              <div className="prose prose-lg text-gray-500 mb-12">
                <p>
                  Из чего состоит моя жизнь? Домашний быт, общение с друзьями, решение вопросов семейного бизнеса, тусовки.
                  Я люблю, когда "кипишь" и много движения.
                </p>
                <p>
                  <strong>Мой обычный день:</strong> Кофе, телефонные звонки по работе дяди, выезды, Инстаграм, отдых дома.
                  Главная проблема, которую я сейчас решаю — <span className="text-gray-900 font-semibold under">учусь любить себя и наслаждаться моментом.</span>
                </p>
                <p>
                  Я сильно выросла как личность в 36-38 лет после работы с психологами.
                  Пережила предательство тети и полгода была на дне (материально и морально), но выбралась.
                  Сейчас я принимаю себя со всеми плюсами и минусами.
                </p>
              </div>

              <h3 className="text-2xl font-bold mb-8">Колесо Баланса</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {balanceWheel.map((item, index) => (
                  <FadeUp key={index} delay={index * 0.1}>
                    <div className="group card-lara p-6 md:p-8 flex items-start gap-4 hover:border-purple-200 transition-colors">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${item.color}`}>
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                        <p className="text-gray-500 text-sm leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
