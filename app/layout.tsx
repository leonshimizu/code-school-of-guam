// app/layout.tsx
import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Code School of Guam',
  description: "Guam's First Code School",
  keywords: 'Code School, Guam, Programming, Software Development, Ruby on Rails, React.js',
  author: 'Code School of Guam',
  // Move viewport and themeColor to their dedicated exports
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  themeColor: '#000000',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/CSG-logo.png" />
        <meta name="description" content="Guam's First Code School" />
        <link rel="apple-touch-icon" href="/CSG-logo.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="keywords" content="Code School, Guam, Programming, Software Development, Ruby on Rails, React.js" />
        <meta name="author" content="Code School of Guam" />
        <title>Code School of Guam</title>
      </head>
      <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root">
          {children}
        </div>
      </body>
    </html>
  )
}
