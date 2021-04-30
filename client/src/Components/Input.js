import React, { Component } from 'react';
import axios from 'axios';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Input extends Component {

    state = {
        action: ''
    };

    addTodo = () => {

        const task = {
            action: this.state.action
        };

        if (task.action && task.action.length > 0) {

            axios.post('/api/todo', task)
                .then(res => {
                    if (res.data) {
                        this.props.getTodos();
                        this.setState({
                            action: '',
                        });
                    }
                })
                .catch(err => console.log(err));
        } else {
            console.log('Input is not valid');
        }

    }

    handleChange = (event) => {
        this.setState({
            action: event.target.value,
        })
    }

    render() {
        let { action } = this.state;

        return (
            <React.Fragment>
                <TextField
                    variant="outlined"
                    margin="dense"
                    placeholder="Add Todo Here"
                    label="Todo"
                    onChange={this.handleChange}
                    value={action}
                />

                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => this.addTodo()}>
                    Add Todo
                </Button>
            </React.Fragment>
        )

    }

}

export default Input;