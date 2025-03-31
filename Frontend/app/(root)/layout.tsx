
import type { Metadata } from "next";
import '../globals.css'
import { UserProvider } from '@/context/UserContext'

export const metadata: Metadata = {
  title: "Styled QR Generator",
  description: "Create your own QR",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen">
          <UserProvider>
            {children}
          </UserProvider>
        </div>
      </body>
    </html>
  )
}
