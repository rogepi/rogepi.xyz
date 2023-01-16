import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-4">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-4" />
      <span className="text-gray-500 mx-auto text-xs sm:text-sm flex flex-col sm:flex-row justify-center items-center">
        <span className="mx-2">© 2023 - Rogepi Blog</span>
        <span className="flex items-center">
          Powered by&nbsp;
          <Link
            className="hover:text-gray-600 underline"
            href="https://nextjs.org/"
            target="_blank"
          >
            Next.js
          </Link>
          &nbsp;&&nbsp;
          <Link
            className="hover:text-gray-600 underline"
            href="https://vercel.com/"
            target="_blank"
          >
            Vercel
          </Link>
        </span>
      </span>
    </footer>
  )
}

export default Footer
