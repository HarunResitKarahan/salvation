import { Button } from '@ui5/webcomponents-react'
import { signOut } from 'next-auth/react'
import React from 'react'

export default function SignOutButton() {
  return (
    <Button design="Transparent" autoFocus={false} icon="log" onClick={(e) => signOut()}>Oturumu Kapat</Button>
  )
}
