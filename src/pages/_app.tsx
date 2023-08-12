import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import Script from 'next/script';

export default function App ({ Component, pageProps }: AppProps) {
  return (
    <>
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
      <ThemeProvider
        enableSystem={true}
        attribute="class"
        forcedTheme={pageProps.forcedTheme || null}
      >
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
