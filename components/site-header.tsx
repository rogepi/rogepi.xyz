import MainNav from './main-nav'
import ModeToggle from './mode-toggle'
import Auth from './auth'
import { navItems } from '~/config'

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full bg-white  px-3  dark:border-b-zinc-700 dark:bg-zinc-900">
      <div className="mx-auto flex h-16 max-w-[800px] items-center justify-between space-x-4 sm:space-x-0">
        <MainNav items={navItems} />
        <div className="flex items-center space-x-4">
          <ModeToggle />
          <Auth />
        </div>
      </div>
    </header>
  )
}
