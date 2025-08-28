import Head from 'next/head'
import Header from '../src/components/Header'
import Hero from '../src/components/Hero'
import InstantSell from '../src/components/InstantSell'
import Categories from '../src/components/Categories'
import HowItWorks from '../src/components/HowItWorks'
import LiveListings from '../src/components/LiveListings'
import TrustSafety from '../src/components/TrustSafety'
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
        <HowItWorks />
        <LiveListings />
        <TrustSafety />
        <Footer />
      </div>
    </>
  )
}