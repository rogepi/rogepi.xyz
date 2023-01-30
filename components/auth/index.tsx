'use client'

import { useSession } from 'next-auth/react'
import LoginButton from './login-button'
import UserAvator from './user-avator'

export default function Auth() {
  const { data: session } = useSession()

  return (
    <div className="flex w-16 justify-center">
      {session?.user ? <UserAvator /> : <LoginButton />}
    </div>
  )
}
