import SiteHeader from '~/components/site-header'
import { dashNavItems } from '~/config'

export default function DashBoardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <SiteHeader items={dashNavItems} />
      <main className="container">{children}</main>
    </div>
  )
}
