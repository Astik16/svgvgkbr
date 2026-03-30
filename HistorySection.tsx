const timeline = [
  {
    year: '1945',
    date: '10 июня 1945',
    title: 'Образование ГСОВГ',
    text: 'Группа советских оккупационных войск в Германии (ГСОВГ) создана на основании директивы Ставки Верховного Главнокомандования. Первый главнокомандующий — Маршал Советского Союза Г.К. Жуков.',
    color: '#cc0000',
  },
  {
    year: '1954',
    date: '24 марта 1954',
    title: 'Переименование в ГСВГ',
    text: 'ГСОВГ переименована в Группу советских войск в Германии (ГСВГ). Начало нового этапа — превращение группы в мощный военный щит советского блока в Центральной Европе.',
    color: '#C9A84C',
  },
  {
    year: '1989',
    date: '9 ноября 1989',
    title: 'Падение Берлинской стены',
    text: 'Историческое событие — открытие Берлинской стены. Начало процесса объединения Германии и вывода советских войск с территории ГДР.',
    color: '#4db8ff',
  },
  {
    year: '1991',
    date: '1 января 1991',
    title: 'Переименование в ЗГВ',
    text: 'ГСВГ переименована в Западную группу войск (ЗГВ). Начало масштабного вывода войск с территории объединённой Германии в соответствии с Договором об окончательном урегулировании в отношении Германии.',
    color: '#5cb85c',
  },
  {
    year: '1994',
    date: '31 августа 1994',
    title: 'Завершение вывода войск',
    text: 'Последний российский солдат покинул территорию Германии. Торжественная церемония вывода прошла в Берлине. 49 лет непрерывного пребывания советских и российских войск в Германии завершились.',
    color: '#C9A84C',
  },
  {
    year: '1994',
    date: '25 марта 1994',
    title: 'Основание «Союза ветеранов»',
    text: 'Зарегистрирована МОО «Союз ветеранов Западной группы войск (ГСВГ)». В 2015 году организация переименована в «Союз ветеранов Группы войск в Германии (ГСОВГ, ГСВГ, ЗГВ)».',
    color: '#cc0000',
  },
];

export default function HistorySection() {
  return (
    <section id="history" className="py-20 lg:py-28 bg-gradient-to-b from-[#0d0d1a] via-[#111127] to-[#0d0d1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#C9A84C] text-sm tracking-[0.3em] uppercase font-semibold mb-3">★ Хронология ★</p>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            История
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-[#f0ead6]/60 max-w-2xl mx-auto">
            49 лет присутствия советских войск в Германии — страница великой истории, 
            которую мы бережно храним и передаём следующим поколениям.
          </p>
        </div>

        {/* Map background image */}
        <div className="relative mb-12 rounded-xl overflow-hidden">
          <img src="/images/germany-map.jpg" alt="Карта расположения войск" className="w-full h-48 lg:h-64 object-cover opacity-40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-[#C9A84C] font-bold text-xl lg:text-3xl tracking-wider" style={{ fontFamily: 'Playfair Display, serif' }}>
                10 июня 1945 — 31 августа 1994
              </div>
              <div className="text-white/80 mt-2 text-sm lg:text-base">Германия — Форпост мира и безопасности в Европе</div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#C9A84C]/0 via-[#C9A84C]/60 to-[#C9A84C]/0" />

          <div className="space-y-8">
            {timeline.map((item, i) => (
              <div key={i} className={`flex flex-col lg:flex-row gap-4 lg:gap-8 ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                {/* Content */}
                <div className="flex-1">
                  <div className="glass-card rounded-lg p-5 border hover-lift" style={{ borderColor: item.color + '30' }}>
                    <div className="flex items-start gap-3">
                      <div
                        className="w-3 h-3 rounded-full mt-1 flex-shrink-0"
                        style={{ backgroundColor: item.color, boxShadow: `0 0 10px ${item.color}` }}
                      />
                      <div>
                        <div className="text-xs font-semibold tracking-wider mb-1" style={{ color: item.color }}>
                          {item.date}
                        </div>
                        <h3 className="text-white font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                          {item.title}
                        </h3>
                        <p className="text-[#f0ead6]/70 text-sm leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Year Badge (center) */}
                <div className="hidden lg:flex items-center justify-center flex-shrink-0 w-20">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-sm border-2 z-10"
                    style={{ backgroundColor: item.color + '20', borderColor: item.color, color: item.color }}
                  >
                    {item.year}
                  </div>
                </div>

                {/* Empty side */}
                <div className="flex-1 hidden lg:block" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom quote */}
        <div className="mt-16 text-center glass-card rounded-xl p-8 border border-[#C9A84C]/20">
          <div className="text-4xl text-[#C9A84C] mb-4">★</div>
          <blockquote className="text-lg lg:text-xl text-[#f0ead6]/90 italic leading-relaxed max-w-3xl mx-auto" style={{ fontFamily: 'Playfair Display, serif' }}>
            «Мы были форпостом мира и безопасности в Европе. Наш долг — сохранить 
            историческую правду для будущих поколений.»
          </blockquote>
          <p className="mt-4 text-[#C9A84C] text-sm">— Союз ветеранов ГСОВГ, ГСВГ, ЗГВ</p>
        </div>
      </div>
    </section>
  );
}
