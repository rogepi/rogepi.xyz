'use client'

import { User } from 'lucide-react'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

export default function UserAvator() {
  const { data: session } = useSession()

  const username = session?.user?.name as string
  const email = session?.user?.email
  const avator = session?.user?.image

  // DIY options
  const isMe =
    username === process.env.PERSON_USERNAME &&
    email === process.env.PERSON_EMAIL

  console.log(process.env.PERSON_USERNAME)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="cursor-pointer" asChild>
        <Avatar>
          <AvatarImage src={avator as string} alt={`@${username}`} />
          <AvatarFallback>{username.slice(0, 2)}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>{username}</DropdownMenuItem>
        {isMe ? (
          <Link href="/dashboard">
            <DropdownMenuItem>dashboard</DropdownMenuItem>
          </Link>
        ) : null}
        <DropdownMenuItem onClick={() => signOut()}>log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
