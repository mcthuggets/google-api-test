import logo from './logo.svg';
import './App.css';

  function App() {

    let searchWord = ''

    const clickHandler = () => {

      console.log(searchWord)

    }




  return (
  <>

    <input type={'text'} placeholder={'Enter you favourite animal here'}
            onChange={ (event) => { searchWord = event.target.value }} ></input>
    <button onClick={ clickHandler }> Submit </button>

  </>
  );
}

export default App;
