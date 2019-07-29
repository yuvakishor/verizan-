import React, { Component } from 'react'
import Header from '../Components/Header';

export default class OrderDetails extends Component {
    render() {
        let productdetails = (
            <h1 className="text-center text-danger my-5">No data found</h1>
        )
        if (this.props.history.location.state !== undefined) {
            const { product, price } = this.props.history.location.state;
            console.log(product)
            let status;
            switch (product.orderStatus) {
                case "In Transit":
                    status = "primary";
                    break;
                case "Completed":
                    status = "success";
                    break;
                case "Returnted":
                    status = "danger";
                    break;
                default: status = "muted"
            };

            console.log(status)

            productdetails = (
                <div className="col-md-8 m-auto ">
                    <div className="card card-body mt-3">
                        <div className="row">
                            <div className="col-md-4 text-center my-auto">
                                <img src={product.picture} height="200" width="200" />
                            </div>
                            <div className="col-md-8">
                                <h3>{product.name}</h3>
                                <p>
                                    <span className="order">Ordered On:</span><strong>{product.orderDate.slice(0, 11)}</strong>
                                </p>
                                <p>
                                    <span className="order">Price:</span><span className="text-success">{price}</span>
                                </p>
                                <p><span className="order">Ordered Status:</span>
                                    <span className={`badge badge-pill badge-${status} py-21 px-2`}>{product.orderStatus}</span>
                                </p>
                                <p><span className="order">ProductDescription :</span>{product.description}</p>

                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div>
                <Header />
                <h3 className="text-center mt-3">Order details</h3 >
                {productdetails}
            </div>
        )
    }
}
