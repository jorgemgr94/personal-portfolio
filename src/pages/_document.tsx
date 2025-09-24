import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="title" content="Jorge García - Software Engineer" />
        <meta
          name="description"
          content="Passionate software engineer with over 11 years of experience architecting and delivering scalable solutions across diverse industries. Expert in backend development with a strong foundation in distributed systems, cloud-native architectures, and modern DevOps practices. Proven track record of leading technical initiatives and mentoring teams while maintaining high code quality standards and fostering collaborative environments."
        />
        <meta
          name="keywords"
          content="Software Engineer, Web Development, React, Node.js, Typescript"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Jorge García - Software Engineer" />
        <meta property="og:url" content="https://jorgemgr.com/" />
        <meta
          property="og:image"
          content="https://jorgemgr.com/assets/images/me.jpg"
        />
        <meta
          property="og:description"
          content="Passionate software engineer with over 11 years of experience architecting and delivering scalable solutions across diverse industries. Expert in backend development with a strong foundation in distributed systems, cloud-native architectures, and modern DevOps practices. Proven track record of leading technical initiatives and mentoring teams while maintaining high code quality standards and fostering collaborative environments."
        />

        {/* X (Twitter) */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta
          property="twitter:title"
          content="Jorge García - Software Engineer"
        />
        <meta
          property="twitter:description"
          content="Passionate software engineer with over 11 years of experience architecting and delivering scalable solutions across diverse industries. Expert in backend development with a strong foundation in distributed systems, cloud-native architectures, and modern DevOps practices. Proven track record of leading technical initiatives and mentoring teams while maintaining high code quality standards and fostering collaborative environments."
        />
        <meta
          name="twitter:image"
          content="https://jorgemgr.com/assets/images/me.jpg"
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
