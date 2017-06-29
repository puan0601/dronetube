import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyCnKqAcXUI_nBBG4uiDxh8CFVZ7Ah7BQ30';

YTSearch({key: API_KEY, term: 'drones'}, function(data) {
    console.log(data);
});

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] };

        YTSearch({key: API_KEY, term: 'drones'}, (videos) => {
            this.setState({ videos });
        });
    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos} />
            </div>
        );
    };
};

ReactDOM.render(<App />, document.querySelector('.container'));