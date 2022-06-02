import React , {useState} from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
function Contact() {
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
        // console.log(formdata.Number.length);
      }
        //   console.log(handledata);
      const submitdata = async  (e) => {
      e.preventDefault();
        // console.log(formdata);
        if (formdata.Number.length === 10) {
            
        const requestOptions = {
          Name : formdata.Name,
          Number : formdata.Number,
          Email : formdata.Email
        };
    
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
        // await axios.post("http://65.0.139.240:3000/", requestOptions).then((res) => console.log(res.data)).catch((err) => console.log(err))
        // let data = await res;
        // console.log("responce for this is " + data);
        // initialvalue.Name = ""
        // initialvalue.Number = ""
        // initialvalue.Email = ""
        setformdata({Name : "" , Number : "" , Email : ""});
      }
  return (
    <div className="contact py-5" id='contact'>
        <form className=' py-5' onSubmit={submitdata}>
        <div className="container">
            <div className="row my-5">
                <div className="col-12 text-center">
                    <h1 className='contact-heading'>Get In Touch</h1>
                    <p className='contact-sub-heading'>Your Email Address Will Not Be Published. Required Fields Are Marked *</p>
                </div>
            </div>
            <div className="row padding-side">
                <div className="col-md-6">
                    <div className="row">
                        <input type="text"  id="Name" placeholder='Your Name *' name='Name' value={formdata.Name} onChange={handledata} />
                    </div>
                    <div className="row">
                        <input type="email" id="Email" placeholder='Your Email *' name="Email" required value={formdata.Email} onChange={handledata}/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="row">
                        <input type="tel" minLength="8"  id="Number" placeholder='Your Number *' name="Number" value={formdata.Number} onChange={handledata}/>
                    </div>
                    <div className="row">
                        {/* <input type="text" name="Message" id="Message" placeholder='Your Message ...' /> */}
                    </div>
                </div>
            </div>
            <div className="row padding-side margin-top">
                <div className="col-md-12">
                    <div className="row" >
                        {/* <div className="col-md-2">
                            <input type="checkbox" checked name="Checkbox" id="Checkbox" />
                        </div> */}
                        <div className="col-md-12">
                            <p>I Authorise Chandak Group its representative to contact me with update and notification via email, sms , whatsapp & call. This will overide the registry on DND/NDNC.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row padding-side margin-top">
                <button className="btn btn-style btn-secondary  m-auto mt-5" type='submit' >Send Message</button>
            </div>
        </div>
        </form>
    </div>
  )
}

export default Contact