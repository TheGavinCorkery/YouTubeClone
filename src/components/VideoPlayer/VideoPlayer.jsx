import React from 'react'
import CommentSection from '../CommentSection/CommentSection';
import './VideoPlayer.css'


const VideoPlayer = (props) => {



    return ( 
        <div>
            <div align = "center">
                <iframe title = 'video' id="ytplayer" type="text/html" width="1080" height="610"
                src={`https://www.youtube.com/embed/${props.videoId}`}
                frameborder="0" allowFullScreen/>
                <div className = "videoMeta" align = "center">
                    <h3>{props.videoInfo.title}</h3>
                    <hr />
                    <p>{props.videoInfo.description}</p>
                <hr />
            </div>
            <CommentSection postReply = {props.postReply} videoId={props.videoId} videoComments={props.videoComments} postComment = {props.postComment} 
            likeComment={props.likeComment} replies = {props.replies} getReplies = {props.getReplies}/>
            </div>
        </div>
        
     );
}
 
export default VideoPlayer;