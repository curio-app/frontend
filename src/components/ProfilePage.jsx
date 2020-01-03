import React from 'react';
import ProfilePageCard from './ProfilePageCard';
import { dummydata } from './dummydata.jsx';
import '../ProfilePage.css';

const ProfilePage = props => {
  console.log(dummydata);

  console.log(dummydata);

  return (
    <div>
      <div className="overall-user-wrapper">
        <div className="user-img-wrapper">
          <img
            src="https://photos.puppyspot.com/7/listing/626767/photo/5284820_small.jpg"
            alt="hello"
          />
        </div>
        <div className="user-info-wrapper">
          <h3>UsernamePlaceholder</h3>
          <p>
            Total Collectibles: <span>50</span>
          </p>
          <button className="add-collect-button">Add a new collectible</button>
        </div>
      </div>
      <div className="user-collectable-card-wrapper">
        {dummydata.map(each => (
          <ProfilePageCard key={each.id} data={each} />
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;
