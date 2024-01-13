import type { Metadata } from 'next'
import StoreProvider from './StoreProvider'
import ThemeProvider from './ThemeProvider'
import '../styles/globals.css'
import StyledComponentsRegistry from '../lib/registry'

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
        <StoreProvider>
          <StyledComponentsRegistry>
            <ThemeProvider>
              {children}
            </ThemeProvider>
          </StyledComponentsRegistry>
        </StoreProvider>
      </body>
    </html>
  )
}
