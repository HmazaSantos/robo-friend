import React from 'react';

const Card = (props) => {
    return (
        <div className = " bg-light-green tc dib br3 pa3 ma2 b--dark-green grow bw2 shadow-5">
            <img alt ="robot" src= {`https://robohash.org/${props.id}?300x200`}/>
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    );
}

export default Card;

