import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

export const Sidebar = () => {
    return (
        <>
            <Router>
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
            </Router>
        </>
    )
}

export default Sidebar