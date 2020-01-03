import React from 'react';

const LandingPageCard = (props) => {
  return (
    <a href="#">
      <div className="landing-page-card">
        <img src={props.card.img_url} alt="collectible card" />
        <div className="landing-page-card-text">
          <h2>{props.card.item_name}</h2>
          <p>
            {props.card.likes}
            {' '}
likes
          </p>
          {/* <p>
Posted by:
            <a href="#">{props.card.name.first}</a>
          </p> */}
        </div>
      </div>
    </a>
  );
};

export default LandingPageCard;
