import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer';
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
export const Profile = (props) => {
    let { id } = useParams();
    let navigate = useNavigate();
    const [authUser, setauthUser] = useState(JSON.parse(sessionStorage.getItem('loginData')));
    const [isLogin, setIsLogin] = useState(JSON.parse(sessionStorage.getItem('isLogin')));
    const[ profileData, setprofileData] = useState({
        name: authUser[0].name,
        email: authUser[0].email,
        dob: authUser[0].dob,
        gender: authUser[0].gender,
        phone: authUser[0].phone,
        password: authUser[0].password,
    })
    // console.warn("profileData", profileData.name);
    const answer_array = authUser[0].skills.split(',');
    // for(var i = 0; i < answer_array.length; i++){
    //     console.log(answer_array[i]);
    // }

    const [filess, setFile] = useState([]);
    const onSubmit = (e) => {
        e.preventDefault();
        let files = e.target.file.files;
        let pro_img = e.target.profile.files;
        let skills = e.target.skills;
        // console.log("skills" , skills)
        let formData = new FormData();
        formData.append('id', id);
        formData.append('name', e.target.fullname.value);
        formData.append('email', e.target.email.value);
        formData.append('password', e.target.password.value);
        formData.append('phone', e.target.phone.value);
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
            url: 'http://192.168.0.128/REST-API/update-api.php',
            method: 'POST',
            data: formData
        }).then((res) =>{
            console.log("PROFILE RESPONSE", res)
            if (res.status == 200) {
                navigate("/login");
            }
        })

        
    }
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
    return (
        <>

            <div className="main-wrapper main-wrapper-1" >
                <Header authUser={authUser} img="../" />
                <div className="main-content">
                    <section className="section">
                        <div className="section-body">
                            <div className="row mt-sm-4">
                                <div className="col-12 col-md-12 col-lg-4">
                                    <div className="card author-box">
                                        <div className="card-body">
                                            <div className="author-box-center">
                                                <img alt="image" src={`http://192.168.0.128/REST-API/${authUser[0].pro_img}`} className="rounded-circle author-box-picture" />
                                                <div className="clearfix"></div>
                                                <div className="author-box-name">
                                                    <a href="#">{authUser[0].name}</a>
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
                                                <a href="#" className="btn btn-social-icon mr-1 btn-facebook">
                                                    <i className="fab fa-facebook-f"></i>
                                                </a>
                                                <a href="#" className="btn btn-social-icon mr-1 btn-twitter">
                                                    <i className="fab fa-twitter"></i>
                                                </a>
                                                <a href="#" className="btn btn-social-icon mr-1 btn-github">
                                                    <i className="fab fa-github"></i>
                                                </a>
                                                <a href="#" className="btn btn-social-icon mr-1 btn-instagram">
                                                    <i className="fab fa-instagram"></i>
                                                </a>
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
                                    <div className="card">
                                        <div className="card-header">
                                            <h4>Skills</h4>
                                        </div>
                                        <div className="card-body">
                                            <ul className="list-unstyled user-progress list-unstyled-border list-unstyled-noborder">
                                                {
                                                    answer_array.map((skill) =>
                                                        <>
                                                            <li className="media">
                                                                <div className="media-body">
                                                                    <div className="media-title">{skill}</div>
                                                                </div>
                                                                <div className="media-progressbar p-t-10">
                                                                    <div className="progress" data-height="6">
                                                                        <div className="progress-bar bg-primary" data-width="70%"></div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </>
                                                    )
                                                }
                                            </ul>
                                        </div>
                                    </div>
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
                                                                    defaultValue={profileData.name}
                                                                />
                                                            </div>

                                                            <div className="form-group col-6">
                                                                <label>Email</label>
                                                                <input
                                                                    id="email"
                                                                    className="form-control"
                                                                    type="email"
                                                                    name="email"
                                                                    defaultValue={profileData.email}
                                                                />
                                                            </div>

                                                            <div className="form-group col-6">
                                                                <label>Phone</label>
                                                                <input
                                                                    id="phone"
                                                                    className="form-control"
                                                                    type="text"
                                                                    name="phone"
                                                                    defaultValue={profileData.phone}
                                                                />
                                                            </div>

                                                            <div className="form-group col-6">
                                                                <label>DOB</label>
                                                                <input
                                                                    id="dob"
                                                                    className="form-control"
                                                                    type="date"
                                                                    name="dob"
                                                                    defaultValue={profileData.dob}
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

                                                            <div className="form-group col-6">
                                                                <label>password</label>
                                                                <input
                                                                    id="password"
                                                                    className="form-control"
                                                                    type="password"
                                                                    name="password"
                                                                    defaultValue={profileData.password}
                                                                />
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

export default Profile