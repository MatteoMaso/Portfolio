import CustomHeader from './components/CustomHeader';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
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

        {children}
        
        {/* Analytics */}
        <Analytics /> 

        {/* Speed Insights */}
        <SpeedInsights/>
      </body>
    </html>
  )
}
