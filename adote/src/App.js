import './App.scss';
import { Navbar } from "./layout/components/navbar/Navbar"
import { Home } from "./pages/home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Pet } from './pages/pet/Pet';

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <div>
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/pet/:id" exact component={Pet}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
