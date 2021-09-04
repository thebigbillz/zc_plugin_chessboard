import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Games from './'

import "./App.css";
import HomePage from "./Pages/Homepage.js/Homepage"
import MainGame from "./Pages/GameScreen/MainGame"


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' render={HomePage} /> 
          <Route exact path='/game' render={MainGame} />

        </Switch>
      </Router>
     {/* <HomePage /> */}
     
    </div>
  );
}

export default App;