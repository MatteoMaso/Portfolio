import CustomHeader from '@/components/CustomHeader';
import { Analytics } from '@vercel/analytics/react';
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
      </body>
    </html>
  )
}
