import React from 'react';
import { useForm } from 'react-hook-form';
import { useState, useEffect } from "react";
import Header from '../Header'
import Footer from '../Footer';
export const FormLocal = () => {
    // const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        localStorage.setItem("formData", JSON.stringify(data));
    }
    return (
        <>
            <div className="main-wrapper main-wrapper-1" >
                <Header />
                <div className="main-content">
                    <section className="section">
                        <div className="section-body">
                            <div className="row">
                                <div className="col-12 col-md-6 col-lg-6">
                                    <div className="card">
                                        <form className="" onSubmit={onSubmit}>
                                            <div className="card-header">
                                                <h4>Form</h4>
                                            </div>
                                            <div className="card-body">
                                                <div className="form-group">
                                                    <label>Your Name</label>
                                                    <input
                                                        id="fullname"
                                                        className="form-control"
                                                        type="text"
                                                        name="fullname"
                                                        defaultValue=""
                                                        placeholder=" "
                                                        autoComplete="off"
                                                    />
                                                    <div className="invalid-feedback">
                                                        Name is required
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label>Email</label>
                                                    <input
                                                        id="email"
                                                        className="form-control"
                                                        type="email"
                                                        name="email"
                                                        defaultValue=""
                                                        placeholder=" "
                                                        autoComplete="off"
                                                    />
                                                    <div className="invalid-feedback">
                                                        Email is required
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label>Phone</label>
                                                    <input
                                                        id="phone"
                                                        className="form-control"
                                                        type="text"
                                                        name="phone"
                                                        defaultValue=""
                                                        placeholder=" "
                                                        autoComplete="off"
                                                    />
                                                    <div className="invalid-feedback">
                                                        Phone Number is required
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label>Age</label>
                                                    <input
                                                        id="age"
                                                        className="form-control"
                                                        type="text"
                                                        name="age"
                                                        defaultValue=""
                                                        placeholder=" "
                                                        autoComplete="off"
                                                    />
                                                    <div className="invalid-feedback">
                                                        Age Number is required
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label>Gender</label>
                                                    <select className="form-control select2" name="gender">
                                                        <option value="" hidden selected="selected">Select</option>
                                                        <option>Male</option>
                                                        <option>Female</option>
                                                    </select>
                                                    <div className="invalid-feedback">
                                                        Gender is required
                                                    </div>
                                                </div>

                                                <div className="form-group mb-0">
                                                    <label>Message</label>
                                                    <textarea
                                                        className="form-control"
                                                        name="message"
                                                        placeholder=" "
                                                        defaultValue=""
                                                    >
                                                    </textarea>
                                                    <div className="invalid-feedback">
                                                        Message is required
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-footer text-right">
                                                <button className="btn btn-primary">Submit</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                <div className="col-12 col-md-6 col-lg-6">
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default FormLocal