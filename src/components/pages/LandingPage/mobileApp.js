import classes from './mobileApp.module.css';

import src from '../../../assets/homepage-phone-13.mp4'

const MobileApp = (props) => {
    return (
        <div className={classes.mobile}>
            <div className={classes.text}>
                <h1>The trusted crypto exchange</h1>
                <p>Millions of customers in 70 countries choose us to build their crypto portfolio.</p>
                <div className={classes.btn}>
                    <button className={classes.btn1}>Get started</button>
                    <button className={classes.btn2} onClick={props.onClick}>Get the mobile app</button>
                </div>
            </div>
            <div>
            <video autoPlay muted loop playsInline className={classes.vid}>
          <source src={src} type="video/mp4" />
        </video>
            </div>
        </div>
    )
};

export default MobileApp;