import React, {useState} from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import CommentForm from './CommentForm';
import Replies from './Replies';
import './Comment.css'
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';


function Comments(props) {

    const[showReplies, setShowReplies] = useState(false)
    
    
    let handleReplies = (commentId) => {
        setShowReplies(true)
    }
    


    return ( 
        <div className = "row">
            <div className = "col-md-12">
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
                            </div>
                                <div>
                                    <Accordion>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>
                                                <p className="text-white"> Replies </p>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <CommentForm  videoId = {props.videoId} postComment = {props.postReply} commentId={comment.id}/>
                                                <Card>
                                                    <ListGroup>
                                                        {props.replies.filter(reply => reply.comment === comment.id)
                                                                .map((reply) => (
                                                                    <ListGroupItem>
                                                                        <p>{reply.message}</p>
                                                                    </ListGroupItem>
                                                                ))
                                                            }
                                                    </ListGroup>
                                                </Card>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>
                            
                            <br />
                            <hr />
                            
                        </ListGroupItem>
            })}
            
        </ListGroup>
        </div>
      
        </div>
     );
}

export default Comments;