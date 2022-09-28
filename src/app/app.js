import React from 'react';
import { Map } from '../components';
import { Places } from '../api/';

const App = () => {
    return (
        <div>
            <h1>App</h1>
            <Map markers={Places()}/>
        </div>
    )
}

export default App;