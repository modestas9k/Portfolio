import React, { useEffect, useState } from "react";
import "./Counter.scss";

function Counter() {
  const calculateTimeLeft = (years, month, day) => {
    let year = new Date(years, month - 1, day);
    let difference = year - +new Date();

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [guestData, setGuestData] = useState({
    year: 2022,
    month: 1,
    day: 1,
  });
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(
        calculateTimeLeft(guestData.year, guestData.month, guestData.day)
      );
    }, 1000);
    return () => clearTimeout(timer);
  });

  function isEmpty(obj) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }
    return true;
  }

  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }

  return (
    <div id="counter" className="counter">
      <span className="project-number">02</span>

      <div className="counter__title-box">
        <h1>CountDown</h1>
        <div className="counter__input-box">
          <label htmlFor="year">
            Year
            <input
              id="year"
              type="number"
              min="2021"
              max="2222"
              value={guestData.year}
              onChange={(e) =>
                setGuestData({ ...guestData, year: e.target.value })
              }
            />
          </label>
          <label htmlFor="month">
            month
            <input
              id="month"
              type="number"
              min="1"
              max="12"
              value={guestData.month}
              onChange={(e) =>
                setGuestData({ ...guestData, month: e.target.value })
              }
            />
          </label>
          <label htmlFor="day">
            day
            <input
              id="day"
              type="number"
              min="1"
              max="31"
              value={guestData.day}
              onChange={(e) =>
                setGuestData({ ...guestData, day: e.target.value })
              }
            />
          </label>
        </div>
      </div>
      {!isEmpty(timeLeft) && (
        <div className="counter__wrapper">
          <div className="counter__big-numbers-box">
            <p className="counter__big-text" id="days">
              {timeLeft.days}
            </p>
            <span>days</span>
          </div>
          <div className="counter__big-numbers-box">
            <p className="counter__big-text" id="hours">
              {timeLeft.hours}
            </p>
            <span>hours</span>
          </div>
          <div className="counter__big-numbers-box">
            <p className="counter__big-text" id="mins">
              {formatTime(timeLeft.minutes)}
            </p>
            <span>mins</span>
          </div>
          <div className="counter__big-numbers-box">
            <p className="counter__big-text" id="seconds">
              {formatTime(timeLeft.seconds)}
            </p>
            <span>seconds</span>
          </div>
        </div>
      )}
      {isEmpty(timeLeft) && (
        <div>
          <h1>Times up!</h1>
        </div>
      )}
    </div>
  );
}

export default Counter;
