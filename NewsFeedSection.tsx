import { useEffect, useState } from 'react';
import { BlogPost, loadBlogPosts } from './blogData';

export default function NewsFeedSection() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [selectedAttachmentId, setSelectedAttachmentId] = useState<string | null>(null);
  const [viewerOpen, setViewerOpen] = useState(false);
  const [zoom, setZoom] = useState(1);

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

  const closeModal = () => {
    setSelectedPost(null);
    setSelectedAttachmentId(null);
  };

  const openPost = (post: BlogPost) => {
    setSelectedPost(post);
    setSelectedAttachmentId(post.attachments?.[0]?.id ?? null);
  };

  const openViewer = () => {
    setViewerOpen(true);
    setZoom(1);
  };

  const closeViewer = () => {
    setViewerOpen(false);
    setZoom(1);
  };

  const activeAttachment =
    selectedPost?.attachments?.find((attachment) => attachment.id === selectedAttachmentId) ??
    selectedPost?.attachments?.[0];

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
              {(() => {
                const imageAttachment = post.attachments?.find((attachment) => attachment.type.startsWith('image/'));
                const nonImageAttachment = post.attachments?.find((attachment) => !attachment.type.startsWith('image/'));

                return (
                  <div className={`grid gap-4 ${imageAttachment ? 'grid-cols-[34%_66%] items-stretch' : 'grid-cols-1'}`}>
                    {imageAttachment && (
                      <div className="rounded-lg border border-[#C9A84C]/25 bg-[#0f1324] overflow-hidden flex items-center justify-center">
                        <img
                          src={imageAttachment.dataUrl}
                          alt={imageAttachment.name}
                          className="w-full h-full min-h-32 max-h-40 object-contain bg-[#0b1020]"
                        />
                      </div>
                    )}

                    <div className="flex flex-col">
                      <p className="text-[#C9A84C] text-xs uppercase tracking-widest mb-3">{post.date}</p>
                      <h3 className="text-white text-xl font-bold mb-3">{post.title}</h3>
                      <p className="text-[#f0ead6]/70 text-sm leading-relaxed mb-4">{post.excerpt}</p>

                      {!!nonImageAttachment && (
                        <div className="mb-4 rounded border border-[#C9A84C]/20 bg-[#11162a] p-2">
                          {nonImageAttachment.type.startsWith('video/') ? (
                            <video src={nonImageAttachment.dataUrl} controls className="w-full h-32 rounded object-cover">
                              Ваш браузер не поддерживает видео.
                            </video>
                          ) : (
                            <a
                              href={nonImageAttachment.dataUrl}
                              download={nonImageAttachment.name}
                              className="inline-block text-sm text-[#C9A84C] underline underline-offset-4 break-all"
                            >
                              📎 {nonImageAttachment.name}
                            </a>
                          )}
                        </div>
                      )}

                      <a
                        href="#news"
                        onClick={(event) => {
                          event.preventDefault();
                          openPost(post);
                        }}
                        className="inline-block mt-auto w-fit px-4 py-2 border border-[#C9A84C] text-[#C9A84C] rounded text-xs uppercase tracking-wider hover:bg-[#C9A84C]/10 transition-colors"
                      >
                        Читать
                      </a>
                    </div>
                  </div>
                );
              })()}
            </article>
          ))}
        </div>
      </div>

      {selectedPost && (
        <div className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm px-4 py-10 flex items-center justify-center">
          <div className="w-full max-w-6xl h-[78vh] overflow-hidden rounded-2xl border border-[#C9A84C]/30 bg-[#0f1324]/95 shadow-2xl">
            <div className="flex h-full flex-col lg:flex-row">
              <div className="lg:w-2/5 border-b lg:border-b-0 lg:border-r border-[#C9A84C]/20 p-4 overflow-y-auto">
                {activeAttachment ? (
                  <div className="space-y-3">
                    {activeAttachment.type.startsWith('image/') && (
                      <button type="button" onClick={openViewer} className="w-full text-left">
                        <img
                          src={activeAttachment.dataUrl}
                          alt={activeAttachment.name}
                          className="w-full max-h-80 object-contain rounded border border-[#C9A84C]/20"
                        />
                      </button>
                    )}
                    {activeAttachment.type.startsWith('video/') && (
                      <button type="button" onClick={openViewer} className="w-full text-left">
                        <video src={activeAttachment.dataUrl} controls className="w-full max-h-80 rounded border border-[#C9A84C]/20" />
                      </button>
                    )}
                    {!activeAttachment.type.startsWith('image/') && !activeAttachment.type.startsWith('video/') && (
                      <div className="rounded border border-[#C9A84C]/20 p-4">
                        <p className="text-sm text-white mb-2 break-all">{activeAttachment.name}</p>
                        <a
                          href={activeAttachment.dataUrl}
                          download={activeAttachment.name}
                          className="text-[#C9A84C] text-sm underline underline-offset-4"
                        >
                          Скачать файл
                        </a>
                      </div>
                    )}
                    <p className="text-xs text-[#f0ead6]/60">
                      Нажмите на изображение или видео, чтобы открыть в увеличенном просмотре.
                    </p>
                    {!!selectedPost.attachments?.length && selectedPost.attachments.length > 1 && (
                      <div className="grid grid-cols-2 gap-2 pt-2">
                        {selectedPost.attachments.map((attachment) => (
                          <button
                            key={attachment.id}
                            type="button"
                            onClick={() => setSelectedAttachmentId(attachment.id)}
                            className={`rounded border p-2 text-xs text-left break-all ${
                              selectedAttachmentId === attachment.id
                                ? 'border-[#C9A84C] text-[#C9A84C]'
                                : 'border-[#C9A84C]/25 text-[#f0ead6]/70'
                            }`}
                          >
                            {attachment.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="h-full flex items-center justify-center text-sm text-[#f0ead6]/60">
                    В этой публикации нет вложений.
                  </div>
                )}
              </div>

              <div className="lg:w-3/5 p-6 overflow-y-auto">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <p className="text-[#C9A84C] text-xs uppercase tracking-widest mb-2">{selectedPost.date}</p>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white">{selectedPost.title}</h3>
                  </div>
                  <button
                    type="button"
                    onClick={closeModal}
                    className="px-3 py-2 rounded border border-[#C9A84C]/40 text-[#C9A84C] text-xs uppercase tracking-wider hover:bg-[#C9A84C]/10"
                  >
                    Закрыть
                  </button>
                </div>
                <p className="text-[#f0ead6]/80 text-base leading-relaxed whitespace-pre-wrap">{selectedPost.content}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedPost && activeAttachment && viewerOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 px-4 py-8 flex flex-col">
          <div className="flex justify-end gap-2 mb-4">
            {activeAttachment.type.startsWith('image/') && (
              <>
                <button
                  type="button"
                  onClick={() => setZoom((value) => Math.max(0.5, Number((value - 0.25).toFixed(2))))}
                  className="px-3 py-2 rounded border border-[#C9A84C]/40 text-[#C9A84C] text-xs uppercase tracking-wider hover:bg-[#C9A84C]/10"
                >
                  −
                </button>
                <button
                  type="button"
                  onClick={() => setZoom((value) => Math.min(4, Number((value + 0.25).toFixed(2))))}
                  className="px-3 py-2 rounded border border-[#C9A84C]/40 text-[#C9A84C] text-xs uppercase tracking-wider hover:bg-[#C9A84C]/10"
                >
                  +
                </button>
              </>
            )}
            <button
              type="button"
              onClick={closeViewer}
              className="px-3 py-2 rounded border border-[#C9A84C]/40 text-[#C9A84C] text-xs uppercase tracking-wider hover:bg-[#C9A84C]/10"
            >
              Закрыть просмотр
            </button>
          </div>

          <div className="flex-1 overflow-auto flex items-center justify-center">
            {activeAttachment.type.startsWith('image/') && (
              <img
                src={activeAttachment.dataUrl}
                alt={activeAttachment.name}
                className="max-w-none rounded"
                style={{ transform: `scale(${zoom})`, transformOrigin: 'center center' }}
              />
            )}
            {activeAttachment.type.startsWith('video/') && (
              <video src={activeAttachment.dataUrl} controls className="max-h-full max-w-full rounded">
                Ваш браузер не поддерживает видео.
              </video>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
