import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#vision", label: "Видение" },
  { href: "#audience", label: "Аудитория" },
  { href: "#strategy", label: "Стратегия" },
  { href: "#monetization", label: "Монетизация" },
];

export function NavigationDark() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? "bg-neu-bg/90 backdrop-blur-md shadow-neu border-b border-white/20"
        : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className={`font-serif text-2xl tracking-widest uppercase font-semibold transition-colors ${isScrolled ? 'text-neu-text' : 'text-neu-text'
          }`}>
          S. Sherniyaz
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-sans text-sm font-medium uppercase tracking-[0.15em] transition-all relative group px-4 py-2 rounded-full ${isScrolled
                ? 'text-neu-text hover:text-neu-accent hover:shadow-neu-pressed'
                : 'text-neu-text hover:text-neu-accent'
                }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden p-2 rounded-full transition-all ${isScrolled ? 'text-neu-text hover:shadow-neu' : 'text-neu-text'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-neu-bg border-t border-white/20 shadow-lg">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-sans text-sm font-medium uppercase tracking-[0.15em] text-neu-text hover:text-neu-accent transition-colors py-3 px-4 rounded-xl hover:shadow-neu-pressed hover:bg-neu-bg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
