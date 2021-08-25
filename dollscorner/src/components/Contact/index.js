// import React from 'react';
// import './index.css';
// import axios from 'axios';

// class ContactForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: '',
//       email: '',
//       message: ''
//     }
//   }

//   handleSubmit(e){
//     e.preventDefault();
//     axios({
//       method: "POST",
//       url:"http://localhost:3002/send",
//       data:  this.state
//     }).then((response)=>{
//       if (response.data.status === 'success') {
//         alert("Message Sent.");
//         this.resetForm()
//       } else if (response.data.status === 'fail') {
//         alert("Message failed to send.")
//       }
//     })
//   }

//   render() {
//     return(
//       <div className="App">
//         <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
//           <div className="form-group">
//             <label htmlFor="name">Name</label>
//             <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
//           </div>
//           <div className="form-group">
//             <label htmlFor="exampleInputEmail1">Email address</label>
//             <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
//           </div>
//           <div className="form-group">
//             <label htmlFor="message">Message</label>
//             <textarea className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
//           </div>
//           <button type="submit" className="btn btn-primary">Submit</button>
//         </form>
//       </div>
//     );
//   }

//   onNameChange(event) {
//     this.setState({name: event.target.value})
//   }

//   onEmailChange(event) {
//     this.setState({email: event.target.value})
//   }

//   onMessageChange(event) {
//     this.setState({message: event.target.value})
//   }


// }

// export default ContactForm;

// import React from 'react';

// export class ContactForm extends React.Component {
//   constructor(props) {
// 	super(props);
// 	this.state = { feedback: '', name: 'Name', email: 'email@example.com' };
// 	this.handleChange = this.handleChange.bind(this);
// 	this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   render() {
// 	return (
//   	<form className="test-mailing">
//     	<h1>Let's see if it works</h1>
//     	<div>
//       	<textarea
//         	id="test-mailing"
//         	name="test-mailing"
//         	onChange={this.handleChange}
//         	placeholder="Post some lorem ipsum here"
//         	required
//         	value={this.state.feedback}
//         	style={{width: '100%', height: '150px'}}
//       	/>
//     	</div>
//     	<input type="button" value="Submit" className="btn btn--submit" onClick={this.handleSubmit} />
//   	</form>
// 	)
//   }

//   handleChange(event) {
//     this.setState({feedback: event.target.value})
//   }

//   handleSubmit (event) {
//     const templateId = 'template_id';
  
//     this.sendFeedback(templateId, {message_html: this.state.feedback, from_name: this.state.name, reply_to: this.state.email})
//     }
  
//     sendFeedback (templateId, variables) {
//     window.emailjs.send(
//       'gmail', templateId,
//       variables
//       ).then(res => {
//         console.log('Email successfully sent!')
//       })
//       // Handle errors here however you like, or use a React error boundary
//       .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
//     }
// }

// export default ContactForm;


const ContactForm = () => {
  return (
    <div className= "container border"
    style= {{marginTop: "50px",
    width: '50%'}} >
      <h1 style ={{marginTop:'25px'}}> Contact Form</h1>
      <form className="row" style= {{ margin:"25px 85px 75px 100px"}}>
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