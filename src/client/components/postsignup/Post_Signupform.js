import React, {Component} from 'react';
import './Post_Signup.css'

class PostSignupform extends Component {
    render() {
        return (

            <div className="PostSignup">
                <div className="Form">
                    <form className="needs-validation" noValidate>
                        <div className="form-group row">
                            <label htmlFor="validationTooltip03" className="col-sm-2 col-form-label">First Name</label>
                            <div className="col-sm-7">
                                <input type="text" className="form-control" id="validationTooltip03"
                                       placeholder="First Name (Required)" required/>
                                <div className="invalid-tooltip">
                                    Please provide a valid First-Name.
                                </div>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="validationTooltip03"
                                   className="col-sm-2 custom-control-label col-form-label">Middle
                                Name</label>
                            <div className="col-sm-7">
                                <input type="text" className="form-control" id="validationTooltip03"
                                       placeholder="Middle Name" required/>
                                <div className="invalid-tooltip">
                                    Please provide a valid Middle-Name.
                                </div>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="validationTooltip03" className="col-sm-2 col-form-label">Last Name</label>
                            <div className="col-sm-7">
                                <input type="text" className="form-control" id="validationTooltip03"
                                       placeholder="Last Name (Required)" required/>
                                <div className="invalid-tooltip">
                                    Please provide a valid Last-Name.
                                </div>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="validationTooltip03"
                                   className="col-sm-2 custom-control-label col-form-label">City</label>
                            <div className="col-sm-7">
                                <input type="text" className="form-control" id="validationTooltip03" placeholder="City"
                                       required/>
                                <div className="invalid-tooltip">
                                    Please provide a valid city.
                                </div>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="validationTooltip04"
                                   className="col-sm-2 custom-control-label col-form-label">State</label>
                            <div className="col-sm-7">
                                <input type="text" className="form-control" id="validationTooltip04" placeholder="State"
                                       required/>
                                <div className="invalid-tooltip">
                                    Please provide a valid state.
                                </div>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="validationTooltip05"
                                   className="col-sm-2 custom-control-label col-form-label">Zip</label>
                            <div className="col-sm-7">
                                <input type="number" className="form-control" id="validationTooltip05" placeholder="Zip"
                                       required/>
                                <div className="invalid-tooltip">
                                    Please provide a valid zip.
                                </div>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="validationTooltip05"
                                   className="col-sm-2 custom-control-label col-form-label">Mobile
                                Number</label>
                            <div className="col-sm-7">
                                <input type="number" className="form-control" id="validationTooltip05"
                                       placeholder="Mobile Number" required/>
                                <div className="invalid-tooltip">
                                    Please provide a valid zip.
                                </div>
                            </div>
                        </div>
                    </form>
                    <form>
                        <div className="form-group row">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-7">
                                <input type="email" className="form-control" id="inputEmail3" placeholder="Email"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-7">
                                <input type="password" className="form-control" id="inputPassword3"
                                       placeholder="Password"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="exampleFormControlTextarea1"
                                   className="col-sm-2 custom-control-label col-form-label">About Me</label>
                            <div className="col-sm-7">
                                <textarea className="form-control" id="validationTooltip06"
                                          placeholder="Description (Recommended)"
                                          requiredid="exampleFormControlTextarea1" rows={3} defaultValue={""}/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        );

    }
}

export default PostSignupform;