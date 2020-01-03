import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DummyData from './DummyData.json';
import LandingPageCard from './LandingPageCard';
import '../Landing.css';

const LandingPage = () => {
    const [cardInfo, setCardInfo] = useState([])

    useEffect(() => {
        axios.get('https://curi0.herokuapp.com/collectibles')
            .then(res => {
                console.log(res.data);
                return setCardInfo(res.data);
            });
    }, []);

    console.log(DummyData)
    return (
        <div className="landing-page-wrapper">
            {cardInfo.map(card => {
                return <LandingPageCard card={card} key={card.id} />
            })}
        </div>
    )
}

export default LandingPage;
