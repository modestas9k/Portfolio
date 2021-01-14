import React, { useState } from "react";
import "./FlippingCard.style.scss";
import chip from "./../../assets/card_chip.png";

function FlippingCard() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="flipp__container">
      <span className="project-number">01</span>
      <div
        className={toggle ? "flippCard flipped" : "flippCard"}
        onClick={() => setToggle(!toggle)}
      >
        <div className="flippCard__side flippCard__front-side">
          <img
            className="card-logo"
            src="https://www.urmas.net/wp-content/uploads/2016/05/Swedbank-logo_Lithuania-success-stories_Swedbank2.png"
            alt="logo"
          />
          <div className="chip-box">
            <img src={chip} alt="chip" />
            <div>debit</div>
          </div>
          <h2>5167 9620 0000 0000</h2>
          <div className="exp-date">
            <span className="month_year">month / year</span>
            <div>
              <span>valid thru</span>
              <p>09/23</p>
            </div>
          </div>
          <div className="card-holder-name">Vardenis Pavardenis</div>
          <span className="wifi_logo">
            <i className="fa fa-wifi" aria-hidden="true"></i>
          </span>
          <img
            className="mastercard_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1000px-Mastercard-logo.svg.png"
            alt="mastercard logo"
          />
        </div>
        <div className="flippCard__side flippCard__back-side">
          <span className="text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit
            adipisicing.
          </span>
          <div className="gold_line"></div>
          <span className="text">AUTHORIZED SIGNATURE</span>
          <div className="signature_box">
            <span>NUM</span>
          </div>
          <div className="card_bottom">
            <img
              className="debit_logo"
              src="https://www.flaticon.com/svg/static/icons/svg/217/217438.svg"
              alt="debit logo"
            />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
              sint quod, saepe consequuntur a harum at vitae eum maiores tempore
              repudiandae tenetur facilis, nam cupiditate? Facilis aliquid quo
              nulla impedit.
            </p>
          </div>
          <span className="text">IDEMIA 9 1213214343121 21/21</span>
        </div>
      </div>
      <h4>Click on the card!</h4>
    </div>
  );
}
export default FlippingCard;
