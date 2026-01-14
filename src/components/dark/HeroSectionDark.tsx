import { FadeUp } from "../FadeUp";
import photographer from "@/assets/Image_202601141440.jpeg";

export function HeroSectionDark() {
  return (
    <header className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden pt-20">

      {/* Background Image/Photo - Full Screen or Centered */}
      <div className="absolute inset-0 opacity-60">
        <img
          src={photographer}
          className="w-full h-full object-cover object-top"
          alt="Gulshat Abdimurat"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <FadeUp>
          {/* Pill Label */}
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
            <span className="text-sm font-semibold text-white uppercase tracking-widest">
              Игропрактик • Наставник • Личность
            </span>
          </div>

          <h1 className="heading-hero text-white mb-6 leading-tight">
            Энергия. <br />
            Харизма. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Проявленность.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed font-light mb-10">
            Я учусь любить себя и наслаждаться моментом. <br />
            Помогаю людям через игру <strong>«Денежный Магнит»</strong>.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto text-left">
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10">
              <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Ценность</p>
              <p className="text-white font-bold">Женственность</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10">
              <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Миссия</p>
              <p className="text-white font-bold">Благотворительность</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10">
              <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Экспертность</p>
              <p className="text-white font-bold">Психология денег</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10">
              <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Стиль</p>
              <p className="text-white font-bold">Quiet Luxury</p>
            </div>
          </div>
        </FadeUp>
      </div>
    </header>
  );
}
