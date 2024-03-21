import React from "react";
import "./Footer.scss";
import Copyright from "../../assets/images/desc/Footer/Copyright.svg";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__container -container">
        <div className="footer__inner">
          <section className="footer__copyright">
            <div className="footer__copyright-top">
              <img
                className="footer__copyright-img"
                src={Copyright}
                alt="Copyright"
              ></img>
              <p className="footer__copyright-text">
                2023 Joy Dev. Все права защищены.
              </p>
            </div>
            <a href="#" className="footer__copyright-privacy">
              Политика конфиденциальности
            </a>
          </section>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
