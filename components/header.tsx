import React from 'react'
import Link from 'next/link'

type Props = {}

const links: {
  text: string
  href: string
}[] = [
  { text: 'Home', href: '#home' },
  { text: 'About', href: '#about' },
  { text: 'Experience', href: '#experience' },
  { text: 'Skills', href: '#skills' },
  { text: 'Contact', href: '#contact' },
]

export default function Header({}: Props): JSX.Element {
  return (
    <header className="bg-neutral-900 h-32 text-white">
      <div className="container mx-auto flex justify-between items-center h-full">
        <h1 className="text-2xl font-mono font-semibold">
          <span className="text-orange-500">&lt;</span>
          Wojciech Fiszer
          <span className="text-orange-500">/&gt;</span>
        </h1>
        <nav className="hidden sm:flex items-center">
          <ul className="flex items-center gap-20">
            {links.map(({ text, href }) => (
              <li key={text}>
                <Link href={href}>
                  <a className="flex uppercase font-semibold transition duration-150 border-b-4 border-transparent hover:border-orange-500">
                    {text}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
