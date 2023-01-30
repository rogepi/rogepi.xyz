'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { NavItem } from '~/lib/types'
import { cn } from '~/lib/utils'
import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu'
import { ChevronDown, Menu } from 'lucide-react'
import { navItems } from '~/config'

export default function MainNav({ items }: { items: NavItem[] }) {
  const path = usePathname()
  const router = useRouter()

  const mobileNavTitle =
    navItems.find((item) => item.href === path)?.title || '首页'

  const navTo = (href: string) => {
    router.push(href)
  }

  return (
    <div className="flex items-center gap-6 md:gap-10">
      <div className="hidden gap-6 sm:flex md:gap-10">
        {items?.map((item) => {
          return (
            <Link
              key={item.title}
              href={item.href}
              className={cn(
                'flex items-center rounded-md bg-transparent py-2 px-3 font-semibold text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800',
                item.href === path && 'text-zinc-900 dark:text-zinc-50'
              )}
            >
              {item.title}
            </Link>
          )
        })}
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger
          className="flex items-center justify-center sm:hidden"
          asChild
        >
          <Button variant="ghost" size="sm">
            <Menu size="20" />
            {/* <span className="ml-2 text-base font-semibold">
              {mobileNavTitle}
            </span> */}
            {/* <ChevronDown size="20" /> */}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          {items.map((item) => {
            return (
              <DropdownMenuItem
                key={item.title}
                onClick={() => {
                  navTo(item.href)
                }}
              >
                {item.title}
              </DropdownMenuItem>
            )
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
