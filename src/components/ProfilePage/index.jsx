import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import axiosWithAuth from '../auth/axiosWithAuth';
import ProfilePageCard from './Card';

import './style.css';

const ProfilePage = ({ match }) => {
  const [profile, setProfile] = useState({
    imageUrl: '',
    username: match.params.username,
    id: 0,
    folders: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axiosWithAuth().get(
        `/profiles/${match.params.username}`
      );
      setProfile(data);
    };
    fetchData();
  }, [match.params.username, setProfile]);

  const history = useHistory();
  return (
    <div>
      {/* {console.log(profile.folders[0].collectibles.length)} */}
      <section className="overall-user-wrapper">
        <img src={profile.imageUrl} alt="" />
        <section className="user-info-wrapper">
          <h3>{profile.username}</h3>
          <p>
            Total Collectibles:
            {profile.folders[0] &&
            profile.folders[0].collectibles &&
            profile.folders[0].collectibles.length
              ? profile.folders[0].collectibles.length
              : 0}
          </p>
          <button
            type="button"
            className="add-collect-button"
            onClick={e => {
              e.preventDefault();
              history.push('/upload-page/1');
            }}
          >
            Add a new collectible
          </button>
        </section>
      </section>
      <section className="user-collectable-card-wrapper">
        {profile.folders.map(folder => (
          <section key={folder.folderId}>
            <h3>{folder.folder}</h3>
            <div className="user-collect-wrapper" role="listitem">
              {folder.collectibles.map(collectible => {
                return (
                  <ProfilePageCard key={collectible.id} data={collectible} />
                );
              })}
            </div>
          </section>
        ))}
      </section>
    </div>
  );
};

ProfilePage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      username: PropTypes.string,
    }),
  }).isRequired,
};

export default ProfilePage;
