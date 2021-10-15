import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';


function Comments(props) {
    return ( 

        <ListGroup>
            {props.videoComments.map((comment) => {
               return   <ListGroupItem>
                            {comment.message}
                        </ListGroupItem>
            })}
        </ListGroup>
     );
}

export default Comments;