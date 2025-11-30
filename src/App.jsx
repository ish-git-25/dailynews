import { useState, useEffect, useRef } from 'react'
import Navigation from './components/Navigation'
import FeaturedNews from './components/FeaturedNews'
import NewsArticles from './components/NewsArticles'
import ArticleContent from './components/ArticleContent'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth'

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation isScrolled={isScrolled} />
      <main>
        <FeaturedNews />
        <NewsArticles />
        <ArticleContent />
      </main>
    </div>
  )
}

export default App

