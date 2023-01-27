import MainNav from './main-nav'
import { ModeToggle } from './mode-toggle'
import { Button } from './ui/button'
import { navItems } from '~/config'

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-b-zinc-200 bg-white  dark:border-b-zinc-700 dark:bg-zinc-900">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={navItems} />
        <div className="flex items-center space-x-4">
          <ModeToggle />
          <Button>登录</Button>
        </div>
      </div>
    </header>
  )
}
