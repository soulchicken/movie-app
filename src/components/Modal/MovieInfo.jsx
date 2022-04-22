import React, { useState } from 'react'
import classes from './MovieInfo.module.css'


const MovieInfo = (props) => {
    // const [state, setState] = useState();
    console.log(props.id);
    console.log(typeof props.id);
    console.log(props);
    return (
        <li key={props.id} className={classes.movieInfo}>
            <div className={classes.movie__poster}>
                <img src={props.img} alt="" />
            </div>
            <div>
                <div className={classes.name}>{props.name}</div>
                <div>{props.description}</div>
            </div>
        </li>
    )
}

export default MovieInfo