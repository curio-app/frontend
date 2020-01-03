import React from 'react';

const ProfilePageCard = (props) => {
  console.log(props.data)
  


  return (
    <div>
      <img src={props.data.img_url} alt="collectible"></img>
      <h3>{props.data.item_name}</h3>
      <p>
      Liked <span>{props.data.likes}</span> times
      </p>
      <button onClick={e => {
        e.preventDefault();
        props.history.push(`/edit/${props.match.params.id}`)
      }}>Edit</button>
    </div>
  );
};

export default ProfilePageCard;
