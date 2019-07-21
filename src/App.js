import React from 'react'
import { UserProvider } from './Context'

function App() {
  const user = { name: 'Tania', loggedIn: true }

  return (
    <UserProvider value={user}>
      <HomePage />
    </UserProvider>
  )
}