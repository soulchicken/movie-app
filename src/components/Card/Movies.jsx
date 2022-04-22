import React from 'react'
import MoviesList from './MoviesList'

const Movies = (props) => {
    return (
        <MoviesList onOpen={props.onOpen} />
    )
}

export default Movies