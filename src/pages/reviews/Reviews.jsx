/* eslint-disable react/jsx-no-comment-textnodes */
import { NavLink } from 'react-router-dom';
import { Header } from '../components/Header';
import './main.scss'
import { useEffect } from 'react';
import { Footer } from '../components/Footer';

export default function Reviews() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  return (
    <div className="reviews">
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
                <NavLink
                  to="/"
                  className="pocketbook-top__link pocketbook-top__link--choosen--reviews">
                  Reviews
                </NavLink>
              </li>
            </ul>

            <div className="portfolio-top__text-block">
              <h2 className="page-title-reviews page-title-reviews--yellow reviews-main__page-title--position">
                reviews
              </h2>
              <p className="home-top__sub-text">
                Check out the works that we have created for our clients, meeting their business
                goals and connecting their activity and the digital world.
              </p>
            </div>
          </div>
        </section>

        <section className="reviews-main">
          <div className="container">
            <div className="reviews-main__content">
              <div className="reviews-main__card reviews-main__card--position-1">
                <div className="reviews-main__top">
                  <img
                    src="./images/our_clients_page/star.svg"
                    alt=""
                    className="reviews-main__star"
                  />
                  <img
                    src="./images/our_clients_page/star.svg"
                    alt=""
                    className="reviews-main__star"
                  />
                  <img
                    src="./images/our_clients_page/star.svg"
                    alt=""
                    className="reviews-main__star"
                  />
                  <img
                    src="./images/our_clients_page/star.svg"
                    alt=""
                    className="reviews-main__star"
                  />
                  <img
                    src="./images/our_clients_page/star.svg"
                    alt=""
                    className="reviews-main__star"
                  />
                </div>

                <p className="reviews-main__review">
                  I am extremely impressed with the services provided by your web studio. The team
                  took the time to understand my business needs and delivered a website that not
                  only looks amazing
                </p>

                <div className="reviews-main__review-bottom">
                  <img
                    src="./images/our_clients_page/client_img.png"
                    alt=""
                    className="reviews-main__client-img"
                  />

                  <div className="reviews-main__review-bottom-info">
                    <span className="reviews-main__name">Mitchel Gronyx</span>

                    <div className="reviews-main__position">// CEO of Microssoft, UK</div>
                  </div>
                </div>
              </div>

              <div className="reviews-main__card reviews-main__card--doshed-bg reviews-main__card--position-1">
                <div className="reviews-main__top">
                  <img
                    src="./images/our_clients_page/star.svg"
                    alt=""
                    className="reviews-main__star"
                  />
                  <img
                    src="./images/our_clients_page/star.svg"
                    alt=""
                    className="reviews-main__star"
                  />
                  <img
                    src="./images/our_clients_page/star.svg"
                    alt=""
                    className="reviews-main__star"
                  />
                  <img
                    src="./images/our_clients_page/star.svg"
                    alt=""
                    className="reviews-main__star"
                  />
                  <img
                    src="./images/our_clients_page/star.svg"
                    alt=""
                    className="reviews-main__star"
                  />
                </div>

                <p className="reviews-main__review">
                  I am extremely impressed with the services provided by your web studio. The team
                  took the time to understand my business needs and delivered a website that not
                  only looks amazing
                </p>

                <div className="reviews-main__review-bottom">
                  <img
                    src="./images/our_clients_page/client_img.png"
                    alt=""
                    className="reviews-main__client-img"
                  />

                  <div className="reviews-main__review-bottom-info">
                    <span className="reviews-main__name">Mitchel Gronyx</span>

                    <div className="reviews-main__position">// founder of Microssoft, UK</div>
                  </div>
                </div>
              </div>

              <div className="reviews-main__card reviews-main__card--doshed-bg reviews-main__card--position-2 reviews-main__card--change-bg-1">
                <div className="reviews-main__top">
                  <img
                    src="./images/our_clients_page/star.svg"
                    alt=""
                    className="reviews-main__star"
                  />
                  <img
                    src="./images/our_clients_page/star.svg"
                    alt=""
                    className="reviews-main__star"
                  />
                  <img
                    src="./images/our_clients_page/star.svg"
                    alt=""
                    className="reviews-main__star"
                  />
                  <img
                    src="./images/our_clients_page/star.svg"
                    alt=""
                    className="reviews-main__star"
                  />
                  <img
                    src="./images/our_clients_page/star.svg"
                    alt=""
                    className="reviews-main__star"
                  />
                </div>

                <p className="reviews-main__review">
                  I’ve worked with some incredible devs in my career, but the experience I am having
                  with my dev through Lemon.io is so 🔥. I feel invincible as a founder. So thankful
                  to the team!
                </p>

                <div className="reviews-main__review-bottom">
                  <img
                    src="./images/our_clients_page/client_img.png"
                    alt=""
                    className="reviews-main__client-img"
                  />

                  <div className="reviews-main__review-bottom-info">
                    <span className="reviews-main__name">Mitchel Gronyx</span>

                    <div className="reviews-main__position">// founder of Microssoft, UK</div>
                  </div>
                </div>
              </div>

              <div className="reviews-main__card reviews-main__card--position-2 reviews-main__card--change-bg-2">
                <div className="reviews-main__top">
                  <img
                    src="./images/our_clients_page/star.svg"
                    alt=""
                    className="reviews-main__star"
                  />
                  <img
                    src="./images/our_clients_page/star.svg"
                    alt=""
                    className="reviews-main__star"
                  />
                  <img
                    src="./images/our_clients_page/star.svg"
                    alt=""
                    className="reviews-main__star"
                  />
                  <img
                    src="./images/our_clients_page/star.svg"
                    alt=""
                    className="reviews-main__star"
                  />
                  <img
                    src="./images/our_clients_page/star.svg"
                    alt=""
                    className="reviews-main__star"
                  />
                </div>

                <p className="reviews-main__review">
                  I’ve worked with some incredible devs in my career, but the experience I am having
                  with my dev through Lemon.io is so 🔥. I feel invincible as a founder. So thankful
                  to the team!
                </p>

                <div className="reviews-main__review-bottom">
                  <img
                    src="./images/our_clients_page/client_img.png"
                    alt=""
                    className="reviews-main__client-img"
                  />

                  <div className="reviews-main__review-bottom-info">
                    <span className="reviews-main__name">Mitchel Gronyx</span>

                    <div className="reviews-main__position">// founder of Microssoft, UK</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
