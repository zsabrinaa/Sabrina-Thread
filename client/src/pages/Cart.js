import React, { Component } from "react";

import API from "../utils/API";
import { Link } from "react-router-dom";
import { Image } from "../components/Img";
// import {Elements, StripeProvider} from 'react-stripe-elements';
// import CheckoutForm  from "../components/CheckOutForm";

class Cart extends Component {
    state = {
        items: []
    };


    componentDidMount() {
        this.loadCart();
    }
    loadCart = () => {
        this.setState({ items: JSON.parse(localStorage.getItem("cart")) })
        // API.getCartItems()
        //     .then(res => {
        // this.setState({ items: JSON.parse(localStorage.getItem("cart")) })
        // })
        // .catch(err => console.log(err));
    };

    render() {
        return (
            <div className="container ">
                <div className="row">
                    <table className="responsive-table">
                        <thead>
                            <tr>
                                <th className="col s2"></th>
                                <th className="col s2">Item Name</th>
                                <th className="col s2">Quantity</th>
                                <th className="col s2">Item Size</th>
                                <th className="col s2">Item Price</th>
                            </tr>
                        </thead>
                        {this.state.items ? (
                            this.state.items.map(item => {
                                return (
                                    <tbody>
                                        <tr>
                                            <td className="col s2"> <Image key={item.id}
                                                src={item.image}
                                            /></td>
                                            <td className="col s2 cartText">{item.itemName}</td>
                                            <td className="col s2 cartText">{item.quantity}</td>
                                            <td className="col s2 cartText">size:{item.size}</td>
                                            <td className="col s2 cartText">${item.price}</td>
                                        </tr>
                                    </tbody>
                                )
                            })
                        ) : (
                                <h1>No Results to Display</h1>
                            )}
                    </table>
                </div>
                {this.state.items ? (
                    <div>
                        {/* <StripeProvider apiKey="pk_test_TYooMQauvdEDq54NiTphI7jx">
                            <div className="example">
                                <h1>React Stripe Elements Example</h1>
                                <Elements>
                                    <CheckoutForm />
                                </Elements>
                            </div>
                        </StripeProvider> */}
                        <div className="row">
                            <div className="col s4 push-s8">
                                <button
                                    // onClick={props.handleFormSubmit}
                                    type="submit"
                                    className="placeOrderbtn">Check Out</button>
                            </div>
                        </div>
                    </div>
                ) : (""

                    )}
            </div>
        )
    }
}

export default Cart;