import React from 'react'
import Link from 'next/link'

type Props = {}

const links: {
  text: string
  href: string
}[] = [
  { text: 'About', href: '#about' },
  { text: 'Stack', href: '#stack' },
  { text: 'Experience', href: '#work-experience' },
  { text: 'Contact', href: '#contact' },
]

export default function Header({}: Props): JSX.Element {
  return (
    <header className="container mx-auto md:px-8 px-4 max-w-[1000px] flex justify-between">
      <h1 className="text-2xl font-semibold py-3">Wojciech Fiszer</h1>
      <nav className="flex items-center">
        <ul className="flex h-full items-center">
          {links.map(({ text, href }) => (
            <li key={text} className="flex h-full items-center">
              <Link href={href}>
                <a className="flex items-center py-2 px-4 rounded-full hover:bg-gray-100 hover:text-gray-800">
                  {text}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
