import { FadeUp } from "../FadeUp";

export function StoryExpertise() {
    return (
        <section className="py-28 bg-gray-50">
            <div className="container mx-auto px-6">
                <FadeUp className="max-w-4xl mx-auto text-center mb-20">
                    <span className="text-emerald-600 font-bold uppercase tracking-widest text-xs mb-4 block">Экспертность</span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Путь в профессию</h2>
                    <p className="text-xl text-gray-500">
                        7 лет я работала в семейном бизнесе у дяди. Но тема самопознания и психологии всегда меня манила.
                    </p>
                </FadeUp>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
                    <FadeUp>
                        <div className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-sm h-full">
                            <h3 className="text-2xl font-bold mb-6">Как я пришла к игре</h3>
                            <div className="prose prose-lg text-gray-600 leading-relaxed space-y-4">
                                <p>
                                    У меня было тяжёлое детство. Именно поэтому мне интересны истории судеб других людей.
                                    Слушая их, я сама получаю облегчение и чувствую, что помогаю.
                                </p>
                                <p>
                                    Прошла игру <strong>«Денежный Магнит»</strong> у подруги — автора игры <strong>Аяны Нургали</strong>.
                                    Влюбилась в формат. Прошла дотошное обучение и стала сертифицированным игропрактиком.
                                </p>
                            </div>

                            <div className="mt-8 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                <p className="font-bold text-gray-900 mb-2">Страхи в начале</p>
                                <p className="text-gray-500 text-sm">
                                    «Боялась, что не смогу правильно вести игру, что наврежу людям. Было сложно из-за памяти.
                                    Много раз хотелось сдаться, я часто всё бросаю на полпути. Но поддержка Аяны, её обучение и вера окружающих помогли мне дойти до конца.»
                                </p>
                            </div>
                        </div>
                    </FadeUp>

                    <FadeUp delay={0.2}>
                        <div className="bg-emerald-900 text-white p-10 md:p-12 rounded-[2.5rem] relative overflow-hidden h-full flex flex-col justify-between">
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />

                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold mb-6">Почему «Денежный Магнит»?</h3>
                                <p className="text-emerald-100/90 mb-10 leading-relaxed">
                                    Это не просто игра — это инструмент трансформации мышления о деньгах и жизни.
                                    Я вдохновляю образом жизни и проживаю путь вместе с участницами.
                                </p>
                            </div>

                            <div className="space-y-5 relative z-10">
                                <div className="flex gap-4 items-start">
                                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-emerald-300 font-bold shrink-0">1</div>
                                    <div>
                                        <h4 className="font-bold mb-1">Легко брать деньги</h4>
                                        <p className="text-emerald-100/70 text-sm">За игры, трансформацию и познание себя — никакого внутреннего сопротивления.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-emerald-300 font-bold shrink-0">2</div>
                                    <div>
                                        <h4 className="font-bold mb-1">Живой формат</h4>
                                        <p className="text-emerald-100/70 text-sm">Меня усиливает общение и групповая работа. Это даёт энергию, а не забирает.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-emerald-300 font-bold shrink-0">3</div>
                                    <div>
                                        <h4 className="font-bold mb-1">Проводник в изменения</h4>
                                        <p className="text-emerald-100/70 text-sm">Хочу, чтобы меня покупали как проводника в изменения, а не просто как эксперта.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeUp>
                </div>

                {/* Inspiration */}
                <FadeUp className="mt-20 text-center">
                    <h3 className="text-2xl font-bold mb-8">Кто меня вдохновляет</h3>
                    <p className="text-gray-500 max-w-3xl mx-auto mb-6">
                        Раньше: <strong>Дана Есеева</strong> — многозадачная, у неё бизнес, много детей, она невестка, жена, друг, и умеет отдыхать.
                    </p>
                    <p className="text-gray-500 max-w-3xl mx-auto">
                        Сейчас смотрю: <strong>Лейла</strong> (лайф, семья, бизнес), <strong>Луина</strong> (бизнес, певица), <strong>Регина</strong> (стиль, мода),
                        <strong>Медик Смит</strong> (здоровье), <strong>Оксукбаева</strong> (бизнес, быт), <strong>Айым</strong> (семья, бизнес), <strong>Баян</strong> (семья, друзья).
                    </p>
                </FadeUp>
            </div>
        </section>
    );
}
