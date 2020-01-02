import React from 'react';

const LandingPageCard = (props) => {
    return <a href="#">
        <div className="landing-page-card">
            <img src={props.card.picture} />
            <div className="landing-page-card-text">
                <h2>{props.card.title}</h2>
                <p>{props.card.likes} likes</p>
                <p>Posted by: <a href="#">{props.card.name.first}</a></p>
            </div>
        </div>
    </a>
}

export default LandingPageCard;