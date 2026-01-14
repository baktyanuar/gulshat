import { FadeUp } from '../FadeUp';
import { Quote } from 'lucide-react';

export function AudienceSectionDark() {
  return (
    <section id="values" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* Section 1: Mission & Motivation */}
          <FadeUp>
            <h2 className="heading-section text-gray-900 mb-8">
              Миссия & Мотивация
            </h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-1 bg-emerald-500 h-auto rounded-full" />
                <div>
                  <h4 className="font-bold text-lg mb-2">Большая Миссия</h4>
                  <p className="text-gray-600">
                    Хочу заняться благотворительностью, помогать тем, кто живет в плохих условиях.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1 bg-teal-500 h-auto rounded-full" />
                <div>
                  <h4 className="font-bold text-lg mb-2">Что мотивирует?</h4>
                  <p className="text-gray-600">
                    Работа над медийностью. Возможность помогать людям через игру.
                    И мечты о личной жизни — уверена, скоро встречу своего мужчину.
                  </p>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Section 2: Role & Feel */}
          <FadeUp delay={0.2}>
            <div className="bg-gray-50 p-10 rounded-[2.5rem] relative">
              <Quote className="absolute top-8 right-8 text-gray-200 w-12 h-12" />
              <h3 className="text-2xl font-bold mb-6">Мой Блог — Это...</h3>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <p className="text-xs text-gray-400 uppercase mb-1">Роль</p>
                  <p className="font-bold">Наставник & Подруга</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <p className="text-xs text-gray-400 uppercase mb-1">Вайб</p>
                  <p className="font-bold">Естественность</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <p className="text-xs text-gray-400 uppercase mb-1">Фильм</p>
                  <p className="font-bold">Глубокая драма с трансформацией</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <p className="text-xs text-gray-400 uppercase mb-1">Чувства</p>
                  <p className="font-bold">Восхищение, "Я молодец"</p>
                </div>
              </div>
              <p className="text-sm text-gray-500 italic border-t border-gray-200 pt-4">
                *Я точно не хочу: жестких продаж, инфо-цыганства и наигранной духовности.
              </p>
            </div>
          </FadeUp>
        </div>

        {/* Section 3: Values & People */}
        <FadeUp className="mt-24">
          <h2 className="heading-section text-center mb-12">Люди и Ценности</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-lara bg-emerald-50 border-none text-center">
              <h3 className="font-bold text-xl mb-4">Ценю в людях</h3>
              <p className="text-gray-600">Честность, Отзывчивость, Отношение ко мне, Ум, Справедливость, Искренность. Нравятся открытые, добрые, амбициозные.</p>
            </div>
            <div className="card-lara bg-teal-50 border-none text-center">
              <h3 className="font-bold text-xl mb-4">Мужчина рядом</h3>
              <p className="text-gray-600">Добрый, Амбициозный, Целеустремленный, Умеет зарабатывать, Щедрый, Открытый, Честный, Справедливый, Не надменный, Не эгоист.</p>
            </div>
            <div className="card-lara bg-sky-50 border-none text-center">
              <h3 className="font-bold text-xl mb-4">Вдохновение</h3>
              <p className="text-gray-600 text-sm mb-4">
                Раньше: Дана Есеева (многозадачная, бизнес, много детей, невестка, жена, друг, умеет отдыхать). <br />
                Сейчас: Лейла, Луина, Регина, Медик Смит, Оксукбаева, Айым, Баян.
              </p>
              <span className="text-xs bg-white px-2 py-1 rounded-md text-gray-400">Лайфстайл / Семья / Бизнес</span>
            </div>
          </div>
        </FadeUp>

        {/* Content Strategy */}
        <FadeUp className="mt-24 text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-6">Границы Контента</h3>
          <div className="flex justify-center gap-12">
            <div className="text-left">
              <p className="text-green-500 font-bold mb-2 uppercase text-xs tracking-widest">Показываю</p>
              <ul className="text-gray-700 space-y-1">
                <li>Чувства</li>
                <li>Личная жизнь</li>
                <li>Размышления</li>
                <li>Работа</li>
                <li>Путь</li>
              </ul>
            </div>
            <div className="w-px bg-gray-200 h-32" />
            <div className="text-left">
              <p className="text-red-500 font-bold mb-2 uppercase text-xs tracking-widest">Не показываю</p>
              <ul className="text-gray-700 space-y-1">
                <li>Личные разборки</li>
                <li>Семейные конфликты</li>
                <li>Ссоры с друзьями</li>
              </ul>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
