import React from 'react'
import Header from './Header'
import Footer from './Footer';
import { useState, useEffect } from "react";
import { Link, useNavigate, Navigate, useParams } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import ReactApexChart from 'react-apexcharts';

export const Dashboard = (props) => {
    let navigate = useNavigate();
    const [authUser, setauthUser] = useState(JSON.parse(sessionStorage.getItem('loginData')));
    const [isLogin, setIsLogin] = useState(JSON.parse(sessionStorage.getItem('isLogin')));
    const API_URL = process.env.REACT_APP_API_PATH
    // console.log("authUserDashboard", authUser);
    const [revenueChart, setRevenueChart] = useState({
        series: [{
            name: 'High 2021',
            data: [31, 40, 28, 51, 22, 64]
        }, {
            name: 'low 2021',
            data: [11, 32, 67, 32, 44, 52]
        }],
        options: {
            chart: {
                type: 'line'
            },
            dataLabels: {
                enabled: true,
            },
            colors: ['#786bed', '#999b9c'],
            stroke: {
                curve: 'smooth'
            },
            yaxis: {
                title: {
                    text: 'Income'
                }
            },
            xaxis: {
                categories: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun"
                ],
                labels: {
                    show: true,
                    rotate: -45,
                    rotateAlways: false,
                    hideOverlappingLabels: true,
                    showDuplicates: true,
                    trim: true,
                    style: {
                        colors: "#6c6f70",
                        fontSize: "12px",
                        fontWeight: 400,
                        cssClass: 'apexcharts-xaxis-label',
                    },
                }
            },
            chart: {
                animations: {
                    enabled: true,
                    easing: 'ease',
                    speed: 800,
                    animateGradually: {
                        enabled: true,
                        delay: 150
                    },
                    dynamicAnimation: {
                        enabled: true,
                        speed: 350
                    }
                },
                toolbar: {
                    show: false,
                    offsetX: 0,
                    offsetY: 0,
                }
            },
            legend: {
                show: false,
                showForSingleSeries: false,
                showForNullSeries: true,
                showForZeroSeries: true,
                position: 'bottom',
                horizontalAlign: 'center',
                floating: false,
                fontSize: '14px',
                fontFamily: 'Helvetica, Arial',
                fontWeight: 400,
                formatter: undefined,
                inverseOrder: false,
                width: undefined,
                height: undefined,
                tooltipHoverFormatter: undefined,
                customLegendItems: [],
                offsetX: 0,
                offsetY: 0,
                labels: {
                    colors: undefined,
                    useSeriesColors: false
                },
                markers: {
                    width: 12,
                    height: 12,
                    strokeWidth: 0,
                    strokeColor: '#fff',
                    fillColors: undefined,
                    radius: 12,
                    customHTML: undefined,
                    onClick: undefined,
                    offsetX: 0,
                    offsetY: 0
                },
                itemMargin: {
                    horizontal: 5,
                    vertical: 0
                },
                onItemClick: {
                    toggleDataSeries: true
                },
                onItemHover: {
                    highlightDataSeries: true
                },
            },
            tooltip: {
                x: {
                    format: 'MM'
                    // format: 'dd/MM/yy HH:mm'
                },
            },
        }
    })
    const [apxChart, setApxChart] = useState({
        series: [{
            name: 'series1',
            data: [31, 40, 28, 51, 22, 64, 80]
        }, {
            name: 'series2',
            data: [11, 32, 67, 32, 44, 52, 41]
        }],
        options: {
            chart: {
                type: 'area'
            },
            dataLabels: {
                enabled: false,
            },
            colors: ['#999b9c', '#4cc2b0'],
            fill: {
                colors: ['#999b9c', '#4cc2b0']
            },
            stroke: {
                curve: 'smooth'
            },
            xaxis: {
                categories: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "July"
                ],
                labels: {
                    show: true,
                    rotate: -45,
                    rotateAlways: false,
                    hideOverlappingLabels: true,
                    showDuplicates: true,
                    trim: true,
                    style: {
                        colors: "#6c6f70",
                        fontSize: "12px",
                        fontWeight: 400,
                        cssClass: 'apexcharts-xaxis-label',
                    },
                }
            },
            chart: {
                animations: {
                    enabled: true,
                    easing: 'ease',
                    speed: 800,
                    animateGradually: {
                        enabled: true,
                        delay: 150
                    },
                    dynamicAnimation: {
                        enabled: true,
                        speed: 350
                    }
                },
                toolbar: {
                    show: false,
                    offsetX: 0,
                    offsetY: 0,
                }
            },
            legend: {
                show: false,
                showForSingleSeries: false,
                showForNullSeries: true,
                showForZeroSeries: true,
                position: 'bottom',
                horizontalAlign: 'center',
                floating: false,
                fontSize: '14px',
                fontFamily: 'Helvetica, Arial',
                fontWeight: 400,
                formatter: undefined,
                inverseOrder: false,
                width: undefined,
                height: undefined,
                tooltipHoverFormatter: undefined,
                customLegendItems: [],
                offsetX: 0,
                offsetY: 0,
                labels: {
                    colors: undefined,
                    useSeriesColors: false
                },
                markers: {
                    width: 12,
                    height: 12,
                    strokeWidth: 0,
                    strokeColor: '#fff',
                    fillColors: undefined,
                    radius: 12,
                    customHTML: undefined,
                    onClick: undefined,
                    offsetX: 0,
                    offsetY: 0
                },
                itemMargin: {
                    horizontal: 5,
                    vertical: 0
                },
                onItemClick: {
                    toggleDataSeries: true
                },
                onItemHover: {
                    highlightDataSeries: true
                },
            },
            tooltip: {
                x: {
                    format: 'MM'
                    // format: 'dd/MM/yy HH:mm'
                },
            },
        }
    });


    const [apxChartLine, setApxChartLine] = useState({

        series: [{
            name: "Option 1",
            data: [45, 52, 38, 24, 33, 26, 21, 20]
        },
        {
            name: "Option 2",
            data: [35, 41, 62, 42, 13, 18, 29, 37]
        },
        {
            name: 'Option 3',
            data: [87, 57, 74, 99, 75, 38, 62, 47]
        }
        ],
        options: {

            chart: {
                height: 250,
                type: 'line',
                zoom: {
                    enabled: false
                },
                toolbar: {
                    show: false,
                    offsetX: 0,
                    offsetY: 0,
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                width: [5, 7, 5],
                curve: 'straight',
                dashArray: [0, 8, 5]
            },
            title: {
                text: '',
                align: 'left'
            },
            legend: {
                tooltipHoverFormatter: function (val, opts) {
                    return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
                }
            },
            markers: {
                size: 0,
                hover: {
                    sizeOffset: 6
                }
            },
            xaxis: {
                categories: [
                    'Jan',
                    'Feb',
                    'Mar',
                    'Apr',
                    'May',
                    'Jun',
                    'July',
                    'Aug'

                ],
            },
            tooltip: {
                y: [
                    {
                        title: {
                            formatter: function (val) {
                                return val + " (mins)"
                            }
                        }
                    },
                    {
                        title: {
                            formatter: function (val) {
                                return val + " per session"
                            }
                        }
                    },
                    {
                        title: {
                            formatter: function (val) {
                                return val;
                            }
                        }
                    }
                ]
            },
            legend: {
                show: false,
            },
            grid: {
                borderColor: '#f1f1f1',
            }
        },
    })

    const [apxChartCol, setApxChartCol] = useState({

        series: [{
            name: 'PRODUCT A',
            data: [44, 55, 41, 67, 22, 43]
        }, {
            name: 'PRODUCT B',
            data: [13, 23, 20, 8, 13, 27]
        }, {
            name: 'PRODUCT C',
            data: [11, 17, 15, 15, 21, 14]
        }],
        options: {
            chart: {
                type: 'bar',
                height: 350,
                stacked: true,
                toolbar: {
                    show: false
                },
                zoom: {
                    enabled: true
                }
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    legend: {
                        position: 'bottom',
                        offsetX: -10,
                        offsetY: 0
                    }
                }
            }],
            plotOptions: {
                bar: {
                    horizontal: false,
                    borderRadius: 10
                },
            },
            xaxis: {
                type: 'datetime',
                categories: [
                    '01/01/2011 GMT',
                    '01/02/2011 GMT',
                    '01/03/2011 GMT',
                    '01/04/2011 GMT',
                    '01/05/2011 GMT',
                    '01/06/2011 GMT'
                ],
            },
            legend: {
                show: false,
                position: 'right',
                offsetY: 40
            },
            fill: {
                opacity: 1
            }
        },
    })

    useEffect(() => {
        getInfo();
        document.title = props.title
        if (!isLogin) {
            navigate("/dashboard");
        }

    }, [])
    const getInfo = () => {
        fetch(`${API_URL}single-api.php?userId=${authUser[0].id}`)
            .then((result) => {
                result.json()
                    .then((resp) => {
                        // console.log("resp",resp);
                        sessionStorage.setItem('loginData', JSON.stringify(resp));
                        setauthUser(JSON.parse(sessionStorage.getItem('loginData')));
                        // setIsLogin(sessionStorage.setItem('isLogin', true));
                        // if (resp.status !== false) {
                        //     // navigate("/dashboard");
                        // }
                        // console.log("authUser", authUser)
                    })
            })
    }

    return (
        <>{
            !isLogin ? <Navigate to="/login" /> :
                <div className="main-wrapper main-wrapper-1" >
                    <Header authUser={authUser ? authUser : ''} activeClasss={props.name ? props.name : ''} />
                    <div className="main-content">
                        <section className="section">
                            <div className="row ">
                                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <div className="card">
                                        <div className="card-statistic-4">
                                            <div className="align-items-center justify-content-between">
                                                <div className="row ">
                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 pr-0 pt-3">
                                                        <div className="card-content">
                                                            <h5 className="font-15">New Booking</h5>
                                                            <h2 className="mb-3 font-18">258</h2>
                                                            <p className="mb-0"><span className="col-green">10%</span>{`  `} Increase</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 pl-0">
                                                        <div className="banner-img">
                                                            <img src="/assets/img/banner/1.png" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <div className="card">
                                        <div className="card-statistic-4">
                                            <div className="align-items-center justify-content-between">
                                                <div className="row ">
                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 pr-0 pt-3">
                                                        <div className="card-content">
                                                            <h5 className="font-15"> Customers</h5>
                                                            <h2 className="mb-3 font-18">1,287</h2>
                                                            <p className="mb-0"><span className="col-orange">09%</span> {`  `}Decrease</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 pl-0">
                                                        <div className="banner-img">
                                                            <img src="/assets/img/banner/2.png" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <div className="card">
                                        <div className="card-statistic-4">
                                            <div className="align-items-center justify-content-between">
                                                <div className="row ">
                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 pr-0 pt-3">
                                                        <div className="card-content">
                                                            <h5 className="font-15">New Project</h5>
                                                            <h2 className="mb-3 font-18">128</h2>
                                                            <p className="mb-0"><span className="col-green">18%</span>
                                                            {`  `} Increase</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 pl-0">
                                                        <div className="banner-img">
                                                            <img src="/assets/img/banner/3.png" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <div className="card">
                                        <div className="card-statistic-4">
                                            <div className="align-items-center justify-content-between">
                                                <div className="row ">
                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 pr-0 pt-3">
                                                        <div className="card-content">
                                                            <h5 className="font-15">Revenue</h5>
                                                            <h2 className="mb-3 font-18">$48,697</h2>
                                                            <p className="mb-0"><span className="col-green">42%</span>{`  `} Increase</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 pl-0">
                                                        <div className="banner-img">
                                                            <img src="/assets/img/banner/4.png" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-sm-12 col-lg-12">
                                    <div className="card ">
                                        <div className="card-header">
                                            <h4>Revenue chart</h4>
                                            <div className="card-header-action">
                                                <div className="dropdown">
                                                    <Link to="#" data-toggle="dropdown" className="btn btn-warning dropdown-toggle">Options</Link>
                                                    <div className="dropdown-menu">
                                                        <Link to="#" className="dropdown-item has-icon"><i className="fas fa-eye"></i> View</Link>
                                                       
                                                        <Link to="#" className="dropdown-item has-icon"><i className="far fa-edit"></i> Edit</Link>
                                                        <div className="dropdown-divider"></div>
                                                        <Link to="#" className="dropdown-item has-icon text-danger"><i className="far fa-trash-alt"></i>
                                                            Delete</Link>
                                                    </div>
                                                </div>
                                                {`  `}
                                                <Link to="#" className="btn btn-primary">View All</Link>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-lg-9">
                                                    {/* <div id="chart1"></div> */}
                                                    <div>
                                                        <ReactApexChart options={revenueChart.options} series={revenueChart.series} type="line" height={230} />
                                                    </div>
                                                    <div className="row mb-0">
                                                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                                                            <div className="list-inline text-center">
                                                                <div className="list-inline-item p-r-30">
                                                                    {/* <i data-feather="arrow-up-circle" className="col-green"></i> */}
                                                                    <FeatherIcon icon="arrow-up-circle" className="col-green" />
                                                                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-up-circle col-green">
                                                                        <circle cx="12" cy="12" r="10"></circle>
                                                                        <polyline points="16 12 12 8 8 12"></polyline>
                                                                        <line x1="12" y1="16" x2="12" y2="8"></line>
                                                                    </svg> */}
                                                                    <h5 className="m-b-0">$675</h5>
                                                                    <p className="text-muted font-14 m-b-0">Weekly Earnings</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                                                            <div className="list-inline text-center">
                                                                <div className="list-inline-item p-r-30">
                                                                    {/* <i data-feather="arrow-down-circle"
                                                                    className="col-orange"></i> */}
                                                                    <FeatherIcon icon="arrow-down-circle" className="col-orange" />
                                                                    <h5 className="m-b-0">$1,587</h5>
                                                                    <p className="text-muted font-14 m-b-0">Monthly Earnings</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                                                            <div className="list-inline text-center">
                                                                <div className="list-inline-item p-r-30">
                                                                    {/* <i data-feather="arrow-up-circle"
                                                                    className="col-green"></i> */}
                                                                    <FeatherIcon icon="arrow-up-circle" className="col-green" />
                                                                    <h5 className="mb-0 m-b-0">$45,965</h5>
                                                                    <p className="text-muted font-14 m-b-0">Yearly Earnings</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3">
                                                    <div className="row mt-5">
                                                        <div className="col-7 col-xl-7 mb-3">Total customers</div>
                                                        <div className="col-5 col-xl-5 mb-3">
                                                            <span className="text-big">8,257</span>
                                                            <sup className="col-green">+09%</sup>
                                                        </div>
                                                        <div className="col-7 col-xl-7 mb-3">Total Income</div>
                                                        <div className="col-5 col-xl-5 mb-3">
                                                            <span className="text-big">$9,857</span>
                                                            <sup className="text-danger">-18%</sup>
                                                        </div>
                                                        <div className="col-7 col-xl-7 mb-3">Project completed</div>
                                                        <div className="col-5 col-xl-5 mb-3">
                                                            <span className="text-big">28</span>
                                                            <sup className="col-green">+16%</sup>
                                                        </div>
                                                        <div className="col-7 col-xl-7 mb-3">Total expense</div>
                                                        <div className="col-5 col-xl-5 mb-3">
                                                            <span className="text-big">$6,287</span>
                                                            <sup className="col-green">+09%</sup>
                                                        </div>
                                                        <div className="col-7 col-xl-7 mb-3">New Customers</div>
                                                        <div className="col-5 col-xl-5 mb-3">
                                                            <span className="text-big">684</span>
                                                            <sup className="col-green">+22%</sup>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-sm-12 col-lg-4">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4>Chart</h4>
                                        </div>
                                        <div className="card-body">
                                            {/* <div id="chart4" className="chartsh"></div> */}
                                            <div className="">
                                                <ReactApexChart options={apxChart.options} series={apxChart.series} type="area" height={250} />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-12 col-lg-4">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4>Chart</h4>
                                        </div>
                                        <div className="card-body">
                                            <div className="summary">
                                                <div className="summary-chart active" data-tab-group="summary-tab" id="summary-chart">
                                                    {/* <div id="chart3" className="chartsh"></div> */}
                                                    <div className="">
                                                        <ReactApexChart options={apxChartLine.options} series={apxChartLine.series} type="line" height={250} />
                                                    </div>
                                                </div>
                                                {/* <div data-tab-group="summary-tab" id="summary-text">
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-12 col-lg-4">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4>Chart</h4>
                                        </div>
                                        <div className="card-body">
                                            {/* <div id="chart2" className="chartsh"></div> */}
                                            <div className="">
                                                <ReactApexChart options={apxChartCol.options} series={apxChartCol.series} type="bar" height={250} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4>Assign Task Table</h4>
                                            <div className="card-header-form">
                                                <form>
                                                    <div className="input-group">
                                                        <input type="text" className="form-control" placeholder="Search" />
                                                        <div className="input-group-btn">
                                                            <button className="btn btn-primary"><i className="fas fa-search"></i></button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="card-body p-0">
                                            <div className="table-responsive">
                                                <table className="table table-striped">
                                                    <thead>
                                                        <tr>
                                                            <th className="text-center">
                                                                <div className="custom-checkbox custom-checkbox-table custom-control">
                                                                    <input type="checkbox" data-checkboxes="mygroup" data-checkbox-role="dad"
                                                                        className="custom-control-input" id="checkbox-all" />
                                                                    <label htmlFor="checkbox-all" className="custom-control-label">&nbsp;</label>
                                                                </div>
                                                            </th>
                                                            <th>Task Name</th>
                                                            <th>Members</th>
                                                            <th>Task Status</th>
                                                            <th>Assigh Date</th>
                                                            <th>Due Date</th>
                                                            <th>Priority</th>
                                                            <th>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td className="p-0 text-center">
                                                                <div className="custom-checkbox custom-control">
                                                                    <input type="checkbox" data-checkboxes="mygroup" className="custom-control-input"
                                                                        id="checkbox-1" />
                                                                    <label htmlFor="checkbox-1" className="custom-control-label">&nbsp;</label>
                                                                </div>
                                                            </td>
                                                            <td>Create a mobile app</td>
                                                            <td className="text-truncate">
                                                                <ul className="list-unstyled order-list m-b-0 m-b-0">
                                                                    <li className="team-member team-member-sm"><img className="rounded-circle"
                                                                        src="/assets/img/users/user-8.png" alt="user" data-toggle="tooltip" title=""
                                                                        data-original-title="Wildan Ahdian" /></li>
                                                                    <li className="team-member team-member-sm"><img className="rounded-circle"
                                                                        src="/assets/img/users/user-9.png" alt="user" data-toggle="tooltip" title=""
                                                                        data-original-title="John Deo" /></li>
                                                                    <li className="team-member team-member-sm"><img className="rounded-circle"
                                                                        src="/assets/img/users/user-10.png" alt="user" data-toggle="tooltip" title=""
                                                                        data-original-title="Sarah Smith" /></li>
                                                                    <li className="avatar avatar-sm"><span className="badge badge-primary">+4</span></li>
                                                                </ul>
                                                            </td>
                                                            <td className="align-middle">
                                                                <div className="progress-text">50%</div>
                                                                <div className="progress" data-height="6" style={{ "height": "6px" }}>
                                                                    <div className="progress-bar bg-success" data-width="50%" style={{ "width": "50%" }}></div>
                                                                </div>
                                                            </td>
                                                            <td>2018-01-20</td>
                                                            <td>2019-05-28</td>
                                                            <td>
                                                                <div className="badge badge-success">Low</div>
                                                            </td>
                                                            <td><Link to="#" className="btn btn-outline-primary">Detail</Link></td>
                                                        </tr>
                                                        <tr>
                                                            <td className="p-0 text-center">
                                                                <div className="custom-checkbox custom-control">
                                                                    <input type="checkbox" data-checkboxes="mygroup" className="custom-control-input"
                                                                        id="checkbox-2" />
                                                                    <label htmlFor="checkbox-2" className="custom-control-label">&nbsp;</label>
                                                                </div>
                                                            </td>
                                                            <td>Redesign homepage</td>
                                                            <td className="text-truncate">
                                                                <ul className="list-unstyled order-list m-b-0 m-b-0">
                                                                    <li className="team-member team-member-sm">
                                                                        <img className="rounded-circle" src="/assets/img/users/user-1.png" alt="user" data-toggle="tooltip" title=""
                                                                            data-original-title="Wildan Ahdian" />
                                                                    </li>
                                                                    <li className="team-member team-member-sm" >
                                                                        <img className="rounded-circle"
                                                                            src="/assets/img/users/user-2.png" alt="user" data-toggle="tooltip" title=""
                                                                            data-original-title="John Deo" />
                                                                    </li>
                                                                    <li className="avatar avatar-sm"><span className="badge badge-primary">+2</span></li>
                                                                </ul>
                                                            </td>
                                                            <td className="align-middle">
                                                                <div className="progress-text">40%</div>
                                                                <div className="progress" data-height="6" style={{ "height": "6px" }}>
                                                                    <div className="progress-bar bg-danger" data-width="40%" style={{ "width": "40%" }}></div>
                                                                </div>
                                                            </td>
                                                            <td>2017-07-14</td>
                                                            <td>2018-07-21</td>
                                                            <td>
                                                                <div className="badge badge-danger">High</div>
                                                            </td>
                                                            <td><Link to="#" className="btn btn-outline-primary">Detail</Link></td>
                                                        </tr>
                                                        <tr>
                                                            <td className="p-0 text-center">
                                                                <div className="custom-checkbox custom-control">
                                                                    <input type="checkbox" data-checkboxes="mygroup" className="custom-control-input"
                                                                        id="checkbox-3" />
                                                                    <label htmlFor="checkbox-3" className="custom-control-label">&nbsp;</label>
                                                                </div>
                                                            </td>
                                                            <td>Backup database</td>
                                                            <td className="text-truncate">
                                                                <ul className="list-unstyled order-list m-b-0 m-b-0">
                                                                    <li className="team-member team-member-sm">
                                                                        <img className="rounded-circle"
                                                                            src="/assets/img/users/user-3.png" alt="user" data-toggle="tooltip" title=""
                                                                            data-original-title="Wildan Ahdian" /></li>
                                                                    <li className="team-member team-member-sm"><img className="rounded-circle"
                                                                        src="/assets/img/users/user-4.png" alt="user" data-toggle="tooltip" title=""
                                                                        data-original-title="John Deo" /></li>
                                                                    <li className="team-member team-member-sm"><img className="rounded-circle"
                                                                        src="/assets/img/users/user-5.png" alt="user" data-toggle="tooltip" title=""
                                                                        data-original-title="Sarah Smith" /></li>
                                                                    <li className="avatar avatar-sm"><span className="badge badge-primary">+3</span></li>
                                                                </ul>
                                                            </td>
                                                            <td className="align-middle">
                                                                <div className="progress-text">55%</div>
                                                                <div className="progress" data-height="6" style={{ "height": "6px" }}>
                                                                    <div className="progress-bar bg-purple" data-width="55%" style={{ "width": "55%" }}></div>
                                                                </div>
                                                            </td>
                                                            <td>2019-07-25</td>
                                                            <td>2019-08-17</td>
                                                            <td>
                                                                <div className="badge badge-info">Average</div>
                                                            </td>
                                                            <td><Link to="#" className="btn btn-outline-primary">Detail</Link></td>
                                                        </tr>
                                                        <tr>
                                                            <td className="p-0 text-center">
                                                                <div className="custom-checkbox custom-control">
                                                                    <input type="checkbox" data-checkboxes="mygroup" className="custom-control-input"
                                                                        id="checkbox-4" />
                                                                    <label htmlFor="checkbox-4" className="custom-control-label">&nbsp;</label>
                                                                </div>
                                                            </td>
                                                            <td>Android App</td>
                                                            <td className="text-truncate">
                                                                <ul className="list-unstyled order-list m-b-0 m-b-0">
                                                                    <li className="team-member team-member-sm"><img className="rounded-circle"
                                                                        src="/assets/img/users/user-7.png" alt="user" data-toggle="tooltip" title=""
                                                                        data-original-title="John Deo" /></li>
                                                                    <li className="team-member team-member-sm"><img className="rounded-circle"
                                                                        src="/assets/img/users/user-8.png" alt="user" data-toggle="tooltip" title=""
                                                                        data-original-title="Sarah Smith" /></li>
                                                                    <li className="avatar avatar-sm"><span className="badge badge-primary">+4</span></li>
                                                                </ul>
                                                            </td>
                                                            <td className="align-middle">
                                                                <div className="progress-text">70%</div>
                                                                <div className="progress" data-height="6" style={{ "height": "6px" }}>
                                                                    <div className="progress-bar" data-width="70%" style={{ "width": "70%" }}></div>
                                                                </div>
                                                            </td>
                                                            <td>2018-04-15</td>
                                                            <td>2019-07-19</td>
                                                            <td>
                                                                <div className="badge badge-success">Low</div>
                                                            </td>
                                                            <td><Link to="#" className="btn btn-outline-primary">Detail</Link></td>
                                                        </tr>
                                                        <tr>
                                                            <td className="p-0 text-center">
                                                                <div className="custom-checkbox custom-control">
                                                                    <input type="checkbox" data-checkboxes="mygroup" className="custom-control-input"
                                                                        id="checkbox-5" />
                                                                    <label htmlFor="checkbox-5" className="custom-control-label">&nbsp;</label>
                                                                </div>
                                                            </td>
                                                            <td>Logo Design</td>
                                                            <td className="text-truncate">
                                                                <ul className="list-unstyled order-list m-b-0 m-b-0">
                                                                    <li className="team-member team-member-sm"><img className="rounded-circle"
                                                                        src="/assets/img/users/user-9.png" alt="user" data-toggle="tooltip" title=""
                                                                        data-original-title="Wildan Ahdian" /></li>
                                                                    <li className="team-member team-member-sm"><img className="rounded-circle"
                                                                        src="/assets/img/users/user-10.png" alt="user" data-toggle="tooltip" title=""
                                                                        data-original-title="John Deo" /></li>
                                                                    <li className="team-member team-member-sm"><img className="rounded-circle"
                                                                        src="/assets/img/users/user-2.png" alt="user" data-toggle="tooltip" title=""
                                                                        data-original-title="Sarah Smith" /></li>
                                                                    <li className="avatar avatar-sm"><span className="badge badge-primary">+2</span></li>
                                                                </ul>
                                                            </td>
                                                            <td className="align-middle">
                                                                <div className="progress-text">45%</div>
                                                                <div className="progress" data-height="6" style={{ "height": "6px" }}>
                                                                    <div className="progress-bar bg-cyan" data-width="45%" style={{ "width": "45%" }}></div>
                                                                </div>
                                                            </td>
                                                            <td>2017-02-24</td>
                                                            <td>2018-09-06</td>
                                                            <td>
                                                                <div className="badge badge-danger">High</div>
                                                            </td>
                                                            <td><Link to="#" className="btn btn-outline-primary">Detail</Link></td>
                                                        </tr>
                                                        <tr>
                                                            <td className="p-0 text-center">
                                                                <div className="custom-checkbox custom-control">
                                                                    <input type="checkbox" data-checkboxes="mygroup" className="custom-control-input"
                                                                        id="checkbox-6" />
                                                                    <label htmlFor="checkbox-6" className="custom-control-label">&nbsp;</label>
                                                                </div>
                                                            </td>
                                                            <td>Ecommerce website</td>
                                                            <td className="text-truncate">
                                                                <ul className="list-unstyled order-list m-b-0 m-b-0">
                                                                    <li className="team-member team-member-sm"><img className="rounded-circle"
                                                                        src="/assets/img/users/user-8.png" alt="user" data-toggle="tooltip" title=""
                                                                        data-original-title="Wildan Ahdian" /></li>
                                                                    <li className="team-member team-member-sm"><img className="rounded-circle"
                                                                        src="/assets/img/users/user-9.png" alt="user" data-toggle="tooltip" title=""
                                                                        data-original-title="John Deo" /></li>
                                                                    <li className="team-member team-member-sm"><img className="rounded-circle"
                                                                        src="/assets/img/users/user-10.png" alt="user" data-toggle="tooltip" title=""
                                                                        data-original-title="Sarah Smith" /></li>
                                                                    <li className="avatar avatar-sm"><span className="badge badge-primary">+4</span></li>
                                                                </ul>
                                                            </td>
                                                            <td className="align-middle">
                                                                <div className="progress-text">30%</div>
                                                                <div className="progress" data-height="6" style={{ "height": "6px" }}>
                                                                    <div className="progress-bar bg-orange" data-width="30%" style={{ "width": "30%" }}></div>
                                                                </div>
                                                            </td>
                                                            <td>2018-01-20</td>
                                                            <td>2019-05-28</td>
                                                            <td>
                                                                <div className="badge badge-info">Average</div>
                                                            </td>
                                                            <td><Link to="#" className="btn btn-outline-primary">Detail</Link></td>
                                                        </tr>
                                                    </tbody>
                                                    <tfoot>
                                                        <tr>
                                                            <th className="text-center">
                                                                <div className="custom-checkbox custom-checkbox-table custom-control">
                                                                    <input type="checkbox" data-checkboxes="mygroup" data-checkbox-role="dad"
                                                                        className="custom-control-input" id="checkbox-all1" />
                                                                    <label htmlFor="checkbox-all1" className="custom-control-label">&nbsp;</label>
                                                                </div>
                                                            </th>
                                                            <th>Task Name</th>
                                                            <th>Members</th>
                                                            <th>Task Status</th>
                                                            <th>Assigh Date</th>
                                                            <th>Due Date</th>
                                                            <th>Priority</th>
                                                            <th>Action</th>
                                                        </tr>
                                                    </tfoot>

                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-lg-12 col-xl-6">
                                    {/* <!-- Support tickets --> */}
                                    <div className="card">
                                        <div className="card-header">
                                            <h4>Support Ticket</h4>
                                            <form className="card-header-form">
                                                <input type="text" name="search" className="form-control" placeholder="Search" />
                                            </form>
                                        </div>
                                        <div className="card-body">
                                            <div className="support-ticket media pb-1 mb-3">
                                                <img src="/assets/img/users/user-1.png" className="user-img mr-2" alt="" />
                                                <div className="media-body ml-3">
                                                    <div className="badge badge-pill badge-success mb-1 float-right">Feature</div>
                                                    <span className="font-weight-bold">#89754</span>
                                                    <Link to="/#">Please add advance table</Link>
                                                    <p className="my-1">Hi, can you please add new table for advan...</p>
                                                    <small className="text-muted">Created by <span className="font-weight-bold font-13">John
                                                        Deo</span>
                                                        &nbsp;&nbsp; - 1 day ago</small>
                                                </div>
                                            </div>
                                            <div className="support-ticket media pb-1 mb-3">
                                                <img src="/assets/img/users/user-2.png" className="user-img mr-2" alt="" />
                                                <div className="media-body ml-3">
                                                    <div className="badge badge-pill badge-warning mb-1 float-right">Bug</div>
                                                    <span className="font-weight-bold">#57854</span>
                                                    <Link to="/#">Select item not working</Link>
                                                    <p className="my-1">please check select item in advance form not work...</p>
                                                    <small className="text-muted">Created by <span className="font-weight-bold font-13">Sarah
                                                        Smith</span>
                                                        &nbsp;&nbsp; - 2 day ago</small>
                                                </div>
                                            </div>
                                            <div className="support-ticket media pb-1 mb-3">
                                                <img src="/assets/img/users/user-3.png" className="user-img mr-2" alt="" />
                                                <div className="media-body ml-3">
                                                    <div className="badge badge-pill badge-primary mb-1 float-right">Query</div>
                                                    <span className="font-weight-bold">#85784</span>
                                                    <Link to="/#">Are you provide template in Angular?</Link>
                                                    <p className="my-1">can you provide template in latest angular 8.</p>
                                                    <small className="text-muted">Created by <span className="font-weight-bold font-13">Ashton Cox</span>
                                                        &nbsp;&nbsp; -2 day ago</small>
                                                </div>
                                            </div>
                                            <div className="support-ticket media pb-1 mb-3">
                                                <img src="/assets/img/users/user-6.png" className="user-img mr-2" alt="" />
                                                <div className="media-body ml-3">
                                                    <div className="badge badge-pill badge-info mb-1 float-right">Enhancement</div>
                                                    <span className="font-weight-bold">#25874</span>
                                                    <Link to="/#">About template page load speed</Link>
                                                    <p className="my-1">Hi, John, can you work on increase page speed of template...</p>
                                                    <small className="text-muted">Created by <span className="font-weight-bold font-13">Hasan
                                                        Basri</span>
                                                        &nbsp;&nbsp; -3 day ago</small>
                                                </div>
                                            </div>
                                        </div>
                                        <Link to="/#" className="card-footer card-link text-center small ">View
                                            All</Link>
                                    </div>
                                    {/* <!-- Support tickets --> */}
                                </div>

                                <div className="col-md-6 col-lg-12 col-xl-6">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4>Projects Payments</h4>
                                        </div>
                                        <div className="card-body">
                                            <div className="table-responsive">
                                                <table className="table table-hover mb-0">
                                                    <thead>
                                                        <tr>
                                                            <th>#</th>
                                                            <th>Client Name</th>
                                                            <th>Date</th>
                                                            <th>Payment Method</th>
                                                            <th>Amount</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>1</td>
                                                            <td>John Doe </td>
                                                            <td>11-08-2018</td>
                                                            <td>NEFT</td>
                                                            <td>$258</td>
                                                        </tr>
                                                        <tr>
                                                            <td>2</td>
                                                            <td>Cara Stevens
                                                            </td>
                                                            <td>15-07-2018</td>
                                                            <td>PayPal</td>
                                                            <td>$125</td>
                                                        </tr>
                                                        <tr>
                                                            <td>3</td>
                                                            <td>
                                                                Airi Satou
                                                            </td>
                                                            <td>25-08-2018</td>
                                                            <td>RTGS</td>
                                                            <td>$287</td>
                                                        </tr>
                                                        <tr>
                                                            <td>4</td>
                                                            <td>
                                                                Angelica Ramos
                                                            </td>
                                                            <td>01-05-2018</td>
                                                            <td>CASH</td>
                                                            <td>$170</td>
                                                        </tr>
                                                        <tr>
                                                            <td>5</td>
                                                            <td>
                                                                Ashton Cox
                                                            </td>
                                                            <td>18-04-2018</td>
                                                            <td>NEFT</td>
                                                            <td>$970</td>
                                                        </tr>
                                                        <tr>
                                                            <td>6</td>
                                                            <td>
                                                                John Deo
                                                            </td>
                                                            <td>22-11-2018</td>
                                                            <td>PayPal</td>
                                                            <td>$854</td>
                                                        </tr>
                                                        <tr>
                                                            <td>7</td>
                                                            <td>
                                                                Hasan Basri
                                                            </td>
                                                            <td>07-09-2018</td>
                                                            <td>Cash</td>
                                                            <td>$128</td>
                                                        </tr>
                                                    </tbody>
                                                    <tfoot>
                                                        <tr>
                                                            <th>#</th>
                                                            <th>Client Name</th>
                                                            <th>Date</th>
                                                            <th>Payment Method</th>
                                                            <th>Amount</th>
                                                        </tr>
                                                    </tfoot>
                                                </table>
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

export default Dashboard