export interface NavItem {
  title: string;
  route: string;
}

export const NavList: NavItem[] = [
  {
    title: 'Drag and Drop',
    route: 'drag-drop',
  },
  {
    title: 'DD Between List',
    route: 'drag-drop-list',
  },
  {
    title: 'Country Code',
    route: 'country-code',
  },
];
