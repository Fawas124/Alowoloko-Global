import { useParams } from 'react-router-dom'
import { blogPosts } from '../data/blogPosts'
import { FaCalendarAlt, FaTag, FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const BlogPost = () => {
  const { id } = useParams()
  const post = blogPosts.find(post => post.id === parseInt(id))

  if (!post) {
    return <div className="container">Post not found</div>
  }

  return (
    <section className="blog-post-section">
      <div className="container">
        <Link to="/" className="back-link">
          <FaArrowLeft /> Back to Blog
        </Link>
        <article className="blog-post">
          <h1 className="post-title">{post.title}</h1>
          <div className="post-meta">
            <span className="meta-item">
              <FaCalendarAlt /> {post.date}
            </span>
            <span className="meta-item">
              <FaTag /> {post.category}
            </span>
          </div>
          <div className="post-image">
            <img src={post.image} alt={post.title} />
          </div>
          <div className="post-content">
            <p>This is a detailed blog post about {post.title}. In a real implementation, this would be the full content of the blog post.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.</p>
            <p>Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere.</p>
            <p>Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet.</p>
          </div>
        </article>
      </div>
      
      <style jsx>{`
        .blog-post-section {
          padding: 100px 0 80px;
        }
        
        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 30px;
          color: var(--primary-color);
          text-decoration: none;
          font-weight: 600;
        }
        
        .blog-post {
          max-width: 800px;
          margin: 0 auto;
        }
        
        .post-title {
          font-size: 2.5rem;
          margin-bottom: 20px;
          color: var(--primary-color);
        }
        
        .post-meta {
          display: flex;
          gap: 20px;
          margin-bottom: 30px;
          color: #666;
        }
        
        .post-image {
          margin-bottom: 30px;
          border-radius: 8px;
          overflow: hidden;
        }
        
        .post-image img {
          width: 100%;
          height: auto;
          display: block;
        }
        
        .post-content {
          line-height: 1.8;
        }
        
        .post-content p {
          margin-bottom: 20px;
        }
      `}</style>
    </section>
  )
}

export default BlogPost