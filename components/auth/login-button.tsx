'use client'

import { signIn } from 'next-auth/react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '~/components/ui/dialog'
import { Button } from '../ui/button'

export default function LoginButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Login</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Guest login</DialogTitle>
          <DialogDescription>Login using the following OAuth</DialogDescription>
        </DialogHeader>
        <div className="space-x-4">
          <Button onClick={() => signIn('github')}>Github</Button>
          <Button
            onClick={() => {
              signIn('google')
            }}
          >
            Google
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
