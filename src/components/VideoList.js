import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
    const renderedList = videos.map((video) => {
        return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video} />;
    });

    return (
        <div className="ui relaxed divided list">
            <div className="ui items">{renderedList}</div>
        </div>
    );
}

export default VideoList;