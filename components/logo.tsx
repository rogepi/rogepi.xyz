import Image from 'next/image'
import Link from 'next/link'

import imgSrc from '../public/images/ashe.png'

export default function Logo() {
  return (
    <Link className="flex items-center justify-center" href="/">
      <Image src={imgSrc} alt="rogepi" width={30} height={30} />
    </Link>
  )
}
