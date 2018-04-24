import React, {Component} from 'react';
import Navbanner from "../components/navbar/navBanner";
import Postwrite from "../components/post/postWrite";
import Post from "../components/post/post";

class Socialgrid extends Component {

    render() {
        return (
            <div>

                <nav className="fixed-top">
                    <Navbanner/>

                </nav>
                <body>


                <div>
                    <br/>
                    <br/>
                    <br/>
                    <Postwrite/>
                    <br/>
                    <div className="container">
                        <Post/>
                    </div>


                </div>


                </body>


            </div>


        );

    }


}

export default Socialgrid;