import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="flex items-center gap-1 sm:gap-3">
      <Link href="/posts" className="link">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          className="w-5 h-5"
          viewBox="0 0 24 22"
        >
          <g
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <rect width="14" height="18" x="5" y="3" rx="2" />
            <path d="M9 7h6m-6 4h6m-6 4h4" />
          </g>
        </svg>
        <span className="hidden sm:inline-block">文章</span>
      </Link>
      <Link href="/guestbook" className="link">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          viewBox="0 0 24 22"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 21V8a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H8l-4 4M8 9h8m-8 4h6"
          />
        </svg>
        <span className="hidden sm:inline-block">留言板</span>
      </Link>
      <button type="button" className="link">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          viewBox="0 0 24 22"
        >
          <g
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <path d="M14 8V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-2" />
            <path d="M20 12H7l3-3m0 6l-3-3" />
          </g>
        </svg>
        <span className="hidden sm:inline-block">登录</span>
      </button>
    </nav>
  )
}
