import React, { useEffect, useState } from "react";
import { FlippingCard, Counter, DrumKit } from "./../../DailyChallanges";
import { useHistory } from "react-router-dom";
import "./OneDayChallenge.scss";
import AnchorLink from "react-anchor-link-smooth-scroll";
import TrackVisibility from "react-on-screen";

function OneDayChallenge() {
  const history = useHistory();
  const [flipperOnScreen, setFlipperOnScreen] = useState();
  const [counterOnScreen, setCounterOnScreen] = useState();
  const [drumKitOnScreen, setDrumKitOnScreen] = useState();

  const FlippingCardComponent = (props) => {
    useEffect(() => {
      props.isVisible ? setFlipperOnScreen(true) : setFlipperOnScreen(false);
    }, [props.isVisible]);

    return (
      <div id="card">
        <FlippingCard />
      </div>
    );
  };
  const CounterComponent = (props) => {
    useEffect(() => {
      props.isVisible ? setCounterOnScreen(true) : setCounterOnScreen(false);
    }, [props.isVisible]);

    return (
      <div id="counter">
        <Counter />
      </div>
    );
  };
  const DrumKitComponent = (props) => {
    useEffect(() => {
      props.isVisible ? setDrumKitOnScreen(true) : setDrumKitOnScreen(false);
    }, [props.isVisible]);
    return (
      <div id="drumkit">
        <DrumKit />
      </div>
    );
  };

  // const Testing = (props) => {
  //   const style = {
  //     background: props.isVisible ? "red" : "blue",
  //   };
  //   props.isVisible ? setFlipperOnScreen(true) : setFlipperOnScreen(false);

  //   return (
  //     <div className="one-day__testing" style={style}>
  //       <h1>Testing</h1>
  //     </div>
  //   );
  // };
  // const TestingTwo = (props) => {
  //   const style = {
  //     background: props.isVisible ? "red" : "blue",
  //   };
  //   return (
  //     <div className="one-day__testing" style={style}>
  //       <h1>Testing2</h1>
  //     </div>
  //   );
  // };

  return (
    <div>
      <div className="project__head">
        <h1>Projects</h1>
        <div className="project__buttons">
          <button
            className=""
            onClick={() => {
              history.push("/projects");
            }}
          >
            Course Projects
          </button>
          <button className="btn_active">One-Day Challenges</button>
        </div>
      </div>
      <div className="projects__one-days-wrapper">
        <div className="project__mini-navigation">
          <div>
            <h3>Navigation</h3>
            <ol>
              <li className={flipperOnScreen ? "active" : ""}>
                <AnchorLink href="#card">Card</AnchorLink>
              </li>
              <li className={counterOnScreen ? "active" : ""}>
                <AnchorLink href="#counter">Counter</AnchorLink>
              </li>
              <li className={drumKitOnScreen ? "active" : ""}>
                <AnchorLink href="#drumkit">DrumKit</AnchorLink>
              </li>
            </ol>
          </div>
        </div>

        {/* <React.Fragment>
          <TrackVisibility offset={300}>
            <Testing />
          </TrackVisibility>
        </React.Fragment>
        <React.Fragment>
          <TrackVisibility offset={300}>
            <TestingTwo />
          </TrackVisibility>
        </React.Fragment> */}
        <React.Fragment>
          <TrackVisibility offset={300}>
            <FlippingCardComponent />
          </TrackVisibility>
        </React.Fragment>
        <React.Fragment>
          <TrackVisibility offset={300}>
            <CounterComponent />
          </TrackVisibility>
        </React.Fragment>
        <React.Fragment>
          <TrackVisibility offset={300}>
            <DrumKitComponent />
          </TrackVisibility>
        </React.Fragment>
      </div>
    </div>
  );
}

export default OneDayChallenge;
