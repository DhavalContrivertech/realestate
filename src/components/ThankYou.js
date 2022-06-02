import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function ThankYou() {
    const navigation = useNavigate();
    const reload = () => {
        navigation("/")
        window.location.reload()
    }
  return (
      <>
        <div className="container-fluid w-100  thankyou ">
            <div className="container">
                <h2>Your Form Has Been Submitted Succesfully Sent To Our Sales Team!</h2>
                <h2>Soon You Will Receive Broucher, Floor Plan, Final Price And Other Detail </h2>
                <button  onClick={reload} className="btn btn-style btn-secondary mt-4">Go Back Home</button>
            </div>
        </div>
      </>
  )
}

export default ThankYou