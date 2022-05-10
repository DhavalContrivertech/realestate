import React from 'react'

function Videos() {
  return (
    <>
        <section className="w3l-index5" id="about">
  <div className="new-block py-5">
    <div className="container py-lg-5">
      <div className="middle-section text-center">
        <div className="section-width">
          <h6 className="sub-title text-center">Video</h6>
          <h3 className="hny-title">People-oriented spaces that ensure the best quality of your everyday life</h3>
          <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur hic odio voluptatem
            tenetur consequatur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit beatae laudantium
            voluptate rem ullam dolore nisi voluptatibus esse quasi.Integer sit amet mattis quam.</p>
        </div>
        <div className="history-info mt-5">
          <div className="position-relative">
            <img src="assets/images/banner3.jpg" className="img-fluid radius-image video-popup-image" alt="video-popup" />
            <a href="#small-dialog" className="popup-with-zoom-anim play-view text-center position-absolute">
              <span className="video-play-icon">
                <span className="fa fa-play" />
              </span>
            </a>
            {/* dialog itself, mfp-hide class is required to make dialog hidden */}
            <div id="small-dialog" className="zoom-anim-dialog mfp-hide">
              <iframe src="https://player.vimeo.com/video/23512331?title=0&byline=0&portrait=0" frameBorder={0} allow="autoplay; fullscreen" allowFullScreen  title='iframe'/>
            </div>
          </div>
        </div>
        {/* dialog itself, mfp-hide class is required to make dialog hidden */}
        <div id="small-dialog" className="zoom-anim-dialog mfp-hide">
          <iframe src="https://player.vimeo.com/video/23512331?title=0&byline=0&portrait=0" frameBorder={0} allow="autoplay; fullscreen" allowFullScreen title='iframe1' />
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Videos