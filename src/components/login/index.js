import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Login() {
const  navigate = useNavigate();
const [email, setEmail] = useState("");
const [passowrd, setPassword] = useState("");
const [token, setToken] = useState("");

useEffect(() => {
  const token = localStorage.getItem("token");
  setToken(token);
}, []);

console.log(process.env.REACT_APP_BASE_URL);

const login = async() => {
  try {
    const result = await axios.post(`${process.env.REACT_APP_BASE_URL}/login`, {
      email,
      passowrd,
    });
localStorage.setItem("token" , result.data.token)
localStorage.setItem("role", result.data.result.role);

navigate("/list");
console.log(result);
  } catch(error){
    console.log(error);
    
    

  }
}




  return (
    <div className="App">
      {!token ? (
        <div className="form">
          <h1>Login</h1>

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="submit" value="login" onClick={login} />
        </div>
      ) : (
        <h1> You Already Logged in </h1>
      )}
    </div>
  );
}

export default Login;
