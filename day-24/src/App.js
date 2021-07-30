import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./Components/About";
import AuthBtn from "./Components/AuthBtn";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import { AuthProvider } from "./Store";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <div className="main">
            <nav className="header">
              <ul className="nav_links">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
              </ul>
              <AuthBtn />
            </nav>

            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/profile">
                <Profile />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
