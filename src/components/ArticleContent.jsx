import { useState, useEffect, useRef } from 'react'

// Placeholder for Word document content
// Replace this array with the actual content from your Word document
// Each string in the array will become a paragraph
const articleContent = [
  "This is a placeholder for your Word document content.",
  "Please replace the 'articleContent' array in src/components/ArticleContent.jsx with the actual content from your Word document.",
  "Each paragraph should be a separate string in the array.",
  "The content will be automatically formatted and displayed in a readable format below."
]

const ArticleContent = () => {
  const [isVisible, setIsVisible] = useState(false)
  const contentRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    )

    if (contentRef.current) {
      observer.observe(contentRef.current)
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current)
      }
    }
  }, [])

  return (
    <section id="article" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div ref={contentRef} className="bg-white rounded-lg shadow-md p-8 md:p-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-4 border-b border-gray-200">
          Full Article
        </h2>
        <div className="article-content text-gray-800">
          {isVisible && articleContent.map((paragraph, index) => (
            <p key={index} className="mb-4 leading-7 text-base md:text-lg">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ArticleContent

