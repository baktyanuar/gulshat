import { FadeUp } from '../FadeUp';
import { Badge } from '../ui/badge';

const products = [
  {
    tier: 'Low Ticket',
    title: 'Гайды',
    description: 'Феншуй дома, расхламление и порядок дома, легкие ритуалы на денежный успех и изобилие. Легкий вход в воронку',
    tierColor: 'text-neu-text/50',
  },
  {
    tier: 'Main Product',
    title: 'Курс / Мастер-группа',
    description: 'Мышление, деньги, состояние.',
    tierColor: 'text-neu-accent',
  },
  {
    tier: 'VIP',
    title: 'Индивидуальное сопровождение',
    description: 'Для женщин, которым важен личный контакт, глубина и живое поле. Про мышление, жизненные решения, деньги и внутреннюю устойчивость. Не обучение, точечная личная консультационная работа.',
    tierColor: 'text-neu-text',
  },
  {
    tier: 'Offline',
    title: 'Женские Встречи',
    description: 'Трансформационные игры, бранчи, камерные встречи для проведения ритуалов, живое поле Сауле.',
    tierColor: 'text-neu-accent/80',
  },
];

export function MonetizationSectionDark() {
  return (
    <section id="monetization" className="py-24 bg-neu-bg relative overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <FadeUp className="md:w-1/3 text-left">
            <h2 className="font-serif text-4xl text-neu-text mb-6">Продуктовая Линейка</h2>
            <p className="font-sans font-light text-neu-text/80 mb-8 leading-relaxed">
              Бренд строится не только ради лайков. Это бизнес-система. Мы продаем не воздух, а
              трансформацию.
            </p>
            <div className="bg-white p-6 rounded-2xl border-l-4 border-neu-accent shadow-neu">
              <p className="font-serif italic text-lg text-neu-text">
                «Люди платят большие деньги за состояние, рядом с которым они растут.»
              </p>
            </div>
          </FadeUp>

          <FadeUp className="md:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
              {products.map((product) => (
                <div
                  key={product.title}
                  className="bg-white p-8 rounded-2xl shadow-neu hover:shadow-neu-sm transition-all duration-300 border border-white/60 h-full flex flex-col items-start"
                >
                  <Badge variant="secondary" className={`mb-4 tracking-widest font-bold uppercase text-xs px-3 py-1 ${product.tierColor} bg-neu-bg border border-white/50`}>
                    {product.tier}
                  </Badge>
                  <h3 className="font-serif text-2xl text-neu-text mb-4">{product.title}</h3>
                  <p className="font-sans text-base text-neu-text/80 leading-relaxed">
                    {product.description}
                  </p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
