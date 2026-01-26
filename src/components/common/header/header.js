import React from 'react'

const header = () => {
  return (
    <header className="soulkind-header">
        <div className="container nav-container">
          <div className="logo">
            Soul Kind
          </div>
          <nav className="nav-menu">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">Universe</a></li>
              <li><a href="#stayhuman">Stayhuman</a></li>
              <li><a href="#mission">Mission</a></li>
              <li><a href="/careers" className="nav-btn">Explore Careers</a></li>
            </ul>
          </nav>
        </div>
      </header>
  )
}

export default header