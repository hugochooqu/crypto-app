import { Link } from "react-router-dom";
import classes from "./navigation.module.css";
import ReactSwitch from "react-switch";

const NavigationBar = (props) => {
  return (
    <div className={classes.nav}>
      <div>
        <h1><Link to='/' style={{ textDecoration: 'none', color:"gold" }}>Coinz</Link></h1>
      </div>
      <ul>
        <li>Explore</li>
        <li>Web3</li>
        <li>Learn</li>
        <li>Individuals</li>
        <li>Business</li>
        <li>Developers</li>
        <li>Company</li>
      </ul>
      <div>
        <ul>
          <li>Sign In</li>
          <li>Get started</li>
        </ul>
      </div>
      <div style={{ display: "flex", flexDirection: "column", justifyContent:'center', fontSize:"12px" }}>
        <label>{props.theme === "light" ? "Light mode" : "Dark mode"}</label>
        <ReactSwitch onChange={props.onChange} checked={props.checked} />
      </div>
    </div>
  );
};

export default NavigationBar;
