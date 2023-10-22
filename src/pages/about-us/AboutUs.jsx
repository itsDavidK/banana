import { NavLink } from 'react-router-dom';
import { Header } from '../components/Header'
import './main.scss'
import { Footer } from '../components/Footer';
import { Form } from '../components/Form';
import { useEffect } from 'react';

export default function AboutUs() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  return (
    <div className="about-us">
      <Header headerClass="header--none-shadow" />

      <main className="main">
        <section className="about-us-top">
          <div className="about-us-top__content container">
            <ul className="pocketbook-top__list portfolio-top__list--position">
              <li className="pocketbook-top__item">
                <NavLink to="/" className="pocketbook-top__link">
                  Home
                </NavLink>
              </li>
              <li className="pocketbook-top__item">-</li>
              <li className="pocketbook-top__item">
                <NavLink
                  to="#"
                  className="pocketbook-top__link pocketbook-top__link--choosen--about-us">
                  About Us
                </NavLink>
              </li>
            </ul>
            <div className="about-us-top__block">
              <div className="portfolio-top__text-block about-us-top__text-block">
                <h2 className="page-title-about-us page-title-about-us--yellow about-us-top__main-text--position">
                  about us
                </h2>
                <p className="about-us-top__sub-text">
                  At Banan.dev, we take pride in our reputation as a top-tier web studio that has
                  truly made its mark in the market. We have consistently delivered outstanding
                  website and mobile app development services, cementing our position as a trusted
                  partner for businesses seeking cutting-edge technology and remarkable user
                  experiences.
                  <br />
                  <br />
                  What sets us apart is our unwavering commitment to excellence and innovation. Our
                  team is comprised of highly skilled designers, developers, and strategists who
                  work in perfect harmony to transform ideas into reality. With our extensive
                  expertise spanning various industries, we have the ability to create tailored
                  solutions that perfectly align with the unique needs of each and every client.
                  <br />
                  <br />
                  What truly sets us apart is our unwavering dedication to continuous improvement.
                  We are constantly pushing the boundaries and staying at the forefront of industry
                  trends.
                </p>
              </div>

              <div className="about-us-top__img-block">
                <h2 className="page-title-about-us--yellow about-us-top__main-contact-text">
                  contact <br /> information
                </h2>

                <div className="about-us-top__contact-field">
                  <h4 className="about-us-top__contact-title about-us-top__contact-title">
                    United States
                  </h4>

                  <div className="about-us-top__contact-block">
                    <img
                      src="./images/about-us/mail_img.svg"
                      alt=""
                      srcset=""
                      className="about-us-top__contact-img"
                    />

                    <span className="about-us-top__contact-text">contact@banan.dev</span>
                  </div>

                  <div className="about-us-top__contact-block">
                    <img
                      src="./images/about-us/phone_img.svg"
                      alt=""
                      srcset=""
                      className="about-us-top__contact-img"
                    />

                    <span className="about-us-top__contact-text">+380 (961) 50 4896</span>
                  </div>
                </div>

                <div className="about-us-top__contact-field">
                  <h4 className="about-us-top__contact-title about-us-top__contact-title--blue">
                    Ukraine
                  </h4>

                  <div className="about-us-top__contact-block">
                    <img
                      src="./images/about-us/mail_img.svg"
                      alt=""
                      srcset=""
                      className="about-us-top__contact-img"
                    />

                    <span className="about-us-top__contact-text">contact@banan.dev</span>
                  </div>

                  <div className="about-us-top__contact-block">
                    <img
                      src="./images/about-us/phone_img.svg"
                      alt=""
                      srcset=""
                      className="about-us-top__contact-img"
                    />

                    <span className="about-us-top__contact-text">+380 (961) 50 4896</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-us-main">
          <div className="about-us-main__content container">
            <h2 className="page-title-about-us page-title-about-us--yellow about-us-main__main-text">
              our offices
            </h2>

            <div className="about-us-main__text-block">
              <div className="about-us-main__office-block">
                <div className="about-us-main__country-block">
                  <img
                    src="./images/about-us/target_img.svg"
                    alt=""
                    srcset=""
                    className="about-us-main__country-img"
                  />

                  <span className="about-us-main__country">United States</span>
                </div>

                <div className="about-us-main__city-container">
                  <div className="about-us-main__city-block">
                    <h4 className="about-us-main__city">Seeatlle</h4>

                    <span className="about-us-main__address">
                      27214 105th Ave SE, Kent WA, 98030
                    </span>
                  </div>

                  <div className="about-us-main__city-block">
                    <h4 className="about-us-main__city">New York</h4>

                    <span className="about-us-main__address">
                      27214 105th Ave SE, Kent WA, 98030
                    </span>
                  </div>
                </div>
              </div>

              <div className="about-us-main__office-block">
                <div className="about-us-main__country-block">
                  <img
                    src="./images/about-us/target_img.svg"
                    alt=""
                    srcset=""
                    className="about-us-main__country-img"
                  />

                  <span className="about-us-main__country about-us-main__country--blue">
                    Ukraine
                  </span>
                </div>

                <div className="about-us-main__city-container">
                  <div className="about-us-main__city-block">
                    <h4 className="about-us-main__city">Kyiv</h4>

                    <span className="about-us-main__address">
                      27214 105th Ave SE, Kent WA, 98030
                    </span>
                  </div>

                  <div className="about-us-main__city-block">
                    <h4 className="about-us-main__city">Lviv</h4>

                    <span className="about-us-main__address">
                      27214 105th Ave SE, Kent WA, 98030
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-us-main__img">
              <img
                src="./images/about-us/world_mobile_img.svg"
                alt=""
                srcset=""
                className="about-us-main__world-img--mobile"
              />
            </div>

            <div className="about-us-main__img">
              <img
                src="./images/about-us/world_img.svg"
                alt=""
                srcset=""
                className="about-us-main__world-img"
              />
            </div>
          </div>
        </section>

        <Form title="Need help with your business?" titleClass="form-page__title--pink" />
      </main>

      <Footer />
    </div>
  );
}
