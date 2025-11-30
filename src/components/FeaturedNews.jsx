const FeaturedNews = () => {
  return (
    <section id="home" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=600&fit=crop"
              alt="Featured News"
              className="w-full h-64 md:h-full object-cover"
              loading="eager"
            />
          </div>
          <div className="md:w-1/2 p-8">
            <div className="flex items-center mb-4">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full">
                Breaking News
              </span>
              <span className="ml-4 text-sm text-gray-500">
                {new Date().toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Today's Headline: Stay Informed with Daily News
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Welcome to Daily News, your trusted source for the latest updates and comprehensive coverage 
              of today's most important stories. Our mission is to deliver accurate, timely, and engaging 
              news content that keeps you informed and connected to the world around you.
            </p>
            <a
              href="#article"
              className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Read Full Article
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedNews

