'use client'

import Link from 'next/link'
import { usePathname, useSelectedLayoutSegment } from 'next/navigation'
import { NavItem } from '~/lib/types'
import { cn } from '~/lib/utils'
import Logo from './logo'
import { Button } from './ui/button'

export default function MainNav({ items }: { items: NavItem[] }) {
  const path = usePathname()

  return (
    <div className="flex gap-6 md:gap-10">
      <Logo />
      <div className="hidden gap-6 sm:flex md:gap-10">
        {items?.map((item) => {
          return (
            <Link
              key={item.title}
              href={item.href}
              className={cn(
                'flex items-center rounded-md bg-transparent py-1 px-2 font-semibold text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800',
                item.href === path && 'text-zinc-900 dark:text-zinc-50'
              )}
            >
              {item.title}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
