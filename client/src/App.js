import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch} from 'react-router'
import Index from "./pages/Index";
import SignUpPage from "./pages/SignUpPage";
import Cart from "./pages/Cart";
import Detail from "./pages/Details";
import All from "./pages/All";
import LogInPage from "./pages/LogInPage";
import Navbar from "./components/Nav1";
import Nav2 from "./components/Nav2";
import Footer from "./components/Footer";
import './App.css'

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Nav2/>
        <main>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/signup" component={SignUpPage} />
          <Route exact path="/login" component={LogInPage} />
          <Route exact path="/shop" component={All} />
          <Route exact path="/shop/:id" component={Detail} />
          <Route exact path="/cart" component={Cart} />
        </Switch> 
        </main>
        <Footer/>
      </div>
    </Router>
  );
}
export default App;
