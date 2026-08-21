'use client'

import { Button } from '@/components/ui/button'
import { Show, SignInButton, UserButton } from '@clerk/nextjs'
import { UserCircleIcon } from 'lucide-react'

export function AuthButton() {
  return (
    <>
      <Show when="signed-in">
        <UserButton />
      </Show>
      <Show when="signed-out">
        <SignInButton mode="modal">
          <Button
            variant="outline"
            className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-500 border-blue-500/2 rounded-full shadow-none">
            <UserCircleIcon />
            Sign in
          </Button>
        </SignInButton>
      </Show>
    </>
  )
}
