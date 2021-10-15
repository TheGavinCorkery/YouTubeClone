import React from 'react'

const VideoPlayer = (props) => {



    return ( 
        <div>
            <div>
                <iframe title = 'video' id="ytplayer" type="text/html" width="640" height="360"
                src={`https://www.youtube.com/embed/${props.videoId}`}
                frameborder="0" allowFullScreen/>
            </div>
            <div>
                <h3>{props.videoInfo.title}</h3>
                <hr />
                <p>{props.videoInfo.description}</p>
                <hr />
            </div>
        </div>
        
     );
}
 
export default VideoPlayer;