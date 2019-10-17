import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import platform from 'platform';
import axios from 'axios';
import Wrapper from './components/wrapper';

// Subpages
import Homepage from './components/web/homepage';
import Tasks from './components/web/tasks';
import Prizes from './components/web/prizes';
import Profile from './components/web/profile';
import Loader from './components/web/ui/loader';

// To communicate with the server
const API_ADDR = 'https://ecoquest-client.herokuapp.com';
const API_GET = API_ADDR + '/api/getData';
const API_PUT = API_ADDR + '/api/putData';
const API_DEL = API_ADDR + '/api/deleteData';
const API_UPD = API_ADDR + '/api/updatedataData';

// How often should we fetch data from the database to update the app?
// NOTE: in ms
const DB_POLL = 1000;

export function isMobile() {
    // Check for resolution and user-agent verification
    let device_width = window.screen.width * window.devicePixelRatio;
    let mobile_user = platform.name.includes('Mobile');

    return device_width < 800 || mobile_user;
}

export function isSubpage() {
    // Check if we're running from the root
    // also if it's the master webpage
    //
    // This is a necessary check due to the way we link stylesheets.
    // In the case that we're using a subdomain or running a subpage in an 'iframe'
    // we have to go one directory up in order for relative CSS linking to work.
    let document_path = window.location.pathname;
    let document_dir = document_path.substring(0, document_path.lastIndexOf('/'));

    if (document_dir === 'web/') {
        return true;
    } else if (document_dir === '') {
        return false;
    }
}

export let currentSubpage = '';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            interval_set: false,
            isLoading: true,
            error: null
        };
    }

    getDataFromDb = () => {
        fetch(API_GET)
            .then(data => data.json())
            .then(res =>
                this.setState({
                    data: res.data,
                    isLoading: false
                })
            )
            .catch(error => {
                this.setState({
                    error: error,
                    isLoading: false
                });
            });
    };

    putDataToDb = message => {
        let currentIds = this.state.data.map(data => data.id);
        let idToBeAdded = 0;
        while (currentIds.includes(idToBeAdded)) {
            ++idToBeAdded;
        }

        axios.post(API_PUT, {
            id: idToBeAdded,
            message: message
        });
    };

    deleteFromDb = idToDelete => {
        let objIdToDelete = null;
        this.state.data.forEach(dat => {
            if (dat.id === idToDelete) {
                objIdToDelete = dat._id;
            }
        });

        axios.delete(API_DEL, {
            data: {
                objIdToDelete
            }
        });
    };

    updateDb = (idToUpdate, updatedData) => {
        let objIdToUpdate = null;
        this.state.data.forEach(dat => {
            if (dat.id === idToUpdate) {
                objIdToUpdate = dat._id;
            }
        });

        axios.post(API_UPD, {
            id: objIdToUpdate,
            update: { message: updatedData }
        });
    };

    // Called on initial setup
    componentDidMount = () => {
        this.getDataFromDb();
        if (!this.state.interval_set) {
            let interval = setInterval(this.getDataFromDb, DB_POLL);
            this.setState({ interval_set: interval });
        }
    };

    // Called when destroying the component
    componentWillUnmount = () => {
        if (this.state.interval_set) {
            clearInterval(this.state.interval_set);
            this.setState({ interval_set: null });
        }
    };

    render = () => {
        const { data, isLoading, error } = this.state;
        let user_data = [];

        // If there are any errors, display them.
        if (error) {
            return (
                <h1>
                    <center>{error.message}</center>
                </h1>
            );
        }

        // If the app is still loading, reutrn an empty wrapper with a loader
        if (isLoading) {
            return (
                <div id="wrapper">
                    <Loader />
                </div>
            );
        }

        // If there's no response, return that error
        if (!data) {
            return <h1>Data is undefined or null</h1>;
        }

        // If somehow data ends up empty, show its contents to verify
        if (data.length <= 0) {
            return <h1>{data}</h1>;
            // Otherwise, assign it and return to rendering
        } else {
            user_data = data;
        }

        return (
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Wrapper>
                            <Homepage data={user_data} />
                        </Wrapper>
                    </Route>
                    <Route path="/homepage">
                        <Wrapper>
                            <Homepage data={user_data} />
                        </Wrapper>
                    </Route>
                    <Route path="/tasks">
                        <Wrapper>
                            <Tasks user_data={this.state.data} />
                        </Wrapper>
                    </Route>
                    <Route path="/prizes">
                        <Wrapper>
                            <Prizes user_data={this.state.data} />
                        </Wrapper>
                    </Route>
                    <Route path="/profile">
                        <Wrapper>
                            <Profile user_data={this.state.data} />
                        </Wrapper>
                    </Route>
                </Switch>
            </Router>
        );
    };
}

export default App;
