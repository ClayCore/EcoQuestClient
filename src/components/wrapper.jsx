import React, { Component } from 'react';
import Loader from './web/ui/loader';
import Sidebar from './web/ui/sidebar/sidebar';
import Topbar from './web/ui/topbar/topbar';
import MobileCheck from './web/ui/mobileCheck';

class Wrapper extends Component {
    render() {
        return (
            <div id='wrapper'>
                <MobileCheck />
                <Loader />
                <Sidebar />
                <Topbar />
                {this.props.children}
            </div>
        );
    }
}

export default Wrapper;
