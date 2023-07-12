import React from 'react';
import { Facebook, Instagram, MailOutlined, Phone, Room, Twitter } from "@material-ui/icons";
import './contact.scss';



const Contact = () => {
  return (
     <div className="containerz">
        <h1 className="heading">Contact</h1>
      <div className='section'>
      <div>
      <form className='formz'>
          
            <label>Name</label>
            <input type="text" name="user_name" placeholder="Full Name" required/>

            <label>Email</label>
            <input type="email" name="user_email" placeholder="Your active email" required/>

            <label>Subject</label>
            <input type="text" name="subject" placeholder="Subject" required/>

            <label>Your Message:</label>
            <textarea className='textmessage' name="message" cols="30" rows="10"></textarea>
            <button className="send">Send Message</button>
          
          </form>
          </div>
        <div className='details'>
          
            <h3 className='title'>Our Contact Information</h3>
            <p className='desc'>Fill the form or contact us via 
              other channels listed below.</p>
              <div className='icons'>
                <span>
                  <Phone/>
                  <p>+234 438 247 1670</p>
                  </span>

                <span>
                  <Facebook/>
                  <p>rccgcolfestac</p>
                </span>

                <span>
                  <MailOutlined/>
                  <p>rccgcol@gmail.com</p>
                </span>

                <span>
                  <Room/>
                  <p>TradeFair, Lagos, Nigeria.</p>
                </span>

                <span>
                  <Twitter/>
                  <p>@colfestac</p>
                </span>

                <span>
                  <Instagram/>
                  <p>@cityoflight</p>
                </span>
              </div>
          
        </div>
    
      
    </div>
    </div>
  );
}

export default Contact;
