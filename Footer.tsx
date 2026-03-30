const footerLinks = [
  { href: '#about', label: 'Об организации' },
  { href: '#history', label: 'История' },
  { href: '#symbols', label: 'Символика' },
  { href: '#activities', label: 'Деятельность' },
  { href: '#gallery', label: 'Галерея' },
  { href: '#contacts', label: 'Контакты' },
];

export default function Footer() {
  return (
    <footer className="bg-[#080812] border-t border-[#C9A84C]/20">
      {/* KBR stripe top */}
      <div className="flex h-1">
        <div className="flex-1 bg-[#1E3A6E]" />
        <div className="flex-1 bg-white" />
        <div className="flex-1 bg-[#1a5c2a]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10 mb-10">
          {/* Logo & Name */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14">
                <svg viewBox="0 0 60 60" className="w-full h-full">
                  <polygon points="30,2 36,22 58,22 40,35 47,56 30,43 13,56 20,35 2,22 24,22" fill="#cc0000" stroke="#C9A84C" strokeWidth="1.5" />
                  <text x="30" y="36" textAnchor="middle" fill="#f5d98b" fontSize="9" fontWeight="bold">ВГВ</text>
                </svg>
              </div>
              <div>
                <div className="text-[#C9A84C] font-bold text-sm leading-tight">РОО «СВГВГ» по КБР</div>
                <div className="text-[#f0ead6]/40 text-xs">С 1994 года</div>
              </div>
            </div>
            <p className="text-[#f0ead6]/50 text-xs leading-relaxed">
              Региональная общественная организация МОО «Союз ветеранов Группы войск 
              в Германии (ГСОВГ, ГСВГ, ЗГВ)» по Кабардино-Балкарской Республике
            </p>
            <div className="flex gap-2 mt-4">
              <span className="px-2 py-1 bg-[#cc0000]/20 border border-[#cc0000]/30 rounded text-[#ff6666] text-xs">ГСОВГ</span>
              <span className="px-2 py-1 bg-[#C9A84C]/20 border border-[#C9A84C]/30 rounded text-[#C9A84C] text-xs">ГСВГ</span>
              <span className="px-2 py-1 bg-[#4db8ff]/20 border border-[#4db8ff]/30 rounded text-[#4db8ff] text-xs">ЗГВ</span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-[#C9A84C] font-semibold text-sm mb-4 tracking-wider uppercase">Навигация</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#f0ead6]/60 text-sm hover:text-[#C9A84C] transition-colors flex items-center gap-2"
                  >
                    <span className="text-[#cc0000] text-xs">★</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-[#C9A84C] font-semibold text-sm mb-4 tracking-wider uppercase">Информация</h4>
            <div className="space-y-3">
              <div className="glass-card rounded p-3 border border-[#C9A84C]/10">
                <div className="text-[#f0ead6]/40 text-xs mb-1">Зарегистрирована</div>
                <div className="text-[#f0ead6]/80 text-sm font-semibold">25 марта 1994 г.</div>
              </div>
              <div className="glass-card rounded p-3 border border-[#C9A84C]/10">
                <div className="text-[#f0ead6]/40 text-xs mb-1">Статус</div>
                <div className="text-[#f0ead6]/80 text-sm font-semibold">Некоммерческая организация</div>
              </div>
              <div className="glass-card rounded p-3 border border-[#C9A84C]/10">
                <div className="text-[#f0ead6]/40 text-xs mb-1">Регион</div>
                <div className="text-[#f0ead6]/80 text-sm font-semibold">Кабардино-Балкарская Республика</div>
              </div>
              <div className="glass-card rounded p-3 border border-[#C9A84C]/10">
                <div className="text-[#f0ead6]/40 text-xs mb-1">Головная организация</div>
                <a href="https://svgvvg.ru" target="_blank" rel="noopener noreferrer" className="text-[#4db8ff] text-sm hover:underline">
                  svgvvg.ru
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#C9A84C]/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="text-[#f0ead6]/40 text-xs">
              © 2024 РОО МОО «Союз ветеранов ГСОВГ, ГСВГ, ЗГВ» по КБР. Все права защищены.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-[#C9A84C] text-xs tracking-wider font-semibold">1945 — 1994</div>
            <div className="flex gap-1">
              {'★ ★ ★'.split(' ').map((s, i) => (
                <span key={i} className="text-[#cc0000] text-xs">{s}</span>
              ))}
            </div>
            <div className="text-[#C9A84C] text-xs tracking-wider font-semibold">ГЕРМАНИЯ</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
