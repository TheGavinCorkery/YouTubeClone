import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import CommentForm from './CommentForm';


function Comments(props) {
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
                            
                            </div>
                            <p className="text-justify">{comment.message}</p>
                        </ListGroupItem>
            })}
        </ListGroup>
     );
}

export default Comments;