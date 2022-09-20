import logo from './logo.svg';
import './App.css';

const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      greeting app created by <a href="https://github.com/"> loulaii</a>
    </div>
  )
}

const  App = () => {
  const name = 'Medhi le tunisien'
  const age = 24
  /*
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );*/
  return (
    <>
      <h1>Test de React  </h1>
      <Hello name='Amaury' age = {age} />
      
      <Footer />
    </>
  )
}


export default App;
