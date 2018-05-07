import React,{Component} from 'react';
import './layout.css'
import PostSignupform from "../components/postsignup/Post_Signupform";
// import Postsignupbutton from "../components/postsignup/Submitbutton";
import Navbanner from "../components/navbar/navBanner";
class Postsignup extends Component{
    render(){

        return(
            <div class="postSignUP">

            <div>
                <header>
                    <Navbanner/>
                </header>
              <main>
                  <PostSignupform/>
                  {/*<Postsignupbutton />*/}
              </main>

            </div>


        </div>);




    }


}
export default Postsignup;