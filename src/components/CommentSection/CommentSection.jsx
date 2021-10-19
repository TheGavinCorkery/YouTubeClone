import React from 'react';
import { Card } from 'react-bootstrap';
import Comments from './Comments';
import CommentForm from './CommentForm';
import './Comment.css'
import Accordion from 'react-bootstrap/Accordion';

function CommentSection(props) {
    return ( 

        <div className = "commentSection">
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        <h6 className="text-white"> Comments </h6>
                    </Accordion.Header>
                    <Accordion.Body>
                            <CommentForm buttonText = "Comment"postComment = {props.postComment} videoId = {props.videoId}/>
                            <Card>
                                    <Comments replies = {props.replies} postReply = {props.postReply} videoId={props.videoId} videoComments={props.videoComments} likeComment={props.likeComment} />
                            </Card>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
     );
}

export default CommentSection;