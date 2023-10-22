import CustomHeader from '@/components/CustomHeader';
import { Analytics } from '@vercel/analytics/react';
// import AnalyticsProvider from '@/components/analytics'
import '@/styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* Header */}
        <CustomHeader />

        {/* { process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
          <AnalyticsProvider />
        ) : null } */}
        {children}
        <Analytics /> 
      </body>
    </html>
  )
}
