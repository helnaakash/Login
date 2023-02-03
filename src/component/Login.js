import "./Login.css";
// import { Container } from "react-bootstrap";
import { dataObj } from "./Data.js";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleChange(e) {
    const { value, name } = e.target;
    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    }
  }

  function submitBtn(event) {
    event.preventDefault();
    // atuny0@sohu.com 9uQFF1Lh
    axios.get("https://dummyjson.com/users").then((res) => {
      const newArray = [];
      const newArray2 = [];
      const newArray3 = [];
      
      for (let i = 0; i <= res.data.users.length; i++) {
        if (typeof res.data.users[i] != "undefined") {
  

          newArray.push(res.data.users[i].email);
          newArray2.push(res.data.users[i].password);
          const newOb = newArray.find((value) => value == username.trim());
          const newOb2 = newArray2.find((pass) => pass == password.trim());
          if (!newOb) {
            return alert("Invalid user");
          }
          else if (!newOb2) {
            return alert("Invalid Password");
          }
          else{
              console.log("hi")
          }
          
         
        }
      }
   
      navigate("/home");
    });

    //  using data.json 
    // const newOb = dataObj.find((value) => value.username === username);
    // if (!newOb) {
    //   return alert("Invalid user");
    // }
    // if (newOb.password != password) {
    //   return alert("Invalid credentials");
    // }
    // navigate("/home");
  }

  return (
    <div className="main-container">
      <div className="container">
        <div className="logo">Login</div>

        <div className="login-item">
          <form action="" className="form form-login">
            <div className="form-field">
              <label className="user">
                <span className="hidden">Username</span>
              </label>
              <input
                id="login-username"
                type="text"
                className="form-input"
                name="username" //same name of state value i. emailId
                value={username}
                onChange={handleChange}
                placeholder="Username"
                required
              />
            </div>


            <div className="form-field">
              <label className="lock">
                <span className="hidden">Password</span>
              </label>
              <input
                id="login-password"
                type="password"
                className="form-input"
                name="password" //same name of state value i.e password
                value={password} //same name of state value i.e password
                onChange={handleChange}
                placeholder="Password"
                required
              />
            </div>

            <div className="form-field">
              <input type="submit" value="Log in" onClick={submitBtn} />
    
            </div>
            <div className="link-field ">

              <a href="/Signup" > Create a new account </a>
            </div>
         
         
    
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
