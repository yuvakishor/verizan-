import React, { Component } from 'react'
import Header from '../Components/Header';
import Axios from 'axios';

export default class Orders extends Component {
    state = {
        userinfo: null,
        loading: false
    }
    componentDidMount() {
        this.getData();
    };
    getData = () => {
        this.setState({ loading: true })
        Axios.get("https://testapi.io/api/KNKhan/productsinfo")
            .then(response => {
                this.setState({ userinfo: JSON.parse(response.data.body), loading: false })
            })
            .catch(err => {
                console.log(err);
                this.setState({ loading: false })
            })
    };

    viewOrderDetails = (orderData) => {
        this.props.history.push("/order-details", orderData)
    }

    displayOrders = () => {
        if (this.state.userinfo) {
            return this.state.userinfo.orders.map((order, i) => (
                <div className="col-md-3" key={order.id}>
                    <div className="card my-2" style={{ width: "100%" }}>
                        <img className="card-img-top" src={order.product.picture} alt="Card image" height="180" />
                        <div className="card-body">
                            <h4 className="card-title">{order.product.name}</h4>
                            <p className="card-text">Price: <span className="text-success">{order.price}</span></p>
                            <button className="btn btn-primary btn-sm" onClick={() => this.viewOrderDetails(order)} >View details</button>
                        </div>
                    </div>
                </div>
            ))
        }
    }

    render() {
        console.log(this.props)
        return (
            <React.Fragment>
                <Header />
                <div className="container-fluid">

                    <h1 className="text-center my-3">My Orders</h1>
                    {
                        this.state.loading && <div className="text-center mt-5">
                            <div className="spinner-border text-dark text-center"></div>
                        </div>
                    }
                    <div className="row">
                        {this.displayOrders()}
                    </div>
                </div>
            </React.Fragment>

        )
    }
}
