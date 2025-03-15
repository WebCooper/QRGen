import type { Metadata } from "next";
import '../globals.css'


export const metadata: Metadata = {
  title: "Styled QR Generator",
  description: "Create your own QR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en">

      <body
      >
        {children}
      </body>
    </html>
  );
}
