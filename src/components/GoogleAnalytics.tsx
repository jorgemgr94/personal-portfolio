import Script from 'next/script';

const productionMeasurementId = 'G-RJXC11Y0XT';
const measurementId = process.env.NEXT_PUBLIC_GA_ID || productionMeasurementId;

export default function GoogleAnalytics() {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', ${JSON.stringify(measurementId)});
          `
        }}
      />
    </>
  );
}
