import React, { useState, useEffect } from 'react';
import './SingleItem.css';

//singledummy data

import axios from 'axios';

const SingleItemPage = (props) => {
  const [itemData, setItemData] = useState({
    name: "",
    username: "",
    story: "",
    description: "",
    likes: [],
    tags: [],
  });
  
  useEffect(()=> {
    axios.get(`https://curi0.herokuapp.com/collectibles/${props.match.params.id}`)
    .then(res => setItemData(res.data))
  }, [props.match.params.id])
  console.log(itemData)

  return (
    <>
      <div className="single-item-wrapper">
        <section className="single-item-header">
          <div className="single-item-img">
            <img alt="the product" src={itemData.imageUrl} />
          </div>
          <div className="single-item-content">
            <h2>{itemData.name}</h2>
            <p>
              Shared by{' '}
              <span className="text">
                <strong>{itemData.username}</strong>
              </span>
            </p>
            <p>
              Liked{' '}
              <span className="text">
                <strong>{itemData.likes.length}</strong>
              </span>{' '}
              times
            </p>
            <button className="button like">
              Like{' '}
              <span>
                <i class="far fa-heart"></i>
              </span>
            </button>
            <button className="button liked">
              Liked{' '}
              <span>
                // <i class="fas fa-heart"></i>
              </span>
            </button>
            <h3>Looking to purchase?</h3>
            <div className="purchase-icons">
              <i class="fab fa-amazon"></i>
              <i class="fab fa-ebay"></i>
              <i class="fab fa-etsy"></i>
              <i class="far fa-envelope"></i>
            </div>
          </div>
        </section>

        <div className="single-item-info">
          <section className="story">
            <h2>Collector's Story</h2>
            <p>{itemData.story === null ? 'N/A' : `${itemData.story}`} </p>
          </section>
          <section className="description">
            <h2>Description</h2>
            <p>
              {itemData.description === null
                ? 'N/A'
                : `${itemData.description}`}{' '}
            </p>
          </section>
          <section className="tags">
            <h2>Tags</h2>
            {itemData.tags.length === 0 ? (
              <span className="tag notag">N/A</span>
            ) : (
              itemData.tags.map(tag => (
                <span className="tag withtag">{tag.name}</span>
              ))
            )}
          </section>
        </div>
      </div>
    </>
  );
};

export default SingleItemPage;
