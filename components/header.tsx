import React, { useState } from 'react'
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
  const [open, setOpen] = useState(false)

  return (
    <header className="container mx-auto md:px-8 px-4 max-w-[1000px]">
      <div className="flex justify-between">
        <button
          className="flex md:hidden flex-col justify-center"
          onClick={() => setOpen((prevState) => !prevState)}
        >
          <div className="bg-black h-1 w-6" />
          <div className="bg-black h-1 w-6 mt-1" />
          <div className="bg-black h-1 w-6 mt-1" />
        </button>
        <h1 className="text-2xl font-semibold py-3">Wojciech Fiszer</h1>
        <nav className="hidden sm:flex items-center">
          <ul className="flex">
            {links.map(({ text, href }) => (
              <li key={text}>
                <Link href={href}>
                  <a className="flex py-2 px-4 rounded-full hover:bg-gray-100 hover:text-gray-800">
                    {text}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {open && (
        <nav className="md:hidden">
          <ul>
            {links.map(({ text, href }) => (
              <li key={text}>
                <Link href={href}>
                  <a className="flex w-full py-2 px-4 rounded-full hover:bg-gray-100 hover:text-gray-800">
                    {text}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
