const galleryItems = [
  {
    src: '/images/hero-bg.jpg',
    title: 'Ветераны в строю',
    desc: 'Парад ветеранов ГСВГ',
  },
  {
    src: '/images/veterans-photo.jpg',
    title: 'Встреча ветеранов',
    desc: 'Ежегодное собрание организации',
  },
  {
    src: '/images/germany-map.jpg',
    title: 'Карта дислокации войск',
    desc: 'Расположение частей ГСОВГ, ГСВГ, ЗГВ',
  },
  {
    src: '/images/elbrus.jpg',
    title: 'Эльбрус',
    desc: 'Символ Кабардино-Балкарии',
  },
];

const facts = [
  { label: 'Численность войск в 1985 г.', value: '~380 000 чел.' },
  { label: 'Количество гарнизонов', value: 'более 100' },
  { label: 'Период пребывания', value: '49 лет' },
  { label: 'Выведено из Германии', value: '546 000 единиц техники' },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#0d0d1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#C9A84C] text-sm tracking-[0.3em] uppercase font-semibold mb-3">★ Память ★</p>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Фотогалерея
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-[#f0ead6]/60 max-w-xl mx-auto text-sm">
            Хроника жизни организации и исторические фотографии ветеранов
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-xl hover-lift cursor-pointer group ${i === 0 ? 'col-span-2 row-span-2' : ''}`}
            >
              <img
                src={item.src}
                alt={item.title}
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${i === 0 ? 'h-72 lg:h-96' : 'h-36 lg:h-44'}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div className="text-[#C9A84C] font-bold text-sm">{item.title}</div>
                <div className="text-white/70 text-xs">{item.desc}</div>
              </div>
              <div className="absolute inset-0 border border-[#C9A84C]/0 group-hover:border-[#C9A84C]/40 transition-all duration-300 rounded-xl" />
            </div>
          ))}
        </div>

        {/* Facts */}
        <div className="glass-card rounded-xl p-8 border border-[#C9A84C]/20 mb-12">
          <h3 className="text-xl font-bold text-white text-center mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
            Факты и цифры
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {facts.map((fact, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl font-bold text-[#C9A84C] mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>{fact.value}</div>
                <div className="text-[#f0ead6]/60 text-xs leading-relaxed">{fact.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Memorial section */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="glass-card rounded-xl overflow-hidden border border-[#C9A84C]/20">
            <div className="bg-gradient-to-br from-[#8B0000]/20 to-[#1E3A6E]/20 p-8 text-center">
              <div className="flex justify-center mb-4">
                <svg viewBox="0 0 100 100" width="80" height="80">
                  <polygon points="50,5 61,35 95,35 68,57 79,91 50,70 21,91 32,57 5,35 39,35" fill="#cc0000" stroke="#C9A84C" strokeWidth="2" />
                  <text x="50" y="55" textAnchor="middle" fill="#f5d98b" fontSize="14" fontWeight="bold">1945</text>
                </svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                Вечная память
              </h4>
              <p className="text-[#f0ead6]/70 text-sm leading-relaxed">
                Мы чтим память всех, кто прошёл службу в Группах войск в Германии. 
                Их вклад в дело мира и безопасности бесценен.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {[
              { year: '1945–1994', text: '49 лет советские солдаты стояли на страже мира в Европе' },
              { year: '1994', text: 'Организован «Союз ветеранов» — объединение 12 000+ человек' },
              { year: 'Сегодня', text: 'Региональная организация в КБР продолжает дело памяти и патриотизма' },
            ].map((item, i) => (
              <div key={i} className="glass-card rounded-lg p-4 border border-[#C9A84C]/15 flex gap-4 hover-lift">
                <div className="text-[#C9A84C] font-bold text-sm w-20 flex-shrink-0 pt-0.5">{item.year}</div>
                <div className="w-px bg-[#C9A84C]/30 flex-shrink-0" />
                <div className="text-[#f0ead6]/70 text-sm">{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
