import React , {useContext} from 'react'
import {popcontext} from '../App';

function Plans() {
  const {state , dispatch} = useContext(popcontext);

  const showpopup = () => {
    console.log("value of popup " , state);
    dispatch({type : "POPUP" , payload : true});
  }
  return (
    <>
        <section className="w3l-pricing-11">
  <div className="pricing11 py-5">
    <div className="container py-md-4">
      <div className="w3l-header mb-md-5 mb-4 text-center">
        <h6 className="sub-title">Our Plans</h6>
        <h3 className="hny-title">Pricing packages</h3>
      </div>
      <div className="pricing11-content">
        <div className="column pricing-grid">
          <div className="text-center price-icon">
            <span className="fa fa-home" />
          </div>
          <div className="rate">
            {/* <h4>Premium</h4> */}
            <h4>1 BHK </h4>
            {/* <h5><span className="top-align">from</span> $50 <span>/mo.</span></h5> */}
            <h5><span className="top-align">from</span> @ 1.10 Cr ++</h5>
          </div>
          <ul className="points">
            <li><span className="fa fa-check" /> Including Car Parking Facilities.</li>
          </ul>
          {/* <p>Integer blandit eget dui in tempor lorem. gravida tortor at eros sed et.</p> */}
          {/* <button className="button">Choose a plan</button>
          <div className="text-center">
            <a href="#" className="action">Buy Now </a>
          </div>
          <ul className="points">
            <li><span className="fa fa-check" /> Etiam mollis lacus.</li>
            <li><span className="fa fa-check" /> Sed tincidunt, nisl vitae mattis.</li>
            <li><span className="fa fa-check" /> Morbi sed sem ac odio.</li>
            <li><span className="fa fa-check" /> Aenean et tellus tincidunt.</li>
          </ul> */}
          <div className="text-center pos">	
          <button className="btn btn-style btn-secondary mt-4"  onClick={showpopup}>Get Final Price</button>
            {/* <a href="/" className="action"> Contact Us</a> */}
          </div>
        </div>
        <div className="column pricing-grid pricing-grid-active">
          <div className="text-center price-icon">
            <span className="fa fa-building" />
          </div>
          <div className="rate">
            {/* <h4>Plus</h4> */}
            <h4>2 BHK </h4>
            {/* <h5><span className="top-align">from</span> $100 <span>/mo.</span></h5> */}
            <h5><span className="top-align">from</span> @ 1.60 Cr ++ </h5>
          </div>
          <ul className="points">
            <li><span className="fa fa-check" /> Including Car Parking Facilities.</li>
          </ul>
          {/* <p>Integer blandit eget dui in tempor lorem. gravida tortor at eros sed et.</p> */}
          {/* <button className="button">Choose a plan</button>
          <div className="text-center">
            <a href="#" className="action">Buy Now </a>
          </div>
          <ul className="points">
            <li><span className="fa fa-check" /> Etiam mollis lacus.</li>
            <li><span className="fa fa-check" /> Sed tincidunt, nisl vitae mattis.</li>
            <li><span className="fa fa-check" /> Morbi sed sem ac odio.</li>
            <li><span className="fa fa-check" /> Aenean et tellus tincidunt.</li>
        </ul>*/}
          <div className="text-center pos">	
          <button className="btn btn-style btn-secondary mt-4"  onClick={showpopup}>Get Final Price</button>
            {/* <a href="contact.html" className="action"> Contact Us</a> */}
          </div> 
        </div>
        <div className="column pricing-grid">
          <div className="text-center price-icon">
            <span className="fa fa-home" />
          </div>
          <div className="rate">
            {/* <h4>Gold</h4> */}
            <h4>Jodi Flats </h4>
            {/* <h5><span className="top-align">from</span> $150 <span>/mo.</span></h5> */}
            <h5><span className="top-align">from</span> @ 2.10 Cr ++ </h5>
          </div>
          <ul className="points">
            <li><span className="fa fa-check" /> Including Car Parking Facilities.</li>
          </ul>
          {/* <p>Integer blandit eget dui in tempor lorem. gravida tortor at eros sed et.</p> */}
          {/* <button className="button">Choose a plan</button>
          <div className="text-center">
            <a href="#" className="action">Buy Now </a>
          </div>
          <ul className="points">
            <li><span className="fa fa-check" /> Etiam mollis lacus.</li>
            <li><span className="fa fa-check" /> Sed tincidunt, nisl vitae mattis.</li>
            <li><span className="fa fa-check" /> Morbi sed sem ac odio.</li>
            <li><span className="fa fa-check" /> Aenean et tellus tincidunt.</li>
        </ul>*/}
          <div className="text-center pos">	
          <button className="btn btn-style btn-secondary mt-4" onClick={showpopup} >Get Final Price</button>
            {/* <a href="contact.html" className="action"> Contact Us</a> */}
          </div> 
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Plans