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
                    <p className="text-left text-light account" align="left">
                    <span className="material-icons p-2 account">account_circle</span>
                        {props.videoInfo.channelTitle}
                    </p>
                    <h3>{props.videoInfo.title}</h3>
                    <p>Views: {props.videoInfo.views}</p>

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
            likeComment={props.likeComment} replies = {props.replies} getReplies = {props.getReplies}/>
            </div>
        </div>
     );
}
 
export default VideoPlayer;