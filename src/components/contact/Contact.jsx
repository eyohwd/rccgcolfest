import React from 'react';
import { Facebook, Instagram, MailOutlined, Phone, Room, Twitter } from "@material-ui/icons";
import './contact.scss';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";



const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, 'template_ogs06h7', form.current, 'Fc59in1UR0QF5Y0tx')
      .then((result) => {
        toast.success("Message sent successfully")
          //console.log(result.text);
      }, (error) => {
        toast.error(error.text)
          //console.log(error.text);
      });
      e.target.reset();
  };


  return (
     <div className="containerz">
        <h1 className="heading">Contact</h1>
      <div className='section'>
      <div>
      <form className='formz'  ref={form} onSubmit={sendEmail}>
          
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
                  <p>08093603724</p>
                  </span>

                <span>
                  <Facebook/>
                  <p>rccgcolfestac</p>
                </span>

                <span>
                  <MailOutlined/>
                  <p>rccgcityoflight@gmail.com</p>
                </span>

                <span>
                  <Room/>
                  <p> 1st avenue extention festac, Lagos, Nigeria.</p>
                </span>

                <span>
                  <Twitter/>
                  <p>rccgcolfestac</p>
                </span>

                <span>
                  <Instagram/>
                  <p>_rccgcolfestac</p>
                </span>
              </div>
          
        </div>
    
      
    </div>
    </div>
  );
}

export default Contact;
