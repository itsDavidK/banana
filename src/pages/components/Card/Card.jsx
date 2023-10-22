/* eslint-disable jsx-a11y/alt-text */
import './main.scss';

export const Card = ({ number, img, name, rate, position, experince, skills }) => {
  let className = `card card--${number}`;

  return (
    <div className={className}>
      <div className="card__top">
        <img src={img} className="card__avatar" />
        <div className="card__detail">
          <div className="card__detail-top">
            <h3 className="card__name">{name}</h3>
            <h3 className="card__rate">${rate}/H</h3>
          </div>
          <div className="card__detail-bottom">
            <p className="card__position">{position}</p>
            <h3 className="card__experience">{experince} years of experience</h3>
          </div>
        </div>
      </div>
      <div className="card__bottom">
        {skills && skills.map((skill, index) => <div key={`${index}_${skill[0]}`} className="card__skill">{skill}</div>)}
      </div>
    </div>
  );
};
