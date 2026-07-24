import { Head, Html, Main, NextScript } from 'next/document';

const siteTitle = 'Jorge García — Staff Software Engineer';
const siteDescription =
  'I’ve been building software for over 12 years, with a focus on backend platforms and distributed systems since 2021.';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="title" content={siteTitle} />
        <meta name="description" content={siteDescription} />
        <meta
          name="keywords"
          content="Staff Software Engineer, Distributed Systems, Event-Driven Systems, Third-Party Integrations, Go, TypeScript, GCP"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:url" content="https://jorgemgr.com/" />
        <meta
          property="og:image"
          content="https://jorgemgr.com/assets/images/me.webp"
        />
        <meta property="og:description" content={siteDescription} />

        {/* X (Twitter) */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://jorgemgr.com/" />
        <meta property="twitter:title" content={siteTitle} />
        <meta property="twitter:description" content={siteDescription} />
        <meta
          name="twitter:image"
          content="https://jorgemgr.com/assets/images/me.webp"
        />

        {/* Canonical */}
        <link rel="canonical" href="https://jorgemgr.com/" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
