import React from 'react';


// Create a new component. This comonent should produce some HTML
const App = function() {
    return <div>Hi!</div>;
};

// Take this componet's generate HTML and put it on the page (in the DOM)
React.render(App);