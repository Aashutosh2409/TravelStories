import React, {Component} from 'react';
import Navbanner from "../components/navbar/navBanner";
import Usercover from "../components/user/usercover";
import Usertimeline from "../components/user/usertimeline";


class Userlayout extends Component{

    render(){

        return(
            <div>
                <nav className="fixed-top">
            <Navbanner/>

                </nav>
                <body>

                    <br/>
                <div className= "container ">
                    <br/><br/>

                   &nbsp; <Usercover/>

                    <Usertimeline/>





                </div>





                </body>







            </div>
        );




    }





}
export default Userlayout;