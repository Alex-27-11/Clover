import React from "react";
import "./Android.scss";
import Iph from "../../assets/images/desc/Android/Iph.png";

const Android: React.FC = () => {
  return (
    <section className="android">
      <div className="android__container -container">
        <h2 className="android__title title" id="vis">
          Наша команда разработала приложение для ОС Android
        </h2>
        <section className="android__body" id="vis">
          <div className="android__body-text">
            <div className="android__body-text-inner">
              <span>Технологии:</span>{" "}
              <b>
                MVVM, Retrofit, Kotlin Coroutines, Pagging 3, Socket.io, Room
              </b>
            </div>
          </div>
          <div className="android__body-imgBox">
            <img src={Iph} alt="" className="android__body-img" />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Android;
