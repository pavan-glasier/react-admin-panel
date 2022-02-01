import React, { Component } from 'react';

export default class Register extends Component {
    constructor(){
        super();
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            authUser : JSON.parse(localStorage.getItem('registerData'))
          };
          this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData();
        console.log(this.firstName.value);
        formData.append('firstName', this.firstName.value);
        formData.append('lastName', this.lastName.value);
        formData.append('email', this.email.value);
        formData.append('password', this.password.value);
        let obj = JSON.stringify(formData);
        let fdata = [];
        fdata = JSON.parse(localStorage.getItem('registerData')) || [];
        // fdata.push(obj);
        localStorage.setItem('registerData', JSON.stringify(formData));

        // this.setState({
        //     firstName: this.firstName.value,
        //     lastName: this.lastName.value,
        //     email: this.email.value,
        //     password: this.password.value,
        //     authUser: JSON.parse(localStorage.getItem('registerData'))
        // })
    }

    render() {
        return (
            <>
                <section className="section">
                    <div className="container mt-5">
                        <div className="row">
                            <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2">
                                <div className="card card-primary">
                                    <div className="card-header">
                                        <h4>Register</h4>
                                    </div>
                                    <div className="card-body">
                                        <form onSubmit={this.onSubmit}>
                                            <div className="row">
                                                <div className="form-group col-6">
                                                    <label htmlFor="frist_name">First Name</label>
                                                    <input id="frist_name" type="text" className="form-control" ref={(e) => this.firstName = e} name="firstName" autoFocus />
                                                </div>
                                                <div className="form-group col-6">
                                                    <label htmlFor="last_name">Last Name</label>
                                                    <input id="last_name" type="text" className="form-control" ref={(e) => this.lastName = e} name="lastName" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="email">Email</label>
                                                <input id="email" type="email" className="form-control" ref={(e) => this.email = e} name="email" />
                                                    <div className="invalid-feedback">
                                                    </div>
                                            </div>
                                            <div className="row">
                                                <div className="form-group col-6">
                                                    <label htmlFor="password" className="d-block">Password</label>
                                                    <input id="password" type="password" className="form-control pwstrength" data-indicator="pwindicator"
                                                        ref={(e) => this.password = e} name="password" />
                                                        <div id="pwindicator" className="pwindicator">
                                                            <div className="bar"></div>
                                                            <div className="label"></div>
                                                        </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" name="agree" className="custom-control-input" id="agree" />
                                                    <label className="custom-control-label" htmlFor="agree">I agree with the terms and conditions</label>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <button type="submit" className="btn btn-primary btn-lg btn-block">
                                                    Register
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="mb-4 text-muted text-center">
                                        Already Registered? <a href="auth-login.html">Login</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}