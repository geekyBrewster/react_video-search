import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';

class App extends React.Component{
    onSearchSubmit = (term) => {
        console.log('searching for ' + term);
        youtube.get('/search', {
            params: {
                q: term
            }
        });
    };

    render() {
        return (
            <div className="ui container"> 
                <SearchBar onFormSubmit={this.onSearchSubmit} />
            </div>
        );
    }
}

export default App;