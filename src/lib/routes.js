import React, {Component} from 'react';


import {BrowserRouter, Route} from 'react-router-dom';
import Landinpage from "../client/layout/landingpage";
import Socialgrid from "../client/layout/Socialgrid";
import Postsignup from "../client/layout/postsignup";
import Userlayout from "../client/layout/Userlayout";

class Routes extends Component {

    render() {

        return (

            <BrowserRouter>

                <div>

                    <Route path="/" exact component={Landinpage}/>
                    <Route path="/social" exact component={Socialgrid}/>
                    <Route path="/postsignup" exact component={Postsignup}/>
                    <Route path="/usertimeline" exact component={Userlayout}/>

                </div>


            </BrowserRouter>


        );


    }


}

export default Routes;