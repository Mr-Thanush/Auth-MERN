import React from "react";
import './home.css';
import { Link } from "react-router-dom";

function Home(){
    return (
     <>
     <h1 className="home">Welcome to Home Page</h1>
     <div className="btnHome">
      <h6>Have an Account</h6>
        <Link to="/signin"><button className="btnin">Sign In</button></Link>
        <h6>Don't have an Account</h6>
      <Link to="/signup"><button className="btnup">Sign Up</button></Link>
     </div>
      
     </>
    )
}

export default Home