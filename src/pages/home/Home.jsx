/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from 'react'
import { Header } from '../components/Header';
import { Card } from '../components/Card/';
import { SliderClients } from './components/SliderClients';
import { SliderProjects } from './components/SliderProjects';
import { Stack } from './components/Stack';
import { Form } from '../components/Form';
import { Footer } from '../components/Footer';

import './main.scss'

export default function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  return (
    <div className="page">
      <Header />

      <main className="main">
        <div className="main__content">
          <section className="home-top">
            <div className="home-top__block container">
              <div className="home-top__text-block">
                <h2 className="page-title home-top__page-title">
                  <span className="page-title--yellow">Accelerate</span>
                  <br />
                  Your SuccesS with Banan.dev
                </h2>
                <p className="home-top__sub-text">
                  wasting time and money hiring delinquent devs? get devotees to build your vision –
                  diabolically fast
                </p>
                <a href='/' className="home-top__button">let’s go banana</a>
              </div>

              <div className="home-top__column">
                <div className="home-top__column-1">
                  <Card
                    number={'1'}
                    img={'./images/top_page/person/person_1.svg'}
                    name={'Yevhenii F.'}
                    rate={'45'}
                    position={'Senior UI/UX Designer'}
                    experince={'6'}
                    skills={['Figma', 'Sketch', 'Photoshop', 'AEffects']}
                  />
                  <Card
                    number={'2'}
                    img={'./images/top_page/person/person_1.svg'}
                    name={'Yevhenii F.'}
                    rate={'72'}
                    position={'Senior Back-End developer'}
                    experince={'5'}
                    skills={['Figma', 'Sketch', 'Photoshop', 'AEffects']}
                  />
                  <Card
                    number={'3'}
                    img={'./images/top_page/person/person_2.svg'}
                    name={'Maksym L.'}
                    rate={'72'}
                    position={'Senior UI/UX Designer'}
                    experince={'6'}
                    skills={['AWS', 'Docker', 'Graphql', 'PostgreSQL']}
                  />
                  <Card
                    number={'4'}
                    img={'./images/top_page/person/person_3.svg'}
                    name={'Oleg L.'}
                    rate={'47'}
                    position={'Senior Full-Stack Developer'}
                    experince={'5'}
                    skills={['Javascript', 'React', 'Typescript']}
                  />
                  <Card
                    number={'5'}
                    img={'./images/top_page/person/person_4.svg'}
                    name={'Maksim P.'}
                    rate={'47'}
                    position={'Senior Mobile Developer'}
                    experince={'6'}
                    skills={['Dart', 'Firebase', 'Node', 'Flutter']}
                  />
                  <Card
                    number={'6'}
                    img={'./images/top_page/person/person_5.svg'}
                    name={'Den Z.'}
                    rate={'60'}
                    position={'Senior Back-End Developer'}
                    experince={'6'}
                    skills={['Python', 'Graphql', 'PostgreSQL', 'FastAPI']}
                  />
                </div>

                <div className="home-top__column-2">
                  <Card
                    number={'7'}
                    img={'./images/top_page/person/person_6.svg'}
                    name={'Alex L.'}
                    rate={'50'}
                    position={'Senior Full-Stack Developer'}
                    experince={'4'}
                    skills={['JS', 'React', 'Python', 'Django', 'Graphql']}
                  />
                  <Card
                    number={'8'}
                    img={'./images/top_page/person/person_7.svg'}
                    name={'Igor H.'}
                    rate={'62'}
                    position={'Senior Python Developer'}
                    experince={'6'}
                    skills={['Python', 'Django', 'Flask', 'AWS', 'PostgreSQL']}
                  />{' '}
                  <Card
                    number={'9'}
                    img={'./images/top_page/person/person_8.svg'}
                    name={'Dmitro M.'}
                    rate={'72'}
                    position={'Senior Java Developer'}
                    experince={'10'}
                    skills={['Java', 'AWS', 'Vaadin', 'Apache']}
                  />{' '}
                  <Card
                    number={'10'}
                    img={'./images/top_page/person/person_9.svg'}
                    name={'Igor B.'}
                    rate={'72'}
                    position={'Senior PHP Designer'}
                    experince={'6'}
                    skills={['PHP', 'JS', 'HTML', 'CSS', 'Laravel']}
                  />{' '}
                  <Card
                    number={'11'}
                    img={'./images/top_page/person/person_10.svg'}
                    name={'Oleksandr T.'}
                    rate={'35'}
                    position={'Middle UI/UX Designer'}
                    experince={'3'}
                    skills={['Figma', 'Sketch', 'Photoshop', 'AEffects']}
                  />{' '}
                </div>
              </div>
            </div>

            <div className="home-top__our-client container">
              <div className="home-top__our-client__content">
                <img
                  src="./images/top_page/tape/left-tape.svg"
                  className="home-top__our-client__left-tape"
                />
                <img
                  src="./images/top_page/tape/right-tape.svg"
                  className="home-top__our-client__right-tape"
                />

                <h3 className="home-top__our-client__title">Our clients</h3>

                <div className="home-top__our-client__block-img">
                  <img
                    src="./images/top_page/clients/forbes.svg"
                    className="home-top__our-client__img"
                  />
                  <img
                    src="./images/top_page/clients/pocketbook.svg"
                    className="home-top__our-client__img"
                  />
                  <img
                    src="./images/top_page/clients/sps.svg"
                    className="home-top__our-client__img"
                  />
                  <img
                    src="./images/top_page/clients/syn.svg"
                    className="home-top__our-client__img"
                  />
                  <img
                    src="./images/top_page/clients/yotta.svg"
                    className="home-top__our-client__img"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="home-money">
            <div className="home-money__content container">
              <img
                src="./images/make_money_page/banan_img.svg"
                alt=""
                className="home-money__banan-bg"
              />
              <img
                src="./images/make_money_page/dev_img.svg"
                alt=""
                className="home-money__dev-bg"
              />

              <h2 className="page-title page-title--yellow home-money__page-title--position">
                Start making <br /> a lot of profit
              </h2>

              <div className="home-money__block">
                <div className="home-money__step home-money__step--1">
                  <img
                    src="./images/make_money_page/img_1.svg"
                    alt=""
                    className="home-money__img"
                  />
                  <p className="home-money__step-info">
                    You stuck with your bussines and stopped growing. You stuck with your bussines
                    and stopped growing
                  </p>
                </div>

                <div className="home-money__step home-money__step--2">
                  <img
                    src="./images/make_money_page/img_2.svg"
                    alt=""
                    className="home-money__img home-money__img"
                  />
                  <p className="home-money__step-info home-money__step-info--2">
                    Banan.dev is committed to delivering exceptional results that align with your
                    business objectives
                  </p>
                </div>
                <div className="home-money__step home-money__step--3">
                  <img
                    src="./images/make_money_page/img_3.svg"
                    alt=""
                    className="home-money__img"
                  />
                  <p className="home-money__step-info">
                    Unlock your full potential and realise your growth ambitions through innovative
                    and effective web solutions with Banan.dev!
                  </p>
                </div>

                <button className="home-money__button home-money__button--position">
                  push the button
                </button>
              </div>
            </div>
          </section>

          <section className="home-offer">
            <div className="home-offer__content container">
              <h2 className="page-title page-title--yellow home-offer__title">What we offer</h2>

              <div className="home-offer__block">
                <div className="home-offer__card home-offer__card--1">
                  <img
                    src="./images/what_offer_page/img_1.svg"
                    alt=""
                    className="home-offer__img"
                  />

                  <h4 className="home-offer__card-title">design & development</h4>

                  <p className="home-offer__card-info">
                    We build attractive and highly functional websites that visitors and search
                    engines can’t resist.
                  </p>

                  <div className="home-offer__list">
                    <div className="home-offer__proposal">
                      <img
                        src="./images/what_offer_page/banan_list.svg"
                        alt=""
                        className="home-offer__list-img"
                      />

                      <span className="home-offer__list-text">logo design</span>
                    </div>

                    <div className="home-offer__proposal">
                      <img
                        src="./images/what_offer_page/banan_list.svg"
                        alt=""
                        className="home-offer__list-img"
                      />

                      <span className="home-offer__list-text">ecommerce websites</span>
                    </div>

                    <div className="home-offer__proposal">
                      <img
                        src="./images/what_offer_page/banan_list.svg"
                        alt=""
                        className="home-offer__list-img"
                      />

                      <span className="home-offer__list-text">business Website</span>
                    </div>
                  </div>
                </div>

                <div className="home-offer__card home-offer__card--2">
                  <img
                    src="./images/what_offer_page/img_2.svg"
                    alt=""
                    className="home-offer__img"
                  />

                  <h4 className="home-offer__card-title">strategic marketing</h4>

                  <p className="home-offer__card-info">
                    We get your brand to where the relevant people are by choosing the proper
                    channels.
                  </p>

                  <div className="home-offer__list">
                    <div className="home-offer__proposal">
                      <img
                        src="./images/what_offer_page/banan_list.svg"
                        alt=""
                        className="home-offer__list-img"
                      />

                      <span className="home-offer__list-text">social medea marketing</span>
                    </div>

                    <div className="home-offer__proposal">
                      <img
                        src="./images/what_offer_page/banan_list.svg"
                        alt=""
                        className="home-offer__list-img"
                      />

                      <span className="home-offer__list-text">email marketing</span>
                    </div>

                    <div className="home-offer__proposal">
                      <img
                        src="./images/what_offer_page/banan_list.svg"
                        alt=""
                        className="home-offer__list-img"
                      />

                      <span className="home-offer__list-text">SEO services</span>
                    </div>
                  </div>
                </div>

                <div className="home-offer__card home-offer__card--3">
                  <img
                    src="./images/what_offer_page/img_3.svg"
                    alt=""
                    className="home-offer__img"
                  />

                  <h4 className="home-offer__card-title">software development</h4>

                  <p className="home-offer__card-info">
                    We help you identify errors and explore opportunities that can be utilized for
                    improvement.
                  </p>

                  <div className="home-offer__list">
                    <div className="home-offer__proposal">
                      <img
                        src="./images/what_offer_page/banan_list.svg"
                        alt=""
                        className="home-offer__list-img"
                      />

                      <span className="home-offer__list-text">desktop app development</span>
                    </div>

                    <div className="home-offer__proposal">
                      <img
                        src="./images/what_offer_page/banan_list.svg"
                        alt=""
                        className="home-offer__list-img"
                      />

                      <span className="home-offer__list-text">mobile app development</span>
                    </div>

                    <div className="home-offer__proposal">
                      <img
                        src="./images/what_offer_page/banan_list.svg"
                        alt=""
                        className="home-offer__list-img"
                      />

                      <span className="home-offer__list-text">blockchain development</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="home-clients">
            <div className="home-clients__content">
              <div className="container">
                <h2 className="page-title page-title--yellow home-clients__page-title--position">
                  our clients say
                </h2>
              </div>

              <SliderClients />
            </div>
          </section>

          <section className="home-wow">
            <div className="home-wow__content container">
              <h2 className="page-title page-title--yellow home-wow__page-title home-wow__page-title--mobile">
                Give Your <br />
                product that <br />
                <span className="page-title--pink">Wow</span> Factor
              </h2>
              <div className="home-wow__info">
                <h2 className="page-title page-title--yellow home-wow__page-title">
                  Give Your <br />
                  product that <br />
                  <span className="page-title--pink">Wow</span> Factor
                </h2>

                <img
                  src="./images/wow_factor_page/pc_img.svg"
                  alt=""
                  className="home-wow__img-mobile"
                />

                <p className="home-wow__description">
                  We build it all, having an effective website or mobile app is easy. Work with our
                  professional design team to tell your brand story and reach your customers.
                </p>

                <div className="home-wow__list">
                  <div className="home-wow__proposal">
                    <img
                      src="./images/what_offer_page/banan_list.svg"
                      alt=""
                      className="home-wow__list-img"
                    />

                    <span className="home-wow__list-text">professional design & support</span>
                  </div>

                  <div className="home-wow__proposal">
                    <img
                      src="./images/what_offer_page/banan_list.svg"
                      alt=""
                      className="home-wow__list-img"
                    />

                    <span className="home-wow__list-text">
                      built to grow your reach & customer base
                    </span>
                  </div>

                  <div className="home-wow__proposal">
                    <img
                      src="./images/what_offer_page/banan_list.svg"
                      alt=""
                      className="home-wow__list-img"
                    />

                    <span className="home-wow__list-text">
                      drive influence with social media connections
                    </span>
                  </div>
                </div>
              </div>

              <img src="./images/wow_factor_page/pc_img.svg" alt="" className="home-wow__img" />
            </div>
          </section>

          <section className="home-projects">
            <div className="home-projects__content">
              <div className="container">
                <h2 className="page-title page-title--yellow home-projects__page-title">featured projects </h2>

                <SliderProjects />
              </div>
            </div>
          </section>

          <Stack />

          <Form title="ready for a quote?" />
        </div>
      </main>

      <Footer />
    </div>
  );
}
