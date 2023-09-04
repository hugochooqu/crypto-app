import { useState } from "react";

import classes from "./newsletterForm.module.css";

const NewsletterForm = () => {
  const [enteredEmail, setEnteredEmail] = useState("");

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const FormSubmitHandler = (event) => {
    event.preventDefault();

    console.log(enteredEmail);

    setEnteredEmail("");
  };

  return (
    <div className={classes.formControl}>
        <h3>Stay up to date</h3>
      <form onSubmit={FormSubmitHandler}>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          onChange={emailInputChangeHandler}
          value={enteredEmail}
          required
        />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};

export default NewsletterForm;
