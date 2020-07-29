import React from "react";
import Navs from './Navs'



const Contact = (props) => {
  console.log(props);
  return (
      <>
    <Navs props={props}/>
    <div className="form-section">
      <h2>Professional Inquires</h2>
      <form
        className="form-input"
        action="https://formspree.io/xnqglenb"
        method="POST"
      >
        <label htmlFor="name">Name</label>
        <input type="text" placeholder="Ex. John Doe" name="name" />
        <br />
        <label htmlFor="email">Email</label>
        <input type="text" name="email" />
        <br />
        <label htmlFor="subject">Subject</label>
        <input type="text" name="subject" />
        <br />
        <label htmlFor="message" >Message</label>
        <textarea rows='12'></textarea>
        <div>
            <button type='submit'>Submit</button>
            <button type='button'>Cancel</button>
        </div>
      </form>
    </div>
    </>
  );
};
export default Contact;
