import React, { useState, useEffect, useContext } from 'react';
import { BACKEND_URL } from '../constants';
import { UserContext } from '../UserContext';

const Dashboard = () => {
  const { setLogged } = useContext(UserContext);
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const token = localStorage.getItem('token');
    const url = `${BACKEND_URL}/me`;
    const headers = {
      'Authorization': `Bearer: ${token}`
    };
    fetch(url, { headers })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        if (response.status === 401) {
          setLogged(false);
        } else {
          throw new Error("There was an error");
        }
      }
    })
    .then(data => setData(data))
    .catch(error => {
      setError("There was an error");
    });
  }, []);

  if (error) {
    return <h1>{error}</h1>;
  }

  if (!data) {
    return (<h1>Loading...</h1>);
  }

  return (
    <h1>Welcome {data.username}</h1>
  );

}

export default Dashboard;
