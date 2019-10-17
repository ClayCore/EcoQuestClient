import React, { Component } from 'react';
import Banner from './banner';
import Searchbar from './searchbar';
import Navlist from './navlist';

class Sidebar extends Component {
    render() {
        return (
            <div id='sidebar'>
                <Banner />
                <Searchbar />
                <Navlist />
            </div>
        );
    }
}

export default Sidebar;
