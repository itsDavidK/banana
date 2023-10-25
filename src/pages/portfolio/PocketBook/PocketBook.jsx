/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import './main.scss';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { Header } from '../../components/Header';
import { Stack } from './components/Stack';
import { Form } from '../../components/Form';
import { Footer } from '../../components/Footer';

export default function PocketBook() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  return (
    <div className="pocketbook">
      <Header buttonClass="header__button-pocketbook" headerClass="header--pocketbook" />

      <main className="main">
        <section className="pocketbook-top">
          <div className="pocketbook__top-bg"></div>

          <div className="pocketbook-top__content container">
            <ul className="pocketbook-top__list">
              <li className="pocketbook-top__item">
                <NavLink to="/" className="pocketbook-top__link">
                  Home
                </NavLink>
              </li>
              <li className="pocketbook-top__item">-</li>
              <li className="pocketbook-top__item">
                <NavLink to="/" className="pocketbook-top__link">
                  Portfolio
                </NavLink>
              </li>
              <li className="pocketbook-top__item">-</li>
              <li className="pocketbook-top__item">
                <NavLink
                  to="/pocketbook"
                  className="pocketbook-top__link pocketbook-top__link--choosen">
                  Pocketbook
                </NavLink>
              </li>
            </ul>

            <div className="pocketbook-top__text-block">
              <h2 className="page-title-pocketbook pocketbook-top__main-text">
                <span className="page-title-pocketbook--yellow">Pocketbook</span>
                <br />
                store redesign
              </h2>
              <p className="home-top__sub-text pocketbook-top__sub-text">
                wasting time and money hiring delinquent devs? get devotees to build your vision –
                diabolically fast wasting time and money hiring delinquent devs? get devotees to
                build your vision – diabolically fast
              </p>

              <div className="pocketbook-top__tools">
                <span className="pocketbook-top__tool">Java</span>
                <span className="pocketbook-top__tool">Business</span>
                <span className="pocketbook-top__tool">Redesign</span>
                <span className="pocketbook-top__tool">Web development</span>
                <span className="pocketbook-top__tool">E-commerce</span>
                <span className="pocketbook-top__tool">UI/UX design</span>
              </div>

              <img
                src="./images/clients/pocketbook/logo.svg"
                alt=""
                srcset=""
                className="pocketbook-top__logo--mobile"
              />

              <div className="pocketbook-top__sites">
                <a href="#" className="pocketbook-top__site">
                  <img
                    src="./images/clients/pocketbook/apple_icon.svg"
                    alt=""
                    className="pocketbook-top__site__img"
                  />

                  <span className="pocketbook-top__site__text">App Store</span>
                </a>
                <a href="#" className="pocketbook-top__site">
                  <img
                    src="./images/clients/pocketbook/web_icon.svg"
                    alt=""
                    className="pocketbook-top__site__img"
                  />

                  <span className="pocketbook-top__site__text">Website</span>
                </a>
                <a href="#" className="pocketbook-top__site">
                  <img
                    src="./images/clients/pocketbook/google_icon.svg"
                    alt=""
                    className="pocketbook-top__site__img"
                  />

                  <span className="pocketbook-top__site__text">App Store</span>
                </a>
              </div>
            </div>

            <img
              src="./images/clients/pocketbook/logo.svg"
              alt=""
              srcset=""
              className="pocketbook-top__logo"
            />
          </div>

          <div className="home-top__our-client container">
            <div className="pocketbook-top__info">
              <img
                src="./images/top_page/tape/left-tape.svg"
                className="pocketbook-top__left-tape"
              />
              <img
                src="./images/top_page/tape/right-tape.svg"
                className="pocketbook-top__right-tape"
              />
              <div className="pocketbook-top__block-info">
                <div className="pocketbook-top__info-block">
                  <span className="pocketbook-top__info-block__type">industry</span>
                  <span className="pocketbook-top__info-block__description">
                    Online <br className="pocketbook-top__br" />
                    distribution
                  </span>
                </div>
                <div className="pocketbook-top__line"></div>
                <div className="pocketbook-top__info-block">
                  <span className="pocketbook-top__info-block__type">team</span>
                  <span className="pocketbook-top__info-block__description">5 members</span>
                </div>
                <div className="pocketbook-top__line"></div>
                <div className="pocketbook-top__info-block">
                  <span className="pocketbook-top__info-block__type">project state</span>
                  <span className="pocketbook-top__info-block__description">Finalised</span>
                </div>
                <div className="pocketbook-top__line"></div>
                <div className="pocketbook-top__info-block">
                  <span className="pocketbook-top__info-block__type">project state</span>
                  <span className="pocketbook-top__info-block__description">Finalised</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pocketbook-about">
          <div className="pocketbook-about__content container">
            <div className="pocketbook-about__top">
              <div className="pocketbook-about__block">
                <h2 className="page-title-pocketbook pocketbook-about__title">
                  <span className="page-title-pocketbook--yellow pocketbook-about__title">
                    about project
                  </span>
                </h2>
                <p className="home-top__sub-text pocketbook-about__text">
                  Kör Teknologi AS decided to build their first educational platform for Norwegian
                  drivers, they trusted us with the product’s development. Their main goal was to
                  create MVP (Minimum Viable Product), then go to users with the real app and test
                  it
                </p>
              </div>

              <div className="pocketbook-about__block">
                <h2 className="page-title-pocketbook pocketbook-about__title">
                  <span className="page-title-pocketbook--pink">about client</span>
                </h2>
                <p className="home-top__sub-text pocketbook-about__text">
                  Kör Teknologi AS decided to build their first educational platform for Norwegian
                  drivers, they trusted us with the product’s development. Their main goal was to
                  create MVP (Minimum Viable Product), then go to users with the real app and test
                  it
                </p>
              </div>
            </div>

            <div className="pocketbook-about__main">
              <img
                src="./images/clients/pocketbook/about_top_shadow_img.png"
                alt=""
                srcset=""
                className="pocketbook-about__top-shadow"
              />

              <img
                src="./images/clients/pocketbook/about_bottom_shadow_img.png"
                alt=""
                srcset=""
                className="pocketbook-about__bottom-shadow"
              />

              <img
                src="./images/clients/pocketbook/about_img.png"
                alt=""
                className="pocketbook-about__img"
              />
            </div>

            <div className="pocketbook-about__bottom">
              <img
                src="./images/our_clients_page/passive_left_arrow.svg"
                alt=""
                className="pocketbook-about__arrow-img"
              />
              <img
                src="./images/our_clients_page/active_right_arrow.svg"
                alt=""
                className="pocketbook-about__arrow-img"
              />
            </div>
          </div>
        </section>

        <section className="pocketbook-goal">
          <div className="pocketbook-goal__content container">
            <h2 className="page-title-pocketbook page-title-pocketbook--yellow pocketbook-goal__title">
              project goals
            </h2>

            <div className="pocketbook-goal__main">
              <div className="pocketbook-goal__block">
                <img
                  src="./images/clients/pocketbook/goal_img_1.svg"
                  alt=""
                  srcset=""
                  className="pocketbook-goal__img"
                />

                <span className="pocketbook-goal__step">1. Create a responsive online store</span>

                <span className="pocketbook-goal__text">
                  We aimed to create an inclusive and responsive web design to ensure fast-loading &
                  smooth experience on all devices.
                </span>
              </div>

              <div className="pocketbook-goal__block pocketbook-goal__block--2">
                <img
                  src="./images/clients/pocketbook/goal_img_2.svg"
                  alt=""
                  srcset=""
                  className="pocketbook-goal__img"
                />

                <span className="pocketbook-goal__step pocketbook-goal__text--2">
                  2. Impress with efficient UX/UI design
                </span>

                <span className="pocketbook-goal__text pocketbook-goal__text--2">
                  We strove to introduce stunning UI/UX solutions within simple yet effective car
                  dealer’s website design.
                </span>
              </div>

              <div className="pocketbook-goal__block">
                <img
                  src="./images/clients/pocketbook/goal_img_3.svg"
                  alt=""
                  srcset=""
                  className="pocketbook-goal__img"
                />

                <span className="pocketbook-goal__step">3. Deliver conversion-focused design</span>

                <span className="pocketbook-goal__text">
                  We improved the website’s conversion rate with the help of call-to-action buttons,
                  logical structure, advanced search functionality, comfortable menus & much more.
                </span>
              </div>

              <div className="pocketbook-goal__block pocketbook-goal__block--2">
                <img
                  src="./images/clients/pocketbook/goal_img_4.svg"
                  alt=""
                  srcset=""
                  className="pocketbook-goal__img pocketbook-goal__img--4"
                />

                <span className="pocketbook-goal__step pocketbook-goal__text--2">
                  4. Build a functional admin panel
                </span>

                <span className="pocketbook-goal__text pocketbook-goal__text--2">
                  Our goal was to create a functional and user-friendly admin panel to allow
                  managing content manually (for website administrators).
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="pocketbook-responsive">
          <div className="pocketbook-responsive__content container">
            <div className="pocketbook-responsive__text-block">
              <h2 className="page-title-pocketbook page-title-pocketbook--yellow pocketbook-responsive__title">
                responsive <br /> design
              </h2>

              <div className="pocketbook-responsive__img-block pocketbook-responsive__img-block--mobile">
                <div className="pocketbook-responsive__block-img">
                  <img
                    src="./images/clients/pocketbook/responsive_img.svg"
                    alt=""
                    srcset=""
                    className="pocketbook-responsive__img"
                  />
                </div>
              </div>

              <div className="pocketbook-responsive__list">
                <div className="pocketbook-responsive__proposal">
                  <img
                    src="./images/what_offer_page/banan_list.svg"
                    alt=""
                    className="pocketbook-responsive__list-img pocketbook-responsive__position-img"
                  />

                  <span className="pocketbook-responsive__list-text">
                    Streamlined Layout: To optimize the layout for smaller screens, I carefully
                    restructured the content and prioritized the most important elements.
                  </span>
                </div>

                <div className="pocketbook-responsive__proposal">
                  <img
                    src="./images/what_offer_page/banan_list.svg"
                    alt=""
                    className="pocketbook-responsive__list-img pocketbook-responsive__position-img"
                  />

                  <span className="pocketbook-responsive__list-text">
                    Responsive Typography: I paid special attention to typography to ensure
                    legibility and readability on smaller screens.
                  </span>
                </div>

                <div className="pocketbook-responsive__proposal">
                  <img
                    src="./images/what_offer_page/banan_list.svg"
                    alt=""
                    className="pocketbook-responsive__list-img pocketbook-responsive__position-img"
                  />

                  <span className="pocketbook-responsive__list-text">
                    Mobile-Friendly Navigation: I implemented a mobile-friendly navigation system
                    that is intuitive and easy to use.
                  </span>
                </div>
              </div>
            </div>

            <div className="pocketbook-responsive__img-block pocketbook-responsive__img-block--desktop">
              <div className="pocketbook-responsive__block-img">
                <img
                  src="./images/clients/pocketbook/responsive_img.svg"
                  alt=""
                  srcset=""
                  className="pocketbook-responsive__img"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="pocketbook-branding">
          <div className="pocketbook-branding__content container">
            <div className="pocketbook-about__block pocketbook-branding__top">
              <h2 className="page-title-pocketbook page-title-pocketbook--yellow pocketbook-branding__title">
                branding
              </h2>
              <p className="home-top__sub-text pocketbook-branding__text">
                Dived into UX, we created the Bloss logo, typography, identity, and a user-friendly
                engaging web design.
              </p>
            </div>

            <img
              src="./images/clients/pocketbook/icon_branding_img.png"
              alt=""
              srcset=""
              className="pocketbook-branding__img"
            />

            <div className="pocketbook-branding__main">
              <div className="pocketbook-branding__colors-block">
                <h4 className="pocketbook-branding__colors-block__title">colours</h4>

                {/* <div className="pocketbook-branding__colors">
                  <div className="pocketbook-branding__color">
                    <img
                      src="./images/clients/pocketbook/colors/color_1_img.svg"
                      alt=""
                      srcset=""
                      className="pocketbook-branding__color__img"
                    />

                    <h6 className="pocketbook-branding__color__number">#5578AD</h6>
                  </div>

                  <div className="pocketbook-branding__color">
                    <img
                      src="./images/clients/pocketbook/colors/color_2_img.svg"
                      alt=""
                      srcset=""
                      className="pocketbook-branding__color__img"
                    />

                    <h6 className="pocketbook-branding__color__number">#5578AD</h6>
                  </div>

                  <div className="pocketbook-branding__color">
                    <img
                      src="./images/clients/pocketbook/colors/color_3_img.svg"
                      alt=""
                      srcset=""
                      className="pocketbook-branding__color__img"
                    />

                    <h6 className="pocketbook-branding__color__number">#5578AD</h6>
                  </div>

                  <div className="pocketbook-branding__color">
                    <img
                      src="./images/clients/pocketbook/colors/color_4_img.svg"
                      alt=""
                      srcset=""
                      className="pocketbook-branding__color__img"
                    />

                    <h6 className="pocketbook-branding__color__number">#5578AD</h6>
                  </div>

                  <div className="pocketbook-branding__color">
                    <img
                      src="./images/clients/pocketbook/colors/color_5_img.svg"
                      alt=""
                      srcset=""
                      className="pocketbook-branding__color__img"
                    />

                    <h6 className="pocketbook-branding__color__number">#5578AD</h6>
                  </div>

                  <div className="pocketbook-branding__color">
                    <img
                      src="./images/clients/pocketbook/colors/color_6_img.svg"
                      alt=""
                      srcset=""
                      className="pocketbook-branding__color__img"
                    />

                    <h6 className="pocketbook-branding__color__number">#5578AD</h6>
                  </div>

                  <div className="pocketbook-branding__color">
                    <img
                      src="./images/clients/pocketbook/colors/color_7_img.svg"
                      alt=""
                      srcset=""
                      className="pocketbook-branding__color__img"
                    />

                    <h6 className="pocketbook-branding__color__number">#5578AD</h6>
                  </div>

                  <div className="pocketbook-branding__color">
                    <img
                      src="./images/clients/pocketbook/colors/color_8_img.svg"
                      alt=""
                      srcset=""
                      className="pocketbook-branding__color__img"
                    />

                    <h6 className="pocketbook-branding__color__number">#5578AD</h6>
                  </div>

                  <div className="pocketbook-branding__color">
                    <img
                      src="./images/clients/pocketbook/colors/color_9_img.svg"
                      alt=""
                      srcset=""
                      className="pocketbook-branding__color__img"
                    />

                    <h6 className="pocketbook-branding__color__number">#5578AD</h6>
                  </div>

                  <div className="pocketbook-branding__color">
                    <img
                      src="./images/clients/pocketbook/colors/color_10_img.svg"
                      alt=""
                      srcset=""
                      className="pocketbook-branding__color__img"
                    />

                    <h6 className="pocketbook-branding__color__number">#5578AD</h6>
                  </div>
                </div> */}

                <img
                  src="./images/clients/pocketbook/branding_colors_img.svg"
                  alt=""
                  srcset=""
                  className="pocketbook-branding__img-colours"
                />
              </div>

              <div className="pocketbook-branding__typography">
                <div className="pocketbook-branding__typography__top">
                  <h4 className="pocketbook-branding__colors-block__title pocketbook-branding__typography__subtitle">
                    typography
                  </h4>
                  <img
                    src="./images/clients/pocketbook/colors/typo_img.svg"
                    alt=""
                    srcset=""
                    className="pocketbook-branding__typography__img"
                  />
                </div>

                {/* <div className="pocketbook-branding__typography__bottom">
                  <div className="pocketbook-branding__typography__headline">
                    <span className="pocketbook-branding__typography__title pocketbook-branding__typography__title--1">
                      Headline 1
                    </span>

                    <span className="pocketbook-branding__typography__size pocketbook-branding__typography__size--1">
                      48 px
                    </span>
                  </div>

                  <div className="pocketbook-branding__typography__headline">
                    <span className="pocketbook-branding__typography__title pocketbook-branding__typography__title--2">
                      Headline 2
                    </span>

                    <span className="pocketbook-branding__typography__size pocketbook-branding__typography__size--2">
                      32 px
                    </span>
                  </div>

                  <div className="pocketbook-branding__typography__headline">
                    <span className="pocketbook-branding__typography__title pocketbook-branding__typography__title--3">
                      Headline 3
                    </span>

                    <span className="pocketbook-branding__typography__size pocketbook-branding__typography__size--3">
                      23 px
                    </span>
                  </div>

                  <div className="pocketbook-branding__typography__headline">
                    <span className="pocketbook-branding__typography__title pocketbook-branding__typography__title--4">
                      Text 18R
                    </span>

                    <span className="pocketbook-branding__typography__size pocketbook-branding__typography__size--4">
                      18 px
                    </span>
                  </div>

                  <div className="pocketbook-branding__typography__headline">
                    <span className="pocketbook-branding__typography__title pocketbook-branding__typography__title--5">
                      Button
                    </span>

                    <span className="pocketbook-branding__typography__size pocketbook-branding__typography__size--5">
                      16 px
                    </span>
                  </div>

                  <div className="pocketbook-branding__typography__headline">
                    <span className="pocketbook-branding__typography__title pocketbook-branding__typography__title--5">
                      Text 16R
                    </span>

                    <span className="pocketbook-branding__typography__size pocketbook-branding__typography__size--5">
                      16 px
                    </span>
                  </div>

                  <div className="pocketbook-branding__typography__headline">
                    <span className="pocketbook-branding__typography__title pocketbook-branding__typography__title--6">
                      Text 14R
                    </span>

                    <span className="pocketbook-branding__typography__size pocketbook-branding__typography__size--6">
                      14 px
                    </span>
                  </div>

                  <div className="pocketbook-branding__typography__headline">
                    <span className="pocketbook-branding__typography__title pocketbook-branding__typography__title--7">
                      Text 12B
                    </span>

                    <span className="pocketbook-branding__typography__size pocketbook-branding__typography__size--7">
                      12 px
                    </span>
                  </div>

                  <div className="pocketbook-branding__typography__headline">
                    <span className="pocketbook-branding__typography__title pocketbook-branding__typography__title--8">
                      Headline 2
                    </span>

                    <span className="pocketbook-branding__typography__size pocketbook-branding__typography__size--8">
                      32 px
                    </span>
                  </div>
                </div> */}

                <img
                  src="./images/clients/pocketbook/branding_typography_img.svg"
                  alt=""
                  srcset=""
                  className="pocketbook-branding__img-colours"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="pocketbook-mobile-app">
          <div className="pocketbook-mobile-app__content container">
            <div className="pocketbook-mobile-app__img-block pocketbook-mobile-app__img-block--desktop">
              <img
                src="./images/clients/pocketbook/mobile_app_img.png"
                alt=""
                srcset=""
                className="pocketbook-mobile-app__img"
              />
            </div>

            <div className="pocketbook-mobile-app__text-block">
              <h2 className="page-title-pocketbook page-title-pocketbook--yellow pocketbook-mobile-app__title">
                mobile app
              </h2>
              <div className="pocketbook-mobile-app__img-block pocketbook-mobile-app__img-block--mobile">
                <img
                  src="./images/clients/pocketbook/mobile_app_img.svg"
                  alt=""
                  srcset=""
                  className="pocketbook-mobile-app__img"
                />
              </div>
              <p className="pocketbook-mobile-app__sub-text pocketbook-mobile-app__text-block--position">
                We placed a strong emphasis on understanding the needs and preferences of PocketBook
                users. Through extensive research and user testing, we gained valuable insights into
                their requirements, pain points, and features.
                <br />
                <br />
                Moreover, we integrated a dark mode feature into the application, allowing users to
                switch between light and dark color schemes according to their preference.
              </p>
            </div>
          </div>
        </section>

        <Stack />

        <section className="pocketbook-result">
          <div className="pocketbook-result__content container">
            <div className="pocketbook-result__text-content">
              <h2 className="page-title-pocketbook page-title-pocketbook--yellow pocketbook-result__title">
                result
              </h2>
              <img
                src="./images/clients/pocketbook/result_img.svg"
                alt=""
                srcset=""
                className="pocketbook-result__img pocketbook-result__img--mobile"
              />
              <p className="pocketbook-result__text-block">
                The redesigned online store played a pivotal role in expanding the company's
                presence across multiple countries. By implementing a modern and user-friendly
                interface, we created a seamless shopping experience for customers worldwide.
                <br />
                <br />
                The combination of the redesigned online store and the mobile app proved to be a
                winning formula, resulting in a substantial boost in sales figures. By optimizing
                the user experience, streamlining the purchasing process, and integrating secure
                payment gateways, we successfully converted visits into transactions, leading to a
                remarkable increase in revenue.
              </p>
            </div>

            <div className="pocketbook-result__block-content pocketbook-result__block-content--desktop">
              <img
                src="./images/clients/pocketbook/result_img.svg"
                alt=""
                srcset=""
                className="pocketbook-result__img pocketbook-result__img--desktop"
              />
            </div>
          </div>
        </section>

        <section className="pocketbook-review">
          <div className="pocketbook-review__content container">
            <div className="pocketbook-review__img-block pocketbook-review__img-block--desktop">
              <img
                src="./images/clients/pocketbook/client_img.png"
                alt=""
                srcset=""
                className="pocketbook-review__img"
              />
            </div>

            <div className="pocketbook-review__text-block">
              <h2 className="page-title-pocketbook page-title-pocketbook--yellow pocketbook-review__title pocketbook-review__title--position">
                client’s <br /> review
              </h2>

              <div className="pocketbook-review__img-block pocketbook-review__img-block--mobile">
                <img
                  src="./images/clients/pocketbook/client_img.png"
                  alt=""
                  srcset=""
                  className="pocketbook-review__img"
                />
              </div>

              <span className="pocketbook-review__name">Mitchel Gronyx</span>
              <span className="pocketbook-review__position">// CEO of Pocketbook</span>

              <p className="pocketbook-review__sub-text">
                I am absolutely blown away by the exceptional work done by BANAN.DEV. The redesign
                of their online store and the development of their mobile app have completely
                transformed my shopping experience. Not only did they create a visually stunning and
                user-friendly website, but the mobile app takes convenience to a whole new level.
                <br />
                <br />
                Thanks to their efforts, I now have access to a wider range of products and can shop
                from anywhere at any time. The seamless navigation, intuitive interface, and secure
                payment options have made my purchasing process a breeze. I no longer have to worry
                about missing out on great deals or limited-time offers because everything is right
                at my fingertips.
              </p>
            </div>
          </div>
        </section>

        <Form title="Ready for a Quote?" />
      </main>

      <Footer />
    </div>
  );
}
