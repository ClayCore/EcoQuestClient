import React, { Component } from 'react';

class Loader extends Component {
    render() {
        return (
            <div id='loader-wrapper'>
                <div id='loader'></div>

                <div className='loader-section section-left'></div>
                <div className='loader-section section-right'></div>
            </div>
        );
    }
}

export default Loader;
