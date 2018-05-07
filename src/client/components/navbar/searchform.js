import React,{Component} from 'react';

class Searchform extends Component{
    render(){
        function handleClick(e) {
            // (".dropdown-toggle").dropdown();
        e.preventDefault();
        window.location="../"
    }

        return(
            <div className="collapse navbar-collapse my-lg-0 " id="navbarSupportedContent">
                <div className="input-group my-lg-0">
                {/*<form className="form-inline my-sm-7 my-lg-0 ">*/}

                {/*<form className="form-group row my-sm-0">*/}
                    {/*<div className="colABC">*/}
                        <input className="form-control col-md-4 col-offset-1 my-lg-0 mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    {/*<input type="Search" className="form-control" id="inputEmail3" placeholder="Seach"></input>*/}
                    {/*</div>*/}

                    <button className="btn btn-success mr-lg-2 my-sm-0" type="submit"><i className="fa fa-search"></i></button>
                </div>
            <ul class = "ml-auto my-lg-0" >
                    <button className="btn my-sm-0 mr-sm-2 " type="LogOut" onClick={handleClick}>Log-Out</button>
             </ul>

                        {/*<li className="nav-item dropdown ">*/}
                            {/*<img src="http://webpage.pace.edu/as03681n/Shiv_JI.jpg" width="30" height="30"*/}
                                 {/*className="d-inline-block align-top" alt="im"></img>*/}

                            {/*/!*<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"*!/*/}
                            {/*<a className="nav-link dropdown-toggle" id="navbarDropdown" role="button"*/}
                               {/*data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">*/}
                                {/*User-Name*/}
                            {/*</a>*/}
                            {/*<div className="dropdown-menu" aria-labelledby="navbarDropdown">*/}
                                {/*<a className="dropdown-item" href="https://www.facebook.com">Action</a>*/}
                                {/*<a className="dropdown-item" href="#">Option</a>*/}
                                {/*<div className="dropdown-divider"></div>*/}
                                {/*<a className="dropdown-item" href="#">Log Out</a>*/}
                            {/*</div>*/}
                        {/*</li>*/}


                {/*// </div>*/}
                 {/*</form>*/}
             </div>

        );



    }

}
export default Searchform;