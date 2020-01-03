import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

const LandingPageCard = ({ card }) => {
  console.log(card);
  return (
    <Link to={`/collectibles/${card.id}`}>
      <div className="landing-page-card" role="gridcell">
        <img src={card.picture} alt="" />
        <div className="landing-page-card-text" role="contentinfo">
          <h2>{card.title}</h2>
          <p>
            {card.likes}
            &nbsp;likes
          </p>
          <p>
            Posted by:&nbsp;
            <Link to={`/profiles/${card.name.first}`}>{card.name.first}</Link>
          </p>
        </div>
      </div>
    </Link>
  );
};

LandingPageCard.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.string,
    picture: PropTypes.string,
    title: PropTypes.string,
    likes: PropTypes.number,
    name: PropTypes.shape({
      first: PropTypes.string,
    }),
  }).isRequired,
};

export default LandingPageCard;
