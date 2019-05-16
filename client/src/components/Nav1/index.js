import React from "react";
import "./style.css";

function Navbar(props) {
    return (
        <div>
            <header>
                <nav>
                    <div className="nav-wrapper sabNav">
                        <a href="/" className="brand-logo logo">Sabrina</a>
                        <a href="/" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down ">
                            <li><a className="blackfont" href="/cart"><i className="material-icons">
                                shopping_cart
                            </i></a></li>
                            <li><a className="blackfont" href="/signup">Sign Up</a></li>
                            <li><a className="blackfont" href="/login">Log In</a></li>
                        </ul>
                    </div>
                </nav>
                <ul className="sidenav" id="mobile-demo">
                    <li><a href="sass.html">Sass</a></li>
                    <li><a href="badges.html">Components</a></li>
                    <li><a href="collapsible.html">Javascript</a></li>
                    <li><a href="mobile.html">Mobile</a></li>
                </ul>
            </header>
        </div>
    );
}
export default Navbar;