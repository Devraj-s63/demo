import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EduInstitute - Quality Education Solutions',
  description: 'Comprehensive educational platform offering professional courses in IT, Management, and Design. Empowering students with practical skills and career guidance.',
  keywords: ['education', 'courses', 'IT training', 'online learning', 'professional development'],
  authors: [{ name: 'EduInstitute' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}