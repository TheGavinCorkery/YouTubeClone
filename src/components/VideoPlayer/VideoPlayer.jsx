import React from 'react'
import CommentSection from '../CommentSection/CommentSection';
import './VideoPlayer.css'
import Accordion from 'react-bootstrap/Accordion';


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
                        <p><span className="material-icons text-success">thumb_up</span>{props.videoInfo.likes}  <span className="material-icons text-danger">thumb_down</span>{props.videoInfo.dislikes}</p>
                        <p className = "account" align = "right">Views: {props.videoInfo.views}</p>
                        
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