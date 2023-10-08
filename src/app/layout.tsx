import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import AnalyticsProvider from '@/components/analytics'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        { process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
          <AnalyticsProvider />
        ) : null }
        {children}
      </body>
    </html>
  )
}
