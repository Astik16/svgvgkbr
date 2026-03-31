export interface BlogAttachment {
  id: string;
  name: string;
  type: string;
  size: number;
  dataUrl: string;
}

export interface BlogPost {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  attachments?: BlogAttachment[];
}

const STORAGE_KEY = 'svgvgkbr_blog_posts';

const defaultBlogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Урок мужества в школе №12 Нальчика',
    date: '25 марта 2026',
    excerpt:
      'Ветераны организации провели встречу со старшеклассниками, рассказали о службе в ГСВГ и ответили на вопросы ребят.',
    content:
      'В рамках программы патриотического воспитания состоялся урок мужества. Особое внимание было уделено исторической роли Группы войск в Германии и личным воспоминаниям ветеранов.',
  },
  {
    id: 2,
    title: 'Подготовка к мероприятиям ко Дню Победы',
    date: '18 марта 2026',
    excerpt:
      'Началась организационная работа по участию ветеранов в памятных мероприятиях и возложении цветов в Нальчике.',
    content:
      'Совет организации утвердил план участия в республиканских мероприятиях, распределил ответственных и согласовал список приглашённых ветеранов и молодёжных объединений.',
  },
  {
    id: 3,
    title: 'Пополнение архива фотографий Союза ветеранов',
    date: '10 марта 2026',
    excerpt:
      'В архив добавлены новые фото и документы, отражающие историю службы ветеранов из Кабардино-Балкарии.',
    content:
      'Материалы переданы семьями ветеранов и членами организации. Архив будет использован для выставок, школьных проектов и публикаций на сайте.',
  },
];

function parseStoredPosts(value: string | null): BlogPost[] | null {
  if (!value) {
    return null;
  }

  try {
    const parsedValue: unknown = JSON.parse(value);

    if (!Array.isArray(parsedValue)) {
      return null;
    }

    return parsedValue as BlogPost[];
  } catch {
    return null;
  }
}

export function loadBlogPosts(): BlogPost[] {
  const storedPosts = parseStoredPosts(localStorage.getItem(STORAGE_KEY));

  if (storedPosts && storedPosts.length > 0) {
    return storedPosts;
  }

  return defaultBlogPosts;
}

export function saveBlogPosts(posts: BlogPost[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
}

export const blogPosts = defaultBlogPosts;
