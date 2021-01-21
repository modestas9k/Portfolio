import React, { useEffect, useState } from "react";
import "./DrumKit.scss";
import useSound from "use-sound";
import clapSound from "./../../assets/DrumKit-samples/Clap.wav";
import kickSound from "./../../assets/DrumKit-samples/Kick.wav";
import crashSound from "./../../assets/DrumKit-samples/Crash.wav";
import openHatSound from "./../../assets/DrumKit-samples/HiHatClosed.wav";
import boomSound from "./../../assets/DrumKit-samples/KickBoom.wav";
import rideSound from "./../../assets/DrumKit-samples/Ride.wav";
import snareSound from "./../../assets/DrumKit-samples/Snare.wav";
import lowTomSound from "./../../assets/DrumKit-samples/LoTom.wav";
import midTomSound from "./../../assets/DrumKit-samples/MidTom.wav";

function DrumKit() {
  const [isClap, setClap] = useState(false);
  const [isKick, setKick] = useState(false);
  const [isCrash, setCrash] = useState(false);
  const [isOpenHat, setOpenHat] = useState(false);
  const [isBoom, setBoom] = useState(false);
  const [isRide, setRide] = useState(false);
  const [isSnare, setSnare] = useState(false);
  const [isLowTom, setLowTom] = useState(false);
  const [isMidTom, setMidTom] = useState(false);

  const [clap] = useSound(clapSound, {
    volume: 0.4,
  });

  const [kick] = useSound(kickSound, {
    volume: 0.4,
  });
  const [crash] = useSound(crashSound, {
    volume: 0.4,
  });
  const [openHat] = useSound(openHatSound, {
    volume: 0.4,
  });
  const [boom] = useSound(boomSound, {
    volume: 0.4,
  });
  const [ride] = useSound(rideSound, {
    volume: 0.4,
  });
  const [snare] = useSound(snareSound, {
    volume: 0.4,
  });
  const [lowTom] = useSound(lowTomSound, {
    volume: 0.4,
  });
  const [midTom] = useSound(midTomSound, {
    volume: 0.4,
  });
  const eventHandler = (key) => {
    if (key === "KeyA") {
      clap();
      setClap(true);
      setTimeout(() => {
        setClap(false);
      }, 300);
    } else if (key === "KeyS") {
      crash();
      setCrash(true);
      setTimeout(() => {
        setCrash(false);
      }, 300);
    } else if (key === "KeyD") {
      kick();
      setKick(true);
      setTimeout(() => {
        setKick(false);
      }, 300);
    } else if (key === "KeyF") {
      openHat();
      setOpenHat(true);
      setTimeout(() => {
        setOpenHat(false);
      }, 300);
    } else if (key === "KeyG") {
      boom();
      setBoom(true);
      setTimeout(() => {
        setBoom(false);
      }, 300);
    } else if (key === "KeyH") {
      ride();
      setRide(true);
      setTimeout(() => {
        setRide(false);
      }, 300);
    } else if (key === "KeyJ") {
      snare();
      setSnare(true);
      setTimeout(() => {
        setSnare(false);
      }, 300);
    } else if (key === "KeyK") {
      lowTom();
      setLowTom(true);
      setTimeout(() => {
        setLowTom(false);
      }, 300);
    } else if (key === "KeyL") {
      midTom();
      setMidTom(true);
      setTimeout(() => {
        setMidTom(false);
      }, 300);
    }
  };

  useEffect(() => {
    const onKeyDown = ({ code }) => {
      eventHandler(code);
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="drum-kit">
      <span className="project-number">03</span>
      <h1>DrumKit</h1>
      <div className="drum-kit__keys-wrapper">
        <div
          className={`drum-kit__key ${isClap ? "playing" : ""} `}
          onClick={() => eventHandler("KeyA")}
        >
          <kbd>A</kbd>
          <span className="drum-kit__sound">Clap</span>
        </div>
        <div
          className={`drum-kit__key ${isCrash ? "playing" : ""} `}
          onClick={() => eventHandler("KeyS")}
        >
          <kbd>S</kbd>
          <span className="drum-kit__sound">crash</span>
        </div>
        <div
          className={`drum-kit__key ${isKick ? "playing" : ""} `}
          onClick={() => eventHandler("KeyD")}
        >
          <kbd>D</kbd>
          <span className="drum-kit__sound">kick</span>
        </div>
        <div
          className={`drum-kit__key ${isOpenHat ? "playing" : ""} `}
          onClick={() => eventHandler("KeyF")}
        >
          <kbd>F</kbd>
          <span className="drum-kit__sound">close hat</span>
        </div>
        <div
          className={`drum-kit__key ${isBoom ? "playing" : ""} `}
          onClick={() => eventHandler("KeyG")}
        >
          <kbd>G</kbd>
          <span className="drum-kit__sound">boom</span>
        </div>
        <div
          className={`drum-kit__key ${isRide ? "playing" : ""} `}
          onClick={() => eventHandler("KeyH")}
        >
          <kbd>H</kbd>
          <span className="drum-kit__sound">ride</span>
        </div>
        <div
          className={`drum-kit__key ${isSnare ? "playing" : ""} `}
          onClick={() => eventHandler("KeyJ")}
        >
          <kbd>J</kbd>
          <span className="drum-kit__sound">snare</span>
        </div>
        <div
          className={`drum-kit__key ${isLowTom ? "playing" : ""} `}
          onClick={() => eventHandler("KeyK")}
        >
          <kbd>K</kbd>
          <span className="drum-kit__sound">Low tom</span>
        </div>
        <div
          className={`drum-kit__key ${isMidTom ? "playing" : ""} `}
          onClick={() => eventHandler("KeyL")}
        >
          <kbd>L</kbd>
          <span className="drum-kit__sound">mid tom</span>
        </div>
      </div>
    </div>
  );
}
export default DrumKit;
