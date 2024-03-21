import React, { useState } from "react";

type Prop = {
  SliderImage: { url: string }[];
};

const UniqComponent: React.FC<Prop> = ({ SliderImage }) => {
  const [activeImageNum, setCurrent] = useState(0);

  const bulletCount: number[] = [1, 2, 3];

  const length = SliderImage.length;
  const nextSlide = () => {
    setCurrent(activeImageNum === length - 1 ? 0 : activeImageNum + 1);
  };
  const prevSlide = () => {
    setCurrent(activeImageNum === 0 ? length - 1 : activeImageNum - 1);
  };
  if (!Array.isArray(SliderImage) || SliderImage.length <= 0) {
    return null;
  }

  return (
    <section className="uniqDesign">
      <div className="uniqDesign__container -container">
        <p className="uniqDesign__title title" id="vis">
          От прототипов до уникального дизайна
        </p>
        <section className="uniqDesign__slider" id="vis">
          <div className="uniqDesign__slider-top">
            <div
              className={
                activeImageNum === 0
                  ? "uniqDesign__slider-button-hidden"
                  : "uniqDesign__slider-buttonL-desc"
              }
              onClick={prevSlide}
            ></div>
            <div className="uniqDesign__slider-img-box">
              {SliderImage.map((currentSlide, ind) => {
                return (
                  <div
                    className={
                      ind === activeImageNum
                        ? " uniqDesign__currentSlide_active"
                        : "uniqDesign__currentSlide"
                    }
                    key={ind}
                  >
                    {ind === activeImageNum && (
                      <img
                        src={currentSlide.url}
                        className="uniqDesign__slider-img"
                      />
                    )}
                  </div>
                );
              })}
            </div>
            <div
              className={
                activeImageNum === length - 1
                  ? "uniqDesign__slider-button-hidden"
                  : "uniqDesign__slider-buttonR-desc"
              }
              onClick={nextSlide}
            ></div>
          </div>
          <div className="uniqDesign__slider-buttons">
            <div
              className={
                activeImageNum === 0
                  ? "uniqDesign__slider-button-hidden"
                  : "uniqDesign__slider-buttonL"
              }
              onClick={prevSlide}
            ></div>
            <div className="uniqDesign__slider-bullets">
              {bulletCount.map((item, index) => {
                return (
                  <div
                    className={
                      index === activeImageNum
                        ? "uniqDesign__slider-bullet_active"
                        : "uniqDesign__slider-bullet"
                    }
                    key={item}
                  ></div>
                );
              })}
            </div>
            <div
              className={
                activeImageNum === length - 1
                  ? "uniqDesign__slider-button-hidden"
                  : "uniqDesign__slider-buttonR"
              }
              onClick={nextSlide}
            ></div>
          </div>
        </section>
        <section className="uniqDesign__func">
          <div className="uniqDesign__line line" id="vis"></div>
          <div className="uniqDesign__func-title title" id="vis">
            Функционал Clover Research
          </div>
          <ul className="uniqDesign__func-list">
            <li className="uniqDesign__func-it1 uniqDesign__func-it" id="vis">
              Регистрация пользователя
            </li>
            <li className="uniqDesign__func-it2 uniqDesign__func-it" id="vis">
              Получение актуальных опросов по тематике{" "}
            </li>
            <li className="uniqDesign__func-it3 uniqDesign__func-it" id="vis">
              Помощь с заполнением данных через чат-бот онлайн
            </li>
            <li className="uniqDesign__func-it4 uniqDesign__func-it" id="vis">
              Разделение опросов для разных специалистов
            </li>
            <li className="uniqDesign__func-it5 uniqDesign__func-it" id="vis">
              Сбор данных для live-аналитики
            </li>
          </ul>
        </section>
      </div>
    </section>
  );
};

export default UniqComponent;
