import logo from './logo.svg';
import PizzaList from "./pizzerias/pizzeriaslist"

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://images.unsplash.com/photo-1594007654729-407eedc4be65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1928&q=80" className="App-logo" alt="logo" />
        <p>
          Web app for Pizza lovers
        </p>
        <h1>
          Pizza vs Pizza
        </h1>
        <PizzaList/>
      </header>
    </div>
  );
}

export default App;
