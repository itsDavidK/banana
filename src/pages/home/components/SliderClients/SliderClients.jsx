/* eslint-disable react/jsx-no-comment-textnodes */
import { useState } from 'react';
import '../../main.scss'
import { NavLink } from 'react-router-dom';

let REVIEW_WIDTH = window.screen.width;

if (window.screen.width >= 600) {
  REVIEW_WIDTH = 625;
}

export const SliderClients = () => {
  const [offset, setOffset] = useState(0);

  const handleLeftArrow = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + REVIEW_WIDTH;

      return Math.min(newOffset, 0);
    });
  };

  const handleRightArrow = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - REVIEW_WIDTH;

      const maxOffset = -(REVIEW_WIDTH * 3);

      return Math.max(newOffset, maxOffset);
    });
  };

  return (
    <>
      <div
        className="home-clients__block container"
        style={{
          transform: `translateX(${offset}px)`,
        }}>
        <div className="home-clients__column">
          <div className="home-clients__card">
            <div className="home-clients__top">
              <img src="./images/our_clients_page/star.svg" alt="" className="home-clients__star" />
              <img src="./images/our_clients_page/star.svg" alt="" className="home-clients__star" />
              <img src="./images/our_clients_page/star.svg" alt="" className="home-clients__star" />
              <img src="./images/our_clients_page/star.svg" alt="" className="home-clients__star" />
              <img src="./images/our_clients_page/star.svg" alt="" className="home-clients__star" />
            </div>

            <p className="home-clients__review">
              I’ve worked with some incredible devs in my career, but the experience I am having
              with my dev through Lemon.io is so 🔥. I feel invincible as a founder. So thankful to
              the team!
            </p>

            <div className="home-clients__review-bottom">
              <img
                src="./images/our_clients_page/client_img.png"
                alt=""
                className="home-clients__client-img"
              />

              <div className="home-clients__review-bottom-info">
                <span className="home-clients__name">Mitchel Gronyx</span>

                <div className="home-clients__position">// founder of Microssoft, UK</div>
              </div>
            </div>
          </div>
          <div className="home-clients__card">
            <div className="home-clients__top">
              <img src="./images/our_clients_page/star.svg" alt="" className="home-clients__star" />
              <img src="./images/our_clients_page/star.svg" alt="" className="home-clients__star" />
              <img src="./images/our_clients_page/star.svg" alt="" className="home-clients__star" />
              <img src="./images/our_clients_page/star.svg" alt="" className="home-clients__star" />
              <img src="./images/our_clients_page/star.svg" alt="" className="home-clients__star" />
            </div>

            <p className="home-clients__review">
              I’ve worked with some incredible devs in my career, but the experience I am having
              with my dev through Lemon.io is so 🔥. I feel invincible as a founder. So thankful to
              the team!
            </p>

            <div className="home-clients__review-bottom">
              <img
                src="./images/our_clients_page/client_img.png"
                alt=""
                className="home-clients__client-img"
              />

              <div className="home-clients__review-bottom-info">
                <span className="home-clients__name">Mitchel Gronyx</span>

                <div className="home-clients__position">// founder of Microssoft, UK</div>
              </div>
            </div>
          </div>
        </div>

        <div className="home-clients__column">
          <div className="home-clients__card">
            <div className="home-clients__top">
              <img src="./images/our_clients_page/star.svg" alt="" className="home-clients__star" />
              <img src="./images/our_clients_page/star.svg" alt="" className="home-clients__star" />
              <img src="./images/our_clients_page/star.svg" alt="" className="home-clients__star" />
              <img src="./images/our_clients_page/star.svg" alt="" className="home-clients__star" />
              <img src="./images/our_clients_page/star.svg" alt="" className="home-clients__star" />
            </div>

            <p className="home-clients__review">
              I’ve worked with some incredible devs in my career, but the experience I am having
              with my dev through Lemon.io is so 🔥. I feel invincible as a founder. So thankful to
              the team!
            </p>

            <div className="home-clients__review-bottom">
              <img
                src="./images/our_clients_page/client_img.png"
                alt=""
                className="home-clients__client-img"
              />

              <div className="home-clients__review-bottom-info">
                <span className="home-clients__name">Mitchel Gronyx</span>

                <div className="home-clients__position">// founder of Microssoft, UK</div>
              </div>
            </div>
          </div>
          <div className="home-clients__card">
            <div className="home-clients__top">
              <img src="./images/our_clients_page/star.svg" alt="" className="home-clients__star" />
              <img src="./images/our_clients_page/star.svg" alt="" className="home-clients__star" />
              <img src="./images/our_clients_page/star.svg" alt="" className="home-clients__star" />
              <img src="./images/our_clients_page/star.svg" alt="" className="home-clients__star" />
              <img src="./images/our_clients_page/star.svg" alt="" className="home-clients__star" />
            </div>

            <p className="home-clients__review">
              I’ve worked with some incredible devs in my career, but the experience I am having
              with my dev through Lemon.io is so 🔥. I feel invincible as a founder. So thankful to
              the team!
            </p>

            <div className="home-clients__review-bottom">
              <img
                src="./images/our_clients_page/client_img.png"
                alt=""
                className="home-clients__client-img"
              />

              <div className="home-clients__review-bottom-info">
                <span className="home-clients__name">Mitchel Gronyx</span>

                <div className="home-clients__position">// founder of Microssoft, UK</div>
              </div>
            </div>
          </div>
        </div>

        <div className="home-clients__column">
          <div className="home-clients__card">
            <div className="home-clients__top">
              <img src="./images/our_clients_page/star.svg" alt="" className="home-clients__star" />
              <img src="./images/our_clients_page/star.svg" alt="" className="home-clients__star" />
              <img src="./images/our_clients_page/star.svg" alt="" className="home-clients__star" />
              <img src="./images/our_clients_page/star.svg" alt="" className="home-clients__star" />
              <img src="./images/our_clients_page/star.svg" alt="" className="home-clients__star" />
            </div>

            <p className="home-clients__review">
              I’ve worked with some incredible devs in my career, but the experience I am having
              with my dev through Lemon.io is so 🔥. I feel invincible as a founder. So thankful to
              the team!
            </p>

            <div className="home-clients__review-bottom">
              <img
                src="./images/our_clients_page/client_img.png"
                alt=""
                className="home-clients__client-img"
              />

              <div className="home-clients__review-bottom-info">
                <span className="home-clients__name">Mitchel Gronyx</span>

                <div className="home-clients__position">// founder of Microssoft, UK</div>
              </div>
            </div>
          </div>
          <div className="home-clients__card">
            <div className="home-clients__top">
              <img src="./images/our_clients_page/star.svg" alt="" className="home-clients__star" />
              <img src="./images/our_clients_page/star.svg" alt="" className="home-clients__star" />
              <img src="./images/our_clients_page/star.svg" alt="" className="home-clients__star" />
              <img src="./images/our_clients_page/star.svg" alt="" className="home-clients__star" />
              <img src="./images/our_clients_page/star.svg" alt="" className="home-clients__star" />
            </div>

            <p className="home-clients__review">
              I’ve worked with some incredible devs in my career, but the experience I am having
              with my dev through Lemon.io is so 🔥. I feel invincible as a founder. So thankful to
              the team!
            </p>

            <div className="home-clients__review-bottom">
              <img
                src="./images/our_clients_page/client_img.png"
                alt=""
                className="home-clients__client-img"
              />

              <div className="home-clients__review-bottom-info">
                <span className="home-clients__name">Mitchel Gronyx</span>

                <div className="home-clients__position">// founder of Microssoft, UK</div>
              </div>
            </div>
          </div>
        </div>

        <div className="home-clients__column">
          <div className="home-clients__card">
            <div className="home-clients__top">
              <img src="./images/our_clients_page/star.svg" alt="" className="home-clients__star" />
              <img src="./images/our_clients_page/star.svg" alt="" className="home-clients__star" />
              <img src="./images/our_clients_page/star.svg" alt="" className="home-clients__star" />
              <img src="./images/our_clients_page/star.svg" alt="" className="home-clients__star" />
              <img src="./images/our_clients_page/star.svg" alt="" className="home-clients__star" />
            </div>

            <p className="home-clients__review">
              I’ve worked with some incredible devs in my career, but the experience I am having
              with my dev through Lemon.io is so 🔥. I feel invincible as a founder. So thankful to
              the team!
            </p>

            <div className="home-clients__review-bottom">
              <img
                src="./images/our_clients_page/client_img.png"
                alt=""
                className="home-clients__client-img"
              />

              <div className="home-clients__review-bottom-info">
                <span className="home-clients__name">Mitchel Gronyx</span>

                <div className="home-clients__position">// founder of Microssoft, UK</div>
              </div>
            </div>
          </div>
          <div className="home-clients__card">
            <div className="home-clients__top">
              <img src="./images/our_clients_page/star.svg" alt="" className="home-clients__star" />
              <img src="./images/our_clients_page/star.svg" alt="" className="home-clients__star" />
              <img src="./images/our_clients_page/star.svg" alt="" className="home-clients__star" />
              <img src="./images/our_clients_page/star.svg" alt="" className="home-clients__star" />
              <img src="./images/our_clients_page/star.svg" alt="" className="home-clients__star" />
            </div>

            <p className="home-clients__review">
              I’ve worked with some incredible devs in my career, but the experience I am having
              with my dev through Lemon.io is so 🔥. I feel invincible as a founder. So thankful to
              the team!
            </p>

            <div className="home-clients__review-bottom">
              <img
                src="./images/our_clients_page/client_img.png"
                alt=""
                className="home-clients__client-img"
              />

              <div className="home-clients__review-bottom-info">
                <span className="home-clients__name">Mitchel Gronyx</span>

                <div className="home-clients__position">// founder of Microssoft, UK</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="home-clients__bottom">
          <div className="home-clients__arrow">
            {offset === 0 ? (
              <img
                src="./images/our_clients_page/passive_left_arrow.svg"
                alt=""
                className="home-clients__arrow-img"
                onClick={handleLeftArrow}
              />
            ) : (
              <img
                src="./images/our_clients_page/active_left_arrow.svg"
                alt=""
                className="home-clients__arrow-img"
                onClick={handleLeftArrow}
              />
            )}

            {offset <= 0 && offset !== -(REVIEW_WIDTH * 3) ? (
              <img
                src="./images/our_clients_page/active_right_arrow.svg"
                alt=""
                className="home-clients__arrow-img"
                onClick={handleRightArrow}
              />
            ) : (
              <img
                src="./images/our_clients_page/passive_right_arrow.svg"
                alt=""
                className="home-clients__arrow-img"
                onClick={handleRightArrow}
              />
            )}
          </div>
          <NavLink to="/reviews">
            <button className="home-clients__button">all reviews</button>
          </NavLink>
        </div>
      </div>
    </>
  );
};
