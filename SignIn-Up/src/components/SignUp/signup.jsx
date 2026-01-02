import React from "react";
import { useState } from "react";
import "./signup.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [show, setShow] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://auth-mern-pb9k.onrender.com/signup',  { name, email, password })
      .then(res => {
        if (res.data === "Signup Success") {
          navigate("/dashboard");
        } else {
          alert("Already Have An Account");
        }
      }
      )
      .catch(err => console.log(err))

  }
  return (
    <>
      <div className="box1">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" id="name" placeholder="YourName" required
            onChange={(e) => setName(e.target.value)} />
          <input type="email" name="email" id="email" placeholder="YourEmail" required
            onChange={(e) => setEmail(e.target.value)} />
          <input type={show ? "text" : "password"} name="password" id="password" placeholder="Password" required
            onChange={(e) => setPassword(e.target.value)} />
          <button type="button" className="btntoggle" onClick={() => setShow(!show)}>{show ? "🙈" : "👁️"}</button>
          <button className="btn">Sign Up</button>
        </form>
      </div>

    </>
  )
}

export default SignUp
