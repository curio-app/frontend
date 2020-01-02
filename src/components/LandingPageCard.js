import React from 'react';

const LandingPageCard = (props) => {
    return <div className="landing-page-card">
        <img src={props.card.picture} />
        <div className="landing-page-card-text">
            <h2>{props.card.title}</h2>
            <p>{props.card.likes} likes</p>
            <p>Posted by: {props.card.name.first}</p>
        </div>
    </div>
}

export default LandingPageCard;