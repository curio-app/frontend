import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import DummyData from './DummyData.json';
import LandingPageCard from './LandingPageCard';
import '../Landing.css';

const LandingPage = ({ history }) => {
  const [setCardInfo] = useState([]);

  useEffect(() => {
    axios.get('https://url.notreal.lalala.com').then(res => {
      return setCardInfo(res.data);
    });
  }, [setCardInfo]);

  return (
    <main className="landing-page-wrapper">
      {DummyData.map(card => {
        return <LandingPageCard card={card} key={card.id} history={history} />;
      })}
    </main>
  );
};

LandingPage.propTypes = {
  history: PropTypes.shape({ location: PropTypes.string }).isRequired,
};

export default LandingPage;
