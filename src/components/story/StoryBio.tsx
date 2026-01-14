import { FadeUp } from "../FadeUp";
import portrait from "@/assets/Image_202601141440.jpeg";

export function StoryBio() {
    return (
        <section className="py-28 bg-white">
            <div className="container mx-auto px-6">

                {/* Intro with Photo */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                    <FadeUp>
                        <div className="relative">
                            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl">
                                <img src={portrait} alt="Gulshat Abdimurat" className="w-full aspect-[4/5] object-cover object-top" />
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-emerald-200 rounded-[2.5rem] -z-10" />
                        </div>
                    </FadeUp>

                    <FadeUp delay={0.2}>
                        <span className="text-emerald-600 font-bold uppercase tracking-widest text-xs mb-4 block">Обо мне</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                            Путь к себе через <span className="text-emerald-600">любовь</span>
                        </h2>
                        <div className="prose prose-lg text-gray-600 leading-relaxed space-y-6">
                            <p>
                                Моя мама ушла из жизни, когда мне было всего пять лет. С папой отношения всегда были прохладными.
                                Но именно это научило меня ценить семью — моих братьев, дядей, их семьи.
                                Они и есть мой клан, моя опора.
                            </p>
                            <p>
                                В 36-38 лет начался мой главный рост. Работа с психологами перевернула всё.
                                Я начала понимать себя, стала рациональнее, появилась <strong>любовь к себе</strong>.
                                Я осознала: меня можно любить просто так.
                            </p>
                        </div>
                    </FadeUp>
                </div>

                {/* Timeline */}
                <FadeUp>
                    <h3 className="text-3xl font-bold text-center mb-16">Ключевые этапы моей жизни</h3>

                    <div className="max-w-4xl mx-auto relative">
                        {/* Vertical Line */}
                        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-emerald-100 md:-translate-x-1/2" />

                        <div className="space-y-12">
                            {/* Event 1 (Left on desktop) */}
                            <div className="relative flex flex-col md:flex-row md:items-center">
                                <div className="pl-8 md:pl-0 md:w-1/2 md:pr-12 md:text-right">
                                    <span className="text-emerald-600 font-bold">Детство</span>
                                    <h4 className="text-xl font-bold mt-1">Формирование характера</h4>
                                    <p className="text-gray-500 mt-2">Тяжёлое детство научило меня интересоваться судьбами других людей, слушать их истории.</p>
                                </div>
                                {/* Dot */}
                                <div className="absolute left-[-5px] top-0 md:left-1/2 w-3 h-3 md:w-4 md:h-4 bg-emerald-500 rounded-full md:-translate-x-1/2 border-2 md:border-4 border-white shadow-sm ring-4 ring-emerald-50 md:ring-0" />

                                <div className="hidden md:block md:w-1/2 text-left md:pl-12" />
                            </div>

                            {/* Event 2 (Right on desktop) */}
                            <div className="relative flex flex-col md:flex-row md:items-center">
                                <div className="hidden md:block md:w-1/2 text-right md:pr-12" />

                                {/* Dot */}
                                <div className="absolute left-[-5px] top-0 md:left-1/2 w-3 h-3 md:w-4 md:h-4 bg-emerald-500 rounded-full md:-translate-x-1/2 border-2 md:border-4 border-white shadow-sm ring-4 ring-emerald-50 md:ring-0" />

                                <div className="pl-8 md:pl-12 md:w-1/2 text-left">
                                    <span className="text-emerald-600 font-bold">34 года</span>
                                    <h4 className="text-xl font-bold mt-1">Точка падения</h4>
                                    <p className="text-gray-500 mt-2">Предательство близкого человека. Полгода на дне — материально, физически, морально.</p>
                                </div>
                            </div>

                            {/* Event 3 (Left on desktop) */}
                            <div className="relative flex flex-col md:flex-row md:items-center">
                                <div className="pl-8 md:pl-0 md:w-1/2 md:pr-12 md:text-right">
                                    <span className="text-emerald-600 font-bold">36-38 лет</span>
                                    <h4 className="text-xl font-bold mt-1">Трансформация</h4>
                                    <p className="text-gray-500 mt-2">Работа с психологами. Понимание себя, самоценность, уверенность. Принятие со всеми плюсами и минусами.</p>
                                </div>
                                {/* Dot */}
                                <div className="absolute left-[-5px] top-0 md:left-1/2 w-3 h-3 md:w-4 md:h-4 bg-emerald-500 rounded-full md:-translate-x-1/2 border-2 md:border-4 border-white shadow-sm ring-4 ring-emerald-50 md:ring-0" />

                                <div className="hidden md:block md:w-1/2 text-left md:pl-12" />
                            </div>

                            {/* Event 4 (Right on desktop) */}
                            <div className="relative flex flex-col md:flex-row md:items-center">
                                <div className="hidden md:block md:w-1/2 text-right md:pr-12" />

                                {/* Dot */}
                                <div className="absolute left-[-5px] top-0 md:left-1/2 w-3 h-3 md:w-4 md:h-4 bg-emerald-500 rounded-full md:-translate-x-1/2 border-2 md:border-4 border-white shadow-sm ring-4 ring-emerald-50 md:ring-0" />

                                <div className="pl-8 md:pl-12 md:w-1/2 text-left">
                                    <span className="text-emerald-600 font-bold">Сегодня</span>
                                    <h4 className="text-xl font-bold mt-1">Проявленность</h4>
                                    <p className="text-gray-500 mt-2">Игропрактик. Наставник. Работа над медийностью. Помощь людям через игру «Денежный Магнит».</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeUp>
            </div>
        </section>
    );
}
