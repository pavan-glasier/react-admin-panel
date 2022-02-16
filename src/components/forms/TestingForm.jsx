import React from 'react'
import Header from '../Header'
import Footer from '../Footer';
class TestingForm extends React.Component {
    constructor() {
        super();
        this.state = {
            skills: []
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event) {
        const isChecked = event.target.checked;
        if(isChecked){
            this.setState({ skills: [...this.state.skills, event.target.value] });
            console.log(this.state.skills);
        }else{
            const index =  this.state.skills.indexOf(event.target.value);
            console.log(index)
            this.state.skills.splice(index, 1);
            this.setState({ skills: this.state.skills });
            console.log(this.state.skills);
        }
    }
    submit() {
        console.warn(this.state)
    }
    render() {
        return (
            <div className="main-wrapper main-wrapper-1" >
                <Header />
                <div className="main-content">
                    <section className="section">
                        <div className="section-body">
                            <div className="row">
                                <div className="col-md-6 offset-md-3">
                                    <br /><br />
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
                        </div>
                    </section>
                </div>
                <Footer />
            </div>
        )
    }
}
export default TestingForm;