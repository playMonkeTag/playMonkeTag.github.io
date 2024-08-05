import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Join from './Join';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Roblox Game Launcher</h1>
        </header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/join" component={Join} />
        </Switch>
        <footer className="App-footer">
          <p>&copy; 2024 Roblox Game Launcher. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
