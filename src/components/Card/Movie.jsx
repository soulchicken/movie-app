import React from 'react'
import AddMovieForm from './AddMovieForm'
import classes from './Movie.module.css'

const Movie = (props) => {
    return (
        <>
            <li className={classes.movie}>
                <div className={classes.movie__info}>
                    <div className={classes.movie__poster}><img src={props.img}></img></div>
                    <div className={classes.name}>{props.name}</div>
                    <div className={classes.movie__rate}>
                        <span><img src={props.icon} alt={props.alt} />{props.likeRate}</span>
                        <span className={classes.line}>예매율 {props.rate}</span>
                        <AddMovieForm onOpen={props.onOpen} />
                    </div>
                </div>
            </li>
        </>
    )
}

export default Movie