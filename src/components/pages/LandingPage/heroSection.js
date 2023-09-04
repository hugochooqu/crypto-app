import { useState } from "react";
import classes from "./heroSection.module.css";
import src from "../../../assets/gemini-phone.mp4";

const HeroSection = () => {
  const [enteredEmail, setEnteredEmail] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredEmail.trim().length === 0){
        return;
    }

    console.log(enteredEmail);
    setEnteredEmail('');
  };

  const emailChangeHandler = (event) =>{
        setEnteredEmail(event.target.value)
  };

  return (
    <div className={classes.hero}>
      <div className={classes.text}>
        <p style={{ color: "gold", fontWeight: "700", fontSize: "20px" }}>
          Start building your portfolio today
        </p>
        <h1>Buy bitcoin & crypto</h1>
        <p className={classes.textp}>
          Coinz is the safest and easiest place to buy and sell cryptocurrency.
          Sign up today to easily buy 250+ cryptocurrencies.
        </p>
        <form onSubmit={submitHandler} className={classes.formControl}>
          <input id="email" type="email" value={enteredEmail} placeholder="Enter Your Email" onChange={emailChangeHandler} />
          <button type="submit">Get Started</button>
        </form>
      </div>
      <div className={classes.videoo}>
        <video autoPlay muted loop playsInline className={classes.vid}>
          <source src={src} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};
export default HeroSection;
