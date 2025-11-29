import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);

  const nav = useNavigate();

  const API = import.meta.env.VITE_APP_API_URL; 
  const SECRET = import.meta.env.VITE_APP_SECRET_PASSWORD;

  // Fetch users with Axios
  useEffect(() => {
    axios
      .get(`${API}/users`, {
        params: { _limit: 3 }
      })
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleLogin = () => {
    const foundUser = users.find((user) => user.username === username);

    if (!foundUser) {
      alert("Username not found!");
      return;
    }

    if (password !== SECRET) {
      alert("Incorrect password!");
      return;
    }

    localStorage.setItem("loggedInUser", JSON.stringify(foundUser));
    nav("/todos");
  };

  return (
    <div>
      <h2>Login</h2>

      <label>Username</label>
      <input
        type="text"
        onChange={(e) => setUsername(e.target.value)}
      />

      <label>Password</label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Submit</button>
    </div>
  );
}

export default Login;
