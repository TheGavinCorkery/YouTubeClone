import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import './SearchResultsList.css'


function SearchResultsList(props) {
    return ( 
        <div className="container" align = "right">
            <ListGroup>
                {props.results.map((video) => {
                    return <ListGroupItem>
                                <a onClick = {() => props.playVideo(video.id.videoId)}><img src={video.snippet.thumbnails.default.url} alt="thumbnail" /></a>
                                <p>{video.snippet.title}</p>
                            </ListGroupItem>
                            
                            
                            
                })}
            </ListGroup>
        </div>
     );
}

export default SearchResultsList;