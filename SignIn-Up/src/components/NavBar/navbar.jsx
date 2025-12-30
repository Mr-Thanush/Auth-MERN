import React from "react";
import "./navbar.css"
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function NavBar({isloggedin,onLogout}) {
    const location=useLocation();
       

    return(
        <>
<div className="navbar">
    <h1>NavBar</h1>
    <div className="btns">
        {!isloggedin && location.pathname !=='/signin' && location.pathname !=='/dashboard' &&(
            <Link to="/signin"><button className="btnOne">Sign In</button></Link>
        )}
     {!isloggedin && location.pathname !=='/signup' &&  location.pathname !=='/dashboard' &&(
    <Link to="/signup"> <button className="btnTwo">Sign Up</button></Link>
     )}
  {!isloggedin &&  location.pathname ==='/dashboard' && (
      <Link to="/"> <button className="btnThree" onClick={onLogout}>Sign Out</button></Link>
 )}
     </div>
</div>
        </>
)
}

export default NavBar