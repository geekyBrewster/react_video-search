import React from 'react';

const VideoItem = ({video}) => {

    return(
         <div className="item">
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