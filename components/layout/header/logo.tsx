'use client'

import Link from 'next/link'
import Image from 'next/image'
import Rogepi from '../../../public/icons/rogepi.webp'
import RogepiDark from '../../../public/icons/rogepi-dark.webp'
import { useTheme } from 'next-themes'

export default function Logo() {
  const { resolvedTheme } = useTheme()
  const logoSrc = resolvedTheme === 'dark' ? RogepiDark : Rogepi

  return (
    <Link href="/">
      <Image src={logoSrc} alt="rogepi" width={120} priority />
    </Link>
  )
}
