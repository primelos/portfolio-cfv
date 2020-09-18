import React from "react";
import Navs from "./Navs";

const Contact = (props) => {
  console.log(props);

  const goBack = () => {
    props.history.push('/')
  }

  return (
    <>
      <Navs props={props} />
      <div className="form-section">
        <h2>Professional Inquires</h2>
        <form
          className="form-input"
          action="https://formspree.io/xnqglenb"
          method="POST"
        >
          <label htmlFor="name">Name</label>
          <input type="text" name="name" />
          <br />
          <label htmlFor="email">Email</label>
          <input type="text" name="email" />
          <br />
          <label htmlFor="subject">Subject</label>
          <input type="text" name="subject" />
          <br />
          <label htmlFor="message">Message</label>
          <textarea rows="12"></textarea>
          <div className='button-width'>
            <button type="submit">Submit</button>
            <button type="button" onClick={goBack}>Cancel</button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Contact;
