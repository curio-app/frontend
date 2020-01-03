import React from 'react';

const LandingPageCard = props => {
  return (
    <a href="#">
      <div className="landing-page-card">
        <img src={props.card.imageUrl} />
        <div className="landing-page-card-text">
          <h2>{props.card.name}</h2>
          <p>{props.card.likes.length} likes</p>
          <p>
            Posted by: <a href="#">{props.card.username}</a>
          </p>
        </div>
      </div>
    </a>
  );
};

export default LandingPageCard;
