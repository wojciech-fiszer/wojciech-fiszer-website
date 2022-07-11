import React from 'react'

type Props = {}

export default function Header({}: Props): JSX.Element {
  return (
    <header className="container mx-auto px-4">
      <h1 className="text-2xl font-semibold py-3">Wojciech Fiszer</h1>
    </header>
  )
}
