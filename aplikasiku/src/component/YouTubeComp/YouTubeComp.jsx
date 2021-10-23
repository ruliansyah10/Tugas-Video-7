import React from 'react';
import './YouTubeComp.css';

const YouTubeComp = (props) => {
    return (
        <div className="youtube-wrapper">
            <div className="img-thumb">
                <img src="https://i.ytimg.com/vi/QkRRH21AYQo/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLApBuUlzkkgsyg4vW35s9aao3E5kA" alt=""/>
                <p className="time">{props.time}</p>
            </div>
            <p className="tittle">{props.tittle}</p>
            <p className="desc">{props.desc}</p>
        </div>
    )
}

YouTubeComp.defaultProps = {
    time : '00.00',
    tittle : 'Tittle Here',
    desc : 'Desc Here'
}

export default YouTubeComp;