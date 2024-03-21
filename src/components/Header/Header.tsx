import React from "react";
import "./Header.scss";
import logo from "../../assets/images/mobil/Header/Logo.svg";
import twoLines from "../../assets/images/mobil/Header/2Lines.svg";
import arrow from "../../assets/images/mobil/Header/Arrow 18.svg";
import logoTabl from "../../assets/images/tabl/Header/Logo.svg";
import twoLinesTabl from "../../assets/images/tabl/Header/2Lines.svg";
import arrowTabl from "../../assets/images/tabl/Header/Arrow 18.svg";
import logoDesc from "../../assets/images/desc/Header/Logo.svg";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__line"></div>
      <div className="header__container">
        <div className="header__inner">
          <div className="header__top">
            <a className="header__logo">
              <img src={logo} alt="logo" className="header__logo-img" />
              <img
                src={logoTabl}
                alt="logo"
                className="header__logo-img-tabl"
              />
              <img
                src={logoDesc}
                alt="logo"
                className="header__logo-img-desc"
              />
            </a>
            <div className="header__top-group">
              <button className="header__btn">Заказать разработку</button>
              <img src={twoLines} alt="twoLines" className="header__twoLines" />
              <img
                src={twoLinesTabl}
                alt="twoLines"
                className="header__twoLines-tabl"
              />
            </div>
          </div>
          <div className="header__bot">
            <nav className="header__nav">
              <ul className="header__ul">
                <li className="header__li">
                  <NavLink
                    to="/main"
                    className={({ isActive }) =>
                      isActive ? "header__active-link" : "header__link"
                    }
                  >
                    Главная
                  </NavLink>
                </li>
                <li className="header__li">
                  <img src={arrow} className="header__li-arrow" />
                  <img src={arrowTabl} className="header__li-arrow-tabl" />
                </li>
                <li className="header__li">
                  <NavLink
                    to="/cases"
                    className={({ isActive }) =>
                      isActive ? "header__active-link" : "header__link"
                    }
                  >
                    Кейсы
                  </NavLink>
                </li>
                <li className="header__li">
                  <img src={arrow} className="header__li-arrow" />
                  <img src={arrowTabl} className="header__li-arrow-tabl" />
                </li>
                <li className="header__li">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "header__active-link" : "header__link"
                    }
                  >
                    Clover Research
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
