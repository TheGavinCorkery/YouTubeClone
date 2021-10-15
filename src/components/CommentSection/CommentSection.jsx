import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import Comments from './Comments';

function CommentSection(props) {
    return ( 

        <div>
            <Card>
                    <Comments videoId={props.videoId} videoComments={props.videoComments} />
            </Card>
        </div>
     );
}

export default CommentSection;