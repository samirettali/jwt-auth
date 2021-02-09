import React, { useContext } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { UserContext } from '../UserContext';

const UnprotectedRoute: React.FC<RouteProps> = (props) => {
  const { logged } = useContext(UserContext);

  if (logged) {
    return <Redirect to='/' />
  } else {
    return <Route {...props} />
  }
};

export default UnprotectedRoute;
