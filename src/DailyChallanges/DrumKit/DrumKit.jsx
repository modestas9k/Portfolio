import React, { useEffect, useState } from "react";
import "./DrumKit.scss";
import UIfx from "uifx";
import clapSound from "./../../assets/DrumKit-samples/909-Clap-1.wav";
import kickSound from "./../../assets/DrumKit-samples/909-Kick-T0A0A7.wav";
import hiHatSound from "./../../assets/DrumKit-samples/909-HiHatOpen-D4.wav";
import openHatSound from "./../../assets/DrumKit-samples/909-HiHatClosed-D4.wav";
import boomSound from "./../../assets/DrumKit-samples/909-Kick-TAAADA.wav";
import rideSound from "./../../assets/DrumKit-samples/909-Ride-D0.wav";
import snareSound from "./../../assets/DrumKit-samples/909-Snare-T0T3SA.wav";
import lowTomSound from "./../../assets/DrumKit-samples/909-LoTom-0D7.wav";
import midTomSound from "./../../assets/DrumKit-samples/909-MidTom-0D7.wav";

function DrumKit() {
  //const [activeKey, setActiveKey] = useState("");

  const clap = new UIfx(clapSound, {
    volume: 0.4, // number between 0.0 ~ 1.0
    throttleMs: 100,
  });
  const kick = new UIfx(kickSound, {
    volume: 0.4,
    throttleMs: 100,
  });
  const hiHat = new UIfx(hiHatSound, {
    volume: 0.4,
    throttleMs: 100,
  });
  const openHat = new UIfx(openHatSound, {
    volume: 0.4,
    throttleMs: 100,
  });
  const boom = new UIfx(boomSound, {
    volume: 0.4,
    throttleMs: 100,
  });
  const ride = new UIfx(rideSound, {
    volume: 0.4,
    throttleMs: 100,
  });
  const snare = new UIfx(snareSound, {
    volume: 0.4,
    throttleMs: 100,
  });
  const lowTom = new UIfx(lowTomSound, {
    volume: 0.4,
    throttleMs: 100,
  });
  const midTom = new UIfx(midTomSound, {
    volume: 0.4,
    throttleMs: 100,
  });

  window.addEventListener("keydown", (e) => {
    if (e.code === "KeyA") {
      return clap.play();
    } else if (e.code === "KeyS") {
      return hiHat.play();
    } else if (e.code === "KeyD") {
      return kick.play();
    } else if (e.code === "KeyF") {
      return openHat.play();
    } else if (e.code === "KeyG") {
      return boom.play();
    } else if (e.code === "KeyH") {
      return ride.play();
    } else if (e.code === "KeyJ") {
      return snare.play();
    } else if (e.code === "KeyK") {
      return lowTom.play();
    } else if (e.code === "KeyL") {
      return midTom.play();
    }
  });
  console.log(clap);
  // useEffect(() => {
  //   console.log(activeKey);
  // }, [activeKey]);

  return (
    <div className="drum-kit">
      <span className="project-number">03</span>
      <h1>DrumKit</h1>
      <div className="drum-kit__keys-wrapper">
        <div
          data-key="65"
          className={`drum-kit__key ${onkeydown && "playing"}`}
        >
          <kbd>A</kbd>
          <span className="drum-kit__sound">Clap</span>
        </div>
        <div data-key="83" className="drum-kit__key">
          <kbd>S</kbd>
          <span className="drum-kit__sound">hihat</span>
        </div>
        <div data-key="68" className="drum-kit__key">
          <kbd>D</kbd>
          <span className="drum-kit__sound">kick</span>
        </div>
        <div data-key="70" className="drum-kit__key">
          <kbd>F</kbd>
          <span className="drum-kit__sound">openhat</span>
        </div>
        <div data-key="71" className="drum-kit__key">
          <kbd>G</kbd>
          <span className="drum-kit__sound">boom</span>
        </div>
        <div data-key="72" className="drum-kit__key">
          <kbd>H</kbd>
          <span className="drum-kit__sound">ride</span>
        </div>
        <div data-key="74" className="drum-kit__key">
          <kbd>J</kbd>
          <span className="drum-kit__sound">snare</span>
        </div>
        <div data-key="75" className="drum-kit__key">
          <kbd>K</kbd>
          <span className="drum-kit__sound">Low tom</span>
        </div>
        <div data-key="76" className="drum-kit__key">
          <kbd>L</kbd>
          <span className="drum-kit__sound">mid tom</span>
        </div>
      </div>
    </div>
  );
}
export default DrumKit;
