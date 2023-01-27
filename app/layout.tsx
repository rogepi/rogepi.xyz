import localFont from '@next/font/local'
import { VercelAnalytics } from '~/components/analytics'
import SiteHeader from '~/components/site-header'
import { cn } from '~/lib/utils'
import Provider from '../components/providers'
import './globals.css'

const font = localFont({
  src: '../public/font/NotoSansSC-Medium.otf',
  display: 'optional',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-Hans" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'min-h-screen bg-white font-sans text-zinc-900 antialiased dark:bg-zinc-900 dark:text-zinc-50',
          font.className
        )}
      >
        <Provider>
          <SiteHeader />
          {children}
        </Provider>
        <VercelAnalytics />
      </body>
    </html>
  )
}
