const stats = [
  { number: '12 000+', label: 'Членов организации' },
  { number: '36', label: 'Региональных организаций' },
  { number: '49', label: 'Лет в Германии' },
  { number: '1994', label: 'Год основания' },
];

const directions = [
  {
    icon: '📜',
    title: 'Историческая правда',
    text: 'Содействие формированию исторической правды о роли и значении Группы Войск в Германии (ГСОВГ, ГСВГ, ЗГВ) в послевоенной истории.',
  },
  {
    icon: '⚖️',
    title: 'Правовая защита',
    text: 'Содействие правовой защите гражданских, политических, социально-экономических прав и свобод ветеранов и членов их семей.',
  },
  {
    icon: '🎖️',
    title: 'Патриотическое воспитание',
    text: 'Содействие осуществлению военно-патриотического и интернационального воспитания молодёжи и военнослужащих ВС РФ.',
  },
  {
    icon: '🕊️',
    title: 'Охрана памятников',
    text: 'Помощь в охране памятников истории и культуры, поддержании мест захоронений погибших при защите Отечества.',
  },
  {
    icon: '🤝',
    title: 'Консолидация',
    text: 'Объединение ветеранских организаций, проведение семинаров, конференций, выставок и консультаций.',
  },
  {
    icon: '💙',
    title: 'Социальная помощь',
    text: 'Оказание помощи нуждающимся ветеранам «Союза» и членам их семей.',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#0d0d1a] military-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#C9A84C] text-sm tracking-[0.3em] uppercase font-semibold mb-3">★ Организация ★</p>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Об организации
          </h2>
          <div className="section-divider" />
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, i) => (
            <div key={i} className="glass-card rounded-lg p-6 text-center hover-lift border border-[#C9A84C]/20">
              <div className="text-3xl lg:text-4xl font-bold gold-shimmer mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                {stat.number}
              </div>
              <div className="text-[#f0ead6]/60 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-10 mb-16 items-center">
          <div>
            <h3 className="text-2xl font-bold text-[#C9A84C] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Региональная организация по КБР
            </h3>
            <div className="space-y-4 text-[#f0ead6]/80 leading-relaxed">
              <p>
                Региональная общественная организация МОО «Союз ветеранов Группы войск в Германии 
                (ГСОВГ, ГСВГ, ЗГВ)» по Кабардино-Балкарской Республике объединяет ветеранов, 
                проходивших воинскую службу и работавших в составе Группы советских оккупационных 
                войск в Германии, Группы советских войск в Германии и Западной группы войск.
              </p>
              <p>
                Наша организация является частью Межрегиональной общественной организации 
                «Союз ветеранов Группы войск в Германии (ГСОВГ, ГСВГ, ЗГВ)», зарегистрированной 
                Министерством юстиции Российской Федерации <strong className="text-[#C9A84C]">25 марта 1994 года</strong>.
              </p>
              <p>
                Мы — самоуправляемая некоммерческая общественная организация, в состав которой 
                на добровольной основе входят российские граждане, служившие и работавшие 
                в группе войск в Германии, а также их семьи.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-[#cc0000]/20 border border-[#cc0000]/40 rounded text-[#ff6666] text-xs font-semibold tracking-wider">ГСОВГ</span>
              <span className="px-3 py-1 bg-[#C9A84C]/20 border border-[#C9A84C]/40 rounded text-[#C9A84C] text-xs font-semibold tracking-wider">ГСВГ</span>
              <span className="px-3 py-1 bg-[#4db8ff]/20 border border-[#4db8ff]/40 rounded text-[#4db8ff] text-xs font-semibold tracking-wider">ЗГВ</span>
              <span className="px-3 py-1 bg-[#1a5c2a]/40 border border-[#1a5c2a]/60 rounded text-[#5cb85c] text-xs font-semibold tracking-wider">КБР</span>
            </div>
          </div>
          <div className="relative">
            <img
              src="/veterans-photo.jpg"
              alt="Ветераны ГСВГ"
              className="rounded-lg shadow-2xl w-full object-cover h-80 lg:h-96"
            />
            <div className="absolute inset-0 rounded-lg border border-[#C9A84C]/30" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-[#C9A84C]/60" />
            <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-[#C9A84C]/60" />
          </div>
        </div>

        {/* Directions */}
        <div>
          <h3 className="text-2xl font-bold text-center text-white mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
            Основные направления деятельности
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {directions.map((dir, i) => (
              <div key={i} className="glass-card rounded-lg p-5 hover-lift border border-[#C9A84C]/10 group">
                <div className="text-4xl mb-3">{dir.icon}</div>
                <h4 className="text-[#C9A84C] font-bold mb-2 group-hover:text-[#f5d98b] transition-colors">{dir.title}</h4>
                <p className="text-[#f0ead6]/70 text-sm leading-relaxed">{dir.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
