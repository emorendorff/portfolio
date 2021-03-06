import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { Home } from './components/Home';
import { About } from './components/About';

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
    
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
