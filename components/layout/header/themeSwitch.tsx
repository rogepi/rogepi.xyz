'use client'

import { useTheme } from 'next-themes'
import { useMounted } from '@/lib/hooks/use-mounted'

const ThemeSwitch = () => {
  const mounted = useMounted()
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <>
      {mounted && (
        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className="link"
          onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 22"
            fill="none"
            stroke="currentColor"
            className="w-5 h-5"
          >
            {resolvedTheme === 'dark' ? (
              <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M3 12h1m8-9v1m8 8h1m-9 8v1M5.6 5.6l.7.7m12.1-.7l-.7.7m0 11.4l.7.7m-12.1-.7l-.7.7" />
              </g>
            ) : (
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 3h.393a7.5 7.5 0 0 0 7.92 12.446A9 9 0 1 1 12 2.992z"
              />
            )}
          </svg>
          <span className="hidden sm:inline-block">
            {resolvedTheme === 'dark' ? '开灯' : '关灯'}
          </span>
        </button>
      )}
    </>
  )
}

export default ThemeSwitch
