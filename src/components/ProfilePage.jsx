import React from 'react';
import ProfilePageCard from './ProfilePageCard';
import { dummydata } from './dummydata.jsx';

const ProfilePage = props => {
  console.log(dummydata);

  return (
    <div>
      <div>
        <img src="https://via.placeholder.com/150" alt="hello" />
      </div>
      <div>
        <h3>UsernamePlaceholder</h3>
        <p>
          Total Collectible: <span>50</span>
        </p>
        <button>Add a new collectible</button>
      </div>
      <div>
        {dummydata.map(each => (
          <ProfilePageCard key={each.id} data={each} />
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;
