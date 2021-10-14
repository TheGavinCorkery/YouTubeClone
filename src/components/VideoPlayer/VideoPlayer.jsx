import React from 'react'

const VideoPlayer = (props) => {



    return ( 
        <div>
            <h1>Hello World</h1>
            <iframe title = 'video' id="ytplayer" type="text/html" width="640" height="360"
            src={`https://www.youtube.com/embed/${props.videoId}`}
            frameborder="0" allowFullScreen/>
        </div>
     );
}
 
export default VideoPlayer;