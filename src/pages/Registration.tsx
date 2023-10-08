import { useState } from "react";

import logo from "../assets/logo.svg";
import style from "./Registration.module.css";

const Registration = () => {
  const [isShown, setIsShown] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsShown((current) => !current);
    setIsActive(!isActive);
  };

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
          <form action="" className={style.form}>
            <h1 className={style.title}>
              Welcome to Mapped! <br /> Let’s begin the adventure
            </h1>

            <div className={style.inputs1}>
              <label htmlFor="email" className={style.label}>
                Enter your email*
              </label>
              <div className={style.inputWrap}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="Layer_1"
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                >
                  <path d="m18.541,10.894l-4.717-4.717-.707.707,4.616,4.617H5v1h12.735l-4.618,4.617.707.707,4.717-4.716c.296-.296.459-.69.459-1.108s-.163-.812-.459-1.106Z" />
                </svg>
                <input type="email" className={style.input} />
                <button
                  type="button"
                  onClick={handleClick}
                  className={
                    isActive ? "active-button" : "inactive-button"
                  }
                >
                  Continue
                </button>
              </div>
            </div>

            {isShown && (
              <div className={style.inputs1}>
                <label htmlFor="password" className={style.label}>
                  Create a password*
                </label>
                <div className={style.inputWrap}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="Layer_1"
                    data-name="Layer 1"
                    viewBox="0 0 24 24"
                  >
                    <path d="m18.541,10.894l-4.717-4.717-.707.707,4.616,4.617H5v1h12.735l-4.618,4.617.707.707,4.717-4.716c.296-.296.459-.69.459-1.108s-.163-.812-.459-1.106Z" />
                  </svg>
                  <input type="password" className={style.input} />
                </div>
              </div>
            )}

            {isShown && (
              <div className={style.inputs1}>
                <label htmlFor="username" className={style.label}>
                  Enter your username*
                </label>
                <div className={style.inputWrap}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="Layer_1"
                    data-name="Layer 1"
                    viewBox="0 0 24 24"
                  >
                    <path d="m18.541,10.894l-4.717-4.717-.707.707,4.616,4.617H5v1h12.735l-4.618,4.617.707.707,4.717-4.716c.296-.296.459-.69.459-1.108s-.163-.812-.459-1.106Z" />
                  </svg>
                  <input type="text" className={style.input} />
                </div>
                
              <button className={style.signUp}>Sign Up</button>
              </div>
            )}
          </form>
        </div>
      </main>
    </>
  );
};

export default Registration;
