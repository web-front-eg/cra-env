import logo from './logo.svg';
import './App.css';

// https://create-react-app.dev/docs/adding-custom-environment-variables/
// eslint-disable-next-line no-undef
console.log(process.env.REACT_APP_ENV);

const App = () => (
  <div className='App'>
    <header className='App-header'>
      <img src={logo} className='App-logo' alt='logo' />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className='App-link'
        href='https://reactjs.org'
        target='_blank'
        rel='noopener noreferrer'
      >
        Learn React
      </a>
    </header>
  </div>
);

export default App;
