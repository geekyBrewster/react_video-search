import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import youtube from '../api/youtube';

class App extends React.Component{
    state = { videos: [] };

    onSearchSubmit = async (term) => {
        console.log('searching for ' + term);
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        this.setState({ videos: response.data.items });
    };

    render() {
        return (
            <div className="ui container"> 
                <SearchBar onFormSubmit={this.onSearchSubmit} />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

export default App;