import React from 'react';
// import {withRoute} from 'react-router-dom'; this is a Hoc we can use to get props from the closest component from which it is called 
import './Post.css';

const post = (props) => (
    <article className="Post" onClick={props.clicked}>
        <h1>{props.title}</h1>
        <div className="Info">
            <div className="Author">{props.author}</div>
        </div>
    </article>
);

// export default withRoute(post); now after wrapping this we can get all the required (match,history ) props with the already existing ones
export default post;