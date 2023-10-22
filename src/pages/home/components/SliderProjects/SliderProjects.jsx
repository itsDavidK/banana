import { useState } from 'react';
import './main.scss';
import { NavLink } from 'react-router-dom';

let REVIEW_WIDTH = window.screen.width;

if (window.screen.width >= 1065) {
  REVIEW_WIDTH = 850;
}

export const SliderProjects = () => {
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

      const maxOffset = -(REVIEW_WIDTH * 2);

      return Math.max(newOffset, maxOffset);
    });
  };

  return (
    <>
      <div
        className="slider-projects"
        style={{
          transform: `translateX(${offset}px)`,
        }}>
        <NavLink to="/pocketbook" preventScrollReset className="slider-projects__block">
          <div className="slider-projects__card">
            <h4 className="slider-projects__type-info">Mobile application</h4>

            <img
              src="./images/clients/pocketbook/logo.png"
              alt=""
              className="slider-projects__company-img"
            />

            <div className="slider-projects__bottom">
              <div className="slider-projects__direction">Business</div>

              <div className="slider-projects__direction">Redesign</div>

              <div className="slider-projects__direction">Web development</div>

              <div className="slider-projects__direction">E-commerce</div>
            </div>
          </div>
        </NavLink>

        <div className="slider-projects__block">
          <div className="slider-projects__card">
            <h4 className="slider-projects__type-info">Mobile application</h4>

            <img
              src="./images/clients/pocketbook/logo.svg"
              alt=""
              className="slider-projects__company-img"
            />

            <div className="slider-projects__bottom">
              <div className="slider-projects__direction">Business</div>

              <div className="slider-projects__direction">Redesign</div>

              <div className="slider-projects__direction">Web development</div>

              <div className="slider-projects__direction">E-commerce</div>
            </div>
          </div>
        </div>

        <div className="slider-projects__block">
          <div className="slider-projects__card">
            <h4 className="slider-projects__type-info">Mobile application</h4>

            <img
              src="./images/clients/pocketbook/logo.svg"
              alt=""
              className="slider-projects__company-img"
            />

            <div className="slider-projects__bottom">
              <div className="slider-projects__direction">Business</div>

              <div className="slider-projects__direction">Redesign</div>

              <div className="slider-projects__direction">Web development</div>

              <div className="slider-projects__direction">E-commerce</div>
            </div>
          </div>
        </div>
      </div>

      <div className="">
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

            {offset <= 0 && offset !== -(REVIEW_WIDTH * 2) ? (
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
          <NavLink to="/portfolio">
            <button className="home-clients__button">all projects</button>
          </NavLink>
        </div>
      </div>
    </>
  );
};
