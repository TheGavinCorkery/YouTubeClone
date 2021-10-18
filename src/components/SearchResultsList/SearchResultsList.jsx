import React from 'react';
import { Card } from 'react-bootstrap';
import './SearchResultsList.css'


function SearchResultsList(props) {
    return ( 
        <div className="p-4">
            {props.results.map((video) => {
                return <Card style= {{width: '15rem'}}>
                            <a onClick = {() => props.playVideo(video)}><Card.Img variant = "top" src={video.snippet.thumbnails.high.url} alt="thumbnail"/></a>
                            <Card.Text><p>{video.snippet.title}</p></Card.Text>
                        </Card>
            })}
        </div>
     );
}

export default SearchResultsList;