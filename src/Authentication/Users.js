import React, { Component } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Link, useNavigate, Navigate, useParams } from 'react-router-dom';
class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authUser: JSON.parse(sessionStorage.getItem('loginData')),
            isLogin : JSON.parse(sessionStorage.getItem('isLogin')),
            searchData: '',
            dataMsg:'',
            status:'',
            isActive: this.props.active
        }
        console.log("User props",props)

    }
    
    componentDidMount() {
        this.getInfo();
        document.title = this.props.title
    }

    searchHandler = (e) => {
        let search = e.target.value
        // let item = { search }
        fetch(`${process.env.REACT_APP_API_PATH}api-search.php?search=${search}`, {
        }).then((result) => {
            result.json()
                .then((resp) => {
                    // console.log(resp);
                    this.setState({
                        authUser: resp,
                        dataMsg: resp.message,
                        status: resp.status
                    })
                    // setDataMsg(resp.message)
                    // setMsgStatus(resp.status)
                })
        })
    }

    getInfo = () => {
        fetch(`${process.env.REACT_APP_API_PATH}fetch-api.php`)
            .then((result) => {
                result.json()
                    .then((resp) => {
                        // console.log("resp", resp);
                        // sessionStorage.setItem('loginData', JSON.stringify(resp));
                        // setauthUser(JSON.parse(sessionStorage.getItem('loginData')));
                        // setIsLogin(sessionStorage.setItem('isLogin', true));
                        // if (resp.status !== false) {
                        //     // navigate("/dashboard");
                        // }
                        this.setState({
                            authUser: resp
                        })
                        // console.log("auth User", this.state.authUser)
                    })
            })
    }
    toTitleCase = (phrase) => {
        return phrase
            .toLowerCase()
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };
    render() {
        return (
            <>{
                !this.state.isLogin ? <Navigate replace to="/login" /> :
                <div className="main-wrapper main-wrapper-1" >
                    <Header authUser={this.state.authUser ? this.state.authUser : ''} activeClasss={this.props.name ? this.props.name : ''} />
                    <div className="main-content">
                        <section className="section">
                            <div className="row">
                                <div className="col-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4>All Users</h4>
                                            <div className="card-header-form">
                                                <form>
                                                    <div className="input-group">
                                                        <input type="text" className="form-control" placeholder="Search" onChange={this.searchHandler} />
                                                        <div className="input-group-btn">
                                                            <button className="btn btn-primary"><i className="fas fa-search"></i></button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="card-body p-0">
                                            <div className="table-responsive">
                                                <table className="table table-striped tbl-users">
                                                    <thead>
                                                        <tr>
                                                            <th className="text-center">
                                                                <div className="custom-checkbox custom-checkbox-table custom-control">
                                                                    <input type="checkbox" data-checkboxes="mygroup" data-checkbox-role="dad"
                                                                        className="custom-control-input" id="checkbox-all" />
                                                                    <label htmlFor="checkbox-all" className="custom-control-label">&nbsp;</label>
                                                                </div>
                                                            </th>
                                                            <th>Profile</th>
                                                            <th>User Name</th>
                                                            <th>Email</th>
                                                            <th>Phone</th>
                                                            <th>Date Of Birth</th>
                                                            <th>Created Date</th>
                                                            <th>Status</th>
                                                            <th>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            this.state.authUser.length > 0 ?
                                                                this.state.authUser.map((value, i) =>
                                                                    <tr key={i}>
                                                                        <td className="p-0 text-center">
                                                                            <div className="custom-checkbox custom-control">
                                                                                <input type="checkbox" data-checkboxes="mygroup" className="custom-control-input"
                                                                                    id={`checkbox-${value.id}`} />
                                                                                <label htmlFor={`checkbox-${value.id}`} className="custom-control-label">&nbsp;</label>
                                                                            </div>
                                                                        </td>
                                                                        <td className="text-truncate">
                                                                            <ul className="list-unstyled order-list m-b-0 m-b-0">
                                                                                <li className="team-member team-member-sm">
                                                                                    <img className="rounded-circle"
                                                                                        src={`${process.env.REACT_APP_API_PATH}${value.pro_img}`}
                                                                                        alt="user"
                                                                                        data-toggle="tooltip"
                                                                                        title={this.toTitleCase(value.name)}
                                                                                        data-original-title={this.toTitleCase(value.name)} />
                                                                                </li>
                                                                                
                                                                            </ul>
                                                                        </td>
                                                                        <td>{this.toTitleCase(value.name)}</td>
                                                                        <td> <a href={`mailto:${value.email}`} className="link">{value.email}</a></td>
                                                                        <td>{value.phone}</td>
                                                                        <td>{value.dob}</td>
                                                                        <td>{value.created_date}</td>
                                                                        <td>
                                                                        {value.status === '1' ?
                                                                            <div className="badge badge-success">Active</div> :
                                                                            <div className="badge badge-warning">Inactive</div>}
                                                                            
                                                                        </td>
                                                                        <td><Link to="#" className="btn btn-outline-primary">Detail</Link></td>
                                                                    </tr>
                                                                ) : 
                                                                <tr className="text-center">
                                                                    <td colspan='8'><h6>{this.state.dataMsg}</h6></td>
                                                                </tr>

                                                        }
                                                    </tbody>
                                                    <tfoot>
                                                        <tr>
                                                            <td className="text-center">
                                                                <div className="custom-checkbox custom-checkbox-table custom-control">
                                                                    <input type="checkbox" data-checkboxes="mygroup" data-checkbox-role="dad"
                                                                        className="custom-control-input" id="checkbox-all1" />
                                                                    <label htmlFor="checkbox-all1" className="custom-control-label">&nbsp;</label>
                                                                </div>
                                                            </td>
                                                            <td>Profile</td>
                                                            <td>User Name</td>
                                                            <td>Email</td>
                                                            <td>Phone</td>
                                                            <td>Date Of Birth</td>
                                                            <td>Created Date</td>
                                                            <td>Status</td>
                                                            <td>Action</td>
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
        );
    }
}

export default Users;
