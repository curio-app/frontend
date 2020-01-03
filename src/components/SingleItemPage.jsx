import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './SingleItem.css';

const SingleItemPage = ({ match }) => {
  const [itemData, setItemData] = useState({
    name: '',
    username: '',
    imageUrl: '',
    story: '',
    description: '',
    likes: [],
    tags: [],
  });
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    axios
      .get(`https://curi0.herokuapp.com/collectibles/${match.params.id}`)
      .then(res => {
        setItemData(res.data);
      });
  }, [match.params.id, setItemData]);

  const handleLike = e => {
    e.preventDefault();
    setItemData({
      ...itemData,
      likes: [...itemData.likes, { id: 1, username: 'username' }],
    });
    setLiked(true);
  };

  const handleUnlike = e => {
    e.preventDefault();
    setItemData({
      ...itemData,
      likes: [],
    });
    setLiked(false);
  };

  return (
    <main className="single-item-wrapper">
      <section className="single-item-header">
        <img alt="the product" src={itemData.imageUrl} />
        <aside className="single-item-content">
          <h2>{itemData.name}</h2>
          <p>
            Shared by&nbsp;
            <Link to={`/profile/${itemData.username}`}>
              {itemData.username}
            </Link>
          </p>
          <p>
            Liked&nbsp;
            <strong>{itemData.likes.length}</strong>
            &nbsp;times
          </p>
          {!liked ? (
            <button type="button" className="button like" onClick={handleLike}>
              Like&nbsp;
              <i className="far fa-heart" />
            </button>
          ) : (
            <button
              type="button"
              className="button liked"
              onClick={handleUnlike}
            >
              Liked&nbsp;
              <i className="fas fa-heart" />
            </button>
          )}
          {/* <h3>Looking to purchase?</h3>
          <div className="purchase-icons">
            <i className="fab fa-amazon" />
            <i className="fab fa-ebay" />
            <i className="fab fa-etsy" />
            <i className="far fa-envelope" />
          </div> */}
        </aside>
      </section>

      <section className="single-item-info">
        <section className="story">
          <h2>Collector&apos;s Story</h2>
          <p>{itemData.story === null ? 'N/A' : `${itemData.story}`}</p>
        </section>
        <section className="description">
          <h2>Description</h2>
          <p>
            {itemData.description === null ? 'N/A' : `${itemData.description}`}
          </p>
        </section>
        <section className="tags">
          <h2>Tags</h2>
          {itemData.tags.length === 0 ? (
            <p className="tag notag">N/A</p>
          ) : (
            itemData.tags.map(tag => <p className="tag withtag">{tag.name}</p>)
          )}
        </section>
      </section>
    </main>
  );
};

SingleItemPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default SingleItemPage;
