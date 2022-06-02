import React , {useContext, useState} from 'react'
import About from './components/About'
// import Counter from './components/Counter'
import Footer from './components/Footer'
import Header from './components/Header'
// import Minisidebar from './components/Minisidebar'
// import Modal from './components/Modal'
// import NewModal from './components/NewModal'
import Plans from './components/Plans'
import Properties from './components/Properties'
import Reviews from './components/Reviews'
import Slidersection from './components/Slidersection'
import StartProject from './components/StartProject'
import Videos from './components/Videos'
import Whatwedo from './components/Whatwedo'
import Contact from './components/Contact'
import {  Modal } from 'react-bootstrap'
// import { CloseButton , Button } from 'react-bootstrap'
import axios from 'axios'
// import { initialState , reducer} from './reducer/popupreducer';
// import CloseButton from 'react-bootstrap'
import {popcontext} from './App';
import Swal from 'sweetalert2';
import Banner from './components/Banner'
import { useNavigate } from 'react-router-dom'



function Main() {
  const navigation = useNavigate();
  const initialvalue = {
    Name : "",
    Number : "",
    Email : ""
  }

  const [formdata , setformdata] = useState(initialvalue);

  const handledata = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    
    setformdata({...formdata , [name] : value});
    
  }
  // console.log(handledata);
  const submitdata = async  (e) => {
  e.preventDefault();
  if (formdata.Number.length === 10) {
    // console.log(formdata);
    const requestOptions = {
      Name : formdata.Name,
      Number : formdata.Number,
      Email : formdata.Email
    };

    // const mailbody = {
    //   Name : formdata.Name,
    //   Email : formdata.Email,
    //   Number : formdata.Number
    // }

    await axios.post("http://65.0.139.240:3000", requestOptions).then((res) => {
      console.log(res.status)
      if (res.status) {
          Swal.fire({
            title: 'Your enquiry has been received',
          })
          navigation("/Thankyou")
      }

    }
    ).catch((err) => console.log(err))
  }else{
    Swal.fire({
        title: 'Please Enter Valid Number',
    })
}
    // let data = await res;
    // console.log("responce for this is " + data);
    setformdata({Name : "" , Number : "" , Email : ""});

  }
  const {state , dispatch} = useContext(popcontext);

  // const [show, setShow] = useState(true);
  const [show1, setShow1] = useState(true);

  // const handleClose = () => setShow(false);
  const handleClose1 = () => setShow1(false);

  const handleClose11 = (e) => {
    
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

  const handlepopup = () => {
    dispatch({type : "POPUP" , payload : false});
  }
  
  // useEffect(() => {
  //   dispatch({type : "POPUP" , payload : false});
  // })
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
        {/* Book Site Visit To Explore More - button ("BOOK SITE VISIT") 
Get Latest Payment Plan & Scheme - button ("View Payment Plan & Scheme") */}
        <Banner title="Download Brochure & Floor Plan To Explore More" btn="Get Final Price"/>
        <About />
        <Whatwedo />
        {/* <Counter /> */}
        <Banner title="Book Site Visit To Explore More" btn="BOOK SITE VISIT"/>
        <Properties />
        <Plans />
        <Reviews />
        <Banner title="Get Latest Payment Plan & Scheme" btn="View Payment Plan & Scheme"/>
        <Videos />
        <Contact />
        <StartProject />
        {/* this is onload function */}

       {/* <Modal className={state ? "showpopup" : "removepopup"}> */}
       <Modal show={state} classname="openmodalclick">
        <Modal.Header >
          {/* <Modal.Title>Registration</Modal.Title> */}
          <Modal.Title className='text-center w-100'>Just a click away <br /> from your dream home</Modal.Title>
          <button type="button" style={btnstyle} className="btn-close" aria-label="Hide" onClick={handlepopup}>
            <img src="assets/images/icons8-close-50.png" width={20} height={20} alt="" />
          </button>
        </Modal.Header>
        <Modal.Body className='row'>
          <div className="col-md-4 col-12">
            <div className="col-12 padding-lost">
              <h5 style={{"fontSize" : "17px" , "textAlign" : "center"}}>We Promise</h5>
            </div>
            <div className='wePromise'>
              <div className="col-xs-4 col-md-12 padding-lost ">
                <div className="col-12 d-grid place-items-center ">
                  <img src="assets/images/instant_call_back.png" alt="" width="40%" style={{"margin" : "auto"}}/>
                </div>
                <div className="col-12 promise-sec-text">
                  Get Instant Call Back
                </div>
              </div>
              <div className="col-xs-4 col-md-12 padding-lost">
                <div className="col-12 d-grid place-items-center ">
                  <img src="assets/images/free_site_visit.png" alt="" width="40%" style={{"margin" : "auto"}}/>
                </div>
                <div className="col-12 promise-sec-text">
                  free site visit
                </div>
              </div>
              <div className="col-xs-4 col-md-12 padding-lost">
                <div className="col-12 d-grid place-items-center ">
                  <img src="assets/images/unmatched_price.png" alt="" width="40%" style={{"margin" : "auto"}}/>
                </div>
                <div className="col-12 promise-sec-text">
                  Unmactched Price
                </div>
              </div>
              </div>
          </div>
          <div className="col-md-8 col-12 ">
            {/* <h3 style={{"textAlign" : "center" , "fontSize" : "17px" }}>Register Here</h3> */}
            <h3 className='modal-subheading' >Chandak Greenairy</h3>
            <form onSubmit={submitdata} >
                <div className="input-group mb-3 mt-3">
                    <input type="text" className="form-control" placeholder="Name" name='Name' required value={formdata.Name} onChange={handledata} />
                </div>
                <div className="input-group mb-3">
                    <input type="tel" minLength="8" className="form-control" placeholder="Number" name="Number" required value={formdata.Number} onChange={handledata}/>
                </div>
                <div className="input-group mb-3">
                    <input type="email" className="form-control" placeholder="Email" name="Email" required value={formdata.Email} onChange={handledata}/>
                </div>
                <div className="button d-grid place-items-center">
                  <button className='call-btn' type='submit'  >Get Instant Call Back</button>
                </div>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
        <p><a href="tel:7200893494" className='text-white'>+91 7200893494</a></p>
        </Modal.Footer>
      </Modal> 
            {/* this is onload function */}

          
          {/* thsi is sidebar  */}
            <button style={contactbtn} onClick={handleClose11}>
              contact us
            </button>
            {
              show1 ?  
              (<div className="modal1 py-3 shadow">
                            <form onSubmit={submitdata}>
                    <div className="header-modal">
                        <h3>Register Here</h3>
                        <button type="button" style={btnstyle} className="btn-close" aria-label="Hide" >
                        <img src="assets/images/icons8-close-50.png" onClick={handleClose1} width={20} height={20} alt="" />
                        </button>
                    </div>
                    <div className="content mt-3 px-3">
                            {/* <h5 style={{"textAlign" : "center"}}>Registration</h5> */}
                                <div className="input-group mb-3 mt-3">
                                    <input type="text" className="form-control" placeholder="Name" required name='Name' value={formdata.Name} onChange={handledata} />
                                </div>
                                <div className="input-group mb-3">
                                    <input type="tel" minLength="8" className="form-control" placeholder="Number" required name="Number" value={formdata.Number} onChange={handledata} />
                                </div>
                                <div className="input-group mb-1">
                                    <input type="email" className="form-control" placeholder="Email" required name="Email" value={formdata.Email} onChange={handledata}/>
                                </div>
                    </div>
                    <div className="footer mt-3">
                    <button style={{"marginBottom" : "20px" , "border" : "1px solid #ff621a" , "padding" : "10px 15px" , "transition" : "all 0.5s ease" , "color" : "rgb(255, 98, 26)" , "borderRadius" : "15px"}} >Get Instant Call Back</button>
                    </div>
                    </form>

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