import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sandumini Karunarathne',
  description: 'Portfolio of Sandumini Karunarathne, a passionate IT and Management undergraduate specializing in software quality assurance and testing.',
  keywords: 'Software Quality Assurance, QA Engineer, IT, Software Testing, Automation Testing, Web Development',
  authors: [{ name: 'Sandumini Karunarathne' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased min-h-screen bg-gray-950 text-gray-100">
        {children}
      </body>
    </html>
  )
}