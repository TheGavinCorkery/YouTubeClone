import axios from 'axios';
import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

const Replies = (props) => {

    return ( 
        <ListGroup>
            
                {props.replies.map((reply) => {
                    return <ListGroupItem>{reply.message}</ListGroupItem>
                })}
            
        </ListGroup>
     );
}
 
export default Replies;