import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navlist extends Component {
    render() {
        return (
            <nav>
                <Link to="/homepage">
                    <div className="option">
                        <i className="fas fa-home"></i>
                    </div>
                </Link>
                <Link to="/tasks">
                    <div className="option">
                        <i className="fas fa-tasks"></i>
                    </div>
                </Link>
                <Link to="/prizes">
                    <div className="option">
                        <i className="fas fa-trophy"></i>
                    </div>
                </Link>
                <Link to="/profile">
                    <div className="option">
                        <i className="fas fa-user-cog"></i>
                    </div>
                </Link>
            </nav>
        );
    }
}

export default Navlist;
