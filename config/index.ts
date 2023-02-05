import { NavItem } from '~/lib/types'

export const navItems: NavItem[] = [
  { title: 'home', href: '/' },
  { title: 'blog', href: '/blog' },
  { title: 'guestbook', href: '/guestbook' },
  { title: 'rosite', href: '/rosite' },
]

export const dashNavItems: NavItem[] = [
  { title: 'dashboard', href: '/dashboard' },
  { title: 'post', href: '/dashboard/post' },
  { title: 'guestbook', href: '/dashboard/guestbook' },
  { title: 'home', href: '/' },
]
