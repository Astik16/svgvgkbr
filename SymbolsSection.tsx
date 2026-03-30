const groupings = [
  {
    abbr: 'ГСОВГ',
    full: 'Группа советских оккупационных войск в Германии',
    period: '1945 — 1954',
    color: '#cc0000',
  },
  {
    abbr: 'ГСВГ',
    full: 'Группа советских войск в Германии',
    period: '1954 — 1991',
    color: '#C9A84C',
  },
  {
    abbr: 'ЗГВ',
    full: 'Западная группа войск',
    period: '1991 — 1994',
    color: '#4db8ff',
  },
];

// SVG Star of David / Red Star
function RedStar({ size = 80 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <polygon
        points="50,5 61,35 95,35 68,57 79,91 50,70 21,91 32,57 5,35 39,35"
        fill="#cc0000"
        stroke="#C9A84C"
        strokeWidth="2"
      />
      <polygon
        points="50,20 57,40 78,40 62,52 68,73 50,61 32,73 38,52 22,40 43,40"
        fill="#8B0000"
        stroke="none"
      />
    </svg>
  );
}

function SovietStar({ size = 60 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="48" fill="none" stroke="#C9A84C" strokeWidth="2" />
      <polygon
        points="50,8 61,38 94,38 68,57 78,88 50,68 22,88 32,57 6,38 39,38"
        fill="#cc0000"
        stroke="#C9A84C"
        strokeWidth="1"
      />
      <circle cx="50" cy="50" r="12" fill="#C9A84C" />
      <text x="50" y="54" textAnchor="middle" fill="#8B0000" fontSize="9" fontWeight="bold">ВГВ</text>
    </svg>
  );
}

