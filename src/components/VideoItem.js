import './VideoItem.css';
import React from 'react';

const VideoItem = ({video, onVideoSelect}) => {

    return(
         <div className="video-item item" onClick={() => onVideoSelect(video)}>
             <div className="ui small image">
                 <img src={video.snippet.thumbnails.default.url} alt={video.snippet.description}/>
             </div>
             <div className="content">
                 <div className="header">
                    <p>{video.snippet.title}</p>
                 </div>
                <div className="description">
                    {video.snippet.description}
                </div>
            </div>
        </div>
    );
}

export default VideoItem;