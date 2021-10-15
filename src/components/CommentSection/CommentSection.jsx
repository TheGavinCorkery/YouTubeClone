import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import Comments from './Comments';
import CommentForm from './CommentForm';
import './Comment.css'

function CommentSection(props) {
    return ( 

        <div className = "commentSection">
            <CommentForm postComment = {props.postComment} videoId = {props.videoId}/>
            <Card>
                    <Comments videoId={props.videoId} videoComments={props.videoComments} />
            </Card>
        </div>
     );
}

export default CommentSection;