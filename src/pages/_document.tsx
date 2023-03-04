import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<meta
					name="description"
					content={'+9 years of experience working as Software Engineer.'}
				/>
				<meta
					name="keywords"
					content={
						'Software Engineer, Web Development, React, Node.js, Typescript'
					}
				/>
				<meta
					property="og:title"
					content={'Jorge García - Software Engineer'}
				/>
				<meta
					property="og:description"
					content={'+9 years of experience working as Software Engineer.'}
				/>
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://jorgemgr.com/" />
				<meta
					property="og:image"
					content="https://jorgemgr.com/assets/images/me.jpg"
				/>
				<meta name="twitter:card" content="summary_large_image" />
				<meta
					name="twitter:title"
					content={'Jorge García - Software Engineer'}
				/>
				<meta
					name="twitter:description"
					content={'+9 years of experience working as Software Engineer.'}
				/>
				<meta
					name="twitter:image"
					content="https://jorgemgr.com/assets/images/me.jpg"
				/>
				<link rel="canonical" href="https://jorgemgr.com/" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
