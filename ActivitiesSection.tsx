const events = [
  {
    date: '9 мая',
    title: 'День Победы',
    desc: 'Торжественные мероприятия, возложение цветов к Вечному огню, встречи ветеранов, участие в параде Победы в Нальчике.',
    icon: '🎖️',
    color: '#cc0000',
  },
  {
    date: '10 июня',
    title: 'День образования ГСОВГ',
    desc: 'Памятное мероприятие в честь основания Группы советских оккупационных войск в Германии 10 июня 1945 года.',
    icon: '🇩🇪',
    color: '#C9A84C',
  },
  {
    date: '31 августа',
    title: 'День вывода ЗГВ',
    desc: 'Памятная дата — завершение вывода Западной группы войск из Германии. Встречи, воспоминания, возложение венков.',
    icon: '🕊️',
    color: '#4db8ff',
  },
  {
    date: 'Ноябрь',
    title: 'День воинской доблести',
    desc: 'Патриотические мероприятия, встречи с молодёжью, уроки мужества в школах Кабардино-Балкарии.',
    icon: '⭐',
    color: '#5cb85c',
  },
];

const activities = [
  {
    title: 'Увековечение памяти',
    items: [
      'Установка мемориальных досок в честь ветеранов ГВГ',
      'Поддержание воинских захоронений в надлежащем состоянии',
      'Создание летописи Союза ветеранов по КБР',
      'Сохранение архивных документов и фотоматериалов',
    ],
  },
  {
    title: 'Работа с молодёжью',
    items: [
      'Уроки мужества в образовательных учреждениях КБР',
      'Военно-патриотические клубы и секции',
      'Встречи ветеранов с учащимися и студентами',
      'Конкурсы рисунков и сочинений о ветеранах',
    ],
  },
  {
    title: 'Социальная поддержка',
    items: [
      'Помощь ветеранам в решении жилищных вопросов',
      'Содействие в получении льгот и пособий',
      'Медицинская помощь нуждающимся членам организации',
      'Юридическая консультация по правовым вопросам',
    ],
  },
];

export default function ActivitiesSection() {
  return (
    <section id="activities" className="py-20 lg:py-28 bg-gradient-to-b from-[#0d0d1a] via-[#0f1020] to-[#0d0d1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#C9A84C] text-sm tracking-[0.3em] uppercase font-semibold mb-3">★ Деятельность ★</p>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Наша работа
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-[#f0ead6]/60 max-w-2xl mx-auto text-sm">
            Региональная организация ведёт активную работу по сохранению исторической памяти, 
            патриотическому воспитанию и социальной поддержке ветеранов в Кабардино-Балкарии.
          </p>
        </div>

        {/* Elbrus image with overlay */}
        <div className="relative rounded-xl overflow-hidden mb-14">
          <img src="/elbrus.jpg" alt="Эльбрус — символ КБР" className="w-full h-48 lg:h-64 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d1a]/90 via-[#0d0d1a]/50 to-transparent" />
          <div className="absolute inset-0 flex items-center px-8 lg:px-16">
            <div className="max-w-lg">
              <div className="text-[#C9A84C] font-semibold tracking-wider text-sm mb-2">КАБАРДИНО-БАЛКАРСКАЯ РЕСПУБЛИКА</div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                Под сенью Эльбруса
              </h3>
              <p className="text-[#f0ead6]/70 text-sm">
                Наши ветераны — гордость республики. Их служба на страже мира в Германии 
                — страница боевой славы Кабардино-Балкарии.
              </p>
            </div>
          </div>
        </div>

        {/* Yearly Events */}
        <h3 className="text-2xl font-bold text-white text-center mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
          Памятные даты и мероприятия
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {events.map((event, i) => (
            <div key={i} className="glass-card rounded-xl p-5 hover-lift text-center" style={{ borderColor: event.color + '30', borderWidth: 1, borderStyle: 'solid' }}>
              <div className="text-4xl mb-3">{event.icon}</div>
              <div className="text-xs font-bold tracking-wider mb-1" style={{ color: event.color }}>{event.date}</div>
              <h4 className="text-white font-bold mb-2 text-sm">{event.title}</h4>
              <p className="text-[#f0ead6]/60 text-xs leading-relaxed">{event.desc}</p>
            </div>
          ))}
        </div>

        {/* Activity Areas */}
        <div className="grid lg:grid-cols-3 gap-6">
          {activities.map((activity, i) => (
            <div key={i} className="glass-card rounded-xl p-6 border border-[#C9A84C]/15 hover-lift">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-8 bg-[#C9A84C] rounded" />
                <h4 className="text-[#C9A84C] font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>{activity.title}</h4>
              </div>
              <ul className="space-y-3">
                {activity.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-[#f0ead6]/70">
                    <span className="text-[#cc0000] mt-0.5 flex-shrink-0">★</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-12 relative overflow-hidden rounded-xl bg-gradient-to-r from-[#8B0000]/40 via-[#C9A84C]/10 to-[#1E3A6E]/40 border border-[#C9A84C]/30 p-8 text-center">
          <div className="absolute inset-0 overflow-hidden">
            {['★', '★', '★', '★', '★'].map((s, i) => (
              <span key={i} className="absolute text-[#C9A84C]/10 text-6xl" style={{ left: `${i * 25}%`, top: '50%', transform: 'translateY(-50%)' }}>
                {s}
              </span>
            ))}
          </div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
              Вступить в организацию
            </h3>
            <p className="text-[#f0ead6]/70 text-sm mb-6 max-w-xl mx-auto">
              Если вы проходили службу в ГСОВГ, ГСВГ или ЗГВ и проживаете в Кабардино-Балкарии — 
              мы рады приветствовать вас в нашем Союзе.
            </p>
            <a
              href="#contacts"
              className="inline-block px-8 py-3 bg-[#C9A84C] text-[#0d0d1a] font-bold rounded tracking-wider hover:bg-[#f5d98b] transition-colors hover-lift text-sm uppercase"
            >
              Связаться с нами
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
