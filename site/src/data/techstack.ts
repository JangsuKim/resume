// src/data/tech.ts
export type Size = 'xl' | 'lg' | 'md' | 'sm'
export type TechItem = { name: string; icon: string; size?: Size; note?: string }
export type TechGroup = { title: string; items: TechItem[]; defaultSize?: Size }

export const techGroups = [
  {
    title: 'Backend',
    items: [
      { name: 'Java',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg', size: 'xl', note: '5年以上' },
      { name: 'Spring', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg', size: 'xl', note: '5年以上' },
      { name: 'PHP',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg', size: 'md', note: '1年以上' },
      { name: 'Laravel',icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg', size: 'md', note: '1年以上' },
    ],
  },
  {
    title: 'Frontend',
    items: [
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', size: 'lg', note: '3年以上' },
      { name: 'jQuery',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg',         size: 'lg', note: '3年以上' },
      { name: 'Vue 3',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg',           size: 'md', note: '1年以上' },
      { name: 'HTML5',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',           size: 'md', note: '1年以上' },
      { name: 'CSS3',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',             size: 'md', note: '1年以上' },
    ],
  },
  {
    title: 'Database',
    items: [
      { name: 'MySQL',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',           size: 'lg', note: '3年以上' },
      { name: 'Oracle',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg',         size: 'lg', note: '1年程度' },
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg', size: 'md', note: '1年程度' },
      { name: 'Redis',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg',           size: 'md', note: '半年程度' },
    ],
  },
  {
    title: 'Tools / Cloud',
    defaultSize: 'sm',
    items: [
      { name: 'Git',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg', note: '4年以上'  },
      { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg', note: '4年以上'  },
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg', note: '5年以上'  },
      { name: 'Linux',  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg', note: '7年以上'  },
      { name: 'AWS',    icon: 'https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png', note: '2年以上'  },
    ],
  },
] satisfies TechGroup[]
