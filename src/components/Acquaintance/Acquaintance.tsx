import React from "react";
import "./Acquaintance.scss";
import Skrepa from "../../assets/images/tabl/Acquaintance/Skrepa.svg";
import Telega from "../../assets/images/desc/Acquaintance/Telega.svg";
import Be from "../../assets/images/desc/Acquaintance/Be.svg";
import Dribble from "../../assets/images/desc/Acquaintance/Dribble.svg";
import Vc from "../../assets/images/desc/Acquaintance/Vc.svg";
import Vk from "../../assets/images/desc/Acquaintance/Vk.svg";
import Hubr from "../../assets/images/desc/Acquaintance/Hubr.svg";
import HH from "../../assets/images/desc/Acquaintance/HH.svg";

const Acquaintance: React.FC = () => {
  return (
    <section className="acquaintance">
      <section className="acquaintance__registration">
        <div className="acquaintance__registration-wrapper">
          <div className="acquaintance__registration-inner" id="vis">
            <h1 className="acquaintance__registration-title">
              Давайте знакомиться!<b></b>
            </h1>
            <p className="acquaintance__registration-text">
              Мы всегда рады сотрудничеству и новым проектам
            </p>
            <form action="" className="acquaintance__registration-form">
              <div className="acquaintance__registration-form-top">
                <input
                  type="text"
                  placeholder="Ваше имя *"
                  className="acquaintance__registration-name"
                />
                <input
                  type="tel"
                  placeholder="Номер телефона *"
                  className="acquaintance__registration-tel"
                />
              </div>

              <input
                type="text"
                placeholder="Расскажите немного о вашей идее"
                className="acquaintance__registration-about"
              />
              <div className="acquaintance__registration-file">
                <label className="acquaintance__registration-file-top-label">
                  <div className="acquaintance__registration-file-top-img">
                    <img src={Skrepa} alt="Skrepa" />
                  </div>
                  <input type="file" />
                  Прикрепить файлы (до 10 шт)
                </label>
                <p className="acquaintance__registration-file-text">
                  Пожалуйста, загрузите файл формата: .pdf, .docx, .odt, .ods,
                  .xls/x,.txt
                </p>
              </div>
              <label className="acquaintance__registration-check">
                <input
                  className="acquaintance__registration-check-input"
                  type="checkbox"
                />
                <span className="acquaintance__registration-check-view">
                  <svg
                    className="acquaintance__registration-check-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    viewBox="0 0 511.985 511.985"
                  >
                    <path
                      fill="#fff"
                      d="M500.088 83.681c-15.841-15.862-41.564-15.852-57.426 0L184.205 342.148 69.332 227.276c-15.862-15.862-41.574-15.862-57.436 0-15.862 15.862-15.862 41.574 0 57.436l143.585 143.585c7.926 7.926 18.319 11.899 28.713 11.899 10.394 0 20.797-3.963 28.723-11.899l287.171-287.181c15.862-15.851 15.862-41.574 0-57.435z"
                    />
                  </svg>
                </span>
                Я принимаю{" "}
                <a className="acquaintance__registration-check-under">
                  {" "}
                  Политику конфиденциальности
                </a>
              </label>
              <button className="acquaintance__registration-button">
                Отправить
              </button>
            </form>
          </div>
        </div>
      </section>
      <div className="acquaintance__container -container">
        <div className="acquaintance__inner">
          <section className="acquaintance__contacts" id="vis">
            <h1 className="acquaintance__contacts-title">Контакты</h1>
            <div className="acquaintance__contacts-telegram">
              Telegram
              <div className="acquaintance__contacts-telegram-img">
                <img src={Telega} alt="Telega" />
              </div>
            </div>
            <p className="acquaintance__contacts-number">8 800 234 32 62</p>
            <p className="acquaintance__contacts-male">hello@joy-dev.com</p>
            <p className="acquaintance__contacts-address">
              Россия, 127282, Москва г, Студёный проезд, дом 4, корпус 1, Э
              1/ПОМ V/К 14/ОФ 87
            </p>
            <p className="acquaintance__contacts-subscribe">Подписывайтесь</p>
            <div className="acquaintance__contacts-links">
              <a href="#">
                <img src={Be} alt="Be" />
              </a>
              <a href="#">
                <img src={Dribble} alt="Dribble" />
              </a>
              <a href="#">
                <img src={Vc} alt="Vector" />
              </a>
              <a href="#">
                <img src={Vk} alt="Vk" />
              </a>
              <a href="#">
                <img src={Hubr} alt="Hubr" />
              </a>
              <a href="#">
                <img src={HH} alt="HH" />
              </a>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Acquaintance;
