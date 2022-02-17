import React from 'react';
import { useForm } from 'react-hook-form';
import { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';

import axios from 'axios';
const Register = (props) => {
    let navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [authUser, setauthUser] = useState(JSON.parse(localStorage.getItem('registerData')));
    const [msg, setMsg] = useState('');
    console.log(authUser);

    useEffect(() => {
        // getList();
        document.title = props.title
    }, [])

    // const getList = () => {
    //     fetch("http://localhost/REST-API/fetch-api.php")
    //         .then((result) => {
    //             result.json()
    //                 .then((resp) => {
    //                     console.log("register-fetch-all", resp)
    //                     setauthUser(localStorage.setItem('registerData', JSON.stringify(resp)));
    //                     setMsg(resp.message)
    //                 })
    //         })
    // }
    const onSubmit = (data) => {

        let formData = new FormData();
        formData.append('name', data.name);
        formData.append('email', data.email);
        formData.append('phone', data.phone);
        formData.append('password', data.password);

        // fetch(`http://localhost/REST-API/insert-api.php`, {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(formData)
        // }).then((result) => {
        //     result.json()
        //         .then((resp) => {
        //             console.log(resp)
        //             setMsg(resp.message)
        //             // getList();
        //             if (resp.status == true) {
        //                 navigate("/login");
        //             } else {
        //                 navigate("/register");
        //             }

        //         })
        // })

        axios({
            url: 'http://192.168.0.128/REST-API/insert-api.php',
            method: 'POST',
            data: formData
        }).then((res) => {
            console.log("RESPONSE", res);
            if (res.status == 200) {
                navigate("/login");
            } else {
                navigate("/register");
            }
        })
    }

    return (
        <>
            <section className="section">
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2">
                            <div className="card card-primary">
                                <div className="card-header">
                                    <h4>Register</h4>
                                    <div>
                                        {
                                            msg ?
                                                msg : null
                                        }
                                    </div>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="row">
                                            <div className="form-group col-12 col-md-6">
                                                <label htmlFor="name">Full Name</label>
                                                <input
                                                    id="name"
                                                    type="text"
                                                    className="form-control"
                                                    {...register("name", { required: true })}
                                                    name="name"
                                                    autoFocus />
                                                <div className="invalid-feedback">
                                                    {errors.name?.type === 'required' && "Name is required"}
                                                </div>
                                            </div>

                                            <div className="form-group col-12 col-md-6">
                                                <label htmlFor="phone">Phone</label>
                                                <input
                                                    id="phone"
                                                    type="text"
                                                    className="form-control"
                                                    name="phone"
                                                    {...register("phone", { required: true, maxLength: 10 })}
                                                />
                                                <div className="invalid-feedback">
                                                    {errors.phone?.type === 'required' && "Phone number is required"}
                                                    {errors.phone?.type === 'maxLength' && "Phone number max-length 10 "}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="form-group col-12 col-md-6">
                                                <label htmlFor="email">Email</label>
                                                <input
                                                    id="email"
                                                    type="email"
                                                    name="email"
                                                    className="form-control"
                                                    {...register("email", { required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}
                                                />
                                                <div className="invalid-feedback">
                                                    {errors.email?.type === 'required' && "Email is required"}
                                                    {errors.email?.type === 'pattern' && "Email is not valid"}
                                                </div>
                                            </div>
                                            <div className="form-group col-12 col-md-6">
                                                <label htmlFor="password" className="d-block">Password</label>
                                                <input
                                                    id="password"
                                                    type="password"
                                                    className="form-control pwstrength"
                                                    data-indicator="pwindicator"
                                                    name="password"
                                                    {...register("password", { required: true, maxLength: 10 })}
                                                />
                                                <div id="pwindicator" className="pwindicator">
                                                    <div className="bar"></div>
                                                    <div className="label"></div>
                                                </div>
                                                <div className="invalid-feedback">
                                                    {errors.password?.type === 'required' && "Password is required"}
                                                    {errors.password?.type === 'maxLength' && "Password max-length 10 "}
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className="form-group">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" name="agree" className="custom-control-input" id="agree" />
                                                    <label className="custom-control-label" htmlFor="agree">I agree with the terms and conditions</label>
                                                </div>
                                            </div> */}
                                        <div className="form-group">
                                            <button className="btn btn-primary btn-lg btn-block">
                                                Register
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <div className="mb-4 text-muted text-center">
                                    Already Registered? <Link to="/login">Login</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Register