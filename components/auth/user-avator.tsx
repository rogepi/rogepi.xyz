'use client'

import { User } from 'lucide-react'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu'

export default function UserAvator() {
  const { data: session } = useSession()

  const username = session?.user?.name as string
  const userImage = session?.user?.image

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="cursor-pointer" asChild>
        {userImage ? (
          <Image
            className="rounded-full"
            src={userImage as string}
            alt={username}
            width={35}
            height={35}
          />
        ) : (
          <User size={35} />
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>{username}</DropdownMenuItem>
        <DropdownMenuItem onClick={() => signOut()}>退出登录</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
