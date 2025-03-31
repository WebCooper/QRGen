const Footer = () => {
  return (
    <footer className="bg-[#e4e2dd] shadow-sm mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="text-center text-gray-500">
          <p>© {new Date().getFullYear()} QR Generator. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer