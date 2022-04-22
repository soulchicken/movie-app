import React from 'react'
import classes from './Search.module.css'

const Search = () => {
  const submitHandler = (event) => {

  }
  return (
    <div className={classes.divtag}>
        <span className={classes['search-text']}>Search</span>
        <input onSubmit={submitHandler} className={classes['search-input']} type="text" />
    </div>
  )
}

export default Search