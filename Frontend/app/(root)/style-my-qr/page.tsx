"use client"

import QRGenerator from "@/components/QRCode/QRGenerator"

const page = () => {
  return (
    <div className="min-h-screen h-screen overflow-hidden">
      <QRGenerator />
    </div>
  )
}

export default page