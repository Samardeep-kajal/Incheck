import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Route path="/" exact component={Home} />
          <Route path="/dashboard" exact component={Dashboard} />
        </div>
      </Router>
    </>
  );
}

export default App;
