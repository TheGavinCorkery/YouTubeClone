import React from 'react';
import { Card } from 'react-bootstrap';
import './SearchResultsList.css'


function SearchResultsList(props) {
    return ( 
        <div className="p-4">
            {props.results.map((video) => {
                return <Card className = "card" style= {{width: "12rem"}}>
                            <a onClick = {() => props.playVideo(video)}><Card.Img className = "img" src={video.snippet.thumbnails.high.url} alt="thumbnail"/></a>
                            <Card.Text className = "text">{video.snippet.title}</Card.Text>
                        </Card>
            })}
        </div>
     );
}

export default SearchResultsList;