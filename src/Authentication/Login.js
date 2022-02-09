import React from 'react';
import { useForm } from 'react-hook-form';
import { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    let navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [authUser, setauthUser] = useState(JSON.parse(sessionStorage.getItem('loginData')));
    const [isLogin, setIsLogin] = useState(JSON.parse(sessionStorage.getItem('isLogin')));
    const [msg, setMsg] = useState('');
    console.log(authUser);

    const onSubmit = (formData) => {
        console.log("formData", formData);
        // let fdata = [];
        // fdata = JSON.parse(localStorage.getItem('formData')) || [];
        // fdata.push(formData);
        // sessionStorage.setItem('loginData', JSON.stringify(formData));
        // sessionStorage.setItem('isLogin', true);
        // setauthUser(JSON.parse(sessionStorage.getItem('formData')));
        // setIsLogin(JSON.parse(sessionStorage.getItem('isLogin')))

        fetch(`http://192.168.0.128/php-rest-api/login-fetch.php`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }).then((result) => {
            result.json()
                .then((resp) => {
                    console.log(resp);
                    setMsg(resp.message);
                    setauthUser(sessionStorage.setItem('loginData', JSON.stringify(resp)));
                    setIsLogin(sessionStorage.setItem('isLogin', true));
                    if (resp.status !== false) {
                        navigate("/dashboard");
                    }
                })
        })
    }
    return (
        <>
            <section className="section">
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-12 col-sm-10 offset-sm-1 col-md-6 offset-md-4 col-lg-6 offset-lg-4 col-xl-4 offset-xl-4">
                            <div className="card card-primary">
                                <div className="card-header">
                                    <h4>Login</h4>
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
                                            <div className="form-group col-12">
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
                                            <div className="form-group col-12">
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
                                        <div className="form-group">
                                            <button className="btn btn-primary btn-lg btn-block">
                                                Login
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <div className="mb-4 text-muted text-center">
                                    Don't have an account? <Link to="/register">Create One</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}
export default Login