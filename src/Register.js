import React, { useState } from "react";
import { Await } from "react-router-dom";

function Register() {
  const [name, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
// const history=useHistory();
  const signup=async ()=>{

    let item = { name, email, password };
    console.warn(item);
    let result = await fetch("http://127.0.0.1:8000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(item)
    });
    result=await result.json();
    console.warn("result",result);
    // history.push('/add');
  }
  
  return (
    <div className="col-sm-6 offset-sm-3">
      <h1>Register</h1>
      <input
        type="text"
        value={name}
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
