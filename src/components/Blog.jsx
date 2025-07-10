import { blogPosts } from '../data/blogPosts'
import { Link } from 'react-router-dom'

export default function Blog() {
  const featuredPosts = blogPosts.slice(0, 3)
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Latest Blog Posts</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Insights, tips and news on modern agriculture and agribusiness
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
              <img 
                src={`/images/blog/${post.image}`} 
                alt={post.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime} read</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link 
                  to={`/blog/${post.id}`} 
                  className="text-green-600 font-medium hover:text-green-700 transition"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/blog" 
            className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition inline-block"
          >
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  )
}