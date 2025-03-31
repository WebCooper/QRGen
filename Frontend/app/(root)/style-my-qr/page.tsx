"use client"

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import QRGenerator from "@/components/QRCode/QRGenerator"

// Loading component for better UX
const LoadingSpinner = () => (
  <div className="flex items-center justify-center h-screen bg-[#e4e2dd]">
    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500">
      <span className="sr-only">Loading...</span>
    </div>
  </div>
)

function QRContent() {
  const searchParams = useSearchParams();
  const initialData = searchParams.get('data') || 'https://example.com';

  return (
    <>
 
      <QRGenerator initialData={initialData} />
    </>
  );
}

export default function StyleQRPage() {
  return (
    <div className="min-h-screen h-screen overflow-hidden">
      <Suspense fallback={<LoadingSpinner />}>
        <QRContent />
      </Suspense>
    </div>
  )
}