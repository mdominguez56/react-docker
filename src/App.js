import logo from './logo.svg';
import dockerLogo from './docker-logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='main-container'>
          <img src={logo} className="App-logo" alt="logo" />
          <img src={dockerLogo} className="App-logo" alt="docker-logo" />
        </div>
      </header>
    </div>
  );
}

export default App;
