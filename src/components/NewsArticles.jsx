const NewsArticles = () => {
  const articles = [
    {
      id: 1,
      title: "Technology Breakthrough: New AI Model Revolutionizes Healthcare",
      excerpt: "Scientists have developed an advanced AI system that can diagnose diseases with unprecedented accuracy, potentially transforming medical care worldwide.",
      category: "Technology",
      date: "2 hours ago",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Global Climate Summit Reaches Historic Agreement",
      excerpt: "World leaders have reached a consensus on new environmental policies aimed at reducing carbon emissions by 50% by 2030.",
      category: "Environment",
      date: "5 hours ago",
      image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Economic Markets Show Strong Recovery Signs",
      excerpt: "Financial analysts report positive trends across major global markets, indicating a robust economic recovery in the post-pandemic era.",
      category: "Business",
      date: "8 hours ago",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      title: "Sports: Championship Finals Set New Viewership Records",
      excerpt: "The annual championship finals have broken all previous viewership records, with millions tuning in from around the world to watch the thrilling conclusion.",
      category: "Sports",
      date: "12 hours ago",
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=300&fit=crop"
    }
  ]

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest News</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {articles.map((article) => (
          <article
            key={article.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute top-3 left-3">
                <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-semibold rounded-full">
                  {article.category}
                </span>
              </div>
            </div>
            <div className="p-5">
              <p className="text-xs text-gray-500 mb-2">{article.date}</p>
              <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                {article.title}
              </h3>
              <p className="text-sm text-gray-700 line-clamp-3 leading-relaxed">
                {article.excerpt}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default NewsArticles

