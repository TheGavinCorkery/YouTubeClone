import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import Comments from './Comments';
import CommentForm from './CommentForm';

function CommentSection(props) {
    return ( 

        <div>
            <CommentForm postComment = {props.postComment} videoId = {props.videoId}/>

            <Card>
                    <Comments videoId={props.videoId} videoComments={props.videoComments} />
            </Card>
        </div>
     );
}

export default CommentSection;