import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './Table';
import Form from './Form';

class App extends Component{

    state = {
        profiles : [
            {
                name: 'Charlie',
                job: 'Janitor',
            }
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

    handleSubmit = (profile) => {
        this.setState({profiles: [...this.state.profiles, profile]})
    }

    render(){
        const {profiles} = this.state

        return (
            <div className="container">
                <Table profilesData = {profiles} removeProfile={this.removeProfile} />
                <Form handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}

export default App;
