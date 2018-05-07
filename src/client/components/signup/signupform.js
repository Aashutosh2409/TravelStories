import React, {Component} from 'react';
//import {Link} from 'react-dom';

class Signupform extends Component {

    render() {
        function handleClick(e) {
        //     e.preventDefault();
        //     console.log('the link is clicke');
        //     window.location = '../postsignup';
            e.preventDefault();
            // console.log("exampleInputEmail1");
            // setInterval(function(){
                console.log(document.getElementById('exampleInputEmail1').value);
                console.log(document.getElementById('dat').value);
                console.log(document.getElementById('exampleInputPassword1').value);
                console.log(document.getElementById('gender').value);
                sessionStorage.setItem("email1",document.getElementById('exampleInputEmail1').value);
                sessionStorage.setItem("password",document.getElementById('exampleInputPassword1').value);
            // },1000);
            setTimeout(function(){
                console.log('gets printed only once after 3 seconds');
                window.location = '../postsignup';
                //logic
            },3000);
            }
        return (
            <div>
                <form className="bg-light signupform">
                    <fieldset>
                        <legend>Sign Up</legend>
                        <div className="form-group">
                            <input type="email" className="form-control" id="exampleInputEmail1"
                                   aria-describedby="emailHelp" placeholder="Email address"/>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with
                                anyone else.
                            </small>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" id="exampleInputPassword1"
                                   placeholder="Password"/>
                        </div>
                        <div className="form-group">
                            <input type="date" placeholder="Date Of Birth" id="dat" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <select type="gender" placeholder="Gender" className="form-control" id="gender">
                                <option value="other">--not to specify--</option>
                                <option value="female">Female</option>
                                <option value="male">Male</option>
                            </select>
                        </div>

                        <input type="submit" className="btn btn-primary" value="Sign Up" onClick={handleClick}/>

                    </fieldset>
                </form>
            </div>
        );
    }
}

export default Signupform;