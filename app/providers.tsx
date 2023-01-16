'use client'

import { ThemeProvider } from 'next-themes'
import { useMounted } from '@/lib/hooks/use-mounted'

export default function Provider({ children }: { children: React.ReactNode }) {
  const mounted = useMounted()

  return (
    <>
      {mounted && <ThemeProvider attribute="class">{children}</ThemeProvider>}
    </>
  )
}
