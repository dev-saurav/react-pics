import React from 'react';

import SearchBar from './SearchBar';
import ImageList from './ImageList';
import unsplash from '../api/unsplash';

class App extends React.Component {
    //inital state
    state = { images: [] };
    //fire the api on press of enter
    onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: {
                query: term
            }
        });
        this.setState({ images: response.data.results });
    }
    render() {
        return (
            <div style={{ marginTop: '10px' }} className="ui container">
                <SearchBar onSubmit={this.onSearchSubmit} />
                <div>
                    Found: {this.state.images.length} images.
                </div>
                <ImageList images={this.state.images} />
            </div>
        )
    }
}

export default App;