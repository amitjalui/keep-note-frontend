import type { Metadata } from 'next'
import './globals.css';

export const metadata: Metadata = {
  title: 'Keep Note',
  description: 'Keep your notes and password (in-secure format) in one place',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        root layout
        {children}
      </body>
    </html>
  )
}
