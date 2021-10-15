import React from 'react'
import './VideoPlayer.css'

const VideoPlayer = (props) => {



    return ( 
        <div>
            <div align = "center">
                <iframe title = 'video' id="ytplayer" type="text/html" width="1080" height="610"
                src={`https://www.youtube.com/embed/${props.videoId}`}
                frameborder="0" allowFullScreen/>
                <div className = "videoMeta" align = "center">
                    <h3>{props.videoInfo.title}</h3>
                    <hr />
                    <p>{props.videoInfo.description}</p>
                <hr />
            </div>
            </div>
        </div>
        
     );
}
 
export default VideoPlayer;