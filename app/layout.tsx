import CustomHeader from './components/header/CustomHeader';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import '@/styles/globals.css'
import HeaderItem from './components/header/HeaderItem';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>

        {/* Header */}
        <CustomHeader>
          <div>
              <div className='p-2 text-4xl text-gray-700'>
                  <p>@MatteoMaso</p>
              </div>
              <div className='flex justify-between p-2 text-2xl text-gray-400 mx-9'>
                  <HeaderItem params={{href: '/', text: './home'}}/>
                  <HeaderItem params={{href: '/cv', text: './cv'}}/>
              </div>
          </div>
        </CustomHeader>

        {children}
        
        {/* Analytics */}
        <Analytics /> 

        {/* Speed Insights */}
        <SpeedInsights/>
      </body>
    </html>
  )
}
