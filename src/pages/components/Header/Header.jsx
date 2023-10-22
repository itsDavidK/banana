/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import { NavLink } from 'react-router-dom';
import './main.scss';
import { useState } from 'react';
import classNames from 'classnames';

export function Header({ buttonClass, headerClass }) {
  const [openMenu, setOpenMenu] = useState(false)

  const handleMenu = () => {
    setOpenMenu(!openMenu)
  }

  return (
    // <header className={`header ${headerClass} header--close`}>
    <header className={classNames('header', headerClass, { 'header--close': openMenu })}>
      <div className="header__content container">
        <div className="header__left-block">
          <img
            src="./images/top_page/header/menu_img.svg"
            alt=""
            className="header__menu-img header__menu-left"
            onClick={handleMenu}
          />
          <NavLink to="/">
            <img src="./images/top_page/header/logo.svg" alt="" className="footer__logo" />
          </NavLink>
        </div>

        <div className="header__right-block">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <NavLink to="/about-us" className="header__nav-link header__nav-link--about-us">
                About Us
              </NavLink>
            </li>
            <li className="header__nav-item">
              <NavLink to="/portfolio" className="header__nav-link header__nav-link--portfolio">
                Portfolio
              </NavLink>
            </li>
            <li className="header__nav-item">
              <NavLink to="/reviews" className="header__nav-link header__nav-link--reviews">
                Reviews
              </NavLink>
            </li>
          </ul>
          <button className="header__button">inquire now</button>
          <img
            src="./images/top_page/header/menu_img.svg"
            alt=""
            className="header__menu-img header__menu-right"
            onClick={handleMenu}
          />
        </div>
      </div>

      {/* {openMenu && ( */}
      <div className={classNames('header-menu', { 'header-menu--open': openMenu })}>
        <div className="header-menu__content container">
          <div className="header__content">
            <div className="header__left-block">
              <NavLink to="/">
                <img src="./images/top_page/header/logo.svg" alt="" className="footer__logo" />
              </NavLink>
            </div>

            <div className="header__right-block">
              <img
                src="./images/top_page/header/close_img.svg"
                alt=""
                className="header__menu-img header-menu__close-img"
                onClick={handleMenu}
              />
            </div>
          </div>

          <ul className="header-menu__list">
            <li className="header-menu__item">
              <NavLink to="/about-us" className="header-menu__link" onClick={handleMenu}>
                About Us
              </NavLink>
            </li>
            <li className="header-menu__item">
              <NavLink to="/portfolio" className="header-menu__link" onClick={handleMenu}>
                Portfolio
              </NavLink>
            </li>
            <li className="header-menu__item">
              <NavLink to="/reviews" className="header-menu__link" onClick={handleMenu}>
                Reviews
              </NavLink>
            </li>
          </ul>

          <div className="header-menu__contact-block">
            <div className="header-menu__text">
              <div className="header-menu__text-block">
                <img
                  src="./images/top_page/header/mail_img.svg"
                  alt=""
                  srcset=""
                  className="header-menu__icon"
                />

                <span className="header-menu__text-block__int">int</span>

                <a href="mailto: contact@banan.dev" className="header-menu__contact-text">
                  contact@banan.dev
                </a>
              </div>

              <div className="header-menu__text-block">
                <img
                  src="./images/top_page/header/phone_img.svg"
                  alt=""
                  srcset=""
                  className="header-menu__icon"
                />

                <div className="header-menu__country">
                  <span className="header-menu__country__us">us</span>
                  <span className="header-menu__country__ua">ua</span>
                </div>

                <div className="">
                  <a href="tel: +1 (360) 360 9713" className="header-menu__contact-text">
                    +1 (360) 360 9713
                  </a>
                  <a href="tel: +380 (961) 50 4896" className="header-menu__contact-text">
                    +380 (961) 50 4896
                  </a>
                </div>
              </div>
            </div>

            {/* <div className="header-menu__button-block"> */}
            <button className="header-menu__button">inquire now</button>
            {/* </div> */}
          </div>
        </div>
      </div>
      {/* )} */}
    </header>
  );
}
