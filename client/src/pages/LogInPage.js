import React, { Component } from "react";


class LogInPage extends Component {
    state = {
        
    };
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
    handleFormSubmit = event => {
        event.preventDefault();
        
    };

    render() {
        return (
            <div className="container">
                <form action="action_page.php" style={{ border: "1px solid #ccc" }}>
                    <div className="container">
                        <h1>Admin Login</h1>
                        <label htmlFor="email"><b>Email</b></label>
                        <input
                            onChange={this.handleInputChange}
                            value={this.state.email}
                            type="text"
                            placeholder="Enter Username"
                            name="email"
                            id="email"
                            required />

                        <label htmlFor="psw"><b>Password</b></label>
                        <input
                            onChange={this.handleInputChange}
                            value={this.state.password}
                            type="password"
                            placeholder="Enter Password"
                            name="password"
                            id="password"
                            required />
                             <div className="clearfix">
                            <a href="/"><button
                                type="button"
                                className="cancelbtn">Cancel</button></a>
                            <button
                                onClick={this.handleFormSubmit}
                                type="submit"
                                className="signupbtn">Log in</button>
                        </div>
                    </div>
                </form>

            </div>
        )
    }
}
export default LogInPage