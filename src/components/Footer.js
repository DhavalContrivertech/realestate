import React from 'react'

function Footer() {
  return (
    <>
        <footer>
  {/* footer */}
  <section className="w3l-footer">
    <div className="w3l-footer-16-main py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 column">
            <div className="row">
              <div className="col-md-4 column">
                <h3>Company</h3>
                <ul className="footer-gd-16">
                  <li><a href="index.html">Home</a></li>
                  <li><a href="about.html">About Us</a></li>
                  <li><a href="services.html">Services</a></li>
                  <li><a href="blog.html">Blog</a></li>
                  <li><a href="contact.html">Contact Us</a></li>
                </ul>
              </div>
              <div className="col-md-4 column mt-md-0 mt-4">
                <h3>Useful Links</h3>
                <ul className="footer-gd-16">
                  <li><a href="#url">Offers</a></li>
                  <li><a href="#url">Our Branches</a></li>
                  <li><a href="#url">Latest Media</a></li>
                  <li><a href="about.html">About Company</a></li>
                  <li><a href="#url">Our Packages</a></li>
                </ul>
              </div>
              <div className="col-md-4 column mt-md-0 mt-4">
                <h3>Our Services</h3>
                <ul className="footer-gd-16">
                  <li><a href="#url">Privacy Policy</a></li>
                  <li><a href="#url">Our Terms</a></li>
                  <li><a href="services.html">Services</a></li>
                  <li><a href="landing-single.html">Landing Page</a></li>
                  <li><a href="#url">Our Agents</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 column pl-lg-5 column4 mt-lg-0 mt-5">
            <h3>Newsletter </h3>
            <div className="end-column">
              <h4>Get latest updates and offers.</h4>
              <form action="#" className="subscribe" method="post">
                <input type="email" name="email" placeholder="Email Address" required />
                <button type="submit">Go</button>
              </form>
              <p>Sign up for our latest news &amp; articles. We won’t give you spam mails.</p>
            </div>
          </div>
        </div>
        <div className="d-flex below-section justify-content-between align-items-center pt-4 mt-5">
          <div className="columns text-lg-left text-center">
            <p>© 2020 Homish. All rights reserved.Design by <a href="https://w3layouts.com/" target="_blank">
                W3Layouts</a>
            </p>
          </div>
          <div className="columns-2 mt-lg-0 mt-3">
            <ul className="social">
              <li><a href="#facebook"><span className="fa fa-facebook" aria-hidden="true" /></a>
              </li>
              <li><a href="#linkedin"><span className="fa fa-linkedin" aria-hidden="true" /></a>
              </li>
              <li><a href="#twitter"><span className="fa fa-twitter" aria-hidden="true" /></a>
              </li>
              <li><a href="#google"><span className="fa fa-google-plus" aria-hidden="true" /></a>
              </li>
              <li><a href="#github"><span className="fa fa-github" aria-hidden="true" /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    {/* move top */}
    {/* <button onclick="topFunction()" id="movetop" title="Go to top">
      <span className="fa fa-angle-up" />
    </button> */}
    {/* //move top */}
  </section>
  {/* //footer */}
</footer>

    </>
  )
}

export default Footer