import React from 'react';
import { Card } from 'react-bootstrap';

const Replies = (props) => {

    return ( 
        <Card>
            
                {props.replies.map((reply) => {
                    return <Card.Body>{reply.message}</Card.Body>
                })}
            
        </Card>
     );
}
 
export default Replies;