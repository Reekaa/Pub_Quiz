import React, { Component } from 'react';
import Button from '../../../PatternLibrary/Button.js';
import BigButton from '../../../PatternLibrary/BigButton.js';
import Header from '../TeamList/Header';
import List from '../TeamList/List';



class AddTeamForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputtedTeam: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);

    }

    handleInputChange(event){
      this.setState({inputtedTeam: event.target.value})
    }

    handleFromSubmit(event){
      event.preventDefault();
    }

    render () {
        return (
            <form onSubmit = {this.handleFromSubmit}>
                <input
                placeholder = 'Team name...'
                id = 'team-input'
                name = 'team'
                type = 'text'
                value = {this.state.inputedTeam}
                onChange = {this.handleInputChange}
                />
                <Header />
                <List />
                <Button buttonText = 'ADD'
                        function = 'function'
                />
                <BigButton buttonText = 'START'
                           function = 'function'
                />
            </form>
        )
    }
}

export default AddTeamForm;
