import React , {useContext} from 'react'
import {popcontext} from '../App';

function Whatwedo() {
  const {state , dispatch} = useContext(popcontext);

  const showpopup = () => {
    console.log("value of popup " , state);
    dispatch({type : "POPUP" , payload : true});
  }
  return (
    <>
        <section className="w3l-services1">
  <div id="content-with-photo4-block" className="py-5">
    <div className="container py-md-5">
      <div className="cwp4-two row">
        <div className="cwp4-text col-lg-4 mb-lg-0 mb-5">
          {/* <h6 className="sub-title">what We Do</h6> */}
          {/* <h3 className="hny-title">What We Offer for You</h3> */}
          <h3 className="hny-title">The 50+ Amenitites Make The Perfect Match For Your Lifestyle.</h3>
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicingelit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p> */}
          <button className="btn btn-style btn-secondary mt-4" onClick={showpopup} >Get Quote</button>
          {/* <a href="/" className="btn btn-style mt-lg-4 mt-2">Read More</a> */}
        </div>
        <div className="cwp4-image col-lg-4 col-md-6">
          <div className="grids4-info" style={{"marginBottom" : "20px"}}>
            <a href="#">
              {/* <img src="assets/images/g1.jpg" className="img-fluid" alt="" /> */}
              <img src="assets/images/feel the fitness.jpeg" className="img-fluid" alt="" />
            </a>
            {/* <div className="info-bg">
              <h5><a href="#">Estates for sale</a></h5>
              <span className="price">$ 240/month</span>
              <p>Nulla ex nunc, interdum nec egestas nec, dapibus ac mauris. Vivamus id tempor nisl.</p>
              <ul>
                <li><span className="fa fa-bed" /> 3</li>
                <li><span className="fa fa-bath" /> 3</li>
                <li><span className="fa fa-share-square-o" /> 1200 sq ft</li>
              </ul>
            </div> */}
          </div>
        </div>
        <div className="cwp4-image col-lg-4 col-md-6">
          <div className="grids4-info">
            <a href="#">
              {/* <img src="assets/images/g2.jpg" className="img-fluid" alt="" /> */}
              <img src="assets/images/feel the joy.jpeg" className="img-fluid" alt="" />
            </a>
            {/* <div className="info-bg">
              <h5><a href="#">Home for sale</a></h5>
              <span className="price">$ 280/month</span>
              <p>Nulla ex nunc, interdum nec egestas nec, dapibus ac mauris. Vivamus id tempor nisl.</p>
              <ul>
                <li><span className="fa fa-bed" /> 3</li>
                <li><span className="fa fa-bath" /> 3</li>
                <li><span className="fa fa-share-square-o" /> 1200 sq ft</li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Whatwedo