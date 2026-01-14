import { FadeUp } from "../FadeUp";

export function HeroSectionDark() {
  return (
    <header className="relative min-h-screen bg-black overflow-hidden pt-32 pb-20 flex items-center justify-center">

      {/* Background Ambience (Optional) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-900/30 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-900/20 blur-[120px] rounded-full pointer-events-none" />

      {/* Container */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">

          <FadeUp>
            {/* Pill Label */}
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm font-semibold text-white uppercase tracking-widest">
                Игропрактик • Наставник • Личность
              </span>
            </div>

            <h1 className="heading-hero text-white mb-6 leading-tight">
              Энергия. <br />
              Харизма. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                Проявленность.
              </span>
            </h1>

            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-light mb-10">
              Я учусь любить себя и наслаждаться моментом. <br />
              Помогаю людям через игру <strong>«Денежный Магнит»</strong>.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10 hover:bg-white/20 transition-colors text-left">
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Сила</p>
                <p className="text-white font-bold">Энергия & Харизма</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10 hover:bg-white/20 transition-colors text-left">
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Миссия</p>
                <p className="text-white font-bold">Благотворительность</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10 hover:bg-white/20 transition-colors text-left">
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Экспертность</p>
                <p className="text-white font-bold">Игропрактик</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10 hover:bg-white/20 transition-colors text-left">
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Ценности</p>
                <p className="text-white font-bold">Семья & Друзья</p>
              </div>
            </div>
          </FadeUp>

        </div>
      </div>
    </header>
  );
}
