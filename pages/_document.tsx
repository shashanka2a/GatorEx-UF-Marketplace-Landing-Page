import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
        <link rel="icon" type="image/png" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="description" content="GatorEx - The trusted marketplace connecting UF students for furniture, textbooks, electronics, bikes, and subletting opportunities." />
        <meta name="keywords" content="UF, University of Florida, marketplace, students, furniture, textbooks, electronics, bikes, sublets" />
        <meta name="author" content="GatorEx" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="GatorEx - UF Student Marketplace" />
        <meta property="og:description" content="The trusted marketplace connecting UF students for furniture, textbooks, electronics, bikes, and subletting opportunities." />
        <meta property="og:image" content="/og-image.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="GatorEx - UF Student Marketplace" />
        <meta property="twitter:description" content="The trusted marketplace connecting UF students for furniture, textbooks, electronics, bikes, and subletting opportunities." />
        <meta property="twitter:image" content="/og-image.jpg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}