function KBRFlag() {
  return (
    <div className="w-full h-24 rounded overflow-hidden border border-[#C9A84C]/30 relative">
      <div className="h-1/3 bg-[#1E3A6E]" />
      <div className="h-1/3 bg-white" />
      <div className="h-1/3 bg-[#1a5c2a]" />
      {/* Elbrus symbol in center */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/60">
          <div className="h-1/2 bg-[#1E3A6E] flex items-end justify-center pb-1">
            <svg width="40" height="20" viewBox="0 0 40 20">
              <polygon points="0,20 10,5 18,12 20,8 22,12 30,5 40,20" fill="white" />
            </svg>
          </div>
          <div className="h-1/2 bg-[#1a5c2a]" />
        </div>
      </div>
    </div>
  );
}

export default function SymbolsSection() {
  return (
    <section id="symbols" className="py-20 lg:py-28 bg-[#0d0d1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#C9A84C] text-sm tracking-[0.3em] uppercase font-semibold mb-3">★ Символика ★</p>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Эмблемы и символы
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-[#f0ead6]/60 max-w-xl mx-auto text-sm">
            Символика организации отражает боевой путь и гордость ветеранов советских и российских войск в Германии
          </p>
        </div>

        {/* Main emblems */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {/* Organization Emblem */}
          <div className="glass-card rounded-xl p-8 flex flex-col items-center text-center hover-lift border border-[#C9A84C]/20">
            <div className="mb-4 animate-float">
              <img src="/emblem.png" alt="Эмблема МОО" className="w-28 h-28 object-contain" />
            </div>
            <h3 className="text-[#C9A84C] font-bold mb-2">Эмблема организации</h3>
            <p className="text-[#f0ead6]/60 text-xs">МОО «Союз ветеранов Группы войск в Германии (ГСОВГ, ГСВГ, ЗГВ)»</p>
          </div>

          {/* Badge ГСВГ */}
          <div className="glass-card rounded-xl p-8 flex flex-col items-center text-center hover-lift border border-[#C9A84C]/20">
            <div className="mb-4 animate-float" style={{ animationDelay: '1s' }}>
              <img src="/gsovg-badge.png" alt="Значок ГСВГ" className="w-28 h-28 object-contain" />
            </div>
            <h3 className="text-[#C9A84C] font-bold mb-2">Знак «Ветеран ГСВГ»</h3>
            <p className="text-[#f0ead6]/60 text-xs">Нагрудный памятный знак участника Группы советских войск в Германии</p>
          </div>

          {/* KBR Coat of Arms */}
          <div className="glass-card rounded-xl p-8 flex flex-col items-center text-center hover-lift border border-[#C9A84C]/20 sm:col-span-2 lg:col-span-1">
            <div className="mb-4 animate-float" style={{ animationDelay: '2s' }}>
              <img src="/kbr-coat.png" alt="Герб КБР" className="w-28 h-28 object-contain" />
            </div>
            <h3 className="text-[#C9A84C] font-bold mb-2">Герб КБР</h3>
            <p className="text-[#f0ead6]/60 text-xs">Государственный герб Кабардино-Балкарской Республики — золотой орёл с Эльбрусом</p>
          </div>
        </div>

        {/* KBR Flag */}
        <div className="glass-card rounded-xl p-8 mb-14 border border-[#C9A84C]/20">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Флаг Кабардино-Балкарской Республики
              </h3>
              <p className="text-[#f0ead6]/70 text-sm leading-relaxed mb-4">
                Государственный флаг КБР представляет собой полотнище из трёх равновеликих 
                горизонтальных полос: верхней — <span className="text-[#4db8ff]">сине-голубого</span>, 
                средней — <span className="text-white font-bold">белого</span>, 
                нижней — <span className="text-[#5cb85c]">зелёного</span> цвета.
              </p>
              <p className="text-[#f0ead6]/70 text-sm">
                В центре полотнища — круг со стилизованным изображением горы 
                <strong className="text-[#C9A84C]"> Эльбрус</strong> — символа республики.
              </p>
            </div>
            <div className="max-w-sm mx-auto w-full">
              <KBRFlag />
              <p className="text-center text-[#f0ead6]/40 text-xs mt-3">Государственный флаг КБР</p>
            </div>
          </div>
        </div>

        {/* SVG Stars Section */}
        <div className="glass-card rounded-xl p-8 mb-14 border border-[#C9A84C]/20">
          <h3 className="text-xl font-bold text-white text-center mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
            Воинская символика
          </h3>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <div className="flex flex-col items-center gap-2">
              <RedStar size={80} />
              <span className="text-[#f0ead6]/60 text-xs">Красная звезда</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <SovietStar size={80} />
              <span className="text-[#f0ead6]/60 text-xs">Знак организации</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#cc0000] to-[#8B0000] flex items-center justify-center border-2 border-[#C9A84C]">
                <span className="text-[#C9A84C] font-bold text-xs text-center leading-tight">ГСОВГ<br/>ГСВГ<br/>ЗГВ</span>
              </div>
              <span className="text-[#f0ead6]/60 text-xs">Аббревиатуры</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-20 h-20 flex flex-col overflow-hidden rounded border border-[#C9A84C]/40">
                <div className="flex-1 bg-[#1E3A6E]" />
                <div className="flex-1 bg-white" />
                <div className="flex-1 bg-[#1a5c2a]" />
              </div>
              <span className="text-[#f0ead6]/60 text-xs">Флаг КБР</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-20 h-20 flex items-center justify-center">
                <svg viewBox="0 0 80 80" width="80" height="80">
                  <rect x="5" y="5" width="70" height="70" rx="5" fill="none" stroke="#C9A84C" strokeWidth="2" />
                  <line x1="5" y1="5" x2="75" y2="75" stroke="#C9A84C" strokeWidth="1" opacity="0.3" />
                  <line x1="75" y1="5" x2="5" y2="75" stroke="#C9A84C" strokeWidth="1" opacity="0.3" />
                  <polygon points="40,10 50,30 72,32 57,47 61,70 40,58 19,70 23,47 8,32 30,30" fill="#cc0000" stroke="#C9A84C" strokeWidth="1" />
                </svg>
              </div>
              <span className="text-[#f0ead6]/60 text-xs">Боевой знак</span>
            </div>
          </div>
        </div>

        {/* Groupings Abbreviations */}
        <div className="grid sm:grid-cols-3 gap-5">
          {groupings.map((g, i) => (
            <div key={i} className="glass-card rounded-xl p-6 text-center hover-lift" style={{ borderColor: g.color + '30', borderWidth: 1, borderStyle: 'solid' }}>
              <div
                className="text-4xl font-black mb-2 tracking-wider"
                style={{ color: g.color, fontFamily: 'Playfair Display, serif' }}
              >
                {g.abbr}
              </div>
              <div className="text-[#f0ead6]/80 text-xs leading-relaxed mb-2">{g.full}</div>
              <div className="text-[#f0ead6]/40 text-xs tracking-widest">{g.period}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
