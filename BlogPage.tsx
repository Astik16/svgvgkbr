import { FormEvent, useEffect, useState } from 'react';
import { blogPosts } from './blogData';

const BLOG_LOGIN = 'svgvgkbrartur';
const BLOG_PASSWORD = '5.Atmrsri';
const AUTH_KEY = 'svgvgkbr_blog_auth';

export default function BlogPage() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    setAuthorized(localStorage.getItem(AUTH_KEY) === 'true');
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
            <div className="space-y-6">
              {blogPosts.map((post) => (
                <article key={post.id} className="glass-card rounded-xl p-6 border border-[#C9A84C]/20">
                  <p className="text-[#C9A84C] text-xs uppercase tracking-widest mb-2">{post.date}</p>
                  <h2 className="text-white text-2xl font-bold mb-3">{post.title}</h2>
                  <p className="text-[#f0ead6]/80 text-sm leading-relaxed">{post.content}</p>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
