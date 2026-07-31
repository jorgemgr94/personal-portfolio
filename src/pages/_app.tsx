import '@/styles/globals.css';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import dynamic from 'next/dynamic';

const Analytics = dynamic(
  () => import('@vercel/analytics/next').then((m) => m.Analytics),
  { ssr: false }
);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleAnalytics />
      <ThemeProvider
        enableSystem={true}
        attribute="class"
        forcedTheme={pageProps.forcedTheme || null}
      >
        <Component {...pageProps} />
        <Analytics />
      </ThemeProvider>
    </>
  );
}
