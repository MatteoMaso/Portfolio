import '@/styles/globals.css'
import AnalyticsProvider from '@/components/analytics'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        { process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
          <AnalyticsProvider />
        ) : null }
        {children}
      </body>
    </html>
  )
}
