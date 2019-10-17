import React, { Component } from 'react';

const logo = '/res/icons/logo.svg';

class Banner extends Component {
    render() {
        return (
            <div id='banner' className='image'>
                <img src={logo} alt='temp'></img>
            </div>
        );
    }
}

export default Banner;
