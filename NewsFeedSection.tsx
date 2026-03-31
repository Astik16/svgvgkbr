import { useEffect, useState } from 'react';
import { BlogPost, loadBlogPosts } from './blogData';

export default function NewsFeedSection() {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const updatePosts = () => setPosts(loadBlogPosts());

    updatePosts();
    window.addEventListener('blog-posts-updated', updatePosts);
    window.addEventListener('storage', updatePosts);

    return () => {
      window.removeEventListener('blog-posts-updated', updatePosts);
      window.removeEventListener('storage', updatePosts);
    };
  }, []);

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
          {posts.map((post) => (
            <article key={post.id} className="glass-card rounded-xl p-6 border border-[#C9A84C]/25 hover-lift">
              <p className="text-[#C9A84C] text-xs uppercase tracking-widest mb-3">{post.date}</p>
              <h3 className="text-white text-xl font-bold mb-3">{post.title}</h3>
              <p className="text-[#f0ead6]/70 text-sm leading-relaxed mb-6">{post.excerpt}</p>

              {!!post.attachments?.length && (
                <div className="mb-6 rounded-lg border border-[#C9A84C]/20 bg-[#0f1324] p-3 space-y-3">
                  {post.attachments.slice(0, 2).map((attachment) => {
                    const isImage = attachment.type.startsWith('image/');
                    const isVideo = attachment.type.startsWith('video/');

                    return (
                      <div key={attachment.id} className="rounded border border-[#C9A84C]/15 bg-[#11162a] p-2">
                        {isImage && (
                          <img
                            src={attachment.dataUrl}
                            alt={attachment.name}
                            className="w-full h-40 object-cover rounded"
                          />
                        )}
                        {isVideo && (
                          <video src={attachment.dataUrl} controls className="w-full h-40 rounded object-cover">
                            Ваш браузер не поддерживает видео.
                          </video>
                        )}
                        {!isImage && !isVideo && (
                          <a
                            href={attachment.dataUrl}
                            download={attachment.name}
                            className="inline-block text-sm text-[#C9A84C] underline underline-offset-4 break-all"
                          >
                            📎 {attachment.name}
                          </a>
                        )}
                      </div>
                    );
                  })}
                  {post.attachments.length > 2 && (
                    <p className="text-xs text-[#f0ead6]/60">Ещё вложений: {post.attachments.length - 2}</p>
                  )}
                </div>
              )}

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
