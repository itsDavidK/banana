import { NavLink } from 'react-router-dom';
import './main.scss';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__top">
          <div className="footer__block container">
            <ul className="footer__list--logo">
              <li className="footer__item">
                <NavLink to="/" className="footer__img-block">
                  <img
                    src="./images/footer_page/footer_logo.svg"
                    alt=""
                    srcset=""
                    className="footer__img"
                  />
                </NavLink>
              </li>
              <li className="footer__item">
                <span className="footer__text">Go bananas with us</span>
              </li>
              <li className="footer__item">
                <button className="footer__button">inquire now</button>
              </li>
            </ul>

            <ul className="footer__list footer__list--position-2">
              <li className="footer__item footer__list-title">company</li>
              <li className="footer__item">
                <NavLink to="/about-us" className="footer__link">
                  about us
                </NavLink>
              </li>
              <li className="footer__item">
                <NavLink to="/reviews" className="footer__link">
                  reviews
                </NavLink>
              </li>
              <li className="footer__item">
                <NavLink to="/portfolio" className="footer__link">
                  portfolio
                </NavLink>
              </li>
            </ul>

            <ul className="footer__list">
              <li className="footer__item footer__list-title">resources</li>
              <li className="footer__item">
                <a href="/" className="footer__link">
                  faq for business
                </a>
              </li>
              <li className="footer__item">
                <a href="/" className="footer__link">
                  faq for developers
                </a>
              </li>
              <li className="footer__item">
                <a href="/" className="footer__link">
                  careers
                </a>
              </li>
            </ul>

            <ul className="footer__list footer__list--position-2">
              <li className="footer__item footer__list-title">terms</li>
              <li className="footer__item">
                <a href="/" className="footer__link">
                  terms of use
                </a>
              </li>
              <li className="footer__item">
                <a href="/" className="footer__link">
                  privacy policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom container">
          <h4 className="footer__bottom-text">banan.dev 2023. All Rights Reserved </h4>
        </div>
      </div>
    </footer>
  );
};
