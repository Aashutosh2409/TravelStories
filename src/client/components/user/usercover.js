import React, {Component} from 'react';
import './usercover.css';

class Usercover extends Component {
    render() {

        return (

            <div className="container ">
                <div className="col-md-10">
                    <div className="profile clearfix">
                        <div className="image">
                            <img src="https://lorempixel.com/700/300/nature/3/" className="img-cover" alt=""/>
                        </div>
                        <div className="user clearfix">
                            <div className="avatar">
                                <img src="https://bootdey.com/img/Content/user-453533-fdadfd.png"
                                     className="img-thumbnail img-profile" alt=""/>
                            </div>
                            <h2>Akhil Pattipati</h2>
                            <div className="actions">
                                <div className="btn-group">
                                    <button className="btn btn-default btn-sm tip btn-responsive" title
                                            data-original-title="Add to friends"><span
                                        className="glyphicon glyphicon-plus glyphicon glyphicon-white"/> Friends
                                    </button>
                                    <button className="btn btn-default btn-sm tip btn-responsive" title
                                            data-original-title="Send message"><span
                                        className="glyphicon glyphicon-envelope glyphicon glyphicon-white"/> Message
                                    </button>
                                    <button className="btn btn-default btn-sm tip btn-responsive" title
                                            data-original-title="Recommend"><span
                                        className="glyphicon glyphicon-share-alt glyphicon glyphicon-white"/> Recommend
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="info">
                            <p><span className="glyphicon glyphicon-globe"/> <span className="title"></span> NewYork, NY</p>

                        </div>
                    </div>
                </div>


            </div>


        );


    }


}

export default Usercover;