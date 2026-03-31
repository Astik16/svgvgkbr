import { FormEvent, useEffect, useState } from 'react';
import { BlogAttachment, BlogPost, loadBlogPosts, saveBlogPosts } from './blogData';

const BLOG_LOGIN = 'svgvgkbrartur';
const BLOG_PASSWORD = '5.Atmrsri';
const AUTH_KEY = 'svgvgkbr_blog_auth';

export default function BlogPage() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [authorized, setAuthorized] = useState(false);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [files, setFiles] = useState<File[]>([]);
  const [publishError, setPublishError] = useState('');

  useEffect(() => {
    setAuthorized(localStorage.getItem(AUTH_KEY) === 'true');
    setPosts(loadBlogPosts());
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (login === BLOG_LOGIN && password === BLOG_PASSWORD) {
      localStorage.setItem(AUTH_KEY, 'true');
      setAuthorized(true);
      setError('');
      return;
    }

    setError('Неверный логин или пароль. Попробуйте снова.');
  };

  const logout = () => {
    localStorage.removeItem(AUTH_KEY);
    setAuthorized(false);
  };

  const resetPostForm = () => {
    setTitle('');
    setExcerpt('');
    setContent('');
    setFiles([]);
  };

  const fileToDataUrl = (file: File) =>
    new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = () => reject(new Error(`Не удалось прочитать файл: ${file.name}`));
      reader.readAsDataURL(file);
    });

  const buildAttachments = async (): Promise<BlogAttachment[]> => {
    if (!files.length) {
      return [];
    }

    const encodedFiles = await Promise.all(
      files.map(async (file) => ({
        id: `${Date.now()}-${file.name}`,
        name: file.name,
        type: file.type,
        size: file.size,
        dataUrl: await fileToDataUrl(file),
      }))
    );

    return encodedFiles;
  };

  const handlePublish = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPublishError('');

    try {
      const attachments = await buildAttachments();
      const now = new Date();
      const nextPost: BlogPost = {
        id: Date.now(),
        title: title.trim(),
        excerpt: excerpt.trim(),
        content: content.trim(),
        date: now.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' }),
        attachments,
      };

      const nextPosts = [nextPost, ...posts];
      saveBlogPosts(nextPosts);
      setPosts(nextPosts);
      window.dispatchEvent(new Event('blog-posts-updated'));
      resetPostForm();
    } catch (error) {
      setPublishError(error instanceof Error ? error.message : 'Не удалось опубликовать запись.');
    }
  };

  return (
    <main className="min-h-screen bg-[#0d0d1a] text-[#f0ead6] py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <a href="#" className="text-[#C9A84C] text-sm uppercase tracking-wider hover:text-[#f5d98b]">
          ← На главную
        </a>

        <div className="text-center mt-6 mb-12">
          <p className="text-[#C9A84C] text-sm tracking-[0.3em] uppercase font-semibold mb-3">★ Закрытый блог ★</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-white">Публикации организации</h1>
        </div>

        {!authorized ? (
          <div className="max-w-md mx-auto glass-card rounded-xl p-8 border border-[#C9A84C]/30">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Вход в блог</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <label className="block">
                <span className="text-sm text-[#f0ead6]/80">Логин</span>
                <input
                  value={login}
                  onChange={(event) => setLogin(event.target.value)}
                  className="w-full mt-2 rounded border border-[#C9A84C]/40 bg-[#12162b] px-3 py-2 text-white focus:outline-none focus:border-[#C9A84C]"
                  type="text"
                  required
                />
              </label>
              <label className="block">
                <span className="text-sm text-[#f0ead6]/80">Пароль</span>
                <input
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="w-full mt-2 rounded border border-[#C9A84C]/40 bg-[#12162b] px-3 py-2 text-white focus:outline-none focus:border-[#C9A84C]"
                  type="password"
                  required
                />
              </label>
              {error && <p className="text-[#ff7a7a] text-sm">{error}</p>}
              <button
                type="submit"
                className="w-full px-6 py-3 bg-[#C9A84C] text-[#0d0d1a] font-bold rounded tracking-wider hover:bg-[#f5d98b] transition-colors"
              >
                Войти
              </button>
            </form>
          </div>
        ) : (
          <div>
            <div className="flex justify-end mb-6">
              <button
                type="button"
                onClick={logout}
                className="px-4 py-2 border border-[#C9A84C] text-[#C9A84C] rounded text-xs uppercase tracking-wider hover:bg-[#C9A84C]/10 transition-colors"
              >
                Выйти
              </button>
            </div>
            <section className="glass-card rounded-xl p-6 border border-[#C9A84C]/30 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Новая публикация</h2>
              <p className="text-sm text-[#f0ead6]/70 mb-5">
                Создавайте публикации с фото, видео и документами. После публикации запись сразу появится в открытой
                новостной ленте на главной странице.
              </p>

              <form onSubmit={handlePublish} className="space-y-4">
                <label className="block">
                  <span className="text-sm text-[#f0ead6]/80">Заголовок</span>
                  <input
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    className="w-full mt-2 rounded border border-[#C9A84C]/40 bg-[#12162b] px-3 py-2 text-white focus:outline-none focus:border-[#C9A84C]"
                    type="text"
                    required
                  />
                </label>
                <label className="block">
                  <span className="text-sm text-[#f0ead6]/80">Краткое описание для главной страницы</span>
                  <textarea
                    value={excerpt}
                    onChange={(event) => setExcerpt(event.target.value)}
                    className="w-full mt-2 rounded border border-[#C9A84C]/40 bg-[#12162b] px-3 py-2 text-white min-h-20 focus:outline-none focus:border-[#C9A84C]"
                    required
                  />
                </label>
                <label className="block">
                  <span className="text-sm text-[#f0ead6]/80">Полный текст публикации</span>
                  <textarea
                    value={content}
                    onChange={(event) => setContent(event.target.value)}
                    className="w-full mt-2 rounded border border-[#C9A84C]/40 bg-[#12162b] px-3 py-2 text-white min-h-32 focus:outline-none focus:border-[#C9A84C]"
                    required
                  />
                </label>
                <label className="block">
                  <span className="text-sm text-[#f0ead6]/80">Прикрепить файлы (фото, видео, документы)</span>
                  <input
                    type="file"
                    multiple
                    onChange={(event) => setFiles(Array.from(event.target.files ?? []))}
                    className="w-full mt-2 rounded border border-[#C9A84C]/40 bg-[#12162b] px-3 py-2 text-sm text-white file:mr-4 file:rounded file:border-0 file:bg-[#C9A84C] file:px-3 file:py-2 file:text-xs file:font-semibold file:text-[#0d0d1a]"
                  />
                  {!!files.length && <p className="text-xs text-[#f0ead6]/60 mt-2">Выбрано файлов: {files.length}</p>}
                </label>
                {publishError && <p className="text-[#ff7a7a] text-sm">{publishError}</p>}
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#C9A84C] text-[#0d0d1a] font-bold rounded tracking-wider hover:bg-[#f5d98b] transition-colors"
                >
                  Опубликовать
                </button>
              </form>
            </section>
            <div className="space-y-6">
              {posts.map((post) => (
                <article key={post.id} className="glass-card rounded-xl p-6 border border-[#C9A84C]/20">
                  <p className="text-[#C9A84C] text-xs uppercase tracking-widest mb-2">{post.date}</p>
                  <h2 className="text-white text-2xl font-bold mb-3">{post.title}</h2>
                  <p className="text-[#f0ead6]/80 text-sm leading-relaxed">{post.content}</p>
                  {!!post.attachments?.length && (
                    <div className="mt-5 space-y-3">
                      <h3 className="text-[#C9A84C] text-xs uppercase tracking-[0.2em]">Вложения</h3>
                      <div className="grid gap-4">
                        {post.attachments.map((attachment) => {
                          const isImage = attachment.type.startsWith('image/');
                          const isVideo = attachment.type.startsWith('video/');

                          return (
                            <div key={attachment.id} className="rounded border border-[#C9A84C]/20 p-3 bg-[#0f1324]">
                              <p className="text-sm text-white mb-2 break-all">{attachment.name}</p>
                              {isImage && (
                                <img
                                  src={attachment.dataUrl}
                                  alt={attachment.name}
                                  className="w-full max-h-96 object-contain rounded"
                                />
                              )}
                              {isVideo && (
                                <video src={attachment.dataUrl} controls className="w-full rounded">
                                  Ваш браузер не поддерживает видео.
                                </video>
                              )}
                              {!isImage && !isVideo && (
                                <a
                                  href={attachment.dataUrl}
                                  download={attachment.name}
                                  className="inline-block text-sm text-[#C9A84C] underline underline-offset-4"
                                >
                                  Скачать файл
                                </a>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
