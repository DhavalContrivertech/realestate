import React , {useState} from 'react'
import About from './components/About'
import Counter from './components/Counter'
import Footer from './components/Footer'
import Header from './components/Header'
import Minisidebar from './components/Minisidebar'
// import Modal from './components/Modal'
import NewModal from './components/NewModal'
import Plans from './components/Plans'
import Properties from './components/Properties'
import Reviews from './components/Reviews'
import Slidersection from './components/Slidersection'
import StartProject from './components/StartProject'
import Videos from './components/Videos'
import Whatwedo from './components/Whatwedo'
import { CloseButton, Modal } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
// import CloseButton from 'react-bootstrap'

function Main() {
  const [show, setShow] = useState(true);
  const [show1, setShow1] = useState(true);

  const handleClose = () => setShow(false);
  const handleClose1 = () => setShow1(false);

  const handleClose11 = () => {
    console.log("helo this is show value");
    setShow1(!show1);
    
  }
  
  // const handleShow = () => setShow(true);
  
  const btnstyle = {
    "border" : "0px",
    "outline" : "0px ",
    "zIndex" : "100"
  }
  const contactbtn = {
    "position" : "fixed" ,
    "bottom" : "50px" ,
    "right" : "10px",
    "background" : "#ff621a",
    "color" : "white",
    "padding" : "10px 15px",
    "borderRadius" : "50px",
    "textTransform" : "capitalize",
    "zIndex" : "1000"
  }
  return (
    <>
      {/* <div class="pull-right toggle-right-sidebar">
        <span class="fa title-open-right-sidebar tooltipstered fa-angle-double-right"></span>
      </div> */}

      <div id="right-sidebar" className="right-sidebar-notifcations nav-collapse">
      <div className="bs-example bs-example-tabs right-sidebar-tab-notification" data-example-id="togglable-tabs"></div>
        </div>
        {/* <Minisidebar /> */}
        {/* <div className="right-sidebar-panel-content animated fadeInRight" tabindex="5003"
        style="overflow: hidden; outline: none;">
    </div> */}
        <Header />
        <Slidersection />
        <About />
        <Whatwedo />
        {/* <Counter /> */}
        <Properties />
        <Plans />
        <Reviews />
        <Videos />
        <StartProject />
        {/* this is onload function */}
       {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header >
          <Modal.Title>Registration</Modal.Title>
          <button type="button" style={btnstyle} className="btn-close" aria-label="Hide" onClick={handleClose}>
            <img src="assets/images/icons8-close-50.png" width={20} height={20} alt="" />
          </button>
        </Modal.Header>
        <Modal.Body>
        <h3 style={{"textAlign" : "center"}}>Register Here</h3>
        <form action="">
            <div className="input-group mb-3 mt-3">
                <input type="text" className="form-control" placeholder="Name"  />
            </div>
            <div className="input-group mb-3">
                <input type="Number" className="form-control" placeholder="Number" />
            </div>
            <div className="input-group mb-3">
                <input type="email" className="form-control" placeholder="Email" />
            </div>

        </form>
        </Modal.Body>
        <Modal.Footer>
        <button className='call-btn' onClick={handleClose}>Get Instant Call Back</button>
        <p>+91 7200893494</p>
        </Modal.Footer>
      </Modal>  */}
            {/* this is onload function */}

          
          {/* thsi is sidebar  */}
            <button style={contactbtn} onClick={handleClose11}>
              contact us
            </button>
            {
              show1 ?  
              (<div className="modal1">
                    <div className="header-modal">
                        <h3>Register Here</h3>
                        <button type="button" style={btnstyle} className="btn-close" aria-label="Hide" onClick={handleClose}>
                        <img src="assets/images/icons8-close-50.png" onClick={handleClose1} width={20} height={20} alt="" />
                        </button>
                    </div>
                    <div className="content mt-3">
                            {/* <h5 style={{"textAlign" : "center"}}>Registration</h5> */}
                            <form action="">
                                <div className="input-group mb-3 mt-3">
                                    <input type="text" className="form-control" placeholder="Name"  />
                                </div>
                                <div className="input-group mb-3">
                                    <input type="Number" className="form-control" placeholder="Number" />
                                </div>
                                <div className="input-group mb-1">
                                    <input type="email" className="form-control" placeholder="Email" />
                                </div>
                            </form>
                    </div>
                    <div className="footer mt-3">
                    <button style={{"marginBottom" : "20px" , "border" : "1px solid #ff621a" , "padding" : "10px 15px" , "transition" : "all 0.5s ease" , "color" : "rgb(255, 98, 26)" , "borderRadius" : "15px"}} onClick={handleClose1} >Get Instant Call Back</button>
                    </div>
                </div>)
               : ""
          }
           {/* <Modal style={{"position" : "fixed " , "bottom" : "150px !important" , "right" : "10px !important"}} show={show1} onHide={handleClose1} className="modal1"> */}
            {/* <Modal.Dialog > */}
             {/* <Modal.Header >
                <Modal.Title>Registration</Modal.Title>
            //     <button type="button" style={btnstyle} className="btn-close" aria-label="Close" onClick={handleClose1}>
            //       <img src="assets/images/icons8-close-50.png" width={20} height={20} alt="" />
            //     </button>
            // </Modal.Header>

            // <Modal.Body>
            //         <h5 style={{"textAlign" : "center"}}>Registration</h5>
            //         <form action="">
            //             <div className="input-group mb-3 mt-3">
            //                 <input type="text" className="form-control" placeholder="Name"  />
            //             </div>
            //             <div className="input-group mb-3">
            //                 <input type="Number" className="form-control" placeholder="Number" />
            //             </div>
            //             <div className="input-group mb-1">
            //                 <input type="email" className="form-control" placeholder="Email" />
            //             </div>
            //         </form>
            // </Modal.Body>

            // <Modal.Footer>
            //     <Button variant="primary" style={{"marginBottom" : "20px" , "border" : "1px solid #ff621a" , "padding" : "10px 15px" , "transition" : "all 0.5s ease" , "color" : "rgb(255, 98, 26)" , "borderRadius" : "15px"}} onClick={handleClose1}>Registration</Button> */}
            {/* // </Modal.Footer> */}
        {/* </Modal.Dialog> */}
        {/* // </Modal> */}
          {/* this is sidebar  */}
          {/* {show1 ? <NewModal /> : '' } */}
      <Footer />
      {/* </div> */}
    </>
  )
}

export default Main