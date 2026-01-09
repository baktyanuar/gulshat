import { FadeUp } from './FadeUp';

const products = [
  {
    tier: 'Low Ticket',
    tierColor: 'text-muted-foreground',
    title: 'Гайды по Эстетике',
    description: 'Фэншуй дома, сервировка, расхламление. Легкий вход в воронку.',
  },
  {
    tier: 'Main Product',
    tierColor: 'text-gold',
    title: 'Курс / Мастер-группа',
    description: '«Женщина Нового Времени». Мышление, деньги, состояние.',
  },
  {
    tier: 'VIP',
    tierColor: 'text-beige-900',
    title: 'Личное Наставничество',
    description: 'Дорогой продукт для тех, кто хочет перенять опыт бизнеса и жизни.',
  },
  {
    tier: 'Offline',
    tierColor: 'text-sage',
    title: 'Женские Встречи',
    description: 'Бранчи, трансформационные игры, живое поле Сауле.',
  },
];

export function MonetizationSection() {
  return (
    <section id="monetization" className="py-24 bg-beige-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <FadeUp className="md:w-1/3">
            <h2 className="font-serif text-4xl text-beige-900 mb-6">Продуктовая Линейка</h2>
            <p className="font-sans font-light text-muted-foreground mb-8">
              Бренд строится не только ради лайков. Это бизнес-система. Мы продаем не воздух, а
              трансформацию.
            </p>
            <div className="bg-card p-6 border-l-4 border-gold shadow-sm">
              <p className="font-serif italic text-lg text-beige-900">
                «Люди платят большие деньги за состояние, рядом с которым они растут.»
              </p>
            </div>
          </FadeUp>

          <FadeUp className="md:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {products.map((product) => (
                <div
                  key={product.title}
                  className="bg-card p-8 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gold/30"
                >
                  <span
                    className={`text-xs font-bold ${product.tierColor} uppercase tracking-widest mb-2 block`}
                  >
                    {product.tier}
                  </span>
                  <h3 className="font-serif text-2xl text-beige-900 mb-2">{product.title}</h3>
                  <p className="font-sans font-light text-sm text-muted-foreground">
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
