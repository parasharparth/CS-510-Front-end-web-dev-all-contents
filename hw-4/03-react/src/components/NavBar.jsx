import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Search from "./Search";
import Houses from "./Houses";

export default function NavBar() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-dark bg-dark nav-class">
          <p className="navbar-brand nav-p">Game of Thrones</p>

          <div>
            <ul className="navbar">
              <li className="nav-link">
                <Link className="a-link" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-link ">
                <Link className="a-link" to="/search">
                  Search
                </Link>
              </li>

              <li className="nav-link ">
                <Link className="a-link" to="/houses">
                  Houses
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <Switch>
          <Route path="/search">
            <Search />
          </Route>

          <Route path="/houses">
            <Houses />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
