import NavigationBar from "../../navigation/navigation";
import Header from "../../layout/header";
import HeroSection from "./heroSection";
import Exchange from "./exchange";
import Featured from "./featured";
import MobileApp from "./mobileApp";
import NewsletterForm from "./newsletterForm";

const LandingPage = (props) => {
  return (
    <div>
      <Header>
        <NavigationBar
          theme={props.theme}
          onChange={props.onChange}
          checked={props.checked}
        />
      </Header>
      <HeroSection />
      <Exchange />
      <Featured />
      <MobileApp onClick={props.onShowDownload} />
      <div
        style={{
          width: "100vw",
          height: "40vh",
          backgroundColor: "rgb(26,28,29)",
          color: "white",
          textAlign: "center",
        }}
      >
        <h1 style={{ margin: "0px", fontSize: "40px", paddingTop: "40px" }}>
          A simple, secure way to buy and sell cryptocurrency
        </h1>
        <p style={{ fontSize: "25px" }}>
          Trade bitcoin and other cryptos in 3 minutes.
        </p>
        <button>Get started</button>
      </div>

      <NewsletterForm />
    </div>
  );
};

export default LandingPage;
