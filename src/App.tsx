import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="section App-header">
        <Logo />
        <div className="nav-container">
          <Navigation />
        </div>
      </header>
    </div>
  );
}

export default App;
