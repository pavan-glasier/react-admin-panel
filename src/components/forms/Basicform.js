import React from 'react';
import { useForm } from 'react-hook-form';
import { useState, useEffect } from "react";
export const Basicform = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    
    const onSubmit = (data) => {
        // const [fullname, setFullname] = useState("");
        // const [email, setEmail] = useState("");
        localStorage.setItem("formData", JSON.stringify(data));
        
    }
    // const [fullname, setFullname] = useState("");
    // const [email, setEmail] = useState("");
    let form;
    // useEffect(() => {
    //     // storing input name
    //     // const [fullname, setFullname] = useState("");
    //     // const [email, setEmail] = useState("");
    //     const formData = JSON.parse(localStorage.getItem('formData'));
    //     console.log("localstorage", formData);
    //     // setFullname(formData.fullname);
    //     // setEmail(formData.email);
        
    //   }, [formData]);
    return (
        <>
        
        
            <div className="main-content">
                <section className="section">
                    <div className="section-body">
                        <div className="row">
                            <div className="col-12 col-md-6 col-lg-6">
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
                                                    defaultValue="" {...register("fullname", { required: true, maxLength: 20 })}
                                                    placeholder=" "
                                                    autoComplete="off"
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
                                                    autoComplete="off"
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
                                                    autoComplete="off"
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
                                                    autoComplete="off"
                                               />
                                                <div className="invalid-feedback">
                                                    {errors.age?.type === 'required' && "Age Number is required"}
                                                    {errors.age?.type === 'maxLength' && "Age Number max-length 3"}
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label>Gender</label>
                                                <select className="form-control select2" name="gender" {...register("gender", { required: true })}>
                                                    <option value="" hidden selected="selected">Select</option>
                                                    <option>Male</option>
                                                    <option>Female</option>
                                                </select>
                                                <div className="invalid-feedback">
                                                    {errors.gender?.type === 'required' && "Gender is required"}
                                                </div>
                                            </div>
                                            
                                            <div className="form-group mb-0">
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
                                        </div>
                                        <div className="card-footer text-right">
                                            <button className="btn btn-primary">Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-6">
                            {form}
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}

export default Basicform