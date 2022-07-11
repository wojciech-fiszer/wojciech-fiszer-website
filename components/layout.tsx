import React from 'react'
import Head from 'next/head'
import Header from './header'
import Footer from './footer'

type Props = {
  children: JSX.Element
}

export default function Layout({ children }: Props): JSX.Element {
  return (
    <>
      <Head>
        <title>Wojciech Fiszer</title>
        <meta name="description" content="My personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  )
}
