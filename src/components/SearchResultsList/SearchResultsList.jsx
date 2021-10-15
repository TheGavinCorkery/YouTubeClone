import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';


function SearchResultsList(props) {
    return ( 
        <div className="container" align = "right">
            <ListGroup>
                {props.results.map((video) => {
                    return <ListGroupItem>
                                <a onClick = {() => props.playVideo(video.id.videoId)}><img src={video.snippet.thumbnails.default.url} alt="thumbnail" /></a>
                                {video.snippet.title}
                            </ListGroupItem>
                })}
            </ListGroup>
        </div>
     );
}

export default SearchResultsList;