export function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-card/50">
      <div className="container mx-auto px-6 py-5 flex justify-between items-center">
        <span className="font-serif text-2xl tracking-widest text-beige-900 uppercase font-semibold">
          S. Sherniyaz
        </span>
        <div className="hidden md:flex space-x-10 text-xs font-sans tracking-widest text-beige-800 uppercase">
          <a href="#vision" className="hover:text-gold transition-colors">
            Видение
          </a>
          <a href="#strategy" className="hover:text-gold transition-colors">
            Стратегия
          </a>
          <a href="#audience" className="hover:text-gold transition-colors">
            Аудитория
          </a>
          <a href="#monetization" className="hover:text-gold transition-colors">
            Монетизация
          </a>
        </div>
      </div>
    </nav>
  );
}
