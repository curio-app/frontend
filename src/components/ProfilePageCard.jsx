import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const ProfilePageCard = ({ data }) => {
  const history = useHistory();
  return (
    <section className="user-collectable-card">
      <img src={data.imageUrl} alt="collectible" />
      <div className="user-collectable-card-text">
        <h3>{data.name}</h3>
      </div>
    </section>
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
