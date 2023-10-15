import Footer from "../layout/Footer/Footer";

import style from "./Profile.module.scss";
import { Sidebar } from "../components/static-components/static-components";
import Map from "../components/map/Map";

const Profile = () => {
  return (
    <>
      <div className={style.profile}>
        <Sidebar />

        <Map />
      </div>
      <Footer />
    </>
  );
};

export default Profile;
