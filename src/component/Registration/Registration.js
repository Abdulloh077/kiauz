import React from "react";
import { signInWithGoogle } from "../firebase/config";
import "./Registration.css";
const Registration = () => {
  return (
    <div>
      <video
        src="https://cdn.kia.ru/media-data/banner/video/c4b54edd-3f3d-4a2c-bf44-44e9ef2dc763.mp4"
        muted="muted"
        autoplay="autoplay"
        className="vd"
        loop="loop"
        preload="https://cdn.kia.ru/media-data/banner/video/c4b54edd-3f3d-4a2c-bf44-44e9ef2dc763.mp4"
        playsinline=""
      ></video>
      <button
         id="but"
        type="button"
        class="btn btn-outline-secondary "
        onClick={signInWithGoogle}
      >
        <p id="send-p">Sign In</p>
      </button>
    </div>
  );
};

export default Registration;
