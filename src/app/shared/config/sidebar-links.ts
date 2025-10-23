interface SidebarLink {
  label: string;
  path: string;
  icon: string;
}

export const SIDEBAR_LINKS: SidebarLink[] = [
  {
    label: 'Dashboard',
    path: '/',
    icon: '',
  },
  {
    label: 'Users',
    path: '/users',
    icon: '',
  },
  {
    label: 'Courses',
    path: '/courses',
    icon: '',
  },
];
