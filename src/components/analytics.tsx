// AnalyticsProvider component
'use client';

import React from 'react';
import Script from 'next/script';

export default function AnalyticsProvider() {
  const gaMeasurementId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;

  return (
    <>
        {/* I tried importing the Google Analytics component from the nextjs-google-analytics package, but it didn't work. So I chose to write the script manually. */}
        {/* <GoogleAnalytics trackPageViews /> */}
        <Script
            async
            src={`https://www.googletagmanager.com/gtag/js? 
            id=${gaMeasurementId}`}
        ></Script>
        <Script
            id="google-analytics"
            dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${gaMeasurementId}');
                `,
            }}
        ></Script>
    </>
  );
}