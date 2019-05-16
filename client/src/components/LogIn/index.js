import React from "react";
import "./style.css";

export function LogIn(props) {
    return (
       
            <form action="action_page.php">
                <div className="container">
                    <h1>We Miss You</h1>
                    <p>Login</p>
                    <hr/>
                    <label htmlFor="uname"><b>Username</b></label>
                    <input 
                    type="text" 
                    placeholder="Enter Username" 
                    name="uname" 
                    required />

                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required />

                    <button 
                    type="submit">Login</button>
                </div>

                <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
                   <a href="/"> <button type="button" className="cancelbtn">Cancel</button></a>
                </div>
            </form>
        
    );
}
