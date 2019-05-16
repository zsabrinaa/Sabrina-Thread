import React from "react";
import "./style.css";


export function SignUp(props) {
    return (
        <form action="action_page.php" style={{ border: "1px solid #ccc" }}>
            <div className="container">
                <h1>Sign Up</h1>
                <p>Please fill in this form to create an account.</p>
                <hr />
                
                <label htmlFor="email"><b>Email</b></label>
                <input
                    onChange={props.handleInputChange}
                    value={props.value}
                    type="text"
                    placeholder="Enter Email"
                    name="email"
                    id="email"
                    required />

                <label htmlFor="psw"><b>Password</b></label>
                <input
                    onChange={props.handleInputChange}
                    value={props.value}
                    type="password"
                    placeholder="Enter Password"
                    name="psw"
                    id="password"
                    required />

                <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
                <input
                    onChange={props.handleInputChange}
                    value={props.value}
                    type="password"
                    placeholder="Repeat Password"
                    name="psw-repeat"
                    id="passwordRepeat"
                    required />

                <p>By creating an account you agree to our <a href="#" style={{ color: "dodgerblue" }}>Terms & Privacy</a>.</p>

                <div className="clearfix">
                    <button
                        type="button"
                        className="cancelbtn">Cancel</button>
                    <button 
                    onClick={props.handleFormSubmit}
                    type="submit" 
                    className="signupbtn">Sign Up</button>
                </div>
            </div>
        </form>


    );
}

