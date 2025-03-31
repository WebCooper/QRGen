"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useUser } from '@/context/UserContext'

const Header = () => {
  const { isAuthenticated, logout } = useUser()

  return (
    <header className="bg-[#e4e2dd] shadow-sm">
      <div className="mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Image 
              src="/QR-Gen-cropped.png" 
              alt="QR Generator Logo" 
              width={150} 
              height={45}
              className="object-contain"
            />
          </Link>
          </div>
          <div className="flex gap-4">
            {isAuthenticated ? (
              <>
                <Link 
                  href="/dashboard" 
                  className="px-4 py-2 text-gray-600 hover:text-gray-900"
                >
                  Dashboard
                </Link>
                <button 
                  onClick={logout}
                  className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link 
                  href="/login" 
                  className="px-4 py-2 text-gray-600 hover:text-gray-900"
                >
                  Login
                </Link>
                <Link 
                  href="/signup" 
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header