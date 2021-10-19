import React from 'react'
import CommentSection from '../CommentSection/CommentSection';
import './VideoPlayer.css'
import Accordion from 'react-bootstrap/Accordion';
import Badge from 'react-bootstrap/Badge'


function numFormatter(num) {
    if(num > 999 && num < 1000000){
        return (num/1000).toFixed(1) + 'K'; // convert to K for number from > 1000 < 1 million 
    }else if(num > 1000000){
        return (num/1000000).toFixed(1) + 'M'; // convert to M for number from > 1 million 
    }else if(num < 900){
        return num; // if value < 1000, nothing to do
    }
}

const VideoPlayer = (props) => {


    return ( 
        <div className="p-4">
            <div align = "center">
                <iframe title = 'video' id="ytplayer" type="text/html" width="1080" height="610"
                src={`https://www.youtube.com/embed/${props.videoId}`}
                frameborder="0" allowFullScreen/>
                <div className = "videoMeta" align = "center">
                    <div className="d-flex justify-content-between">
                        <p className="text-left text-light account " align="left">
                        <span className="material-icons p-2 account">account_circle</span>
                            {props.videoInfo.channelTitle}
                        </p>
                        <p>
                            <span className="material-icons text-success">thumb_up</span> {numFormatter(props.videoInfo.likes)}  
                            <span className="material-icons text-danger ms-3">thumb_down</span> {numFormatter(props.videoInfo.dislikes)}
                        </p>
                        <p className = "account" align = "right">Views: {numFormatter(props.videoInfo.views)}</p>
                        
                    </div>
                    
                    
                    
                    <h3>{props.videoInfo.title}</h3>

                    <hr />
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>
                                <h6 className="text-white"> Description </h6>
                            </Accordion.Header>
                            <Accordion.Body>
                                 <p>{props.videoInfo.description}</p>        
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <hr />
                </div>
            <CommentSection postReply = {props.postReply} videoId={props.videoId} videoComments={props.videoComments} postComment = {props.postComment} 
            likeComment={props.likeComment} replies = {props.replies}/>
            </div>
        </div>
     );
}
 
export default VideoPlayer;