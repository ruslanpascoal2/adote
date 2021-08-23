import './App.scss';
import { Navbar } from "./layout/components/navbar/Navbar"
import { Home } from "./pages/home/Home";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div id="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
