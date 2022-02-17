import React from 'react';
import { useForm } from 'react-hook-form';
import { useState, useEffect } from "react";
import Header from '../Header'
import Footer from '../Footer';
export const Basicform = (props) => {
    document.title = props.title
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [authUser, setauthUser] = useState(JSON.parse(localStorage.getItem('formData')));

    const onSubmit = (formData) => {
        console.log(formData);
        let fdata = [];
        fdata = JSON.parse(localStorage.getItem('formData')) || [];
        fdata.push(formData);
        localStorage.setItem('formData', JSON.stringify(fdata));
        setauthUser(JSON.parse(localStorage.getItem('formData')));
    }
    
    return (
        <>
            <div className="main-wrapper main-wrapper-1" >
                <Header activeClasss={props.name ? props.name : ''}/>
                <div className="main-content">
                    <section className="section">
                        <div className="section-body">
                            <div className="row">
                                <div className="col-12 col-md-5 col-lg-5">
                                    <div className="card">
                                        <form className="" onSubmit={handleSubmit(onSubmit)}>
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
                                                        {...register("fullname", { required: true, maxLength: 20 })}
                                                        placeholder=" "
                                                    />
                                                    <div className="invalid-feedback">
                                                        {errors.fullname?.type === 'required' && "Name is required"}
                                                        {errors.fullname?.type === 'maxLength' && "Name max-length 20 "}
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label>Email</label>
                                                    <input
                                                        id="email"
                                                        className="form-control"
                                                        type="email"
                                                        name="email"
                                                        defaultValue="" {...register("email", { required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}
                                                        placeholder=" "
                                                    />
                                                    <div className="invalid-feedback">
                                                        {errors.email?.type === 'required' && "Email is required"}
                                                        {errors.email?.type === 'pattern' && "Email is not valid"}
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label>Phone</label>
                                                    <input
                                                        id="phone"
                                                        className="form-control"
                                                        type="text"
                                                        name="phone"
                                                        defaultValue="" {...register("phone", { required: true, maxLength: 10 })}
                                                        placeholder=" "
                                                    />
                                                    <div className="invalid-feedback">
                                                        {errors.phone?.type === 'required' && "Phone Number is required"}
                                                        {errors.phone?.type === 'maxLength' && "Phone Number max-length 10 "}
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label>Age</label>
                                                    <input
                                                        id="age"
                                                        className="form-control"
                                                        type="text"
                                                        name="age"
                                                        defaultValue="" {...register("age", { required: true, maxLength: 3 })}
                                                        placeholder=" "
                                                    />
                                                    <div className="invalid-feedback">
                                                        {errors.age?.type === 'required' && "Age Number is required"}
                                                        {errors.age?.type === 'maxLength' && "Age Number max-length 3"}
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label>Gender</label>
                                                    <select className="form-control select2" name="gender" {...register("gender", { required: true })}>
                                                        <option defaultValue="" hidden selected="selected">Select</option>
                                                        <option>Male</option>
                                                        <option>Female</option>
                                                    </select>
                                                    <div className="invalid-feedback">
                                                        {errors.gender?.type === 'required' && "Gender is required"}
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label>Message</label>
                                                    <textarea
                                                        className="form-control"
                                                        name="message"
                                                        placeholder=" "
                                                        defaultValue="" {...register("message", { required: true })}
                                                    >
                                                    </textarea>
                                                    <div className="invalid-feedback">
                                                        {errors.message?.type === 'required' && "Message is required"}
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label>File</label>
                                                    <input
                                                        type="file"
                                                        className="form-control"
                                                        name="upload"
                                                        {...register("upload")}
                                                    />
                                                    <div className="invalid-feedback">
                                                        {errors.upload?.type === 'required' && "File is required"}
                                                    </div>
                                                </div>

                                                <div className="form-group mb-0">
                                                    <label>File</label>
                                                    <img src='' id='privImg' width={100} height={100} />
                                                </div>
                                            </div>
                                            <div className="card-footer text-right">
                                                <button className="btn btn-primary">Submit</button>
                                                {`   `}
                                                <button className="btn btn-info" type='reset'>Reset</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                <div className="col-12 col-md-7 col-lg-7">


                                    <div className="card">
                                        <div className="card-header">
                                            <h4>Form Data</h4>
                                        </div>
                                        <div className="card-body">
                                            <div className="table-responsive">
                                                <table className="table table-striped table-hover" id="save-stage" >
                                                    <thead>
                                                        <tr>
                                                            <th>Name</th>
                                                            <th>Email</th>
                                                            <th>Gender</th>
                                                            <th>Age</th>
                                                            <th>Phone</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            authUser ?
                                                                authUser.map((user, i) =>
                                                                    <tr key={i}>
                                                                        <td>{user.fullname}</td>
                                                                        <td>{user.email}</td>
                                                                        <td>{user.gender}</td>
                                                                        <td>{user.age}</td>
                                                                        <td>{user.phone}</td>
                                                                    </tr>
                                                                ) : null
                                                        }

                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
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

export default Basicform