import logo from "../assets/logo.svg";
import style from "./Registration.module.css";

const Registration = () => {
  return (
    <>
      <main className={style.registration}>
        <div className={style.container}>
          <nav className={style.nav}>
            <a href="/" className={style.logo}>
              <img src={logo} alt="mapped" />
            </a>

            <div className={style.sign}>
              <span>Already have an account?</span>
              <a href="/" className={style.signIn}>
                Sign in
              </a>
            </div>
          </nav>

          
        </div>
      </main>
    </>
  );
};

export default Registration;
