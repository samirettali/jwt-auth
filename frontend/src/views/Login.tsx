import React, { useState } from "react";

import '../styles/login.css';

const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <div className="form-container">
      <h1 className="title">Login</h1>
      <form>
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
            type="text"
            placeholder="Password"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );

};

export default Login;
