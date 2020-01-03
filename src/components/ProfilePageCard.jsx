import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProfilePageCard = ({ data }) => {
  return (
    <Link to={`/collectibles/${data.id}`}>
      <section className="user-collectable-card">
        <img src={data.imageUrl} alt="collectible" />
        <aside className="user-collectable-card-text">
          <h3>{data.name}</h3>
        </aside>
      </section>
    </Link>
  );
};

ProfilePageCard.propTypes = {
  data: PropTypes.shape({
    imageUrl: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

export default ProfilePageCard;
