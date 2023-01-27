import localFont from '@next/font/local'
import Link from 'next/link'

const font = localFont({
  src: '../public/font/GuanZhi-8px.ttf',
  display: 'optional',
})

export default function Logo() {
  return (
    <Link className="flex items-center justify-center" href="/">
      <span className="text-3xl 2xl:text-4xl" style={font.style}>
        rogepi
      </span>
    </Link>
  )
}
