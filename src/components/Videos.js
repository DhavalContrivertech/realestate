import React , {useState} from 'react'
// import { Button } from 'bootstrap'
// import { Modal } from 'bootstrap';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import ReactPlayer from 'react-player';
// import { CloseButton } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css'

function Videos() {
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  return (
    <>
        <section className="w3l-index5" id="about">
  <div className="new-block py-5">
    <div className="container py-lg-5">
      <div className="middle-section text-center">
        <div className="section-width">
          <h6 className="sub-title text-center">Video</h6>
          <h3 className="hny-title">People-oriented spaces that ensure the best quality of your everyday life</h3>
          {/* <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur hic odio voluptatem
            tenetur consequatur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit beatae laudantium
            voluptate rem ullam dolore nisi voluptatibus esse quasi.Integer sit amet mattis quam.</p> */}
        </div>
        <div className="history-info mt-5">
          <div className="position-relative">
            <ReactPlayer url="../assets/images/ChandakVideo1.mp4" muted={false} playing={false} loop={true} controls={true}/> 
          {/* <video width={600} height={500} poster="../assets/images/Teaser 1 Chandak.jpeg">
            <source src="../assets/images/ChandakVideo.mp4" type="video/mp4" />
          </video> */}
            {/* <source src="movie.ogg" type="video/ogg" /> */}
            {/* Your browser does not support the video tag. */}
            {/* <img src="assets/images/banner3.jpg" className="img-fluid radius-image video-popup-image" alt="video-popup" /> */}
            {/* <img src="../assets/images/Teaser 1 Chandak.jpeg" className="img-fluid radius-image video-popup-image" alt="video-popup" /> */}
            {/* <button type="button" className="popup-with-zoom-anim play-view text-center position-absolute" data-bs-toggle="modal" data-bs-target="#exampleModal"> */}
            {/* <Button  className="popup-with-zoom-anim play-view text-center position-absolute">
            <span className="video-play-icon">
                <span className="fa fa-play" />
              </span>
            </Button> */}

            {/* <Modal show={show} onHide={handleClose}>
              <Modal.Header  closeButton> */}
                {/* <Modal.Title>Modal heading</Modal.Title> */}
                {/* <CloseButton /> */}
              {/* </Modal.Header>
              <Modal.Body> */}
              {/* <video width={400} height={300} controls>
                  <source src='../assets/images/ChandakVideo.mp4' type="video/mp4" />
                </video>
              </Modal.Body>
              {/* <Modal.Footer> */}
                {/* <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer> 
            </Modal> */}


              {/* This is main  */}
          {/* </button> */}
          {/* <div class="modal fade" style={{"top" : "50%" , "left" : "50%" , "transform" : "traslate(-50% , -50%)"}} id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                  <button type="button" style={{"border": "0px solid !important" }} class="btn-close vid-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                <video width={400} height={300} controls>
                  <source src='../assets/images/ChandakVideo.mp4' type="video/mp4" />
                </video>
                </div>
                <div class="modal-footer">
                  {/* <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">Save changes</button> *
                </div>
              </div>
            </div>
          </div> */}

            {/* This is main  */}



            {/* <a href="#small-dialog" className="popup-with-zoom-anim play-view text-center position-absolute">
              <span className="video-play-icon">
                <span className="fa fa-play" />
              </span>
            </a> */}
            {/* dialog itself, mfp-hide class is required to make dialog hidden */}
            {/* <div id="small-dialog" className="zoom-anim-dialog mfp-hide"> */}
              {/* <iframe src="https://player.vimeo.com/video/23512331?title=0&byline=0&portrait=0" frameBorder={0} allow="autoplay; fullscreen" allowFullScreen  title='iframe'/> */}
              {/* <iframe src="..assets/images/Chandak Video.mp4" frameBorder={0} allow="autoplay; fullscreen" allowFullScreen  title='iframe'/> */}
            {/* </div> */}
          </div>
        </div>
        {/* dialog itself, mfp-hide class is required to make dialog hidden */}
        {/* <div id="small-dialog" className="zoom-anim-dialog mfp-hide"> */}
          {/* <iframe src="..assets/images/Chandak Video.mp4" frameBorder={0} allow="autoplay; fullscreen" allowFullScreen title='iframe1' /> */}
          {/* <iframe src="https://player.vimeo.com/video/23512331?title=0&byline=0&portrait=0" frameBorder={0} allow="autoplay; fullscreen" allowFullScreen title='iframe1' /> */}
        {/* </div> */}
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Videos