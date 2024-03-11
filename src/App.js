import logo from './logo.svg';
import './App.css';

// Add - Impport module //
import FloatingButton from 'hytech-component/FloatingButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
		<h1>Floating Button for React</h1>
        <p>
          Edit <code>src/App.js</code> to see Code Deployment.
        </p>
        <a
          className="App-link"
          href="https://hy-tech.my.id/docs"
          target="_blank"
          rel="noopener noreferrer"
        >
          HyTech Group
        </a>
      </header>
	  
	  // Add - Default components //
	  <FloatingButton className="my-css" position="bottom_right" index="99">
		<button className="theme-1">Contat US</button>
	  </FloatingButton>
	  
    </div>
  );
}

export default App;
