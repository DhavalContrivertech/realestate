import React from 'react'

function About() {
  return (
    <>
        <section className="w3l-grids-3 py-5" id="about">
  <div className="container py-md-5">
    <div style={{margin: '8px auto', display: 'block', textAlign: 'center'}}>
      {/*-728x90-*/}
    </div>
    <div className="row bottom-ab-grids align-items-center">
      <div className="col-lg-6 bottom-ab-left pr-lg-5">
        <h6 className="sub-title">About Us</h6>
        <h3 className="hny-title">
          Recent deals closed by some of our sellers</h3>
        <p className="my-3 pr-lg-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur hic odio
          voluptatem
          tenetur consequatur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit beatae laudantium
          voluptate rem ullam dolore nisi voluptatibus esse quasi.Integer sit amet mattis quam.</p>
        <a href="about.html" className="btn btn-style btn-secondary mt-4">Read More</a>
      </div>
      <div className="col-lg-6 bottom-ab-right mt-lg-0 mt-5">
        <img src="assets/images/ab1.jpg" className="img-fluid" alt="" />
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default About