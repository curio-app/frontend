import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import LandingPageCard from './LandingPageCard';
import '../Landing.css';

const LandingPage = ({ history }) => {
  const [cardInfo, setCardInfo] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(cardInfo);

  useEffect(() => {
    axios.get('https://curi0.herokuapp.com/collectibles/latest').then(res => {
      console.log(res.data);
      return setCardInfo(res.data);
    });
  }, []);

  useEffect(() => {
    setSearchResults(
      cardInfo.filter(element => {
        return element.name.toLowerCase().includes(searchTerm.toLowerCase());
      })
    );
  }, [searchTerm, cardInfo]);

  const handleChanges = e => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <div className="search-bar" role="heading">
        <h2>See what other collectors are sharing</h2>
        <label htmlFor="username" className="input-container">
          <i className="fas fa-search icon" />
          <input
            className="input-field"
            type="text"
            value={searchTerm}
            onChange={handleChanges}
            name="search"
            placeholder="Search for keywords"
          />
        </label>
      </div>
      <main className="landing-page-wrapper">
        <h2 style={{ textAlign: 'left' }}>
          Latest collectibles shared by other collectors
        </h2>
        <div>
          {searchResults.map(card => {
            return (
              <LandingPageCard card={card} key={card.id} history={history} />
            );
          })}
        </div>
      </main>
    </>
  );
};

LandingPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default LandingPage;
