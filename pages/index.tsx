import Head from 'next/head'
import Header from '../src/components/Header'
import Hero from '../src/components/Hero'
import InstantSell from '../src/components/InstantSell'
import Categories from '../src/components/Categories'
import LiveListings from '../src/components/LiveListings'
import Testimonials from '../src/components/Testimonials'
import BlogSection from '../src/components/BlogSection'
import Roadmap from '../src/components/Roadmap'
import Footer from '../src/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>GatorEx Shop – Student Marketplace for Students | Buy & Sell Furniture, Electronics & Books</title>
        <meta name="description" content="GatorEx Shop is the official student marketplace for UF students. Buy and sell furniture, electronics, textbooks, bikes, and more. Safe, verified, and trusted by 250+ students." />
        <meta name="keywords" content="student marketplace, UF students, buy sell furniture, electronics, textbooks, bikes, GatorEx shop, student commerce" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="GatorEx Shop – Student Marketplace for Students" />
        <meta property="og:description" content="The official student marketplace for UF students. Buy and sell furniture, electronics, textbooks, and more safely." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gatorex.shop" />
        <meta property="og:image" content="https://gatorex.shop/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="GatorEx Shop – Student Marketplace for Students" />
        <meta name="twitter:description" content="The official student marketplace for UF students. Buy and sell furniture, electronics, textbooks, and more safely." />
        <link rel="canonical" href="https://gatorex.shop" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "GatorEx Shop",
              "alternateName": "GatorEx Student Marketplace",
              "url": "https://gatorex.shop",
              "logo": "https://gatorex.shop/logo.png",
              "description": "Official student marketplace for UF students to buy and sell furniture, electronics, textbooks, bikes, and more.",
              "foundingDate": "2024",
              "founder": {
                "@type": "Person",
                "name": "GatorEx Team"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Gainesville",
                "addressRegion": "FL",
                "addressCountry": "US"
              },
              "sameAs": [
                "https://gatorex.app"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "support@gatorex.shop"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is GatorEx Shop?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "GatorEx Shop is the official student marketplace for UF students to buy and sell furniture, electronics, textbooks, bikes, and other items safely within the campus community."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How do I verify my UF student status?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can verify your UF student status by signing up with your @ufl.edu email address. This ensures all users are verified UF students."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is GatorEx Shop safe for students?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, GatorEx Shop prioritizes student safety with UF email verification, secure messaging, and campus meetup locations for transactions."
                  }
                }
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://gatorex.shop"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Student Marketplace",
                  "item": "https://gatorex.shop"
                }
              ]
            })
          }}
        />
      </Head>
      <div className="min-h-screen bg-white">
        <Header />
        <Hero />
        <InstantSell />
        <Categories />
        <LiveListings />
        <Testimonials />
        <BlogSection />
        <Roadmap />
        <Footer />
      </div>
    </>
  )
}