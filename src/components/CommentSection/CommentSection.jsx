import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

function CommentSection(props) {
    return ( 

        <div>
            <Card>
                <ListGroup>
                    <ListGroupItem>
                        {/* <Comments videoId={props.videoId} /> */}
                    </ListGroupItem>
                </ListGroup>
            </Card>
        </div>
     );
}

export default CommentSection;