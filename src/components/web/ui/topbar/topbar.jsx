import React, { Component } from 'react';

class Topbar extends Component {
    render() {
        return (
            <div id='topbar'>
                <div id='info'>
                    <div id='app-name'></div>
                    <div id='app-version'></div>
                </div>
            </div>
        );
    }
}

export default Topbar;
