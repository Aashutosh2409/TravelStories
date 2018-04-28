import React, {Component} from 'react';
import './layout.css'
import Signupform from "../components/signup/signupform";
import Header from "../components/header/header";
import Main from "../components/main/main";
import Glyphicon from 'react-bootstrap/lib/Glyphicon'
class Landinpage extends Component {
    render() {
        return (
            <div className="landingpage" id="landing_bg" >
                <Header/>
                <img src="http://webpage.pace.edu/as03681n/d1.jpeg" id="bg" alt=""></img>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <Main/>
                        </div>
                        <div className="col-md-4">
                            <Signupform/>
                        </div>
                    </div>
                </div>
                <br/><br/><br/><br/><br/><br/>
            </div>
        );
    }
}

export default Landinpage;