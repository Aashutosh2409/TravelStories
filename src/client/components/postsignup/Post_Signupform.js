import React, {Component} from 'react';
import './Post_Signup.css'

class PostSignupform extends Component {
    render() {
        function handleClick(e) {
            e.preventDefault();
            sessionStorage.setItem("firstName", document.getElementById('fName').value);
            sessionStorage.setItem("lastName", document.getElementById('lName').value);
            sessionStorage.setItem("city", document.getElementById("city").value);
            sessionStorage.setItem("state", document.getElementById("state").value);
            // console.log('gets printed only once after 3 seconds');
            setTimeout(function () {
                console.log('gets printed only once after 3 seconds');
                window.location = '../usertimeline';
                //logic
            },1000);
        }
        return (
            <div className="PostSignup">
                <div className="Form">
                    <form className="needs-validation" noValidate>
                        <div className="form-group row">
                            <label htmlFor="validationTooltip03" className="col-sm-2 col-form-label">First Name</label>
                            <div className="col-sm-7">
                                <input type="text" className="form-control" id="fName"
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
                                <input type="text" className="form-control" id="mName"
                                       placeholder="Middle Name" required/>
                                <div className="invalid-tooltip">
                                    Please provide a valid Middle-Name.
                                </div>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="validationTooltip03" className="col-sm-2 col-form-label">Last Name</label>
                            <div className="col-sm-7">
                                <input type="text" className="form-control" id="lName"
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
                                <input type="text" className="form-control" id="city" placeholder="City"
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
                                <input type="text" className="form-control" id="state" placeholder="State"
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
                                <input type="email" className="form-control" id="inputEmail3" placeholder={sessionStorage.getItem("email1")} disabled={true}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-7">
                                <input type="password" className="form-control" id="inputPassword3"
                                       placeholder={sessionStorage.getItem("password").replace(/./g,'*')} readOnly={true} />
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
                    <button className="btn btn-primary" id= "PostSubmit" type="submit" onClick={handleClick}>Submit form</button>
                </div>
            </div>

        );

    }
}

export default PostSignupform;