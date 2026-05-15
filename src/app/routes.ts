import type { NavItem } from '../components/layout';

export const navItems: NavItem[] = [
  { path: '/', label: 'Control Room', short: 'Room' },
  { path: '/queue', label: 'Render Queue', short: 'Queue' },
  { path: '/studio', label: 'Prompt Studio', short: 'Studio' },
  { path: '/providers', label: 'Providers', short: 'Prov' },
  { path: '/costs', label: 'Costs', short: 'Cost' },
  { path: '/moderation', label: 'Moderation', short: 'Review' },
  { path: '/calendar', label: 'Calendar', short: 'Cal' },
  { path: '/settings', label: 'Settings', short: 'Rules' },
];
