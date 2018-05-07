import React, {Component} from 'react';
import './usercover.css';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';

class Usercover extends Component {
    render() {
        return (
            <div className="container ">
                <div className="page-header text-center">
                    <div className="profile clearfix ">
                        <div className="image ">
                            <img src="https://screenrant.com/wp-content/uploads/2018/01/Avengers-3-Infinity-War-21-wallpaper.jpg" className="img-cover" alt=""/>
                        </div>
                        <div className="user clearfix">
                            <div className="avatar">
                                <img src="https://bootdey.com/img/Content/user-453533-fdadfd.png"
                                     className="img-thumbnail img-profile" alt=""/>
                            </div>
                            <h2>{sessionStorage.getItem("firstName")+" "+sessionStorage.getItem("lastName")}</h2>
                            <div className="actions">
                                <div className="btn-group">
                                    <span>
                                    <Glyphicon glyph="search"/></span>
                                    <button className="btn-outline mr-lg-2 btn-default btn-sm tip btn-responsive" title
                                            data-original-title="Add to friends"><span
                                        className="glyphicon glyphicon-plus glyphicon glyphicon-white"/> Friends
                                    </button>
                                    <button className="btn-outline mr-lg-2 btn-default btn-sm tip btn-responsive" title
                                            data-original-title="Send message"><span
                                        className="glyph glyph-envelope glyph glyph-white"/> Message
                                    </button>
                                    <button className="btn-outline btn-default btn-sm tip btn-responsive" title
                                            data-original-title="Recommend"><span
                                        className="glyphi glyph-share-alt glyphicon glyph-white"/> Recommend

                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="info">
                            <p><span className="glyphicon glyphicon-globe"/> <span className="title"></span> {sessionStorage.getItem("city")+","+sessionStorage.getItem("state")}
                            </p>

                        </div>
                    </div>
                </div>


            </div>


        );
    }


}

export default Usercover;