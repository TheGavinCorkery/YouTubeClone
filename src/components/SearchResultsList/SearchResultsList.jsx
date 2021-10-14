import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';


function SearchResultsList(props) {
    return ( 
        <div className="container-fluid">
            <ListGroup>
                <ListGroupItem>Test</ListGroupItem>
                {props.results.map((video) => {
                    <ListGroupItem>
                        {video.id.videoId}
                    </ListGroupItem>
                })}
            </ListGroup>
        </div>
     );
}

export default SearchResultsList;