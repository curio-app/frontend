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
    axios.get('https://curi0.herokuapp.com/collectibles').then(res => {
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
        <p>See what other collectors are sharing</p>
        <input
          value={searchTerm}
          name="search"
          onChange={handleChanges}
          type="text"
        />
      </div>
      <main className="landing-page-wrapper">
        {searchResults.map(card => {
          return (
            <LandingPageCard card={card} key={card.id} history={history} />
          );
        })}
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
