import heroBg from './hero-bg.jpg';
import kbrCoat from './kbr-coat.png';
import emblem from './emblem.png';
import gsovgBadge from './gsovg-badge.png';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Dark overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d1a]/80 via-[#0d0d1a]/60 to-[#0d0d1a]" />
      {/* Decorative top stripe - KBR colors */}
      <div className="absolute top-0 left-0 right-0 flex h-1.5 z-10">
        <div className="flex-1 bg-[#1E3A6E]" />
        <div className="flex-1 bg-white" />
        <div className="flex-1 bg-[#1a5c2a]" />
      </div>

      {/* Stars decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-[#C9A84C]/20 text-xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          >
            ★
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-6xl mx-auto">
        {/* Emblems Row */}
        <div className="flex items-center gap-6 lg:gap-12 mb-8 animate-fadeInUp">
          {/* Russian Federation emblem (decorative SVG) */}
          <div className="w-20 h-20 lg:w-28 lg:h-28 animate-float" style={{ animationDelay: '0s' }}>
            <img src={kbrCoat} alt="Герб КБР" className="w-full h-full object-contain drop-shadow-2xl" />
          </div>

          {/* Main Organization Emblem */}
          <div className="w-28 h-28 lg:w-40 lg:h-40 animate-pulse-gold rounded-full">
            <img src={emblem} alt="Эмблема организации" className="w-full h-full object-contain drop-shadow-2xl" />
          </div>

          {/* Badge */}
          <div className="w-20 h-20 lg:w-28 lg:h-28 animate-float" style={{ animationDelay: '2s' }}>
            <img src={gsovgBadge} alt="Значок ГСВГ" className="w-full h-full object-contain drop-shadow-2xl" />
          </div>
        </div>

        {/* Stars */}
        <div className="flex gap-2 mb-4 text-[#cc0000] text-2xl">
          {'★ ★ ★ ★ ★'.split(' ').map((s, i) => (
            <span key={i} className="animate-fadeInUp" style={{ animationDelay: `${i * 0.1}s` }}>{s}</span>
          ))}
        </div>

        {/* Title Block */}
        <div
          className="glass-card rounded-lg px-6 py-6 lg:px-10 lg:py-8 mb-6 animate-fadeInUp border border-[#C9A84C]/40"
          style={{ animationDelay: '0.3s' }}
        >
          <p className="text-[#C9A84C] text-xs lg:text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            Региональная общественная организация
          </p>
          <p className="text-[#f0ead6]/70 text-xs lg:text-xs tracking-wider mb-4 uppercase">
            Межрегиональной общественной организации
          </p>
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
            <span className="gold-shimmer">«СОЮЗ ВЕТЕРАНОВ</span>
            <br />
            <span className="text-white">ГРУППЫ ВОЙСК</span>
            <br />
            <span className="text-white">В ГЕРМАНИИ»</span>
          </h1>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#C9A84C]/60" />
            <span className="text-[#C9A84C] font-bold tracking-[0.2em] text-sm lg:text-base">ГСОВГ · ГСВГ · ЗГВ</span>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#C9A84C]/60" />
          </div>
          <h2 className="text-lg lg:text-2xl font-semibold text-[#4db8ff]">
            ПО КАБАРДИНО-БАЛКАРСКОЙ РЕСПУБЛИКЕ
          </h2>
        </div>

        {/* Subtitle */}
        <p
          className="text-[#f0ead6]/70 text-sm lg:text-base max-w-2xl leading-relaxed animate-fadeInUp mb-8"
          style={{ animationDelay: '0.5s' }}
        >
          49 лет (10.06.1945 — 31.08.1994) — форпост мира и безопасности в Европе.
          <br />
          Храним память. Чтим традиции. Воспитываем патриотов.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 animate-fadeInUp"
          style={{ animationDelay: '0.7s' }}
        >
          <a
            href="#about"
            className="px-8 py-3 bg-[#C9A84C] text-[#0d0d1a] font-bold rounded tracking-wider hover:bg-[#f5d98b] transition-colors hover-lift text-sm uppercase"
          >
            Об организации
          </a>
          <a
            href="#contacts"
            className="px-8 py-3 border border-[#C9A84C] text-[#C9A84C] font-bold rounded tracking-wider hover:bg-[#C9A84C]/10 transition-colors hover-lift text-sm uppercase"
          >
            Связаться с нами
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
          <div className="w-px h-8 bg-gradient-to-b from-transparent to-[#C9A84C]" />
          <div className="w-2 h-2 rounded-full bg-[#C9A84C]" />
        </div>
      </div>
    </section>
  );
}
