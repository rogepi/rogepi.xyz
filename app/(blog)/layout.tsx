import SiteHeader from '~/components/site-header'
import { navItems } from '~/config'

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <SiteHeader items={navItems} />
      <main className="container">{children}</main>
    </div>
  )
}
