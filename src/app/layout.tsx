import '@/styles/globals.css'
// import AnalyticsProvider from '@/components/analytics'
import { Analytics } from '@vercel/analytics/react';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* { process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
          <AnalyticsProvider />
        ) : null } */}
        {children}
        <Analytics /> 
      </body>
    </html>
  )
}
