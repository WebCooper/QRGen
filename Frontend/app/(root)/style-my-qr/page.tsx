"use client"

import QRGenerator from "@/components/QRCode/QRGenerator"

const page = () => {
  return (
    <div className="h-screen flex">
      <QRGenerator />
    </div>
  )
}

export default page