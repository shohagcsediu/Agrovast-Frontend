import './App.css';
import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Admin from './components/Admin/Admin';
import Order from './components/Order/Order';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Deal from './components/Deal/Deal';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <div className="App">
      <Router>
          <Header/>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/home">
              <Home/>
            </Route>
            <Route path="/deal">
              <Deal/>
            </Route>
            <PrivateRoute path="/admin">
              <Admin/>
            </PrivateRoute>
            <Route path="/login">
              <Login/>
            </Route>
            <PrivateRoute path="/order/:name">
              <Order/>
            </PrivateRoute>
            <Route exact path="/*">
            <h1>Not found</h1>
            </Route> 
          </Switch>
      </Router>
      </div>
      </UserContext.Provider>
  
  );
}

export default App;
