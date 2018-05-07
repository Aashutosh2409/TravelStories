import React,{Component} from 'react';
import Searchform from "./searchform";


class Navbanner extends Component{

    render()
    {
        function handleClick(e) {
        e.preventDefault();
        window.location="../social"
    }

        return(
        <div>

            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <a onClick={handleClick} className="navbar-brand text-white" href="">
                    <img src="http://webpage.pace.edu/as03681n/logo.png" width={30} height={30}
                         className="d-inline-block align-top" alt={""}/>
                    &nbsp;&nbsp;TravelStories
                </a>

                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>


                    {/*< div class="navbar-brand ">*/}
                       <Searchform/>
                    {/*</div>*/}

                {/*</div>*/}
            </nav>



        </div>

    );}

}
export default Navbanner;
