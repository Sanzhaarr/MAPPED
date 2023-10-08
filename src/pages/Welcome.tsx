import { useEffect } from "react";
import "../App.css";
import Discover from "../components/Discover";
import GLOBE from "vanta/src/vanta.globe";

const Welcome = () => {
  useEffect(() => {
    GLOBE({
      el: "#vanta",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      backgroundColor: 0x1b205f,
    });
  }, []);

  return (
    <>
      <div id="vanta">
        <main className="hero">
          <div className="container">
            <div className="welcome-inner">
              <div className="make-pin">
                <h1 className="title">Mapped</h1>
                <p className="subtitle">
                  Explore, Share, and Connect with Nature Your Personal Map
                  Journal
                </p>
                <button className="btn">Make a pin</button>
              </div>
            </div>
          </div>
        </main>
      </div>

      <Discover />
    </>
  );
};

export default Welcome;
