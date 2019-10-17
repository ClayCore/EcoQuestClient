import React, { Component } from 'react';
import moment from 'moment-timezone';
import './homepage.css';

let getCurrentDate = function() {
    let today = new moment.tz('Europe/Warsaw').format('DD/MM/YYYY');
    return today;
};

let getCurrentTime = function() {
    let today = new moment.tz('Europe/Warsaw').format('HH:mm:ss');
    return today;
};

class Homepage extends Component {
    state = {
        data: [],
        user_name: '',
        user_avatar: '',
        quest_info: [],
        user_points: 0,
        prize_info: []
    };

    componentDidMount() {
        const { data } = this.props;
        if (data) {
            // eslint-disable-next-line
            data.map(key => {
                this.setState({
                    user_name: key.displayname,
                    user_avatar: key.avatar_link
                });
            });
        }
    }

    render() {
        return (
            <div id="content">
                <div id="user-info" className="tile">
                    <div id="user-info" className="tile-content">
                        <div id="info">
                            <header>
                                Witaj <span id="user-name">{this.state.user_name}</span>
                            </header>
                            <div id="avatar">
                                <img alt="AVATAR" src={this.state.user_avatar} width="300" height="300"></img>
                            </div>
                        </div>
                        <div className="panels">
                            <div id="date">
                                Data: {getCurrentDate()} <br />
                                Godzina: {getCurrentTime()}
                            </div>
                        </div>
                    </div>
                </div>
                <div id="current-quest" className="tile">
                    <div className="tile-content" id="current-quest">
                        <header>Zadanie na dziś:</header>
                        <div id="container">
                            <div id="quest-info">Temporary value</div>
                            <label className="checkbox">
                                <input type="checkbox" />
                                <span className="overlay">
                                    <svg
                                        className="icon"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="32"
                                        height="32"
                                        viewBox="0 0 32 32"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                </span>
                            </label>
                        </div>
                    </div>
                </div>
                <div id="user-profile-info" className="tile">
                    <div className="tile-content" id="user-profile-info">
                        Ilość punktów: <span id="user-points"></span>
                    </div>
                </div>
                <div id="user-prize-info" className="tile">
                    <div className="tile-content" id="user-prize-info">
                        Na co możesz wydać punkty:
                        <div id="available-prizes"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Homepage;
