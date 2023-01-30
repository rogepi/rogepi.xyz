import { Noto_Sans_SC } from '@next/font/google'
import SiteHeader from '~/components/site-header'
import Provider from '../components/providers'
import Analytics from '~/components/analytics'
import './globals.css'

const noto_sans_sc = Noto_Sans_SC({
  weight: '500',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="zh-Hans"
      suppressHydrationWarning
      className={noto_sans_sc.className}
    >
      <head />
      <body className="min-h-screen bg-white font-sans text-zinc-900 antialiased dark:bg-zinc-900 dark:text-zinc-50">
        <Provider>
          <SiteHeader />
          {children}
        </Provider>
        <Analytics />
      </body>
    </html>
  )
}
