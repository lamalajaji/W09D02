import React, {  useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [passowrd, setPassword] = useState("");



const state = useSelector((state)=> {
  return{
    token: state.Users.token
  }
})

  const signup = async () => {
    try {
      await axios.post(`${process.env.REACT_APP_BASE_URL}/register`, {
        email,
        passowrd,
      });
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  

  return (
    <div className="App">
      {!state.token ? (
        <div>
          <h1> SignUp</h1>

          <form>
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
            <input type="submit" value="SignUp" onClick={signup} />
          </form>
        </div>
      ) : (
        <h1>
          {" "}
          You Already Have an account ,<Link to="/"> Login here </Link>
        </h1>
      )}
    </div>
  );
}

export default Register;
