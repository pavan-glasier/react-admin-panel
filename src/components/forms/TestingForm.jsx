import React from 'react'
import Header from '../Header'
import Footer from '../Footer';
class TestingForm extends React.Component {
    constructor(props) {
        super();
        this.state = {
            skills: [],
            wpMenu: []
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.getMenu = this.getMenu.bind(this);
    }
    handleInputChange(event) {
        const isChecked = event.target.checked;
        if (isChecked) {
            this.setState({ skills: [...this.state.skills, event.target.value] });
            console.log(this.state.skills);
        } else {
            const index = this.state.skills.indexOf(event.target.value);
            console.log(index)
            this.state.skills.splice(index, 1);
            this.setState({ skills: this.state.skills });
            console.log(this.state.skills);
        }
    }
    submit() {
        console.warn(this.state)
    }
    getMenu() {
        fetch(`http://localhost/wordpress/wp-json/custom/menu/`).then((result) => {
            result.json()
                .then((resp) => {
                    console.log("wordpress", resp);
                    this.setState({
                        wpMenu: resp
                    });
                })
        })
    }
    componentDidMount() {
        this.getMenu();
        document.title = this.props.title
    }


    render() {
        return (
            <div className="main-wrapper main-wrapper-1" >
                <Header activeClasss={this.props.name ? this.props.name : ''}/>
                <div className="main-content">
                    <section className="section">
                        <div className="section-body">
                            <div className="row">
                                <div className="col-md-6 offset-md-3">
                                    <h3>To Get Multiple Checked Checkbox Values On Submit in React JS - Tutsmake.com</h3><br />
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label>Hobbies :</label><br />
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="checkbox" name="hobbies" id="inlineCheckboxh1" value="Reading" onChange={this.handleInputChange} />
                                                <label className="form-check-label" htmlFor="inlineCheckboxh1">Reading</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="checkbox" name="hobbies" id="inlineCheckboxh2" value="Developing" onChange={this.handleInputChange} />
                                                <label className="form-check-label" htmlFor="inlineCheckboxh2">Developing</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="checkbox" name="hobbies" id="inlineCheckboxh3" value="Desiging" onChange={this.handleInputChange} />
                                                <label className="form-check-label" htmlFor="inlineCheckboxh3">Desiging</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col-md-12 text-center">
                                            <button type="submit" className="btn btn-primary" onClick={() => this.submit()}>Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-10'>
                                    <table className='table'>
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Name</th>
                                                <th>Url</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                this.state.wpMenu ? this.state.wpMenu.map((item, i) =>
                                                    <tr key={i}>
                                                        <td> {item.ID}</td>
                                                        <td> {item.title}</td>
                                                        <td> {item.url}</td>
                                                    </tr>
                                                ) : null
                                            }
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <th>ID</th>
                                                <th>Name</th>
                                                <th>Url</th>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <Footer />
            </div>
        )
    }
}
export default TestingForm;