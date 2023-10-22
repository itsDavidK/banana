import { NavLink } from 'react-router-dom';
import { Header } from '../../components/Header';
import { useEffect } from 'react';
import Filter from './components/Filter/Filter';
import { Footer } from '../../components/Footer';

import './main.scss';

export default function Portfolio() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  return (
    <div className="portfolio">
      <Header headerClass="header--none-shadow" />

      <main className="main">
        <section className="portfilio-top">
          <div className="portfolio-top__content container">
            <ul className="pocketbook-top__list portfolio-top__list--position">
              <li className="pocketbook-top__item">
                <NavLink to="/" className="pocketbook-top__link">
                  Home
                </NavLink>
              </li>
              <li className="pocketbook-top__item">-</li>
              <li className="pocketbook-top__item">
                <NavLink to="/" className="pocketbook-top__link pocketbook-top__link--choosen">
                  Portfolio
                </NavLink>
              </li>
            </ul>

            <div className="portfolio-top__text-block">
              <h2 className="page-title-portfolio page-title-portfolio--yellow portfolio-top__main-text">
                portfolio
              </h2>
              <p className="home-top__sub-text portfolio-top__sub-text">
                Check out the works that we have created for our clients, meeting their business
                goals and connecting their activity and the digital world.
              </p>
            </div>

            <div className="portfolio-top__filter-block">
              <div className="portfolio-top__filter-block__left">
                <Filter name="Technology" />
                <Filter name="Platform" />
                <Filter name="Development" />
              </div>
              <div className="portfolio-top__filter-block__right">
                <div className="portfolio-top__button portfolio-top__button--1">clear all</div>
                <div className="portfolio-top__button portfolio-top__button--violet">
                  apply tags
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="portfolio-main">
          <div className="portfolio-main__content container">
            <NavLink to="/pocketbook" className="portfolio-main__project">
              <h4 className="portfolio-main__project__title">Mobile application</h4>

              <img
                src="./images/clients/pocketbook/logo.png"
                alt=""
                className="portfolio-main__project__img"
              />

              <div className="portfolio-main__project__bottom">
                <div className="portfolio-main__project__direction">Business</div>

                <div className="portfolio-main__project__direction">Redesign</div>

                <div className="portfolio-main__project__direction">Web development</div>

                <div className="portfolio-main__project__direction">E-commerce</div>
              </div>
            </NavLink>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
