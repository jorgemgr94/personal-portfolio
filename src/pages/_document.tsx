import { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<meta
					name="description"
					content={'Software Engineer with +9 years of experience.'}
				/>
				<meta
					name="keywords"
					content={
						'Software Engineer, Web Development, React, Node.js, Typescript'
					}
				/>
				<meta property="og:title" content={'Jorge García'} />
				<meta
					property="og:description"
					content={'Software Engineer with +9 years of experience.'}
				/>
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://jorgemgr.com/" />
				<meta
					property="og:image"
					content="https://jorgemgr.com/assets/images/me.jpg"
				/>
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content={'Jorge García'} />
				<meta
					name="twitter:description"
					content={'Software Engineer with +9 years of experience.'}
				/>
				<meta
					name="twitter:image"
					content="https://jorgemgr.com/assets/images/twitter-image.JPG"
				/>
				<link rel="canonical" href="https://jorgemgr.com/" />
			</Head>
			<Script
				strategy="afterInteractive"
				src="https://www.googletagmanager.com/gtag/js?id=G-3Y01LBTFYF"
			/>
			<Script
				id="google-analytics"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-3Y01LBTFYF');`
				}}
			/>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
