import React, { Component } from 'react';

class Searchbar extends Component {
    render() {
        return (
            <div id='searchbar'>
                <input type='text' placeholder='Szukaj...'></input>
                <button type='submit'>
                    <i className='fas fa-search'></i>
                </button>
            </div>
        );
    }
}

export default Searchbar;
