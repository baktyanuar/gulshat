import { FadeUp } from "../FadeUp";

export function StoryHero() {
    return (
        <header className="min-h-[85vh] flex items-center justify-center bg-zinc-900 text-white relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-emerald-900/30 blur-[150px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <FadeUp>
                    <div className="inline-block px-5 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm font-medium tracking-widest uppercase mb-10">
                        Распаковка Личности
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1]">
                        Энергия. <br className="md:hidden" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Харизма.</span> <br />
                        Проявленность.
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
                        Я учусь любить себя и наслаждаться каждым моментом жизни. <br className="hidden md:block" />
                        Помогаю людям через трансформационную игру «Денежный Магнит».
                    </p>

                    <div className="mt-12 flex flex-wrap justify-center gap-4">
                        {["Игропрактик", "Наставник", "Подруга"].map((role, i) => (
                            <span key={i} className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-sm font-medium">
                                {role}
                            </span>
                        ))}
                    </div>
                </FadeUp>
            </div>
        </header>
    );
}
