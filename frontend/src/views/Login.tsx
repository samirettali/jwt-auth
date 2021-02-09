import React, { useState, useContext } from "react";
import { useHistory } from 'react-router-dom';
import { BACKEND_URL } from '../constants';
import { UserContext } from '../UserContext';

import '../styles/login.css';

const Login = () => {
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [passwordError, setPasswordError] = useState<string>("");
  const [usernameError, setUsernameError] = useState<string>("");

  const history = useHistory();
  const { setLogged } = useContext(UserContext);

  const validate = (): boolean => {
    let valid = true;
    setError("");

    if (!username) {
      setUsernameError("Invalid username");
      valid = false;
    } else {
      setUsernameError("");
    }

    if (!password) {
      setPasswordError("Invalid password");
      valid = false;
    } else {
      setPasswordError("");
    }

    return valid;
  }

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (!validate()) {
      return;
    }

    setLoading(true);
    const data = { username, password };
    const url = `${BACKEND_URL}/login`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      setLoading(false);
      const { token, error } = await response.json();

      if (token) {
        localStorage.setItem("token", token);
        setLogged(true);
        history.push("/dashboard");
      } else if (error) {
        setError(error);
      } else {
        setError("There was an error processing your request");
      }
    } catch (err) {
      setLoading(false);
      console.error(err);
      setError("There was an error processing your request");
    }
  };

  return (
    <div className="form-container">
      <h1 className="title">Login</h1>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor="username">
            Username
          </label>
          <input 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            name="username"
            id="username"
            type="text"
            placeholder="Username"
          />
          { usernameError && <div className="form-error">{usernameError}</div> }
        </div>
        <div className='form-group'>
          <label htmlFor="password">
            Password
          </label>
          <input 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            id="password"
            type="password"
            placeholder="Password"
          />
          { passwordError && <div className="form-error">{passwordError}</div> }
        </div>
        { error && <div className='form-error'>{error}</div> }
        <button type="submit" disabled={loading}>Login</button>
      </form>
    </div>
  );

};

export default Login;
