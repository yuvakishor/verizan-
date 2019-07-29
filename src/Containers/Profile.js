import React, { Component } from 'react'
import Header from '../Components/Header';
import Axios from 'axios';

export default class Profile extends Component {
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
    }
    render() {
        const { userinfo, loading } = this.state;
        let address = null;
        if (userinfo) {
            address = userinfo.address.split(",")
        }
        return (
            <div>
                <Header />
                {
                    loading && <div className="text-center mt-5">
                        <div className="spinner-border text-dark text-center"></div>
                    </div>
                }
                {
                    userinfo && (
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-9 col-sm-12 m-auto ">
                                    <div className="profile_card hovercard shadow-sm border mt-5" style={{ backgroundColor: "white" }}>
                                        <div className="cardheader">

                                        </div>
                                        <div className="avatar">
                                            <img src={require('../user.png')} alt="logo" />
                                        </div>
                                        <div className="info">
                                            <div className="title">
                                                <p href="/profile">{userinfo.name.first} {userinfo.name.last}</p>
                                            </div>
                                            <div className="my-1"> <i className="fa fa-building-o"></i> {userinfo.company}</div>
                                            <div className="desc"><i className="fa fa-envelope-o"></i> {userinfo.email}</div>
                                            <div className="desc"><i className="fa fa-phone text"></i> {userinfo.phone}</div>
                                            <address className="mt-2"> <i className="fa fa-address-book-o "></i> {address.map((val, i) => (
                                                <p key={i} className="desc m-0">{val}</p>
                                            ))}</address>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}
