import React from 'react'

function Modal() {
  return (
    <>
      <div className="modal"  role="dialog">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Company Name</h5>
        <button type="button" className="close close-modal" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <div className="modal-body">
        <h3 style={{"textAlign" : "center"}}>Registration</h3>
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
      </div>
      <div className="modal-footer">
        <button className='call-btn'>Get Instant Call Back</button>
        <p>+91 7200893494</p>
      </div>
    </div>
  </div>
</div>


    </>
  )
}

export default Modal