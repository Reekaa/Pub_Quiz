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
        this.handleFormSubmit = this.handleFormSubmit.bind(this);

    }

    handleInputChange(event){
      this.setState({inputtedTeam: event.target.value})
    }

    handleFormSubmit(event){
      event.preventDefault();
      this.props.addTeam(this.state.inputtedTeam);
      this.resetForm();
    }

    resetForm(){
      this.setState({inputtedTeam: ''})
    }

    render () {
        return (
            <form onSubmit = {this.handleFormSubmit}>
                <input
                placeholder = 'Team name...'
                id = 'team-input'
                name = 'team'
                type = 'text'
                value = {this.state.inputtedTeam}
                onChange = {this.handleInputChange}
                />
                <Button buttonText = 'ADD'
                        function = {this.handleFormSubmit}

                />
            </form>
        )
    }
}

export default AddTeamForm;
