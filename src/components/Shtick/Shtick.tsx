import React from "react";
import "./Shtick.scss";
import IphTop from "../../assets/images/desc/Shtick/IphTop.png";
import TagsMob from "../../assets/images/mobil/Shtick/Tags.png";
import TagsTabl from "../../assets/images/tabl/Shtick/Tags.png";
import TagsDesc from "../../assets/images/desc/Shtick/Tags.png";
import IphBotLeft from "../../assets/images/desc/Shtick/IphBotLeft.png";
import IphBotRight from "../../assets/images/desc/Shtick/IphBotRight.png";

const Shtick: React.FC = () => {
  return (
    <section className="shtick">
      <div className="shtick__container -container">
        <div className="shtick__inner">
          <section className="shtick__top" id="vis">
            <div className="shtick__top-content">
              <h2 className="shtick__top-title title">
                Фишка проекта <span>чат-бот</span>
              </h2>
              <p className="shtick__top-text">
                Хелп-деск помогает пользователям заполнять данные
              </p>
              <ul className="shtick__top-ul">
                <li className="shtick__top-li shtick__top-li1">
                  Личные данные
                </li>
                <li className="shtick__top-li shtick__top-li2">Регистрация</li>
                <li className="shtick__top-li shtick__top-li3">Опросы</li>
              </ul>
            </div>
            <div className="shtick__top-imgBox">
              <img src={IphTop} alt="iph" className="shtick__top-imgIph" />
            </div>
          </section>
          <section className="shtick__bot" id="vis">
            <div className="shtick__bot-content">
              <div className="shtick__bot-tagsBox">
                <img
                  src={TagsMob}
                  alt="tags"
                  className="shtick__bot-imgTags imgMobil"
                />
                <img
                  src={TagsTabl}
                  alt="tags"
                  className="shtick__bot-imgTags imgTabl"
                />
                <img
                  src={TagsDesc}
                  alt="tags"
                  className="shtick__bot-imgTags imgDesc"
                />
              </div>
              <div className="shtick__bot-line line"></div>
              <h2 className="shtick__bot-title title">Разные виды вопросов</h2>
              <ul className="shtick__bot-ul">
                <li className="shtick__bot-li">
                  Скринеры определяют, подходит ли пользователю опрос
                </li>
                <li className="shtick__bot-li">
                  С простыми или условными переходами зависят от ответов
                  пользователей
                </li>
              </ul>
              <p className="shtick__bot-text">Прост в использовании</p>
            </div>
            <div className="shtick__bot-imgBox">
              <img
                src={IphBotLeft}
                alt="iphLeft"
                className="shtick__bot-imgIphLeft"
              />
              <img
                src={IphBotRight}
                alt="iphRight"
                className="shtick__bot-imgIphRight"
              />
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Shtick;
