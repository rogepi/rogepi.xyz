import { Inter } from '@next/font/google'
import Provider from '../components/providers'
import Analytics from '~/components/analytics'

import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  // default, can also use "swap" to ensure custom font always shows
  display: 'optional',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.className}>
      <head />
      <body className="min-h-screen bg-white font-sans text-zinc-900 antialiased dark:bg-zinc-900 dark:text-zinc-50">
        <Provider>{children}</Provider>
        <Analytics />
      </body>
    </html>
  )
}
