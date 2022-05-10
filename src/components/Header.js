import React from 'react'

function Header() {
  return (
    <>
        <header id="site-header" className="fixed-top">
  <div className="container">
    <nav className="navbar navbar-expand-lg stroke">
      <h1><a className="navbar-brand mr-lg-5" href="index.html">
          Hom<span>i</span>sh
        </a></h1>
      {/* if logo is image enable this   
<a class="navbar-brand" href="#index.html">
    <img src="image-path" alt="Your logo" title="Your logo" style="height:35px;" />
</a> */}
      <button className="navbar-toggler  collapsed bg-gradient" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon fa icon-expand fa-bars" />
        <span className="navbar-toggler-icon fa icon-close fa-times" />
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="about.html">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="services.html">Services</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Blog<span className="fa fa-angle-down" />
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown1">
              <a className="dropdown-item" href="blog.html">Blog Posts</a>
              <a className="dropdown-item" href="blog-single.html">Blog single</a>
              <a className="dropdown-item" href="error.html">404 Page</a>
              <a className="dropdown-item" href="landing-single.html">Landing Page</a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="contact.html">Contact</a>
          </li>
          <div className="search-right">
            <a href="#search" title="search"><span className="fa fa-search" aria-hidden="true" /></a>
            {/* search popup */}
            <div id="search" className="pop-overlay">
              <div className="popup">
                <form action="#" method="GET" className="search-box">
                  <input type="search" placeholder="Enter Keyword" name="search" required="required" autofocus />
                  <button type="submit" className="btn">Search Now</button>
                </form>
              </div>
              <a className="close" href="#close">×</a>
            </div>
            {/* /search popup */}
          </div>
        </ul>
      </div>
      {/* toggle switch for light and dark theme */}
      <div className="mobile-position">
        <nav className="navigation">
          <div className="theme-switch-wrapper">
            <label className="theme-switch" htmlFor="checkbox">
              <input type="checkbox" id="checkbox" />
              <div className="mode-container">
                <i className="gg-sun" />
                <i className="gg-moon" />
              </div>
            </label>
          </div>
        </nav>
      </div>
      {/* //toggle switch for light and dark theme */}
    </nav>
  </div>
</header>


    </>
  )
}

export default Header