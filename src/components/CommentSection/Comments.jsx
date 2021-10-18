import React, {useState} from 'react';
import { Card, CardBody, ListGroup, ListGroupItem } from 'react-bootstrap';
import CommentForm from './CommentForm';
import Replies from './Replies';
import './Comment.css'


function Comments(props) {

    const[showReplies, setShowReplies] = useState(false)

    let handleReplies = (commentId) => {
        props.getReplies(commentId);
        setShowReplies(true)
    }

    return ( 
        <div className = "row">
            <div className = "col-md-9">
        <ListGroup>
            {props.videoComments.map((comment) => {
                return   <ListGroupItem className="bg-primary text-white">
                            <div className="d-flex flex-row justify-content-between">
                            <div className = "d-flex flex-row justify-content-between">
                                <p>
                                    <button className="btn" onClick={() => props.likeComment(`thumbs_up`, comment.id)}>
                                        <span className="material-icons text-success">thumb_up</span>
                                    </button>
                                    {comment.likes}
                                </p>
                                
                                <p>
                                    <button className="btn" onClick={() => props.likeComment(`thumbs_down`, comment.id)}>
                                        <span className="material-icons text-danger">thumb_down</span>
                                    </button>
                                    {comment.dislikes}
                                </p>
                            </div>
                                <p>{comment.message}</p>
                                <button className = "btn btn-sm btn-info" onClick = {(event) => handleReplies(comment.id)}>Replies</button>
                            </div>
                            
                            <br />
                            <CommentForm  videoId = {props.videoId} postComment = {props.postReply} commentId={comment.id}/>
                            <hr />
                            
                        </ListGroupItem>
            })}
            
        </ListGroup>
        </div>
        <div className = "col-md-3">
            <h3>Replies</h3>
                <Replies replies = {props.replies}/>
            
        </div>
        </div>
     );
}

export default Comments;