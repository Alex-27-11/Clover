import React from "react";
import "./ThreeIph.scss";
import Iph1Desc from "../../assets/images/desc/ThreeIph/Iph1.png";
import Iph2Desc from "../../assets/images/desc/ThreeIph/Iph2.png";
import Iph3Desc from "../../assets/images/desc/ThreeIph/Iph3.png";
import ProtoImgDesc from "../../assets/images/desc/ThreeIph/Prototypes.png";
import QuestionsImg from "../../assets/images/mobil/ThreeIph/Questions.png";
import QuestionsImgTabl from "../../assets/images/tabl/ThreeIph/Questions.png";
import QuestionsImgDesc from "../../assets/images/desc/ThreeIph/Questions.png";

const ThreeIph: React.FC = () => {
  return (
    <section className="threeIph">
      <section className="threeIph__topImages" id="vis">
        <div className="-container">
          <div className="threeIph__boxImages">
            <img src={Iph1Desc} alt="iph" className="threeIph__imgDesc" />
            <img src={Iph2Desc} alt="iph" className="threeIph__imgDesc" />
            <img src={Iph3Desc} alt="iph" className="threeIph__imgDesc" />
          </div>
        </div>
      </section>
      <div className="threeIph__wrapper">
        <div className="threeIph__container -container">
          <div className="threeIph__inner">
            <section className="threeIph__prototypes">
              <h1 className="threeIph__prototypes-30" id="vis">
                30+
              </h1>
              <h2 className="threeIph__prototypes-title" id="vis">
                прототипов
              </h2>
              <p className="threeIph__prototypes-text" id="vis">
                Провели UX-аналитику, предусмотрели все сценарии использования
              </p>
              <img
                src={ProtoImgDesc}
                alt="ProtoImg"
                className="threeIph__prototypes-img"
                id="vis"
              />
            </section>
            <section className="threeIph__questions">
              <div className="threeIph__questions-body">
                <div className="threeIph__questions-line line" id="vis"></div>
                <h2 className="threeIph__questions-title title" id="vis">
                  Зачем нужны опросники для врачей?
                </h2>
                <ul className="threeIph__questions-ul" id="vis">
                  <li className="threeIph__questions-li">
                    Опыт использования медицинских препаратов
                  </li>
                  <li className="threeIph__questions-li">
                    Социологические исследования
                  </li>
                  <li className="threeIph__questions-li">Live - аналитика</li>
                </ul>
              </div>
              <div className="threeIph__questions-images" id="vis">
                <img
                  src={QuestionsImg}
                  alt="QuestionsImg"
                  className="threeIph__questions-img imgMobil"
                />
                <img
                  src={QuestionsImgTabl}
                  alt="QuestionsImg"
                  className="threeIph__questions-img imgTabl"
                />
                <img
                  src={QuestionsImgDesc}
                  alt="QuestionsImg"
                  className="threeIph__questions-img imgDesc"
                />
              </div>
            </section>
          </div>
        </div>
        <div className="threeIph__ellipseTop"></div>
        <div className="threeIph__ellipseBot"></div>
      </div>
    </section>
  );
};

export default ThreeIph;
