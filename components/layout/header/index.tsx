import ThemeSwitch from './themeSwitch'
import Logo from './logo'
import Nav from './nav'

export default function Header() {
  return (
    <header className="container">
      <div className="flex h-16 py-4 justify-between items-center">
        <Logo />
        <div className="flex gap-1 sm:gap-3">
          <Nav />
          <ThemeSwitch />
        </div>
      </div>
    </header>
  )
}
