import './VideoItem.css';
import React from 'react';

const VideoItem = ({video, onVideoSelect}) => {

    return(
         <div className="video-item item" onClick={() => onVideoSelect(video)}>
             <div className="ui small image">
                 <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title}/>
             </div>
             <div className="content">
                {video.snippet.title}
            </div>
        </div>
    );
}

export default VideoItem;