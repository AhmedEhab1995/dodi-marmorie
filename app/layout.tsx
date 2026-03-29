import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Maramiro & Dodiii - Our Love Story',
  description: 'Our beautiful love story and journey together',
  icons: {
    icon: '/favicon.ico',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#F6E7EB',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
<body 
  suppressHydrationWarning 
  style={{ margin: 0, padding: 0, width: '100%', overflowX: 'hidden', scrollbarGutter: 'stable' }}
>        {children}
      </body>
    </html>
  )
}
