import React, { useContext } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { UserContext } from '../UserContext';

const ProtectedRoute: React.FC<RouteProps> = (props) => {
  const { logged } = useContext(UserContext);

  if (!logged) {
    return <Redirect to='/login' />
  } else {
    return <Route {...props} />
  }
};

export default ProtectedRoute;
