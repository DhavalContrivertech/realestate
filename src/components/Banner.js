import React  from 'react'
import {popcontext} from '../App';
import { useContext } from 'react';

function Banner(props) {
    const {state , dispatch} = useContext(popcontext);

  const showpopup = () => {
    console.log("value of popup " , state);
    dispatch({type : "POPUP" , payload : true});
  }
  return (
    <>
        <div className="banner">
            <div className="container row">
                <div className="col-md-9 col-12">
                    <h1>{props.title}</h1>
                </div>
                <div className="col-md-3 col-12 btn-center">
                <button className="btn btn-style btn-secondary mt-4 btn-new-style" onClick={showpopup}>{props.btn}</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Banner