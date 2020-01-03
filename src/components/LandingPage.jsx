import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DummyData from './DummyData.json';
import LandingPageCard from './LandingPageCard';
import '../Landing.css';

const LandingPage = () => {
  const [cardInfo, setCardInfo] = useState(DummyData);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    axios.get('https://url.notreal.lalala.com')
      .then(res => {
        console.log(res.data);
        return setCardInfo(res.data);
      });
  }, []);

  useEffect(() => {
    setSearchResults(cardInfo.filter(element => {
      return element.item_name.toLowerCase().includes(searchTerm.toLowerCase());
    }));
  }, [searchTerm]);

  const handleChanges = e => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <div className="search-bar">
        <p>See what other collectors are sharing</p>
        <input value={searchTerm} name="search" onChange={handleChanges} type="text" />
      </div>
      <div className="landing-page-wrapper">
        {searchResults.map(card => {
          return <LandingPageCard card={card} />;
        })}
      </div>
    </>
  );
};

export default LandingPage;
