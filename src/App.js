import { useState } from 'react';
import Header from './components/Layout/Header';
import Main from './components/Layout/Main';
import Footer from './components/Layout/Footer';
import SelectedMovie from './components/Modal/SelectedMovie';
import './App.css';
import Movies from './components/Card/Movies';

function App() {
    const [infoIsShown, setInfoIsShown] = useState(false);
    // const [movie, setMovie] = useState([]);
    // const [state, setState] = useState({key:''});
    
    const openInfoHandler = () => {
      setInfoIsShown(true);
    }
    
    // const keyHandler = (inputKey) => {
    //   setState({key: inputKey});  
    // }
    
    const closeInfoHandler = () => {
      setInfoIsShown(false);
    }   


  //  keyIs={keyHandler}

  let inputKey;
  const inputKeyHandler = event => {
    inputKey = event.target.id;
    console.log(event.target);
};
  
  
  return (
    <>
    {infoIsShown && <SelectedMovie onClose={closeInfoHandler}/>}
    <Header />
    <Main>
      <Movies onOpen={ () => {
          openInfoHandler()
          inputKeyHandler()
        } }/>
    </Main>
    <Footer/>
    </>
  );
}

export default App;