import React, { Component } from 'react'
import { Routes, Route } from "react-router-dom";
import List from "./components/list/index";
import Login from "./components/login/index";
import Register from "./components/register/index";



export default class App extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Login />}/>
            <Route exact path="/list" element={<List />} />
            <Route path="signup" element={<Register />}/>
        </Routes>

       
      </div>
    );
  }
}
