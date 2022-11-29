import './FormStyle.css'
import React ,{useRef}from 'react'
// import emailjs from 'emailjs-com'
import emailjs from '@emailjs/browser';

const Form = (location) => {

 const sendEmail=(e)=>{
    e.preventDefault();

    emailjs.sendForm('service_cbbrdcb', 'template_pz11trk', e.target, 'z3L8r0b7oEq2mF0Gx')
      .then((result) => {
         // console.log(result.text);
         alert("Thank you ,i will get back to you very soon",location.hostname)
      }, (error) => {
           console.log(error.text);
        //alert('Message Failed!!!   please try after some time')
      });
      e.target.reset();
    }
  return (
    <div className="form">
      <form   onSubmit={sendEmail}>
       <label>Your Name</label>
       <input type="text" name='name' placeholder='type your name' required/>
      
       <label>Email</label>
       <input type="email" name='email' placeholder='email' required />
      
       <label>Subject</label>
       <input type="text"  name='subject' placeholder='subject' required />
      
       <label>Message</label>
       <textarea rows='6'name='message' placeholder='type your message here' required />

       <button className='btn' type='submit' >Submit</button>
      
      
      </form>
    
    </div>
  )
}

export default Form