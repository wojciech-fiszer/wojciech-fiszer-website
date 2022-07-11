import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Wojciech Fiszer</title>
        <meta name="description" content="My personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Hello! I&apos;m Wojciech Fiszer</h1>
        <p>I&apos;m a software engineer based in Warsaw, Poland.</p>
      </main>

      <footer>By Wojciech Fiszer, 2022</footer>
    </div>
  )
}

export default Home
