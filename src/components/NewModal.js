import React , {useState} from 'react'
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
// import { CloseButton } from 'react-bootstrap';

function NewModal() {

    const displaystyle = {
        "fontFamily" : "'Allerta Stencil', sans-serif",
        "position": "fixed",
        "bottom": "150px",
        "right": "20px",
        "borderRadius": "15px",
        "color": "gray",
        "width": "300px",
        // "display": "unset",
        "zIndex": "1000"
      }

    

  return (
    <>
        <div className="modal1" style={displaystyle}>
            <div className="header-modal">
                <h3>Registration</h3>
                <img src="assets/images/icons8-close-50.png" width={20} height={20} alt="" />
            </div>
            <div className="content">
                    <h5 style={{"textAlign" : "center"}}>Registration</h5>
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
            <div className="footer">
            <button style={{"marginBottom" : "20px" , "border" : "1px solid #ff621a" , "padding" : "10px 15px" , "transition" : "all 0.5s ease" , "color" : "rgb(255, 98, 26)" , "borderRadius" : "15px"}} >Registration</button>
            </div>
        </div>
    </>
  )
}

export default NewModal