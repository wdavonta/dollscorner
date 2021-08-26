import React from 'react';
import './index.css';
import emailjs from 'emailjs-com'

const ContactForm = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(
      'service_m9bs9d7',
      'template_2fbq3yj',
       e.target,
      "user_6w2Om2UIhKVRRhauCqiGW"
      ).then(res=>{
        console.log(res);
      }).catch(err=> console.log(err));
  }
  return (
    <div className= "container border"
    style= {{marginTop: "50px",
    width: '50%'}} >
      <h1 style ={{marginTop:'25px'}}> Contact Form</h1>
      <form className="row" style= {{ margin:"25px 85px 75px 100px"}}
      onSubmit={sendEmail}
      >
        <label>name</label>
        <input type ="text" name="name" className="form-control" />

        <label>Email</label>
        <input type="email" name="user_email" className="form-control"/>

        <label>Message</label>
        <textarea name='message' rows='4' className="form-control"/>
        <input type= 'submit' 
        value='Send'
        className= "form-control btn btn-primary"
        style= {{ marginTop: "30px" }}
        />
      </form>
    </div>
  );
};

export default ContactForm;