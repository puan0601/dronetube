import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCnKqAcXUI_nBBG4uiDxh8CFVZ7Ah7BQ30';

// Create a new component. This component should produce some HTML
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
};

// Take this componet's generate HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));