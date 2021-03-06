import React, { Component } from "react";
import StripeCheckout from 'react-stripe-checkout';
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Image } from "../components/Img";
import axios from "axios";
import M from 'materialize-css';

class Cart extends Component {
    state = {
        items: [],
        price: 100.99,
      
    };

    componentDidMount() {
        this.loadCart();
        M.FormSelect.init(document.querySelectorAll('select'));
    }
    // getSubtotal = (json) => {
    //     subtotal = 0;

    //     json.forEach(element => {
    //         subtotal = + element.price
    //     });

    //     return subtotal;
    // }

    loadCart = () => {
        this.setState( state => {
            return {
                items: JSON.parse(localStorage.getItem("cart")),
            
            }
        })
    }

    handleToken = (token) => {
        console.log({ token })
        const response = axios.post(
            "https://e63d4.sse.codesandbox.io/checkout",
            { token, }
        );
        const { status } = response.data;
        console.log("Response:", response.data);
        if (status === "success") {
            M.toast("Success! Check email for details", { type: "success" });
        } else {
            M.toast("Something went wrong", { type: "error" });
        }
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
                    <div className="row">
                    <div className="col s5 push-s7">
                        <StripeCheckout
                            stripeKey="pk_test_ghF466uME2tEX5zsqi6ix7iU00yBuJ4Wur"
                            token={this.handleToken}
                            billingAddress
                            shippingAddress
                            amount={this.state.price * 100}
                        />
                        </div>
                    </div>
                ) : (""

                    )}
            </div>
        )
    }
}

export default Cart;