import React, {useState} from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import CommentForm from './CommentForm';
import Replies from './Replies';


function Comments(props) {

    const[showReplies, setShowReplies] = useState(false)

    let handleReplies = (commentId) => {
        props.getReplies(commentId);
        setShowReplies(true)
    }

    return ( 

        <ListGroup>
            {props.videoComments.map((comment) => {
                return   <ListGroupItem>
                            <div className="d-flex flex-row-reverse">
                            <CommentForm  videoId = {props.videoId} postComment = {props.postReply} commentId={comment.id}/>
                                <p>
                                    <button className="btn" onClick={() => props.likeComment(`thumbs_up`, comment.id)}>
                                        <span className="material-icons">thumb_up</span>
                                    </button>
                                    {comment.likes}
                                </p>
                                <p>
                                    <button className="btn" onClick={() => props.likeComment(`thumbs_down`, comment.id)}>
                                        <span className="material-icons">thumb_down</span>
                                    </button>
                                    {comment.dislikes}
                                </p>
                            
                            {/* <button className = "btn btn-primary" onClick = {(event) => handleReplies(comment.id)}>Replies</button>              */}
                            
                            </div>
                            <Replies replies = {props.replies} commentId = {comment.id}/>
                            <p className="text-justify">{comment.message}</p>
                        </ListGroupItem>
            })}
            
        </ListGroup>
     );
}

export default Comments;