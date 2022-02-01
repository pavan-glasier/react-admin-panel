import React from 'react';
import Header from './Header'
import Footer from './Footer';
class Localdemo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fullname: '',
            email: '',
            upload: '',
            authUser: JSON.parse(localStorage.getItem('formData'))
        };
        this.handleChange = this.handleChange.bind(this);
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange = (e) => {
        // let reader = new FileReader();
        // let file = e.target.files[0];

        // reader.onloadend = () => {
        //     setFile(file);
        //     setImg(reader.result)
        //   }

        //   reader.readAsDataURL(file)

        //   console.warn(file);

        console.log(e.target.value);

    }
    // handleChange = (e) =>{
    // console.log(e.target);
    // }
    onSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.value);
    }

    render() {

        return (
            <>

                <div className="main-wrapper main-wrapper-1" >
                    <Header />
                    <div className="main-content">
                        <section className="section">
                            <div className="section-body">
                                <div className="row">
                                    <div className="col-12 col-md-5 col-lg-5">
                                        <div className="card">
                                            <form className="">
                                                <div className="card-header">
                                                    <h4>local-demo</h4>
                                                </div>
                                                <div className="card-body">
                                                    <div className="form-group">
                                                        <label>Your Name</label>
                                                        <input
                                                            id="fullname"
                                                            className="form-control"
                                                            type="text"
                                                            name="fullname"
                                                            onChange={this.handleChange}
                                                        />
                                                        <div className="invalid-feedback">

                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Email</label>
                                                        <input
                                                            id="email"
                                                            className="form-control"
                                                            type="email"
                                                            name="email"
                                                            onChange={this.handleChange}
                                                        />
                                                        <div className="invalid-feedback">
                                                        </div>
                                                    </div>

                                                    <div className="form-group">
                                                        <label>File</label>
                                                        <input
                                                            type="file"
                                                            className="form-control"
                                                            name="upload"
                                                            onChange={this.handleChange}
                                                        />
                                                        <div className="invalid-feedback">
                                                        </div>
                                                    </div>

                                                    <div className="form-group mb-0">
                                                        <img src='' id='privImg' width={100} height={100} />
                                                    </div>
                                                </div>
                                                <div className="card-footer text-right">
                                                    <button className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
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
                                                                this.state.authUser ?
                                                                    this.state.authUser.map((user, i) =>
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
        );
    }
}
export default Localdemo