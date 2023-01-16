import React from 'react'
import Footer from './footer'
import Header from './header'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-neutral-900">
      <Header />
      <main className="flex-grow w-full max-w-2xl mx-auto">{children}</main>
      <Footer />
    </div>
  )
}
