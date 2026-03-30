import { blogPosts } from './blogData';

export default function NewsFeedSection() {
  return (
    <section id="news" className="py-20 lg:py-28 bg-gradient-to-b from-[#0d0d1a] via-[#111326] to-[#0d0d1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[#C9A84C] text-sm tracking-[0.3em] uppercase font-semibold mb-3">★ Новости ★</p>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">Новостная лента</h2>
          <div className="section-divider mb-6" />
          <p className="text-[#f0ead6]/60 max-w-2xl mx-auto text-sm">
            Здесь отображаются последние публикации из закрытого блога организации.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <article key={post.id} className="glass-card rounded-xl p-6 border border-[#C9A84C]/25 hover-lift">
              <p className="text-[#C9A84C] text-xs uppercase tracking-widest mb-3">{post.date}</p>
              <h3 className="text-white text-xl font-bold mb-3">{post.title}</h3>
              <p className="text-[#f0ead6]/70 text-sm leading-relaxed mb-6">{post.excerpt}</p>
              <a
                href="#/blog"
                className="inline-block px-4 py-2 border border-[#C9A84C] text-[#C9A84C] rounded text-xs uppercase tracking-wider hover:bg-[#C9A84C]/10 transition-colors"
              >
                Читать в блоге
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
