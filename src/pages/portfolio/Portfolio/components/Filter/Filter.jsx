import classNames from 'classnames'
import React, { useEffect, useRef, useState } from 'react'

export default function Filter({ name }) {
  const [openMenu, setOpenMenu] = useState(false)
  const popupRef = useRef(null);

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setOpenMenu(false);
    }
  };

  const handleMenu = () => {
    setOpenMenu(!openMenu)
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="portfolio-top__filter-block__filter" ref={popupRef}>
      <div className="" onClick={handleMenu}>
        <span className="portfolio-top__filter-block__title">{name}</span>
        <img
          src="./images/portfolio/arrow_img.svg"
          alt=""
          srcset=""
          className={classNames('portfolio-top__filter-block__img', {
            'portfolio-top__filter-block__img--open': openMenu,
          })}
        />
      </div>

      <div
        className={classNames('portfolio-top__filter-block__filters', {
          'portfolio-top__filter-block__filters--open': openMenu,
        })}>
        <div className="portfolio-top__filter-block__content">
          <label for="text-1" className="portfolio-top__filter-block__checkbox-block">
            <input
              class="input"
              id="text-1"
              type="checkbox"
              className="portfolio-top__filter-block__checkbox"
            />
            <span className="portfolio-top__filter-block__name">swift</span>
          </label>
          <label for="text-2" className="portfolio-top__filter-block__checkbox-block">
            <input
              class="input"
              id="text-2"
              type="checkbox"
              className="portfolio-top__filter-block__checkbox"
            />
            <span className="portfolio-top__filter-block__name">react</span>
          </label>
          <label for="text-2" className="portfolio-top__filter-block__checkbox-block">
            <input
              class="input"
              id="text-2"
              type="checkbox"
              className="portfolio-top__filter-block__checkbox"
            />
            <span className="portfolio-top__filter-block__name">java</span>
          </label>
          <label for="text-2" className="portfolio-top__filter-block__checkbox-block">
            <input
              class="input"
              id="text-2"
              type="checkbox"
              className="portfolio-top__filter-block__checkbox"
            />
            <span className="portfolio-top__filter-block__name">java</span>
          </label>
        </div>
      </div>
    </div>
  );
}
