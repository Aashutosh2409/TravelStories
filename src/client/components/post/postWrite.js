import React, {Component} from 'react';
import './postWrite.css'
class Postwrite extends Component {

    render() {
             return(
                 <div  className="container">
                     <div className="panel">
                         <div className="panel-body">
                             <textarea className="form-control" rows={2} placeholder="What are you thinking?" defaultValue={""} />
                             <div className="mar-top clearfix">
                                 <button className="btn btn-sm btn-primary pull-right" type="submit"><i className="fa fa-pencil fa-fw" /> Share</button>
                                 <a className="btn btn-trans btn-icon fa fa-video-camera add-tooltip"  data-original-title="Add Video" data-toggle="tooltip" >{}</a>
                                 <a className="btn btn-trans btn-icon fa fa-camera add-tooltip" href="" data-original-title="Add Photo" data-toggle="tooltip" >{}</a>
                                 <a className="btn btn-trans btn-icon fa fa-file add-tooltip" href="" data-original-title="Add File" data-toggle="tooltip" >{}</a>
                             </div>
                         </div>
                     </div>

                 </div>
             );

    }


}

export default Postwrite;