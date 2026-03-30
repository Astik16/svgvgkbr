import { useState } from 'react';

interface NavBarProps {
  scrolled: boolean;
}

const navLinks = [
  { href: '#about', label: 'Об организации' },
  { href: '#history', label: 'История' },
  { href: '#symbols', label: 'Символика' },
  { href: '#activities', label: 'Деятельность' },
  { href: '#gallery', label: 'Галерея' },
  { href: '#contacts', label: 'Контакты' },
];

export default function NavBar({ scrolled }: NavBarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0d0d1a]/95 backdrop-blur-md shadow-lg shadow-black/50 border-b border-[#C9A84C]/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center">
              <svg viewBox="0 0 60 60" className="w-full h-full">
                <polygon points="30,2 36,22 58,22 40,35 47,56 30,43 13,56 20,35 2,22 24,22" fill="#cc0000" stroke="#C9A84C" strokeWidth="1.5"/>
                <text x="30" y="34" textAnchor="middle" fill="#f5d98b" fontSize="10" fontWeight="bold">ВГВ</text>
              </svg>
            </div>
            <div className="hidden sm:block">
              <div className="text-[#C9A84C] font-bold text-sm leading-tight">РОО «СВГВГ»</div>
              <div className="text-gray-400 text-xs">по КБР</div>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link text-sm font-medium tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`block w-6 h-0.5 bg-[#C9A84C] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-[#C9A84C] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-[#C9A84C] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-96 pb-4' : 'max-h-0'}`}>
          <div className="flex flex-col gap-2 pt-2 border-t border-[#C9A84C]/20">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-2 text-[#f0ead6] hover:text-[#C9A84C] hover:bg-white/5 rounded transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
