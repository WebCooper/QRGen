'use client'

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { UserProvider } from '@/context/UserContext'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <UserProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </UserProvider>
      </body>
    </html>
  )
}