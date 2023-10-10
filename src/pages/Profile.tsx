import Footer from "../layout/Footer/Footer";
import Header from "../layout/Header/Header";
import pfp from "../assets/myamoto.jpg";

import style from "./Profile.module.scss";
import { Sidebar } from "../components/static-components/static-components";

const Profile = () => {
  return (
    <>
      {/* <Header /> */}
      <main className={style.wrap}>
        <div className={style.profile}>
          <Sidebar />
          <div className="map-container">MAP</div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Profile;
