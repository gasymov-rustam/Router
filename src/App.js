import { Link, Switch, Route, Router } from "react-router-dom";
import Body from "./components/BODY/Body";
import Content from "./components/CONTENT/Content";
import Footer from "./components/FOOTER/Footer";
import Head from "./components/HEAD/Head";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Content</Link>
          </li>
          <li>
            <Link to="/body">Body</Link>
          </li>
          <li>
            <Link to="/footer">Footer</Link>
          </li>
          <li>
            <Link to="/head">Head</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route component={Content} />
        <Route path="/body" component={Body} />
        <Route path="/footer" component={Footer} />
        <Route path="/head" component={Head} />
      </Switch>
    </div>
  );
}

export default App;
