import "../App.css";
import Discover from "../components/Discover";

const Welcome = () => {
  return (
    <>
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

      <Discover />
    </>
  );
};

export default Welcome;
