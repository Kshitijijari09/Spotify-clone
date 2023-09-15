import ModalProvider from '@/providers/ModalProvider'
import './globals.css'
import Sidebar from '@/Components/Sidebar'
import SupabaseProvider from '@/providers/SupabaseProvider'
import UserProvider from '@/providers/UserProvider'
import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'

const font = Figtree({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Spotify-Clone',
  description: 'Listen to Music',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <SupabaseProvider>
          <UserProvider>
          <ModalProvider />
          <Sidebar>
            {children}
          </Sidebar>
          </UserProvider>
        </SupabaseProvider>
        </body>
    </html>
  )
}
