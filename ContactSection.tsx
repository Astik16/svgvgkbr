export default function ContactSection() {
  return (
    <section id="contacts" className="py-20 lg:py-28 bg-gradient-to-b from-[#0d0d1a] via-[#111127] to-[#0d0d1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#C9A84C] text-sm tracking-[0.3em] uppercase font-semibold mb-3">★ Контакты ★</p>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Свяжитесь с нами
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-[#f0ead6]/60 max-w-xl mx-auto text-sm">
            Мы открыты для всех, кто хочет вступить в организацию, получить информацию 
            или сотрудничать с нами
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-5">
            <h3 className="text-xl font-bold text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Контактная информация
            </h3>

            {/* Organization full name */}
            <div className="glass-card rounded-xl p-5 border border-[#C9A84C]/20">
              <div className="flex items-start gap-4">
                <div className="text-2xl">🏛️</div>
                <div>
                  <div className="text-[#C9A84C] font-semibold text-sm mb-1">Полное наименование</div>
                  <div className="text-[#f0ead6]/80 text-xs leading-relaxed">
                    Региональная общественная организация Межрегиональной общественной организации 
                    «Союз ветеранов Группы войск в Германии (ГСОВГ, ГСВГ, ЗГВ)» 
                    по Кабардино-Балкарской Республике
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-xl p-5 border border-[#C9A84C]/20">
              <div className="flex items-start gap-4">
                <div className="text-2xl">📍</div>
                <div>
                  <div className="text-[#C9A84C] font-semibold text-sm mb-1">Адрес</div>
                  <div className="text-[#f0ead6]/80 text-sm">
                    Кабардино-Балкарская Республика,<br />
                    г. Нальчик
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-xl p-5 border border-[#C9A84C]/20">
              <div className="flex items-start gap-4">
                <div className="text-2xl">📞</div>
                <div>
                  <div className="text-[#C9A84C] font-semibold text-sm mb-1">Телефон</div>
                  <div className="text-[#f0ead6]/80 text-sm">По запросу</div>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-xl p-5 border border-[#C9A84C]/20">
              <div className="flex items-start gap-4">
                <div className="text-2xl">🌐</div>
                <div>
                  <div className="text-[#C9A84C] font-semibold text-sm mb-1">Головная организация</div>
                  <a
                    href="https://svgvvg.ru"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4db8ff] text-sm hover:underline"
                  >
                    svgvvg.ru — МОО «Союз ветеранов ГСВГ»
                  </a>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="glass-card rounded-xl overflow-hidden border border-[#C9A84C]/20 h-48 flex items-center justify-center bg-gradient-to-br from-[#1E3A6E]/20 to-[#1a5c2a]/20">
              <div className="text-center">
                <div className="text-4xl mb-2">🗺️</div>
                <div className="text-[#C9A84C] font-semibold text-sm">Нальчик, КБР</div>
                <div className="text-[#f0ead6]/50 text-xs">Кабардино-Балкарская Республика</div>
              </div>
            </div>
          </div>

          {/* Membership form */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Заявка на вступление в организацию
            </h3>
            <form className="glass-card rounded-xl p-6 border border-[#C9A84C]/20 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#C9A84C] text-xs font-semibold mb-2 tracking-wider uppercase">Фамилия *</label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border border-[#C9A84C]/30 rounded px-4 py-2.5 text-[#f0ead6] text-sm focus:outline-none focus:border-[#C9A84C] transition-colors placeholder-[#f0ead6]/30"
                    placeholder="Иванов"
                  />
                </div>
                <div>
                  <label className="block text-[#C9A84C] text-xs font-semibold mb-2 tracking-wider uppercase">Имя *</label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border border-[#C9A84C]/30 rounded px-4 py-2.5 text-[#f0ead6] text-sm focus:outline-none focus:border-[#C9A84C] transition-colors placeholder-[#f0ead6]/30"
                    placeholder="Иван"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[#C9A84C] text-xs font-semibold mb-2 tracking-wider uppercase">Отчество</label>
                <input
                  type="text"
                  className="w-full bg-white/5 border border-[#C9A84C]/30 rounded px-4 py-2.5 text-[#f0ead6] text-sm focus:outline-none focus:border-[#C9A84C] transition-colors placeholder-[#f0ead6]/30"
                  placeholder="Иванович"
                />
              </div>
              <div>
                <label className="block text-[#C9A84C] text-xs font-semibold mb-2 tracking-wider uppercase">Группа войск *</label>
                <select className="w-full bg-[#0d0d1a] border border-[#C9A84C]/30 rounded px-4 py-2.5 text-[#f0ead6] text-sm focus:outline-none focus:border-[#C9A84C] transition-colors">
                  <option value="">Выберите группу войск</option>
                  <option value="gsovg">ГСОВГ (1945–1954)</option>
                  <option value="gsvg">ГСВГ (1954–1991)</option>
                  <option value="zgv">ЗГВ (1991–1994)</option>
                  <option value="other">Другая группировка войск</option>
                </select>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#C9A84C] text-xs font-semibold mb-2 tracking-wider uppercase">Годы службы</label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border border-[#C9A84C]/30 rounded px-4 py-2.5 text-[#f0ead6] text-sm focus:outline-none focus:border-[#C9A84C] transition-colors placeholder-[#f0ead6]/30"
                    placeholder="например: 1978–1980"
                  />
                </div>
                <div>
                  <label className="block text-[#C9A84C] text-xs font-semibold mb-2 tracking-wider uppercase">Телефон</label>
                  <input
                    type="tel"
                    className="w-full bg-white/5 border border-[#C9A84C]/30 rounded px-4 py-2.5 text-[#f0ead6] text-sm focus:outline-none focus:border-[#C9A84C] transition-colors placeholder-[#f0ead6]/30"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[#C9A84C] text-xs font-semibold mb-2 tracking-wider uppercase">Сообщение</label>
                <textarea
                  rows={3}
                  className="w-full bg-white/5 border border-[#C9A84C]/30 rounded px-4 py-2.5 text-[#f0ead6] text-sm focus:outline-none focus:border-[#C9A84C] transition-colors placeholder-[#f0ead6]/30 resize-none"
                  placeholder="Расскажите о себе, вашем воинском звании и части..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-[#C9A84C] text-[#0d0d1a] font-bold rounded tracking-wider hover:bg-[#f5d98b] transition-colors hover-lift text-sm uppercase"
              >
                Отправить заявку
              </button>
              <p className="text-[#f0ead6]/40 text-xs text-center">
                Мы свяжемся с вами для подтверждения членства в организации
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
