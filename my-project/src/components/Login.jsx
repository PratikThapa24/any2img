import React from "react";
import Card from "./Card/Card";
import FlashIcon from "./navigation/FlashIcon";

function Login() {
  return (
    <>
      <div className="h-screen w-screen flex items-center justify-center bg-customDark">
        <div className="h-2/5 w-80 bg-black bg-opacity-40 text-black flex flex-col items-center rounded-3xl ">
          <div className="m-10">
            <FlashIcon size="130px"/>
          </div>
          <div className="bg-white w-4/5 h-1/4 rounded-3xl m-10 bg-opacity-10 flex flex-row items-center justify-center gap-x-6 btn-animated-white">
            <img loading="lazy" height="24" width="24" id="provider-logo-dark" src="https://authjs.dev/img/providers/google.svg"></img>
            <p className="text-offWhite font-bold">Sign in With Google</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
