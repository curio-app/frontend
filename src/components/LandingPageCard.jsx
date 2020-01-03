import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

const LandingPageCard = ({ card }) => {
  return (
    <Link to={`/collectibles/${card.id}`}>
      <div className="landing-page-card" role="gridcell">
        <img src={card.imageUrl} alt="" />
        <div className="landing-page-card-text" role="contentinfo">
          <h2>{card.name}</h2>
          <p>
            {card.likes.length}
            &nbsp;likes
          </p>
          <p>
            Posted by:&nbsp;
            {card.username}
          </p>
        </div>
      </div>
    </Link>
  );
};

LandingPageCard.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  card: PropTypes.shape({
    id: PropTypes.number,
    imageUrl: PropTypes.string,
    name: PropTypes.string,
    likes: PropTypes.arrayOf(
      PropTypes.shape({ id: PropTypes.number, username: PropTypes.string })
    ),
    userId: PropTypes.number,
    username: PropTypes.string,
  }).isRequired,
};

export default LandingPageCard;
