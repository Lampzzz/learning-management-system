interface SidebarLink {
  label: string;
  path: string;
  icon: string;
}

export const SIDEBAR_LINKS: SidebarLink[] = [
  {
    label: 'Dashboard',
    path: '/',
    icon: 'grid',
  },
  {
    label: 'Users',
    path: '/users',
    icon: 'people',
  },
  {
    label: 'Courses',
    path: '/courses',
    icon: 'book',
  },
];
