const Navigation = ({ isScrolled }) => {
  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md'
          : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <h1 className="text-2xl font-bold text-gray-900">Daily News</h1>
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="text-gray-700 hover:text-gray-900 transition-colors">
              Home
            </a>
            <a href="#article" className="text-gray-700 hover:text-gray-900 transition-colors">
              Article
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation

