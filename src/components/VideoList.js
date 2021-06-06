import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
    const renderedList = videos.map((video) => {
        return <VideoItem onVideoSelect={onVideoSelect} video={video} />;
    });

    return (
        <div>
            <div className="video-player ui container">

            </div>
            <div className="ui relaxed divided list">
                <div className="ui items">{renderedList}</div>
            </div>
        </div>
    );
}

export default VideoList;