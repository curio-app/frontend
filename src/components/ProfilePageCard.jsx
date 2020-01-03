import React from 'react';
import '../ProfilePage.css';

const ProfilePageCard = (props) => {
  console.log(props.data)

  return (
    <div className="user-collectable-card">
      <div className="profile-page-img-wrapper">
        <img src={props.data.img_url} alt="collectible" />
      </div>
      <h3>{props.data.item_name}</h3>
      <p>
        Liked <span>{props.data.likes}</span> times
      </p>
      <button
        className="edit-button"
        onClick={e => {
          e.preventDefault();
          props.history.push(`/edit/${props.match.params.id}`)
        }}>Edit</button>
    </div>
  );
};

export default ProfilePageCard;
