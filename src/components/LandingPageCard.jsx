import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

const LandingPageCard = ({ card, history }) => {
  const handleProfileClick = () => {
    history.push(`/profiles/${card.name.first}`);
  };

  const handleProfileKeyDown = e => {
    if (e.keyCode === 13) {
      history.push(`/profiles/${card.name.first}`);
    }
  };
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
            <span
              role="link"
              tabIndex="0"
              onClick={handleProfileClick}
              onKeyPress={handleProfileKeyDown}
            >
              {card.name.first}
            </span>
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
