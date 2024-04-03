export const navigationData = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About',
    href: null,
    subItems: [
      {
        label: '소개',
        href: '/About/introduction',
      },
      {
        label: '문화',
        href: '/About/culture',
      },
    ],
  },
  {
    label: 'NEWS',
    href: null,
    subItems: [
      {
        label: 'News1',
        href: '/news/news1',
      },
      {
        label: 'News2',
        href: '/news/news2',
      },
      {
        label: 'News3',
        href: '/news/news3',
      },
    ],
  },
  {
    label: 'Contact Us',
    href: '/contact',
  },
];

export type NavigationItem = typeof navigationData;
