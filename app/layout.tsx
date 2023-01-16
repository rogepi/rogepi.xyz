import localFont from '@next/font/local'
import Layout from '@/components/layout'
import Provider from './providers'
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
    <html lang="zh-Hans">
      <body className={font.className}>
        <Provider>
          <Layout>{children}</Layout>
        </Provider>
      </body>
    </html>
  )
}
