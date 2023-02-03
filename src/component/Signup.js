import React, { useState } from "react";
import { dataObj } from "./Data.js";
import "./Signup.css";

export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(email, password, name);
    // const newObj=[...dataObj,[dataObj.namename]]
    // const newdataObj={...dataObj,user:name }
    dataObj.username=name;
     console.log(dataObj)
    };
  
    return (
  <div className="sign-container">
    <div className="card">

     <div className="login-item">
      <form onSubmit={handleSubmit} className="form form-login">
      
        <div className="form-field">
              <label className="user">
                <span className="hidden">Username</span>
              </label>
              <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required />
            </div>

            <div className="form-field">
              <label className="user">
                <span className="hidden">Email:</span>
              </label>
              <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setEmail(e.target.value)}
            required />
            </div>

            <div className="form-field">
              <label className="user">
                <span className="hidden">Password:</span>
              </label>
              <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setPassword(e.target.value)}
            required />
            </div>

      
        {/* <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div> */}
        <button type="submit">Sign Up</button>
      </form>
      </div>

      </div>
      </div>
    );
  };
  

