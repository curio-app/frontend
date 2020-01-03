import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DummyData from './DummyData.json';
import LandingPageCard from './LandingPageCard';
import '../Landing.css';

const LandingPage = () => {
  const [setCardInfo] = useState([]);

  useEffect(() => {
    axios.get('https://url.notreal.lalala.com').then(res => {
      console.log(res.data);
      return setCardInfo(res.data);
    });
  }, []);

  console.log(DummyData);
  return (
    <main className="landing-page-wrapper">
      {DummyData.map(card => {
        return <LandingPageCard card={card} />;
      })}
    </main>
  );
};

export default LandingPage;
