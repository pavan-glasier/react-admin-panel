import React from 'react'
import './Profile.css'
import Header from '../components/Header'
import Footer from '../components/Footer';
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams, Navigate } from 'react-router-dom';
import axios from 'axios';
export const Profile = (props) => {
    let { userId } = useParams();
    // const [uID, setUID] = useState(userId);
    // console.log("uID", userId)
    let navigate = useNavigate();
    const [authUser, setauthUser] = useState(JSON.parse(sessionStorage.getItem('loginData')));

    // console.warn("authUserProfile", authUser[0].name)
    const [isLogin, setIsLogin] = useState(JSON.parse(sessionStorage.getItem('isLogin')));
    const [profileData, setprofileData] = useState({
        name: authUser[0].name,
        email: authUser[0].email,
        dob: authUser[0].dob,
        gender: authUser[0].gender,
        phone: authUser[0].phone,
        password: authUser[0].password,
        skills: []

    })
    // const [skills, setSkills] = useState([])
    // console.warn("profileData", profileData.name);
    const skills_array = authUser[0].skills.split(',');
    const gallery_array = authUser[0].gallery.split(',');

    const API_URL = process.env.REACT_APP_API_PATH
    const [proFile, setProFile] = useState(false);
    const [galleries, setGallery] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState('')

    console.warn(galleries)

    const handleChangeOtherSkill = e => {
        let value = e.target.value;
        console.log("Input value", value);
        setInputValue(value);
    }


    const handlerChangeSkills = (e) => {

        const isChecked = e.target.checked;
        if (isChecked) {
            setprofileData({ skills: [...profileData.skills, e.target.value] });
        } else {
            const index = profileData.skills.indexOf(e.target.value);
            profileData.skills.splice(index, 1);
            setprofileData({ skills: profileData.skills });
        }
    }

    const handlerGalleryFile = (e) => {
        let allfiles = []
        for (let i = 0; i < e.target.files.length; i++) {
            allfiles.push(e.target.files[i]);
        }
        if (allfiles.length > 0) {
            setGallery(allfiles);
        }
    };
    const handlerProFile = (e) => {
        let allfiles = []
        for (let i = 0; i < e.target.files.length; i++) {
            allfiles.push(e.target.files[i]);
        }
        if (allfiles.length > 0) {
            setProFile(allfiles);
        }
    };

    const isOpenHandle = e => {
        let id = e.target.id;
        const isChecked = e.target.checked;
        if (isChecked) {
            if (id === 'other') {
                setIsOpen(true)
            }
        } else {
            if (id === 'other') {
                setIsOpen(false)
            }
        }
    }


    const onSubmit = (e) => {
        e.preventDefault();
        let files = e.target.file.files;
        let pro_img = e.target.profile.files;
        let skil = profileData.skills;
        console.log("profileData.skills", skil)
        let formData = new FormData();
        formData.append('id', userId);
        formData.append('name', e.target.fullname.value);
        formData.append('email', e.target.email.value);
        formData.append('password', e.target.password.value);
        formData.append('phone', e.target.phone.value);
        formData.append('dob', e.target.dob.value);
        formData.append('gender', e.target.gender.value);
        formData.append('pro_img', pro_img[0]);
        if (inputValue !== "") {
            formData.append("skills[]", inputValue);
        }

        Object.entries(profileData.skills).map(([key, value]) => formData.append("skills[]", value))
        Object.entries(files).map(([key, value]) => formData.append("gallery[]", value))

        axios({
            url: `${API_URL}update-api.php`,
            method: 'POST',
            data: formData
        }).then((res) => {
            console.log("PROFILE RESPONSE", res)
            if (res.status == 200) {
                // sessionStorage.setItem('isLogin', false);
                // navigate("/login");
                getInfo();
            }
        })
    }
    useEffect(() => {
        getInfo();
        let userName = authUser[0].name;
        
        document.title = `Profile | ${toTitleCase(userName)}`
    }, [])
    
    const toTitleCase = (phrase) => {
        return phrase
          .toLowerCase()
          .split(' ')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
      };
      
    const getInfo = () => {
        fetch(`${API_URL}single-api.php?userId=${authUser[0].id}`)
            .then((result) => {
                result.json()
                    .then((resp) => {
                        console.log("resp", resp);
                        sessionStorage.setItem('loginData', JSON.stringify(resp));
                        setauthUser(JSON.parse(sessionStorage.getItem('loginData')));

                    })
            })
    }

    return (
        <>
        
        {
            !isLogin ? <Navigate replace to="/login" /> :
                <div className="main-wrapper main-wrapper-1" >
                    <Header authUser={authUser ? authUser : ''} img="../" activeClasss={props.name ? props.name : ''}/>
                    <div className="main-content">
                        <section className="section">
                            <div className="section-body">
                                <div className="row mt-sm-4">
                                    <div className="col-12 col-md-12 col-lg-4">
                                        <div className="card author-box">
                                            <div className="card-body">
                                                <div className="author-box-center">
                                                    {
                                                        proFile ?
                                                            proFile.map((file, i) => {
                                                                return (
                                                                    <img key={i} src={URL.createObjectURL(file)} alt={file.name} className="rounded-circle author-box-picture" />
                                                                )
                                                            }) : <img alt="image" src={`${API_URL}${authUser[0].pro_img}`} className="rounded-circle author-box-picture" />
                                                    }

                                                    <div className="clearfix"></div>
                                                    <div className="author-box-name">
                                                        <Link to="#">{toTitleCase(authUser[0].name)}</Link>
                                                    </div>
                                                    <div className="author-box-job">Web Developer</div>
                                                </div>
                                                <div className="text-center">
                                                    <div className="author-box-description">
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur voluptatum alias molestias
                                                            minus quod dignissimos.
                                                        </p>
                                                    </div>
                                                    <div className="mb-2 mt-3">
                                                        <div className="text-small font-weight-bold">Follow Hasan On</div>
                                                    </div>
                                                    <Link to="/" className="btn btn-social-icon mr-1 btn-facebook">
                                                        <i className="fab fa-facebook-f"></i>
                                                    </Link>
                                                    <Link to="/" className="btn btn-social-icon mr-1 btn-twitter">
                                                        <i className="fab fa-twitter"></i>
                                                    </Link>
                                                    <Link to="/" className="btn btn-social-icon mr-1 btn-github">
                                                        <i className="fab fa-github"></i>
                                                    </Link>
                                                    <Link to="/" className="btn btn-social-icon mr-1 btn-instagram">
                                                        <i className="fab fa-instagram"></i>
                                                    </Link>
                                                    <div className="w-100 d-sm-none"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header">
                                                <h4>Personal Details</h4>
                                            </div>
                                            <div className="card-body">
                                                <div className="py-4">
                                                    <p className="clearfix">
                                                        <span className="float-left">
                                                            Birthday
                                                        </span>
                                                        <span className="float-right text-muted">
                                                            {authUser[0].dob}
                                                        </span>
                                                    </p>
                                                    <p className="clearfix">
                                                        <span className="float-left">
                                                            Phone
                                                        </span>
                                                        <span className="float-right text-muted">
                                                            {authUser[0].phone}
                                                        </span>
                                                    </p>
                                                    <p className="clearfix">
                                                        <span className="float-left">
                                                            Mail
                                                        </span>
                                                        <span className="float-right text-muted">
                                                            {authUser[0].email}
                                                        </span>
                                                    </p>

                                                </div>
                                            </div>
                                        </div>
                                        <div className={`card ${skills_array.slice(0, 1).map((skill, i) => skill ? `block-${i}` : "d-none")} `}>
                                            <div className="card-header">
                                                <h4>Skills</h4>
                                            </div>
                                            <div className="card-body">
                                                {
                                                    skills_array.map((skill, i) =>
                                                        <>
                                                            {
                                                                skill !== "" ?
                                                                    <span className="btn btn-primary btn-sm mb-2 mr-2" key={i}>{skill}</span>
                                                                    : null
                                                            }

                                                        </>
                                                    )
                                                }
                                            </div>
                                        </div>

                                        <>{

                                            galleries ?

                                                <div className={`card`}>
                                                    <div className="card-header">
                                                        <h4>Gallery</h4>
                                                    </div>
                                                    <div className="card-body">
                                                        <div className="row ">
                                                            {
                                                                galleries.map((gall_img, i) =>
                                                                    <>
                                                                        <div className="col-4 p-2" key={i}>
                                                                            <div className="img-body">
                                                                                <img src={URL.createObjectURL(gall_img)} alt={gall_img.name} className="img-fluid" />
                                                                            </div>
                                                                        </div>
                                                                    </>
                                                                )
                                                            }
                                                        </div>
                                                    </div>
                                                </div> :
                                                <div className={`card ${gallery_array.slice(0, 1).map((img, i) => img ? `block-${i}` : "d-none")} `}>
                                                    <div className="card-header">
                                                        <h4>Gallery</h4>
                                                    </div>
                                                    <div className="card-body">
                                                        <div className="row">
                                                            {
                                                                gallery_array.map((img, i) =>
                                                                    <>
                                                                        <div className="col-4 p-2" key={i}>
                                                                            <div className="img-body">
                                                                                <img src={`${API_URL}${img}`} className="img-fluid" />
                                                                            </div>
                                                                        </div>
                                                                    </>
                                                                )
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                        }</>
                                    </div>
                                    <div className="col-12 col-md-12 col-lg-8">
                                        <div className="card">
                                            <div className="padding-20">
                                                <ul className="nav nav-tabs" id="myTab2" role="tablist">
                                                    <li className="nav-item">
                                                        <a className="nav-link active" id="home-tab2" data-toggle="tab" href="#about" role="tab"
                                                            aria-selected="true">About</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" id="profile-tab2" data-toggle="tab" href="#settings" role="tab"
                                                            aria-selected="false">Setting</a>
                                                    </li>
                                                </ul>
                                                <div className="tab-content tab-bordered" id="myTab3Content">
                                                    <div className="tab-pane fade show active" id="about" role="tabpanel" aria-labelledby="home-tab2">
                                                        {/* <div className="row">
                                                        <div className="col-md-3 col-6 b-r">
                                                            <strong>Full Name</strong>
                                                            <br />
                                                            <p className="text-muted">Emily Smith</p>
                                                        </div>
                                                        <div className="col-md-3 col-6 b-r">
                                                            <strong>Mobile</strong>
                                                            <br />
                                                            <p className="text-muted">(123) 456 7890</p>
                                                        </div>
                                                        <div className="col-md-3 col-6 b-r">
                                                            <strong>Email</strong>
                                                            <br />
                                                            <p className="text-muted">johndeo@example.com</p>
                                                        </div>
                                                        <div className="col-md-3 col-6">
                                                            <strong>Location</strong>
                                                            <br />
                                                            <p className="text-muted">India</p>
                                                        </div>
                                                    </div> */}
                                                        <p className="m-t-30">Completed my graduation in Arts from the well known and
                                                            renowned institution
                                                            of India – SARDAR PATEL ARTS COLLEGE, BARODA in 2000-01, which was
                                                            affiliated
                                                            to M.S. University. I ranker in University exams from the same
                                                            university
                                                            from 1996-01.</p>
                                                        <p>Worked as Professor and Head of the department at Sarda Collage, Rajkot,
                                                            Gujarat
                                                            from 2003-2015 </p>
                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                            industry. Lorem
                                                            Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                            when
                                                            an unknown printer took a galley of type and scrambled it to make a
                                                            type
                                                            specimen book. It has survived not only five centuries, but also the
                                                            leap
                                                            into electronic typesetting, remaining essentially unchanged.</p>
                                                        <div className="section-title">Education</div>
                                                        <ul>
                                                            <li>B.A.,Gujarat University, Ahmedabad,India.</li>
                                                            <li>M.A.,Gujarat University, Ahmedabad, India.</li>
                                                            <li>P.H.D., Shaurashtra University, Rajkot</li>
                                                        </ul>
                                                        <div className="section-title">Experience</div>
                                                        <ul>
                                                            <li>One year experience as Jr. Professor from April-2009 to march-2010
                                                                at B.
                                                                J. Arts College, Ahmedabad.</li>
                                                            <li>Three year experience as Jr. Professor at V.S. Arts &amp; Commerse
                                                                Collage
                                                                from April - 2008 to April - 2011.</li>
                                                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                                industry.
                                                            </li>
                                                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                                industry.
                                                            </li>
                                                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                                industry.
                                                            </li>
                                                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                                industry.
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="tab-pane fade" id="settings" role="tabpanel" aria-labelledby="profile-tab2">
                                                        <form className="" onSubmit={(e) => onSubmit(e)} encType="multipart/form-data" >
                                                            <div className="card-header">
                                                                <h4>Edit Profile</h4>
                                                            </div>
                                                            <div className="card-body row px-0 px-md-4">
                                                                <div className="form-group col-12">
                                                                    <label>Profile</label>
                                                                    <input
                                                                        className="form-control"
                                                                        type="file"
                                                                        name="profile"
                                                                        onChange={handlerProFile}
                                                                    />
                                                                </div>
                                                                <div className="form-group col-sm-12 col-md-6">
                                                                    <label>Your Name</label>
                                                                    <input
                                                                        id="fullname"
                                                                        className="form-control"
                                                                        type="text"
                                                                        name="fullname"
                                                                        defaultValue={profileData.name}
                                                                    />
                                                                </div>

                                                                <div className="form-group col-sm-12 col-md-6">
                                                                    <label>Email</label>
                                                                    <input
                                                                        id="email"
                                                                        className="form-control"
                                                                        type="email"
                                                                        name="email"
                                                                        defaultValue={profileData.email}
                                                                    />
                                                                </div>

                                                                <div className="form-group col-sm-12 col-md-6">
                                                                    <label>Phone</label>
                                                                    <input
                                                                        id="phone"
                                                                        className="form-control"
                                                                        type="text"
                                                                        name="phone"
                                                                        defaultValue={profileData.phone}
                                                                    />
                                                                </div>

                                                                <div className="form-group col-sm-12 col-md-6">
                                                                    <label>DOB</label>
                                                                    <input
                                                                        id="dob"
                                                                        className="form-control"
                                                                        type="date"
                                                                        name="dob"
                                                                        defaultValue={profileData.dob}
                                                                    />
                                                                </div>

                                                                <div className="form-group col-sm-12 col-md-6">
                                                                    <label>Gender</label>
                                                                    <select className='form-control' name='gender'>
                                                                        <option defaultValue="Male">Male</option>
                                                                        <option defaultValue="Female">Female</option>
                                                                    </select>
                                                                </div>

                                                                <div className="form-group col-sm-12 col-md-6">
                                                                    <label>Skills</label>
                                                                    <div className="row">
                                                                        <div className="col-md-3 col-sm-12">
                                                                            <div className="custom-checkbox custom-checkbox-table custom-control">
                                                                                <input
                                                                                    className='custom-control-input'
                                                                                    id='html'
                                                                                    type="checkbox"
                                                                                    name="skills"
                                                                                    onChange={handlerChangeSkills}
                                                                                    value="Html"
                                                                                />  <label htmlFor='html' className='custom-control-label'> Html</label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-3 col-sm-12">
                                                                            <div className="custom-checkbox custom-checkbox-table custom-control">
                                                                                <input
                                                                                    className='custom-control-input'
                                                                                    id='css'
                                                                                    type="checkbox"
                                                                                    name="skills"
                                                                                    onChange={handlerChangeSkills}
                                                                                    value="Css"
                                                                                /> <label htmlFor='css' className='custom-control-label'>Css</label>
                                                                            </div>
                                                                        </div>

                                                                        <div className="col-md-3 col-sm-12">
                                                                            <div className="custom-checkbox custom-checkbox-table custom-control">
                                                                                <input
                                                                                    className='custom-control-input'
                                                                                    id='js'
                                                                                    type="checkbox"
                                                                                    name="skills"
                                                                                    onChange={handlerChangeSkills}
                                                                                    value="Javascript"
                                                                                /> <label htmlFor='js' className='custom-control-label'>Javascript</label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-3 col-sm-12">
                                                                            <div className="custom-checkbox custom-checkbox-table custom-control">
                                                                                <input
                                                                                    className='custom-control-input'
                                                                                    id='php'
                                                                                    type="checkbox"
                                                                                    name="skills"
                                                                                    onChange={handlerChangeSkills}
                                                                                    value="Php"
                                                                                /> <label htmlFor='php' className='custom-control-label'>Php</label>
                                                                            </div>
                                                                        </div>

                                                                        <div className="col-12">
                                                                            <div className="custom-checkbox custom-checkbox-table custom-control">
                                                                                <input
                                                                                    className='custom-control-input'
                                                                                    id='other'
                                                                                    type="checkbox"
                                                                                    onChange={isOpenHandle}
                                                                                /> <label htmlFor='other' className='custom-control-label'>Other</label>
                                                                            </div>
                                                                            {
                                                                                isOpen ?
                                                                                    <input
                                                                                        type="text"
                                                                                        className='form-control'
                                                                                        name="skills"
                                                                                        onChange={handleChangeOtherSkill} /> : null
                                                                            }
                                                                        </div>

                                                                    </div>
                                                                </div>

                                                                <div className="form-group col-md-6 col-sm-12">
                                                                    <label>Password</label>
                                                                    <input
                                                                        id="password"
                                                                        className="form-control"
                                                                        type="password"
                                                                        name="password"
                                                                        defaultValue={profileData.password}
                                                                    />
                                                                </div>


                                                                <div className="form-group col-md-6 col-sm-12">
                                                                    <label>Images</label>
                                                                    <input
                                                                        id="file"
                                                                        className="form-control"
                                                                        type="file"
                                                                        name="file[]"
                                                                        multiple
                                                                        onChange={handlerGalleryFile}
                                                                    />
                                                                </div>

                                                            </div>
                                                            <div className="card-footer text-right">
                                                                <button className="btn btn-primary">Submit</button>
                                                            </div>

                                                        </form>
                                                    </div>
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
        }
        </>
    )
}

export default Profile