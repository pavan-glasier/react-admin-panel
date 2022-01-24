import React from 'react';
// import Navbar from './Navbar';
// import Sidebar from './Sidebar';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
const Header = () => {
    return (
        <>
            <div className="navbar-bg"></div>
            <nav className="navbar navbar-expand-lg main-navbar sticky">
                <div className="form-inline mr-auto">
                    <ul className="navbar-nav mr-3">
                        <li><a href="#" data-toggle="sidebar" className="nav-link nav-link-lg collapse-btn">
                            {/* <i data-feather="align-justify"></i> */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-align-justify">
                                <line x1="21" y1="10" x2="3" y2="10"></line>
                                <line x1="21" y1="6" x2="3" y2="6"></line>
                                <line x1="21" y1="14" x2="3" y2="14"></line>
                                <line x1="21" y1="18" x2="3" y2="18"></line>
                            </svg>
                        </a>
                        </li>
                        <li><a href="#" className="nav-link nav-link-lg fullscreen-btn">
                            {/* <i data-feather="maximize"></i> */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-maximize">
                                <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
                            </svg>
                        </a></li>
                        <li>
                            <form className="form-inline mr-auto">
                                <div className="search-element">
                                    <input className="form-control" type="search" placeholder="Search" aria-label="Search" data-width="200" />
                                    <button className="btn" type="submit">
                                        <i className="fas fa-search"></i>
                                    </button>
                                </div>
                            </form>
                        </li>
                    </ul>
                </div>
                <ul className="navbar-nav navbar-right">
                    <li className="dropdown dropdown-list-toggle">
                        <a href="#" data-toggle="dropdown" className="nav-link nav-link-lg message-toggle">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                            <span className="badge headerBadge1">
                                6 </span>
                        </a>


                        <div className="dropdown-menu dropdown-list dropdown-menu-right pullDown">
                            <div className="dropdown-header">
                                Messages
                                <div className="float-right">
                                    <a href="#">Mark All As Read</a>
                                </div>
                            </div>
                            <div className="dropdown-list-content dropdown-list-message">
                                <a href="#" className="dropdown-item"> <span className="dropdown-item-avatar
											text-white">
                                    <img alt="image" src="assets/img/users/user-1.png" className="rounded-circle" />
                                </span> <span className="dropdown-item-desc"> <span className="message-user">John
                                    Deo</span>
                                        <span className="time messege-text">Please check your mail !!</span>
                                        <span className="time">2 Min Ago</span>
                                    </span>
                                </a> <a href="#" className="dropdown-item"> <span className="dropdown-item-avatar text-white">
                                    <img alt="image" src="assets/img/users/user-2.png" className="rounded-circle" />
                                </span> <span className="dropdown-item-desc"> <span className="message-user">Sarah
                                    Smith</span> <span className="time messege-text">Request for leave
                                        application</span>
                                        <span className="time">5 Min Ago</span>
                                    </span>
                                </a> <a href="#" className="dropdown-item"> <span className="dropdown-item-avatar text-white">
                                    <img alt="image" src="assets/img/users/user-5.png" className="rounded-circle" />
                                </span> <span className="dropdown-item-desc"> <span className="message-user">Jacob
                                    Ryan</span> <span className="time messege-text">Your payment invoice is
                                        generated.</span> <span className="time">12 Min Ago</span>
                                    </span>
                                </a> <a href="#" className="dropdown-item"> <span className="dropdown-item-avatar text-white">
                                    <img alt="image" src="assets/img/users/user-4.png" className="rounded-circle" />
                                </span> <span className="dropdown-item-desc"> <span className="message-user">Lina
                                    Smith</span> <span className="time messege-text">hii John, I have upload
                                        doc
                                        related to task.</span> <span className="time">30
                                            Min Ago</span>
                                    </span>
                                </a> <a href="#" className="dropdown-item"> <span className="dropdown-item-avatar text-white">
                                    <img alt="image" src="assets/img/users/user-3.png" className="rounded-circle" />
                                </span> <span className="dropdown-item-desc"> <span className="message-user">Jalpa
                                    Joshi</span> <span className="time messege-text">Please do as specify.
                                        Let me
                                        know if you have any query.</span> <span className="time">1
                                            Days Ago</span>
                                    </span>
                                </a> <a href="#" className="dropdown-item"> <span className="dropdown-item-avatar text-white">
                                    <img alt="image" src="assets/img/users/user-2.png" className="rounded-circle" />
                                </span> <span className="dropdown-item-desc"> <span className="message-user">Sarah
                                    Smith</span> <span className="time messege-text">Client Requirements</span>
                                        <span className="time">2 Days Ago</span>
                                    </span>
                                </a>
                            </div>
                            <div className="dropdown-footer text-center">
                                <a href="#">View All <i className="fas fa-chevron-right"></i></a>
                            </div>
                        </div>
                    </li>
                    <li className="dropdown dropdown-list-toggle"><a href="#" data-toggle="dropdown"
                        className="nav-link notification-toggle nav-link-lg">
                        {/* <i data-feather="bell" className="bell"></i> */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bell bell">
                            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                        </svg>
                    </a>
                        <div className="dropdown-menu dropdown-list dropdown-menu-right pullDown">
                            <div className="dropdown-header">
                                Notifications
                                <div className="float-right">
                                    <a href="#">Mark All As Read</a>
                                </div>
                            </div>
                            <div className="dropdown-list-content dropdown-list-icons">
                                <a href="#" className="dropdown-item dropdown-item-unread"> <span
                                    className="dropdown-item-icon bg-primary text-white"> <i className="fas
												fa-code"></i>
                                </span> <span className="dropdown-item-desc"> Template update is
                                    available now! <span className="time">2 Min
                                        Ago</span>
                                    </span>
                                </a> <a href="#" className="dropdown-item"> <span className="dropdown-item-icon bg-info text-white"> <i className="far
												fa-user"></i>
                                </span> <span className="dropdown-item-desc"> <b>You</b> and <b>Dedik
                                    Sugiharto</b> are now friends <span className="time">10 Hours
                                        Ago</span>
                                    </span>
                                </a> <a href="#" className="dropdown-item"> <span className="dropdown-item-icon bg-success text-white"> <i
                                    className="fas
												fa-check"></i>
                                </span> <span className="dropdown-item-desc"> <b>Kusnaedi</b> has
                                    moved task <b>Fix bug header</b> to <b>Done</b> <span className="time">12
                                        Hours
                                        Ago</span>
                                    </span>
                                </a> <a href="#" className="dropdown-item"> <span className="dropdown-item-icon bg-danger text-white"> <i
                                    className="fas fa-exclamation-triangle"></i>
                                </span> <span className="dropdown-item-desc"> Low disk space. Let's
                                    clean it! <span className="time">17 Hours Ago</span>
                                    </span>
                                </a> <a href="#" className="dropdown-item"> <span className="dropdown-item-icon bg-info text-white"> <i className="fas
												fa-bell"></i>
                                </span> <span className="dropdown-item-desc"> Welcome to Otika
                                    template! <span className="time">Yesterday</span>
                                    </span>
                                </a>
                            </div>
                            <div className="dropdown-footer text-center">
                                <a href="#">View All <i className="fas fa-chevron-right"></i></a>
                            </div>
                        </div>
                    </li>
                    <li className="dropdown"><a href="#" data-toggle="dropdown"
                        className="nav-link dropdown-toggle nav-link-lg nav-link-user"> <img alt="image" src="assets/img/user.png"
                            className="user-img-radious-style" /> <span className="d-sm-none d-lg-inline-block"></span></a>
                        <div className="dropdown-menu dropdown-menu-right pullDown">
                            <div className="dropdown-title">Hello Sarah Smith</div>
                            <a href="profile.html" className="dropdown-item has-icon"> <i className="far
										fa-user"></i> Profile
                            </a> <a href="timeline.html" className="dropdown-item has-icon"> <i className="fas fa-bolt"></i>
                                Activities
                            </a> <a href="#" className="dropdown-item has-icon"> <i className="fas fa-cog"></i>
                                Settings
                            </a>
                            <div className="dropdown-divider"></div>
                            <a href="auth-login.html" className="dropdown-item has-icon text-danger"> <i className="fas fa-sign-out-alt"></i>
                                Logout
                            </a>
                            {/* <Link to="/" className="dropdown-item has-icon text-danger"><i className="fas fa-sign-out-alt"></i> Home</Link> */}
                        </div>
                    </li>
                </ul>
            </nav>
            {/* <Sidebar /> */}

            <div className="main-sidebar sidebar-style-2">
                <aside id="sidebar-wrapper">
                    <div className="sidebar-brand">
                        <Link to="/">
                            <img alt="image" src="assets/img/logo.png" className="header-logo" />
                            <span className="logo-name"> Otika</span>
                        </Link>
                    </div>
                    <ul className="sidebar-menu">
                        <li className="menu-header">Main</li>
                        <li className="dropdown active">
                            <Link to="/dashboard" className="nav-link">
                                {/* <i data-feather="monitor"></i> */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-monitor">
                                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                                    <line x1="8" y1="21" x2="16" y2="21"></line>
                                    <line x1="12" y1="17" x2="12" y2="21"></line>
                                </svg>
                                <span>Dashboard</span>
                            </Link>
                        </li>
                        <li className="dropdown">
                            <Link to="#" className="menu-toggle nav-link has-dropdown">
                                {/* <i data-feather="briefcase"></i> */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-briefcase">
                                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                                </svg>
                                <span>Widgets</span>
                            </Link>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link to="/chart-widgets" className="nav-link">Chart Widgets</Link>
                                </li>

                                <li>
                                    <Link to="/data-widgets" className="nav-link">Data Widgets</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <Link to="#" className="menu-toggle nav-link has-dropdown">
                                {/* <i data-feather="command"></i> */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-command">
                                    <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                                </svg>
                                <span>Apps</span>
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link to="/chat" className="nav-link">Chat</Link></li>
                                <li><Link to="/portfolio" className="nav-link">Portfolio</Link></li>
                                <li><Link to="/blog" className="nav-link">Blog</Link></li>
                                <li><Link to="/calendar" className="nav-link">Calendar</Link></li>

                            </ul>
                        </li>
                        <li className="dropdown">
                            <Link to="#" className="menu-toggle nav-link has-dropdown">
                                {/* <i data-feather="mail"></i> */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                    <polyline points="22,6 12,13 2,6"></polyline>
                                </svg>
                                <span>Email</span>
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link to="/email-inbox" className="nav-link">Inbox</Link></li>
                                <li><Link to="/email-compose" className="nav-link">Compose</Link></li>
                                <li><Link to="/email-read" className="nav-link">Read</Link></li>
                            </ul>
                        </li>
                        <li className="menu-header">UI Elements</li>
                        <li className="dropdown">
                            <Link to="#" className="menu-toggle nav-link has-dropdown">
                                {/* <i data-feather="copy"></i> */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-copy">
                                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                                </svg>
                                <span>Basic Components</span>
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link to="/alert" className="nav-link">Alert</Link></li>
                                <li><Link to="/badge" className="nav-link">Badge</Link></li>
                                <li><Link to="/breadcrumb" className="nav-link">Breadcrumb</Link></li>
                                <li><Link to="/buttons" className="nav-link">Buttons</Link></li>
                                <li><Link to="/collapse" className="nav-link">Collapse</Link></li>
                                <li><Link to="/dropdown" className="nav-link">Dropdown</Link></li>
                                <li><Link to="/checkbox-and-radio" className="nav-link">Checkbox &amp; Radios</Link></li>
                                <li><Link to="/list-group" className="nav-link">List Group</Link></li>
                                <li><Link to="/media-object" className="nav-link">Media Object</Link></li>
                                <li><Link to="/navbar" className="nav-link">Navbar</Link></li>
                                <li><Link to="/pagination" className="nav-link">Pagination</Link></li>
                                <li><Link to="/popover" className="nav-link">Popover</Link></li>
                                <li><Link to="/progress" className="nav-link">Progress</Link></li>
                                <li><Link to="/tooltip" className="nav-link">Tooltip</Link></li>
                                <li><Link to="/flags" className="nav-link">Flag</Link></li>
                                <li><Link to="/typography" className="nav-link">Typography</Link></li>

                            </ul>
                        </li>
                        <li className="dropdown">
                            <Link to="#" className="menu-toggle nav-link has-dropdown">
                                {/* <i data-feather="shopping-bag"></i> */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-bag">
                                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                                    <line x1="3" y1="6" x2="21" y2="6"></line>
                                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                                </svg>
                                <span>Advanced</span>
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link to="/avatar" className="nav-link">Avatar</Link></li>

                                <li><a className="nav-link" href="card.html">Card</a></li>
                                <li><a className="nav-link" href="modal.html">Modal</a></li>
                                <li><a className="nav-link" href="sweet-alert.html">Sweet Alert</a></li>
                                <li><a className="nav-link" href="toastr.html">Toastr</a></li>
                                <li><a className="nav-link" href="empty-state.html">Empty State</a></li>
                                <li><a className="nav-link" href="multiple-upload.html">Multiple Upload</a></li>
                                <li><a className="nav-link" href="pricing.html">Pricing</a></li>
                                <li><a className="nav-link" href="tabs.html">Tab</a></li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/blank" className="nav-link" >
                                {/* <i data-feather="file"></i> */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-file">
                                    <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                                    <polyline points="13 2 13 9 20 9"></polyline>
                                </svg>
                                <span>Blank Page</span>
                            </Link>
                        </li>
                        <li className="menu-header">Otika</li>
                        <li className="dropdown">
                            <Link to="#" className="menu-toggle nav-link has-dropdown">
                                {/* <i data-feather="layout"></i> */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-layout">
                                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                    <line x1="3" y1="9" x2="21" y2="9"></line>
                                    <line x1="9" y1="21" x2="9" y2="9"></line>
                                </svg>
                                <span>Forms</span>
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link to="/local-form" className="nav-link">Form Local</Link></li>
                                <li><Link to="/basic-form" className="nav-link">Basic Form</Link></li>
                                <li><Link to="/advanced-form" className="nav-link">Advanced Form</Link></li>
                                <li><Link to="/editor-form" className="nav-link">Editor</Link></li>
                                <li><Link to="/validation-form" className="nav-link">Validation</Link></li>
                                <li><Link to="/wizard-form" className="nav-link">Form Wizard</Link></li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <Link to="#" className="menu-toggle nav-link has-dropdown">
                                {/* <i data-feather="grid"></i> */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-grid">
                                    <rect x="3" y="3" width="7" height="7"></rect>
                                    <rect x="14" y="3" width="7" height="7"></rect>
                                    <rect x="14" y="14" width="7" height="7"></rect>
                                    <rect x="3" y="14" width="7" height="7"></rect>
                                </svg>
                                <span>Tables</span>
                            </Link>
                            <ul className="dropdown-menu">
                                <li><a className="nav-link" href="basic-table.html">Basic Tables</a></li>
                                <li><a className="nav-link" href="advance-table.html">Advanced Table</a></li>
                                <li><a className="nav-link" href="datatables.html">Datatable</a></li>
                                <li><a className="nav-link" href="export-table.html">Export Table</a></li>
                                <li><a className="nav-link" href="editable-table.html">Editable Table</a></li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <Link to="#" className="menu-toggle nav-link has-dropdown">
                                {/* <i data-feather="pie-chart"></i> */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-pie-chart">
                                    <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                                    <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
                                </svg>
                                <span>Charts</span>
                            </Link>
                            <ul className="dropdown-menu">
                                <li><a className="nav-link" href="chart-amchart.html">amChart</a></li>
                                <li><a className="nav-link" href="chart-apexchart.html">apexchart</a></li>
                                <li><a className="nav-link" href="chart-echart.html">eChart</a></li>
                                <li><a className="nav-link" href="chart-chartjs.html">Chartjs</a></li>
                                <li><a className="nav-link" href="chart-sparkline.html">Sparkline</a></li>
                                <li><a className="nav-link" href="chart-morris.html">Morris</a></li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <Link to="#" className="menu-toggle nav-link has-dropdown">
                                {/* <i data-feather="feather"></i> */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-feather">
                                    <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
                                    <line x1="16" y1="8" x2="2" y2="22"></line>
                                    <line x1="17.5" y1="15" x2="9" y2="15"></line>
                                </svg>
                                <span>Icons</span>
                            </Link>
                            <ul className="dropdown-menu">
                                <li><a className="nav-link" href="icon-font-awesome.html">Font Awesome</a></li>
                                <li><a className="nav-link" href="icon-material.html">Material Design</a></li>
                                <li><a className="nav-link" href="icon-ionicons.html">Ion Icons</a></li>
                                <li><a className="nav-link" href="icon-feather.html">Feather Icons</a></li>
                                <li><a className="nav-link" href="icon-weather-icon.html">Weather Icon</a></li>
                            </ul>
                        </li>
                        <li className="menu-header">Media</li>
                        <li className="dropdown">
                            <a href="#" className="menu-toggle nav-link has-dropdown"><i data-feather="image"></i><span>Gallery</span></a>
                            <ul className="dropdown-menu">
                                <li><a className="nav-link" href="light-gallery.html">Light Gallery</a></li>
                                <li><a href="gallery1.html">Gallery 2</a></li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <a href="#" className="menu-toggle nav-link has-dropdown"><i data-feather="flag"></i><span>Sliders</span></a>
                            <ul className="dropdown-menu">
                                <li><a href="carousel.html">Bootstrap Carousel.html</a></li>
                                <li><a className="nav-link" href="owl-carousel.html">Owl Carousel</a></li>
                            </ul>
                        </li>
                        <li><a className="nav-link" href="timeline.html"><i data-feather="sliders"></i><span>Timeline</span></a></li>
                        <li className="menu-header">Maps</li>
                        <li className="dropdown">
                            <a href="#" className="menu-toggle nav-link has-dropdown"><i data-feather="map"></i><span>Google
                                Maps</span></a>
                            <ul className="dropdown-menu">
                                <li><a href="gmaps-advanced-route.html">Advanced Route</a></li>
                                <li><a href="gmaps-draggable-marker.html">Draggable Marker</a></li>
                                <li><a href="gmaps-geocoding.html">Geocoding</a></li>
                                <li><a href="gmaps-geolocation.html">Geolocation</a></li>
                                <li><a href="gmaps-marker.html">Marker</a></li>
                                <li><a href="gmaps-multiple-marker.html">Multiple Marker</a></li>
                                <li><a href="gmaps-route.html">Route</a></li>
                                <li><a href="gmaps-simple.html">Simple</a></li>
                            </ul>
                        </li>
                        <li><a className="nav-link" href="vector-map.html"><i data-feather="map-pin"></i><span>Vector
                            Map</span></a></li>
                        <li className="menu-header">Pages</li>
                        <li className="dropdown">
                            <a href="#" className="menu-toggle nav-link has-dropdown"><i
                                data-feather="user-check"></i><span>Auth</span></a>
                            <ul className="dropdown-menu">
                                <li><a href="auth-login.html">Login</a></li>
                                <li><a href="auth-register.html">Register</a></li>
                                <li><a href="auth-forgot-password.html">Forgot Password</a></li>
                                <li><a href="auth-reset-password.html">Reset Password</a></li>
                                <li><a href="subscribe.html">Subscribe</a></li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <a href="#" className="menu-toggle nav-link has-dropdown"><i
                                data-feather="alert-triangle"></i><span>Errors</span></a>
                            <ul className="dropdown-menu">
                                <li><a className="nav-link" href="errors-503.html">503</a></li>
                                <li><a className="nav-link" href="errors-403.html">403</a></li>
                                <li><a className="nav-link" href="errors-404.html">404</a></li>
                                <li><a className="nav-link" href="errors-500.html">500</a></li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <a href="#" className="menu-toggle nav-link has-dropdown"><i data-feather="anchor"></i><span>Other
                                Pages</span></a>
                            <ul className="dropdown-menu">
                                <li><a className="nav-link" href="create-post.html">Create Post</a></li>
                                <li><a className="nav-link" href="posts.html">Posts</a></li>
                                <li><a className="nav-link" href="profile.html">Profile</a></li>
                                <li><a className="nav-link" href="contact.html">Contact</a></li>
                                <li><a className="nav-link" href="invoice.html">Invoice</a></li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <a href="#" className="menu-toggle nav-link has-dropdown"><i
                                data-feather="chevrons-down"></i><span>Multilevel</span></a>
                            <ul className="dropdown-menu">
                                <li><a href="#">Menu 1</a></li>
                                <li className="dropdown">
                                    <a href="#" className="has-dropdown">Menu 2</a>
                                    <ul className="dropdown-menu">
                                        <li><a href="#">Child Menu 1</a></li>
                                        <li className="dropdown">
                                            <a href="#" className="has-dropdown">Child Menu 2</a>
                                            <ul className="dropdown-menu">
                                                <li><a href="#">Child Menu 1</a></li>
                                                <li><a href="#">Child Menu 2</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#"> Child Menu 3</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </aside>
            </div>
        </>
    )
}

export default Header