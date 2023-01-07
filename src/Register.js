import React, { useState } from "react";
import { Await } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup=async ()=>{

    let item = { username, email, password };
    console.warn(item);
    let result = await fetch("http://localhost/restapi/index.php/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(item)
    });
    result=await result.json();
    console.warn("result",result);
  }
  function signup_old() {
    let item = { username, email, password };
    console.warn(item);
    let result = fetch('http://localhost/restapi/index.php/users/signup', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(item)
    });
  }
  return (
    <div className="col-sm-6 offset-sm-3">
      <h1>Register</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="form-control"
      />
      <br />
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="form-control"
      />
      <br />
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="form-control"
      />
      <br />
      <button onClick={signup} className="btn btn-primary">
        Sign up
      </button>
    </div>
  );
}
export default Register;
