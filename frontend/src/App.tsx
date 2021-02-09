import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./views/Home";
import Login from "./views/Login";
import Dashboard from "./views/Dashboard";
import Layout from "./components/Layout";
import { UserContext } from './UserContext';
import ProtectedRoute from './components/ProtectedRoute';
import UnprotectedRoute from './components/UnprotectedRoute';

import "./App.css";

const App = () => {
  const [logged, setLogged] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setLogged(true);
    }
  }, []);


  return (
    <BrowserRouter>
      <UserContext.Provider value={{logged, setLogged}}>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <UnprotectedRoute exact path="/login" component={Login} />
            <ProtectedRoute exact path="/dashboard" component={Dashboard} />
          </Switch>
        </Layout>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
