import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './Table';

class App extends Component{

    state = {
        profiles : [
            {
                name: 'Charlie',
                job: 'Janitor',
            },
            {
                name: 'Mac',
                job: 'Bouncer',
            },

            {
                name: 'Dee',
                job: 'Aspring actress',
            },

            {
                name: 'Dennis',
                job: 'Bartender',
            },
        ]
    }

    removeProfile = (index) => {

        const {profiles} = this.state

        this.setState({

            profiles: profiles.filter((profile, i) => {

                return i !== index
            }),
        })
    }

    render(){
        const {profiles} = this.state

        return (
            <div className="container">
                <Table profilesData = {profiles} removeProfile={this.removeProfile} />
            </div>
        )
    }
}

export default App;
