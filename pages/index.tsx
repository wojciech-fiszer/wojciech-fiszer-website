import type { NextPage } from 'next'
import Layout from '../components/layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <main className="container">
        <h1>Hello! I&apos;m Wojciech Fiszer</h1>
        <p>I&apos;m a software engineer based in Warsaw, Poland.</p>
      </main>
    </Layout>
  )
}

export default Home
