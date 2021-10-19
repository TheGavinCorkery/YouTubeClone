import React from 'react';
import { Card } from 'react-bootstrap';
import './SearchResultsList.css'


function SearchResultsList(props) {
    return ( 
        <div className="p-4">
            {props.results.map((video) => {
                return <Card className = "thumbnail" style= {{width: "12rem"}}>
                            <Card.Img className = "img" onClick = {() => props.playVideo(video)} src={video.snippet.thumbnails.high.url} alt="thumbnail"/>
                            <Card.Text className = "text">{video.snippet.title}</Card.Text>
                        </Card>
            })}
        </div>
     );
}

export default SearchResultsList;