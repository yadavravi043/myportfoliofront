import './FormStyle.css'
import React from 'react'

const Form = () => {
  return (
    <div className="form">
      <form>
       <label>Your Name</label>
       <input type="text" placeholder='type your name' required/>
      
       <label>Email</label>
       <input type="email" placeholder='email' required />
      
       <label>Subject</label>
       <input type="text" placeholder='subject' required />
      
       <label>Message</label>
       <textarea rows='6' placeholder='type your message here' required />

       <button className='btn' type='submit' >Submit</button>
      
      
      </form>
    
    </div>
  )
}

export default Form