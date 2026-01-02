import React from "react";
import { useState } from "react";
import "./signin.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";
function SignIn() {
  const [show, setShow] = useState(false)
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();
  const handleSignIn = (e) => {
    e.preventDefault();
    axios.post("https://auth-mern-pb9k.onrender.com/signin", { name, password })
      .then((res) => {
        if (res.data === "Success") {
          navigate('/dashboard')
        }else {
          alert(res.data);
        }
      })
      .catch(err => console.log(err))
  }
  return (
    <>
      <div className="box">
        <h2>Sign In</h2>
        <form onSubmit={handleSignIn}>
          <input type="text" name="name" id="name" placeholder="YourName" required
            onChange={(e) => setName(e.target.value)} />
          <input type={show ? "text" : "password"} name="Password" id="password" placeholder="Password" required
            onChange={(e) => setPassword(e.target.value)} />
          <button type="button" className="btntoggle" onClick={() => setShow(!show)}>{show ? "🙈" : "👁️"}</button>
          <button className="btn">Sign In</button>
        </form>
      </div>

    </>
  )
}

export default SignIn
