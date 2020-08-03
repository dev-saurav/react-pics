import React from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
    onSearchSubmit = async (term) => {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: {
                query: term
            },
            headers: {
                Authorization: 'Client-ID 3pm33vS_CbL1702sCNe1_kUD5jS2xTXI0q2g_IJL1RM'
            }
        });
        console.log(response.data.result);
    }
    render() {
        return (
            <div style={{ marginTop: '10px' }} className="ui container">
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList />
            </div>
        )
    }
}

export default App;