import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import './style.css';

import UploadPage1 from './UploadPage1';
import UploadPage2 from './UploadPage2';
import UploadPage3 from './UploadPage3';
import Paginations from './Paginations';

const UploadPage = ({ match }) => {
  const [pageBars, setPageBars] = useState({
    isPageOne: false,
    isPageTwo: false,
    isPageThree: false,
  });
  const [newCollectible, setNewCollectible] = useState({
    imageUrl:
      'https://res.cloudinary.com/curioapp/image/upload/v1578031657/defaultCollectible_muk40e.png',
    name: '',
    story: '',
    sellable: false,
    description: '',
    tags: [],
  });
  const handleChange = e => {
    setNewCollectible({
      ...newCollectible,
      [e.target.name]: e.target.value,
    });
  };

  const setImgUrl = url => {
    setNewCollectible({
      ...newCollectible,
      imageUrl: url,
    });
  };

  const toggleSellable = e => {
    e.preventDefault();
    setNewCollectible({
      ...newCollectible,
      sellable: !newCollectible.sellable,
    });
  };

  const addTag = tagName => {
    if (!tagName) return;
    const newTag = {
      id: Date.now(),
      name: tagName,
    };
    setNewCollectible(prevState => ({
      ...prevState,
      tags: [...prevState.tags, newTag],
    }));
  };

  const removeTag = tagId => {
    setNewCollectible(prevState => ({
      ...prevState,
      tags: prevState.tags.filter(tag => tag.id !== tagId),
    }));
  };

  return (
    <div>
      <Route
        path={`${match.path}/1`}
        render={props => (
          <UploadPage1
            {...props}
            setPageBars={setPageBars}
            handleChange={handleChange}
            name={newCollectible.name}
            setImgUrl={setImgUrl}
            imageUrl={newCollectible.imageUrl}
          />
        )}
      />
      <Route
        path={`${match.path}/2`}
        render={props => (
          <UploadPage2
            {...props}
            setPageBars={setPageBars}
            story={newCollectible.story}
            sellable={newCollectible.sellable}
            handleChange={handleChange}
            toggleSellable={toggleSellable}
          />
        )}
      />
      <Route
        path={`${match.path}/3`}
        render={props => (
          <UploadPage3
            {...props}
            description={newCollectible.description}
            handleChange={handleChange}
            setPageBars={setPageBars}
            tags={newCollectible.tags}
            addTag={addTag}
            removeTag={removeTag}
            newCollectible={newCollectible}
          />
        )}
      />

      <Paginations page={pageBars} />
    </div>
  );
};

UploadPage.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }).isRequired,
};

export default UploadPage;
