import React from 'react'

function NewModal() {
  return (
    <>
        <div className="modal1"  >
            <div className="modal-dialog" >
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Company Name</h5>
                    <button type="button" className="close close-modal1" >
                    <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div className="modal-body">
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
                <div className="modal-footer">
                    <button className='call-btn'>Registration</button>
                    {/* <p>+91 7200893494</p> */}
                </div>
                </div>
            </div>
            </div>
    </>
  )
}

export default NewModal