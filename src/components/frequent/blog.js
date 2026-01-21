import React from 'react';

const Blog = () => {
  const featuredPosts = [
    {
      title: "The Art of Community-Driven Storytelling",
      excerpt: "How we're reimagining creative collaboration through web3 technology and global participation.",
      category: "Storytelling",
      date: "March 15, 2024",
      color: "primary"
    },
    {
      title: "Meet Our First Cohort of Funded Artists",
      excerpt: "Introducing the visionary creators who are shaping the Soul Kind universe with their unique perspectives.",
      category: "Artists",
      date: "March 10, 2024",
      color: "success"
    }
  ];

  const recentPosts = [
    {
      title: "Building Immersive Worlds: A Designer's Perspective",
      date: "March 5, 2024"
    },
    {
      title: "Web3 and the Future of Creative Ownership",
      date: "February 28, 2024"
    },
    {
      title: "The Psychology of Character Design",
      date: "February 20, 2024"
    }
  ];

  return (
    <div className="soulkind-blog">
      {/* Featured Post */}
      <div className="featured-post">
        <div className="featured-content">
          <div className="category-badge">Featured</div>
          <h1 className="featured-title">The Soul Kind Manifesto: Redefining Creativity in the Digital Age</h1>
          <p className="featured-excerpt">
            Discover how we're blending traditional artistry with cutting-edge technology to create stories that transcend mediums and connect with audiences worldwide through decentralized storytelling.
          </p>
          <a href="#" className="read-more-link">
            Continue reading <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>

      {/* Recent Posts Grid */}
      <div className="recent-posts-grid">
        {featuredPosts.map((post, index) => (
          <div key={index} className="blog-card">
            <div className="blog-card-content">
              <div className={`category-badge badge-${post.color}`}>
                {post.category}
              </div>
              <h3 className="blog-card-title">{post.title}</h3>
              <p className="blog-card-excerpt">{post.excerpt}</p>
              <div className="blog-card-footer">
                <span className="post-date">{post.date}</span>
                <a href="#" className="card-read-more">
                  Read more <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Blog Content */}
      <div className="blog-main-content">
        <div className="blog-articles">
          {/* Main Article */}
          <article className="blog-article">
            <h2 className="article-title">The Intersection of Art and Technology</h2>
            <div className="article-meta">
              <span className="author">By <a href="#">Alex Chen</a></span>
              <span className="date">March 1, 2024</span>
            </div>
            
            <p className="article-intro">
              In today's rapidly evolving digital landscape, the boundary between traditional artistry and technological innovation is becoming increasingly blurred. At Soul Kind, we believe this intersection is where true magic happens.
            </p>
            
            <div className="article-image-placeholder">
              <div className="image-content">
                <i className="fas fa-paint-brush"></i>
                <p>Art meets technology</p>
              </div>
            </div>
            
            <h3>Embracing New Mediums</h3>
            <p>
              The rise of web3 technologies has opened up unprecedented opportunities for creative expression. From NFTs that give artists true ownership of their digital work to decentralized platforms that enable global collaboration, we're only beginning to scratch the surface of what's possible.
            </p>
            
            <blockquote className="article-quote">
              <p>"Technology doesn't replace creativity; it amplifies it. The most profound stories will always be human stories, but now we have more ways to tell them than ever before."</p>
              <footer>— Maya Rodriguez, Creative Director</footer>
            </blockquote>
            
            <h3>The Soul Kind Approach</h3>
            <p>
              Our philosophy is simple: use technology to enhance human connection, not replace it. Every tool, every platform, every innovation serves one purpose—to help us tell better stories and create deeper emotional connections with our audience.
            </p>
            
            <div className="article-tags">
              <span className="tag">#Creativity</span>
              <span className="tag">#Technology</span>
              <span className="tag">#Innovation</span>
              <span className="tag">#Web3</span>
            </div>
          </article>

          {/* Sidebar */}
          <div className="blog-sidebar">
            <div className="sidebar-section about-section">
              <h4 className="sidebar-title">About Our Blog</h4>
              <p className="sidebar-text">
                Welcome to the Soul Kind creative journal. Here we share insights, stories, and inspiration from our journey of building a new kind of creative studio.
              </p>
            </div>

            <div className="sidebar-section recent-section">
              <h4 className="sidebar-title">Recent Stories</h4>
              <ul className="recent-list">
                {recentPosts.map((post, index) => (
                  <li key={index} className="recent-item">
                    <a href="#" className="recent-link">
                      <h5 className="recent-title">{post.title}</h5>
                      <span className="recent-date">{post.date}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sidebar-section categories-section">
              <h4 className="sidebar-title">Creative Categories</h4>
              <ul className="categories-list">
                <li><a href="#">Storytelling</a></li>
                <li><a href="#">Character Design</a></li>
                <li><a href="#">World Building</a></li>
                <li><a href="#">Web3 & NFTs</a></li>
                <li><a href="#">Community</a></li>
                <li><a href="#">Animation</a></li>
              </ul>
            </div>

            <div className="sidebar-section social-section">
              <h4 className="sidebar-title">Join the Conversation</h4>
              <div className="social-links">
                <a href="#" className="social-link"><i className="fab fa-discord"></i> Discord</a>
                <a href="#" className="social-link"><i className="fab fa-twitter"></i> Twitter</a>
                <a href="#" className="social-link"><i className="fab fa-instagram"></i> Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <nav className="blog-pagination">
        <a href="#" className="pagination-btn prev-btn">
          <i className="fas fa-arrow-left"></i> Older Stories
        </a>
        <a href="#" className="pagination-btn next-btn">
          Newer Stories <i className="fas fa-arrow-right"></i>
        </a>
      </nav>
    </div>
  );
};

export default Blog;