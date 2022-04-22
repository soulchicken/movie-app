import React from 'react'
import Button from '../Commons/Button'
import classes from './AddMovieForm.module.css'



const AddMovieForm = (props) => {
  let inputKey;
  const inputKeyHandler = event => {
    inputKey = event.target.id;
    console.log(event.target);
    props.keyIs(inputKey);
};

{/* <button onClick={ () => { */}
  //   onClickHandler()
  //   hideMenu()
  // } }>Sign out</button>

  return (
    <form>
        <Button type="" id={props.inputKey} onClick={ () => {
          props.onOpen()
          inputKeyHandler()
        } }>상세보기</Button>
    </form>
    )
}

export default AddMovieForm