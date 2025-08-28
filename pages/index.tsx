import Head from 'next/head'
import Header from '../src/components/Header'
import Hero from '../src/components/Hero'
import InstantSell from '../src/components/InstantSell'
import Categories from '../src/components/Categories'
import LiveListings from '../src/components/LiveListings'
import Roadmap from '../src/components/Roadmap'
import Footer from '../src/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>GatorEx - UF Student Marketplace</title>
        <meta name="description" content="The trusted marketplace connecting UF students for furniture, textbooks, electronics, bikes, and subletting opportunities." />
        <link rel="canonical" href="https://gatorex.com" />
      </Head>
      <div className="min-h-screen bg-white">
        <Header />
        <Hero />
        <InstantSell />
        <Categories />
        <LiveListings />
        <Roadmap />
        <Footer />
      </div>
    </>
  )
}