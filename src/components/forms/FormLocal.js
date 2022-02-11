import React from 'react';
import { useForm } from 'react-hook-form';
import { useState, useEffect } from "react";
import Header from '../Header'
import Footer from '../Footer';
import axios from 'axios';
export const FormLocal = () => {
    // const { register, handleSubmit, formState: { errors } } = useForm();
    const [filess, setFile] = useState([]);
    const onSubmit = (e) => {
        e.preventDefault();
        let files = e.target.file.files;
        let pro_img = e.target.profile.files;
        let skills = e.target.skills;
        // console.log("skills" , skills)
        let formData = new FormData();
        console.log("pro_img[0]", pro_img[0]);
        formData.append('name', e.target.fullname.value);
        formData.append('email', e.target.email.value);
        formData.append('dob', e.target.dob.value);
        formData.append('gender', e.target.gender.value);
        formData.append('pro_img', pro_img[0]);
        for (let j = 0; j < skills.length; j++) {
            formData.append('skills[]', skills[j].value);
        }
        for (let i = 0; i < files.length; i++) {
            formData.append('gallery[]', files[i]);
        }
        axios({
            url: 'http://192.168.0.128/REST-API/insert-api.php',
            method: 'POST',
            data: formData
        }).then((res) =>{
            console.log("RESPONSE", res)
        })
        // fetch(`http://192.168.0.128/REST-API/insert-api.php`, {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: files
        // }).then((result) => {
        //     result.json()
        //         .then((resp) => {
        //             console.log(resp);
        //             // setMsg(resp.message);
        //             // setauthUser(sessionStorage.setItem('loginData', JSON.stringify(resp)));
        //             // setIsLogin(sessionStorage.setItem('isLogin', true));
        //             // if (resp.status !== false) {
        //             //     navigate("/dashboard");
        //             // }
        //         })
        // })
    }

    // // It's Working
    const handlerFile = (e) => {
        console.log(e.target.files);

        let allfiles = []
        for (let i = 0; i < e.target.files.length; i++) {
            allfiles.push(e.target.files[i]);
        }
        if (allfiles.length > 0) {
            setFile(allfiles);
        }
    };


    // const imgHandle = (e) => {
    //     // console.log(e.target.files);
    //     let file = e.target.files[0];
    //     let reader = new FileReader();
    //     let url = reader.readAsDataURL(file);
    //     console.log(url) // Would see a path?
    // }
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
                                        <form className="" onSubmit={(e) => onSubmit(e)} encType="multipart/form-data" >
                                            <div className="card-header">
                                                <h4>Form</h4>
                                            </div>
                                            <div className="card-body row">
                                                <div className="form-group col-12">
                                                    <label>Profile</label>
                                                    <input
                                                        className="form-control"
                                                        type="file"
                                                        name="profile"
                                                        onChange={handlerFile}
                                                    />
                                                </div>
                                                <div className="form-group col-6">
                                                    <label>Your Name</label>
                                                    <input
                                                        id="fullname"
                                                        className="form-control"
                                                        type="text"
                                                        name="fullname"
                                                        defaultValue=""
                                                    />
                                                </div>

                                                <div className="form-group col-6">
                                                    <label>Email</label>
                                                    <input
                                                        id="email"
                                                        className="form-control"
                                                        type="email"
                                                        name="email"
                                                        defaultValue=""
                                                    />
                                                </div>

                                                <div className="form-group col-6">
                                                    <label>DOB</label>
                                                    <input
                                                        id="dob"
                                                        className="form-control"
                                                        type="date"
                                                        name="dob"
                                                        defaultValue=""
                                                    />
                                                </div>

                                                <div className="form-group col-6">
                                                    <label>Gender</label>
                                                    <select className='form-control' name='gender'>
                                                        <option defaultValue="Male">Male</option>
                                                        <option defaultValue="Female">Female</option>
                                                    </select>
                                                </div>

                                                <div className="form-group col-6">
                                                    <label>Skills</label>
                                                    <div className="pretty p-default">
                                                        <div className="state p-success">
                                                        <input 
                                                        id='html'
                                                        type="checkbox"
                                                        name="skills"
                                                        defaultValue="HTML" /> <label htmlFor='html'>HTML</label>
                                                        </div>
                                                    </div>

                                                    <div className="pretty p-default">
                                                        <div className="state p-success">
                                                        <input 
                                                        id='css'
                                                        type="checkbox"
                                                        name="skills"
                                                        defaultValue="CSS" /> <label htmlFor='css'>CSS</label>
                                                        </div>
                                                    </div>

                                                    <div className="pretty p-default">
                                                        <div className="state p-success">
                                                        <input 
                                                        id='js'
                                                        type="checkbox"
                                                        name="skills"
                                                        defaultValue="JAVASCRIPT" /> <label htmlFor='js'>JAVASCRIPT</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                

                                                <div className="form-group">
                                                    <label>Images</label>
                                                    <input
                                                        id="file"
                                                        className="form-control"
                                                        type="file"
                                                        name="file[]"
                                                        multiple
                                                        onChange={handlerFile}
                                                    />
                                                </div>

                                            </div>
                                            <div className="card-footer text-right">
                                                <button className="btn btn-primary">Submit</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                <div className="col-12 col-md-6 col-lg-6">
                                    <div className='row'>
                                        {
                                            filess ?
                                            filess.map((file, key) => {
                                                return (
                                                    <div key={key} className="col-3">
                                                        <span className="Filename">
                                                            {/* {file.name} */}
                                                            <img src={URL.createObjectURL(file)} alt={file.name} width="100%" />
                                                        </span>
                                                    </div>
                                                )
                                            }):null
                                        }
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

export default FormLocal