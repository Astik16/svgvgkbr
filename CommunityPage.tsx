import { FormEvent, useEffect, useMemo, useState } from 'react';

type CommunityAttachment = {
  id: string;
  name: string;
  type: string;
  dataUrl: string;
};

type CommunityUser = {
  id: string;
  fullName: string;
  nickname: string;
  email: string;
  password: string;
  createdAt: number;
};

type ChatMessage = {
  id: string;
  fromUserId: string;
  toUserId: string | null;
  text: string;
  attachments: CommunityAttachment[];
  timestamp: number;
};

const USERS_KEY = 'svgvgkbr_community_users';
const SESSION_KEY = 'svgvgkbr_community_session';
const MESSAGES_KEY = 'svgvgkbr_community_messages';

function readStorage<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

function saveStorage<T>(key: string, value: T) {
  localStorage.setItem(key, JSON.stringify(value));
}

function MessageAttachments({ attachments }: { attachments: CommunityAttachment[] }) {
  if (!attachments.length) return null;

  return (
    <div className="space-y-2 mt-2">
      {attachments.map((attachment) => {
        const isImage = attachment.type.startsWith('image/');
        const isVideo = attachment.type.startsWith('video/');

        return (
          <div key={attachment.id} className="rounded border border-[#C9A84C]/20 bg-[#0f1324] p-2">
            {isImage && <img src={attachment.dataUrl} alt={attachment.name} className="max-h-52 rounded object-contain" />}
            {isVideo && <video src={attachment.dataUrl} controls className="max-h-52 rounded" />}
            {!isImage && !isVideo && (
              <a href={attachment.dataUrl} download={attachment.name} className="text-xs text-[#C9A84C] underline underline-offset-4 break-all">
                📎 {attachment.name}
              </a>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function CommunityPage() {
  const [users, setUsers] = useState<CommunityUser[]>([]);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [sessionUserId, setSessionUserId] = useState<string | null>(null);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('register');
  const [error, setError] = useState('');

  const [registerForm, setRegisterForm] = useState({ fullName: '', nickname: '', email: '', password: '' });
  const [loginForm, setLoginForm] = useState({ login: '', password: '' });

  const [globalText, setGlobalText] = useState('');
  const [globalFiles, setGlobalFiles] = useState<File[]>([]);
  const [privateText, setPrivateText] = useState('');
  const [privateFiles, setPrivateFiles] = useState<File[]>([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<'all' | 'withMessages'>('all');
  const [activePeerId, setActivePeerId] = useState<string | null>(null);

  useEffect(() => {
    setUsers(readStorage<CommunityUser[]>(USERS_KEY, []));
    setMessages(readStorage<ChatMessage[]>(MESSAGES_KEY, []));
    setSessionUserId(readStorage<string | null>(SESSION_KEY, null));
  }, []);

  const currentUser = users.find((user) => user.id === sessionUserId) ?? null;

  const encodeFiles = async (files: File[]): Promise<CommunityAttachment[]> => {
    const encoded = await Promise.all(
      files.map(
        (file) =>
          new Promise<CommunityAttachment>((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () =>
              resolve({
                id: `${Date.now()}-${file.name}`,
                name: file.name,
                type: file.type,
                dataUrl: String(reader.result),
              });
            reader.onerror = () => reject(new Error(`Ошибка чтения файла: ${file.name}`));
            reader.readAsDataURL(file);
          })
      )
    );
    return encoded;
  };

  const register = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    const exists = users.some(
      (user) =>
        user.nickname.toLowerCase() === registerForm.nickname.trim().toLowerCase() ||
        user.email.toLowerCase() === registerForm.email.trim().toLowerCase()
    );
    if (exists) {
      setError('Пользователь с таким никнеймом или email уже существует.');
      return;
    }
    const newUser: CommunityUser = {
      id: `u-${Date.now()}`,
      fullName: registerForm.fullName.trim(),
      nickname: registerForm.nickname.trim(),
      email: registerForm.email.trim(),
      password: registerForm.password,
      createdAt: Date.now(),
    };
    const nextUsers = [...users, newUser];
    setUsers(nextUsers);
    saveStorage(USERS_KEY, nextUsers);
    setSessionUserId(newUser.id);
    saveStorage(SESSION_KEY, newUser.id);
    setRegisterForm({ fullName: '', nickname: '', email: '', password: '' });
  };

  const login = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    const found = users.find(
      (user) =>
        (user.nickname.toLowerCase() === loginForm.login.trim().toLowerCase() ||
          user.email.toLowerCase() === loginForm.login.trim().toLowerCase()) &&
        user.password === loginForm.password
    );
    if (!found) {
      setError('Неверный логин/email или пароль.');
      return;
    }
    setSessionUserId(found.id);
    saveStorage(SESSION_KEY, found.id);
  };

  const logout = () => {
    setSessionUserId(null);
    setActivePeerId(null);
    saveStorage(SESSION_KEY, null);
  };

  const allPeers = useMemo(() => users.filter((user) => user.id !== currentUser?.id), [users, currentUser?.id]);

  const filteredPeers = useMemo(() => {
    return allPeers.filter((peer) => {
      const matchesSearch =
        !search.trim() ||
        peer.fullName.toLowerCase().includes(search.toLowerCase()) ||
        peer.nickname.toLowerCase().includes(search.toLowerCase());
      if (!matchesSearch) return false;
      if (filter === 'withMessages' && currentUser) {
        return messages.some(
          (message) =>
            message.toUserId &&
            ((message.fromUserId === currentUser.id && message.toUserId === peer.id) ||
              (message.fromUserId === peer.id && message.toUserId === currentUser.id))
        );
      }
      return true;
    });
  }, [allPeers, search, filter, messages, currentUser]);

  const globalMessages = useMemo(() => messages.filter((message) => message.toUserId === null), [messages]);

  const privateMessages = useMemo(() => {
    if (!currentUser || !activePeerId) return [];
    return messages.filter(
      (message) =>
        message.toUserId &&
        ((message.fromUserId === currentUser.id && message.toUserId === activePeerId) ||
          (message.fromUserId === activePeerId && message.toUserId === currentUser.id))
    );
  }, [messages, currentUser, activePeerId]);

  const sendMessage = async (toUserId: string | null, text: string, files: File[]) => {
    if (!currentUser || (!text.trim() && !files.length)) return;
    const attachments = await encodeFiles(files);
    const newMessage: ChatMessage = {
      id: `m-${Date.now()}`,
      fromUserId: currentUser.id,
      toUserId,
      text: text.trim(),
      attachments,
      timestamp: Date.now(),
    };
    const nextMessages = [...messages, newMessage];
    setMessages(nextMessages);
    saveStorage(MESSAGES_KEY, nextMessages);
  };

  if (!currentUser) {
    return (
      <main className="min-h-screen bg-[#0d0d1a] text-[#f0ead6] py-20">
        <div className="max-w-xl mx-auto px-4">
          <a href="#" className="text-[#C9A84C] text-sm uppercase tracking-wider hover:text-[#f5d98b]">← На главную</a>
          <div className="glass-card rounded-xl p-8 border border-[#C9A84C]/30 mt-6">
            <h1 className="text-3xl font-bold text-white mb-2">Сообщество</h1>
            <p className="text-sm text-[#f0ead6]/70 mb-6">Регистрация и общение в общем и личных чатах.</p>
            <div className="flex gap-2 mb-5">
              <button type="button" onClick={() => setAuthMode('register')} className={`px-4 py-2 rounded text-sm ${authMode === 'register' ? 'bg-[#C9A84C] text-[#0d0d1a]' : 'border border-[#C9A84C]/40 text-[#C9A84C]'}`}>Регистрация</button>
              <button type="button" onClick={() => setAuthMode('login')} className={`px-4 py-2 rounded text-sm ${authMode === 'login' ? 'bg-[#C9A84C] text-[#0d0d1a]' : 'border border-[#C9A84C]/40 text-[#C9A84C]'}`}>Вход</button>
            </div>
            {authMode === 'register' ? (
              <form onSubmit={register} className="space-y-3">
                <input value={registerForm.fullName} onChange={(e) => setRegisterForm({ ...registerForm, fullName: e.target.value })} required placeholder="ФИО" className="w-full rounded border border-[#C9A84C]/40 bg-[#12162b] px-3 py-2" />
                <input value={registerForm.nickname} onChange={(e) => setRegisterForm({ ...registerForm, nickname: e.target.value })} required placeholder="Никнейм" className="w-full rounded border border-[#C9A84C]/40 bg-[#12162b] px-3 py-2" />
                <input value={registerForm.email} onChange={(e) => setRegisterForm({ ...registerForm, email: e.target.value })} required type="email" placeholder="Email" className="w-full rounded border border-[#C9A84C]/40 bg-[#12162b] px-3 py-2" />
                <input value={registerForm.password} onChange={(e) => setRegisterForm({ ...registerForm, password: e.target.value })} required type="password" placeholder="Пароль" className="w-full rounded border border-[#C9A84C]/40 bg-[#12162b] px-3 py-2" />
                {error && <p className="text-[#ff7a7a] text-sm">{error}</p>}
                <button type="submit" className="w-full px-6 py-3 bg-[#C9A84C] text-[#0d0d1a] font-bold rounded">Создать аккаунт</button>
              </form>
            ) : (
              <form onSubmit={login} className="space-y-3">
                <input value={loginForm.login} onChange={(e) => setLoginForm({ ...loginForm, login: e.target.value })} required placeholder="Никнейм или Email" className="w-full rounded border border-[#C9A84C]/40 bg-[#12162b] px-3 py-2" />
                <input value={loginForm.password} onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })} required type="password" placeholder="Пароль" className="w-full rounded border border-[#C9A84C]/40 bg-[#12162b] px-3 py-2" />
                {error && <p className="text-[#ff7a7a] text-sm">{error}</p>}
                <button type="submit" className="w-full px-6 py-3 bg-[#C9A84C] text-[#0d0d1a] font-bold rounded">Войти</button>
              </form>
            )}
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0d0d1a] text-[#f0ead6] py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-4">
          <a href="#" className="text-[#C9A84C] text-sm uppercase tracking-wider hover:text-[#f5d98b]">← На главную</a>
          <button type="button" onClick={logout} className="px-4 py-2 border border-[#C9A84C] text-[#C9A84C] rounded text-xs uppercase">Выйти</button>
        </div>

        <div className="grid lg:grid-cols-[280px_1fr_1fr] gap-4">
          <aside className="glass-card rounded-xl border border-[#C9A84C]/20 p-4">
            <h2 className="text-white font-bold mb-3">Участники</h2>
            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Поиск по имени/нику" className="w-full rounded border border-[#C9A84C]/40 bg-[#12162b] px-3 py-2 text-sm mb-2" />
            <select value={filter} onChange={(e) => setFilter(e.target.value as 'all' | 'withMessages')} className="w-full rounded border border-[#C9A84C]/40 bg-[#12162b] px-3 py-2 text-sm mb-3">
              <option value="all">Все</option>
              <option value="withMessages">С перепиской</option>
            </select>
            <div className="space-y-2 max-h-[60vh] overflow-y-auto">
              {filteredPeers.map((peer) => (
                <button key={peer.id} type="button" onClick={() => setActivePeerId(peer.id)} className={`w-full text-left rounded p-2 border ${activePeerId === peer.id ? 'border-[#C9A84C] bg-[#C9A84C]/10' : 'border-[#C9A84C]/20'}`}>
                  <p className="text-sm text-white">{peer.fullName}</p>
                  <p className="text-xs text-[#f0ead6]/60">@{peer.nickname}</p>
                </button>
              ))}
            </div>
          </aside>

          <section className="glass-card rounded-xl border border-[#C9A84C]/20 p-4">
            <h2 className="text-white font-bold mb-3">Общий чат</h2>
            <div className="space-y-3 max-h-[50vh] overflow-y-auto pr-1 mb-3">
              {globalMessages.map((message) => {
                const author = users.find((u) => u.id === message.fromUserId);
                return (
                  <div key={message.id} className="rounded border border-[#C9A84C]/15 p-3 bg-[#101428]">
                    <p className="text-xs text-[#C9A84C] mb-1">@{author?.nickname ?? 'unknown'}</p>
                    {!!message.text && <p className="text-sm text-[#f0ead6]/85 whitespace-pre-wrap">{message.text}</p>}
                    <MessageAttachments attachments={message.attachments} />
                  </div>
                );
              })}
            </div>
            <form
              onSubmit={async (event) => {
                event.preventDefault();
                await sendMessage(null, globalText, globalFiles);
                setGlobalText('');
                setGlobalFiles([]);
              }}
              className="space-y-2"
            >
              <textarea value={globalText} onChange={(e) => setGlobalText(e.target.value)} rows={2} placeholder="Сообщение в общий чат..." className="w-full rounded border border-[#C9A84C]/40 bg-[#12162b] px-3 py-2 text-sm" />
              <input type="file" multiple onChange={(e) => setGlobalFiles(Array.from(e.target.files ?? []))} className="w-full text-xs" />
              <button type="submit" className="px-4 py-2 bg-[#C9A84C] text-[#0d0d1a] font-semibold rounded text-sm">Отправить в общий чат</button>
            </form>
          </section>

          <section className="glass-card rounded-xl border border-[#C9A84C]/20 p-4">
            <h2 className="text-white font-bold mb-3">Личные сообщения</h2>
            {activePeerId ? (
              <>
                <div className="space-y-3 max-h-[50vh] overflow-y-auto pr-1 mb-3">
                  {privateMessages.map((message) => {
                    const isOwn = message.fromUserId === currentUser.id;
                    return (
                      <div key={message.id} className={`rounded border p-3 ${isOwn ? 'border-[#C9A84C]/30 bg-[#18203a]' : 'border-[#C9A84C]/15 bg-[#101428]'}`}>
                        {!!message.text && <p className="text-sm text-[#f0ead6]/85 whitespace-pre-wrap">{message.text}</p>}
                        <MessageAttachments attachments={message.attachments} />
                      </div>
                    );
                  })}
                </div>
                <form
                  onSubmit={async (event) => {
                    event.preventDefault();
                    await sendMessage(activePeerId, privateText, privateFiles);
                    setPrivateText('');
                    setPrivateFiles([]);
                  }}
                  className="space-y-2"
                >
                  <textarea value={privateText} onChange={(e) => setPrivateText(e.target.value)} rows={2} placeholder="Личное сообщение..." className="w-full rounded border border-[#C9A84C]/40 bg-[#12162b] px-3 py-2 text-sm" />
                  <input type="file" multiple onChange={(e) => setPrivateFiles(Array.from(e.target.files ?? []))} className="w-full text-xs" />
                  <button type="submit" className="px-4 py-2 bg-[#C9A84C] text-[#0d0d1a] font-semibold rounded text-sm">Отправить лично</button>
                </form>
              </>
            ) : (
              <p className="text-sm text-[#f0ead6]/60">Выберите собеседника слева для личной переписки.</p>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
