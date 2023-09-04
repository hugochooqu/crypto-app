import classes from "./exchange.module.css";

const Exchange = () => {
  return (
    <div className={classes.exchange}>
      <div>
        <h1>Coinz is a crypto exchange for everyone</h1>
        <div className={classes.info}>
          <div>
            <h1 style={{ marginBottom: "0px" }}>12M+</h1>
            <p style={{ fontSize: "20px", textAlign: "center", margin: "0px" }}>
              Clients
            </p>
          </div>
          <div>
            <h1 style={{ marginBottom: "0px" }}>120+</h1>
            <p style={{ fontSize: "20px", textAlign: "center", margin: "0px" }}>
              Countries supported
            </p>
          </div>
          <div>
            <h1 style={{ marginBottom: "0px" }}>$120B</h1>
            <p style={{ fontSize: "20px", textAlign: "center", margin: "0px" }}>
              Assets on platform
            </p>
          </div>
        </div>
      </div>
      <div className={classes.infoInfo}>
        <div className={classes.infoImg}>
            <img style={{width: '650px', height:'600px', padding:'50px 0px 0px 70px'}} src='https://assets-cms.kraken.com/images/51n36hrp/facade/65aef2b4f841868165384eeda4426849a2f54e13-1087x814.png?w=2880&fit=min&fm=webp' alt='crypto' />
        </div>
        <div className={classes.infoTxt}>
            <h3>CRYPTO EXCHANGE</h3>
            <h2 style={{fontSize:'50px', color:'gold'}}>Buy crypto in minutes</h2>
            <ol>
                <li>
                    <h2>Create yourr free Coinz accouunt</h2>
                </li>
                <li>
                    <h2>Connect your funding method</h2>
                </li>
                <li>
                    <h2>Buy and sell 200+ cryptocurrencies</h2>
                </li>
            </ol>
            <button>Buy Coins</button>
        </div>
      </div>
    </div>
  );
};
export default Exchange;
