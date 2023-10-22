import { useState } from 'react';
import './main.scss'

let REVIEW_WIDTH = 650;

if (window.screen.width >= 600) {
  REVIEW_WIDTH = 700;
}

export const Stack = () =>  {
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
    <div className="stack-page">
      <div className="stack-page__content">
        <h2 className="stack-page-title stack-page-title--yellow container"> Tech stack</h2>

        <div className="main-stack-pocketbook main-stack-pocketbook--pocketbook container--stack">
          <div className="container">
            <img
              src="./images/stack_page/right_shadow.png"
              alt=""
              srcset=""
              className="main-stack__right-shadow"
            />
            <img
              src="./images/stack_page/top_shadow.png"
              alt=""
              srcset=""
              className="main-stack__top-shadow"
            />

            <img
              src="./images/stack_page/left_shadow.png"
              alt=""
              srcset=""
              className="main-stack__left-shadow"
            />

            <img
              src="./images/stack_page/bottom_shadow.png"
              alt=""
              srcset=""
              className="main-stack__bottom-shadow"
            />
            <div
              className="main-stack-pocketbook__block"
              style={{
                transform: `translateX(${offset}px)`,
              }}>
              <div className="main-stack-pocketbook_wrap">
                <div className="main-stack-pocketbook__direction-block">
                  <span className="main-stack-pocketbook__direction">UI/UX Design</span>

                  <div className="main-stack-pocketbook__tool-block">
                    <div className="main-stack-pocketbook__tool">
                      <div className="main-stack-pocketbook__block-img">
                        <img
                          src="./images/stack_page/figma_logo.svg"
                          alt=""
                          className="main-stack-pocketbook__img"
                        />
                      </div>

                      <span className="main-stack-pocketbook__tool-name">Figma</span>
                    </div>

                    <div className="main-stack-pocketbook__tool">
                      <div className="main-stack-pocketbook__block-img">
                        <img
                          src="./images/stack_page/ai_logo.svg"
                          alt=""
                          className="main-stack-pocketbook__img"
                        />
                      </div>

                      <span className="main-stack-pocketbook__tool-name">Illustrator</span>
                    </div>
                    <div className="main-stack-pocketbook__tool">
                      <div className="main-stack-pocketbook__block-img">
                        <img
                          src="./images/stack_page/ae_logo.svg"
                          alt=""
                          className="main-stack-pocketbook__img"
                        />
                      </div>

                      <span className="main-stack-pocketbook__tool-name">After Effects</span>
                    </div>
                    <div className="main-stack-pocketbook__tool">
                      <div className="main-stack-pocketbook__block-img">
                        <img
                          src="./images/stack_page/ps_logo.svg"
                          alt=""
                          className="main-stack-pocketbook__img"
                        />
                      </div>

                      <span className="main-stack-pocketbook__tool-name">Photoshop</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="main-stack-pocketbook_wrap">
                <div className="main-stack-pocketbook__direction-block">
                  <span className="main-stack-pocketbook__direction">Frontend</span>

                  <div className="main-stack-pocketbook__tool-block">
                    <div className="main-stack-pocketbook__tool">
                      <div className="main-stack-pocketbook__block-img">
                        <img
                          src="./images/stack_page/react_logo.svg"
                          alt=""
                          className="main-stack-pocketbook__img"
                        />
                      </div>

                      <span className="main-stack-pocketbook__tool-name">React</span>
                    </div>

                    <div className="main-stack-pocketbook__tool">
                      <div className="main-stack-pocketbook__block-img">
                        <img
                          src="./images/stack_page/js_logo.svg"
                          alt=""
                          className="main-stack-pocketbook__img"
                        />
                      </div>

                      <span className="main-stack-pocketbook__tool-name">JavaScript</span>
                    </div>
                    <div className="main-stack-pocketbook__tool">
                      <div className="main-stack-pocketbook__block-img">
                        <img
                          src="./images/stack_page/html_logo.svg"
                          alt=""
                          className="main-stack-pocketbook__img"
                        />
                      </div>

                      <span className="main-stack-pocketbook__tool-name">HTML</span>
                    </div>
                    <div className="main-stack-pocketbook__tool">
                      <div className="main-stack-pocketbook__block-img">
                        <img
                          src="./images/stack_page/css_logo.svg"
                          alt=""
                          className="main-stack-pocketbook__img"
                        />
                      </div>

                      <span className="main-stack-pocketbook__tool-name">CSS</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="main-stack-pocketbook_wrap">
                <div className="main-stack-pocketbook__direction-block">
                  <span className="main-stack-pocketbook__direction">backend</span>

                  <div className="main-stack-pocketbook__tool-block">
                    <div className="main-stack-pocketbook__tool">
                      <div className="main-stack-pocketbook__block-img">
                        <img
                          src="./images/stack_page/firebase_logo.svg"
                          alt=""
                          className="main-stack-pocketbook__img"
                        />
                      </div>

                      <span className="main-stack-pocketbook__tool-name">Firebase</span>
                    </div>

                    <div className="main-stack-pocketbook__tool">
                      <div className="main-stack-pocketbook__block-img">
                        <img
                          src="./images/stack_page/mongo_logo.svg"
                          alt=""
                          className="main-stack-pocketbook__img"
                        />
                      </div>

                      <span className="main-stack-pocketbook__tool-name">Mongo DB</span>
                    </div>
                    <div className="main-stack-pocketbook__tool">
                      <div className="main-stack-pocketbook__block-img">
                        <img
                          src="./images/stack_page/node_logo.svg"
                          alt=""
                          className="main-stack-pocketbook__img"
                        />
                      </div>

                      <span className="main-stack-pocketbook__tool-name">NodeJS</span>
                    </div>
                    <div className="main-stack-pocketbook__tool">
                      <div className="main-stack-pocketbook__block-img">
                        <img
                          src="./images/stack_page/mysql_logo.svg"
                          alt=""
                          className="main-stack-pocketbook__img"
                        />
                      </div>

                      <span className="main-stack-pocketbook__tool-name">MySQL</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="main-stack-pocketbook__bottom">
              <div className="main-stack-pocketbook__arrow-block">
                {offset === 0 ? (
                  <img
                    src="./images/our_clients_page/passive_left_arrow.svg"
                    alt=""
                    className="home-clients__arrow-img main-stack-pocketbook__arrow-img"
                    onClick={handleLeftArrow}
                  />
                ) : (
                  <img
                    src="./images/our_clients_page/active_left_arrow.svg"
                    alt=""
                    className="home-clients__arrow-img main-stack-pocketbook__arrow-img"
                    onClick={handleLeftArrow}
                  />
                )}
              </div>

              <div className="main-stack-pocketbook__arrow-block">
                {offset <= 0 && offset !== -(REVIEW_WIDTH * 2) ? (
                  <img
                    src="./images/our_clients_page/active_right_arrow.svg"
                    alt=""
                    className="home-clients__arrow-img main-stack-pocketbook__arrow-img"
                    onClick={handleRightArrow}
                  />
                ) : (
                  <img
                    src="./images/our_clients_page/passive_right_arrow.svg"
                    alt=""
                    className="home-clients__arrow-img main-stack-pocketbook__arrow-img"
                    onClick={handleRightArrow}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
