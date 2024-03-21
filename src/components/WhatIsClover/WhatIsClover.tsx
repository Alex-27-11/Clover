import React from "react";
import Logo from "../../assets/images/mobil/WhatIsClover/лого.png";
import LogoTabl from "../../assets/images/tabl/WhatIsClover/логоTabl.png";
import LogoDesc from "../../assets/images/desc/WhatIsClover/логоDesc.png";

import "./WhatIsClover.scss";

const WhatIsClover: React.FC = () => {
  return (
    <section className="whatIsClover">
      <div className="whatIsClover__container -container">
        <div className="whatIsClover__inner">
          <section className="whatIsClover__images">
            <img src={Logo} alt="" className="whatIsClover__imgLogo imgMobil" />
            <img
              src={LogoTabl}
              alt=""
              className="whatIsClover__imgLogo-tabl imgTabl"
            />
            <img
              src={LogoDesc}
              alt=""
              className="whatIsClover__imgLogo-desc imgDesc"
            />
          </section>
          <section className="whatIsClover__text">
            <div className="whatIsClover__text-top">
              <div className="whatIsClover__line line"></div>
              <h2 className="whatIsClover__title title">
                Что такое Clover Research?
              </h2>
            </div>
            <div className="whatIsClover__text-bot">
              <p className="whatIsClover__mainText">
                Маркетинговые исследования в медицине и фармацевтике
              </p>
              <div className="whatIsClover__greenBorder">
                Целевая аудитория - врачи
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default WhatIsClover;
