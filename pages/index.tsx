import type { NextPage } from 'next'
import Layout from '../components/layout'
import HomeSection from '../components/home-section'

const Home: NextPage = () => {
  return (
    <Layout>
      <main className="flex-1">
        <HomeSection />
      </main>
    </Layout>
  )
}

export default Home
