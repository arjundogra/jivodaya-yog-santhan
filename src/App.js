import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/footer";
import "./assets/sass/base.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import PageRenderer from "./PageRenderer";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/:page" component={PageRenderer} />
          <Route path="/" render={() => <Redirect to="/home" />} />
          <Route component={() => 404} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
