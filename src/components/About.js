import React, { useContext } from 'react'
import {popcontext} from '../App';

function About() {
  const {state , dispatch} = useContext(popcontext);

  const showpopup = () => {
    console.log("value of popup " , state);
    dispatch({type : "POPUP" , payload : true});

  }
  return (
    <>
        <section className="w3l-grids-3 py-5" id="about">
  <div className="container py-md-5">
    <div style={{margin: '8px auto', display: 'block', textAlign: 'center'}}>
      {/*-728x90-*/}
    </div>
    <div className="row bottom-ab-grids align-items-center">
      <div className="col-lg-6 bottom-ab-left pr-lg-5">
        <h6 className="sub-title">GREENAIRY</h6>
        <div className="my-3 pr-lg-4">
        <div className="holder1">
            <ul>
                <li>PREMIUM 1& 2 BHKs WITH JODI OPTIONS</li>
                <li>PANORAMIC VIEWS OF NATIONAL PARK & CITY</li>
                <li>SMART COMMERCIAL SPACES </li>
                <li>EFFICIENTLY DESIGNED HOMES</li>
                <li>TWO EXCLUSIVE TOWERS</li>
            </ul>
        </div>
        {/* Chandak Greenairy perfectly designed the revelation offering masterfully crafted homes that suited the habitant and urbanisation.

        Thoughtfully chosen amenities, grand design aesthetics, beautifully carved out landscapes where residents can mingle with a discerning community and soak in the finest luxury.

        Located in possibly the greenest neighbourhood of Mumbai with acres of beautifully landscaped gardens,  brings its residents closer to nature like never before. With the Western Express Highway and the Magathane Metro Station in close proximity, Greenairy is well connected to business districts and leisure options like malls, theatres and other escapes. */}
        </div>
        <button className="btn btn-style btn-secondary mt-4" onClick={showpopup}>Get Quote</button>
      </div>
      <div className="col-lg-6 bottom-ab-right mt-lg-0 mt-5">
        {/* <img src="assets/images/ab1.jpg" className="img-fluid" alt="" /> */}
        <img src="assets/images/ref elevation.jpeg" className="img-fluid" alt="" />
        {/* public\assets\images\ */}
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default About