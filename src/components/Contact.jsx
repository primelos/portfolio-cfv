import React from "react";
import Navs from "./Navs";
import { FormspreeProvider, useForm, ValidationError } from "@formspree/react";

const Contact = (props) => {
  const [state, handleSubmit] = useForm("contactMe");
  const { errors, submitting, succeeded } = state;
  const goBack = () => {
    props.history.push("/");
  };
  if (succeeded) {
    return <h3>Thanks!</h3>;
  }
  return (
    <>
      <Navs history={props.history} />
      <div className="form-section">
        <h2>Professional Inquires</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name </label>
          <input type="text" name="name" />

          <br />
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" required />
          <ValidationError field="email" prefix="Email" errors={errors} />

          <br />
          <label htmlFor="subject">
            Subject
            <input type="text" name="subject" />
          </label>
          <br />
          <label htmlFor="message">
            Message
            <textarea name="message" id="message" rows="12"></textarea>
          </label>
          <div className="button-width">
            <button disabled={submitting} type="submit">
              Submit
            </button>
            <ValidationError errors={errors} />

            <button type="button" onClick={goBack}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Contact;
