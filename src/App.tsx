import "./App.css";
import instagram from "./assets/svg-icons/instagram.svg";
import twitter from "./assets/svg-icons/twitter.svg";
import facebook from "./assets/svg-icons/facebook.svg";
import tiktok from "./assets/svg-icons/tik-tok.svg";
import youtube from "./assets/svg-icons/youtube.svg";

function App() {
  return (
    <>
      <div className="wrapper">
        <div className="container main">
          <h1 className="title">Mapped</h1>
          <p className="subtitle">
            Explore, Share, and Connect with Nature: Your Personal Map Journal
          </p>
          <button className="btn">Make a pin</button>
          <div className="socials">
            <img src={instagram} alt="instagram" />
            <img src={twitter} alt="instagram" />
            <img src={facebook} alt="instagram" />
            <img src={tiktok} alt="instagram" />
            <img src={youtube} alt="instagram" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
