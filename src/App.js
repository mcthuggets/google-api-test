import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

  function App() {

    let searchWord = ''

    const clickHandler = () => {

      fetch('https://www.googleapis.com/customsearch/v1?key=AIzaSyC9FPJkKbHFQDsAGxylisoa99YVFab5yKs&cx=c0da36a615ef44e78&q=' + searchWord)
        .then( (response) => { console.log(response.json()) })
        .catch( (error) => { console.log(error.message)})
    }

  return (
  <>

    <form>

    <h2> The form below queries the google custom search API and console logs the results.</h2>
    <p> I couldn't figure out how to use this to display an image because the results do not always contain an image.</p>

    <input  type={'text'} 
            placeholder={'Enter you favourite animal here'}
            onChange={ (event) => { searchWord = event.target.value }} 
            required
            minLength={2}
            maxLength={20} >
    </input>

    <button onClick={ clickHandler } > Submit </button>

    </form>


  </>
  );
}

export default App;
