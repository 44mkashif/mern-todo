import axios from 'axios';
import React, { Component } from 'react'

import TodoList from './List';
import Input from './Input';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';

class Todo extends Component {

    state = {
        todos: [],
    }

    componentDidMount() {
        this.getTodos();
    }

    getTodos = () => {
        axios.get('/api/todo')
            .then((res) => {
                if (res.data.success) {
                    this.setState({ todos: res.data.data });
                    console.log('Response: ', res.data.data);
                }
            })
            .catch((err) => console.log(err));
    }

    deleteTodo = (id) => {
        axios.delete(`/api/todo/${id}`)
            .then(res => {
                if (res.data) {
                    this.getTodos()
                }
            })
            .catch(err => console.log(err));
    }

    render() {

        const { todos } = this.state;
        console.log('Todos: ', todos);
        return (
            <Box margin="50px">
                <Grid container component="main" justify="center">
                    <Grid item xs={12} sm={8} md={5} component={Paper} justify="center" elevation={6}>
                        <Box margin="30px">
                            <Typography variant='h2'>My Todos List</Typography>
                        </Box>

                        <Divider />

                        <Box margin="30px">
                            <Grid container justify="space-evenly" alignItems="center">
                                <Input getTodos={this.getTodos} />
                            </Grid>
                            <Grid container justify="center">
                                <TodoList todos={todos} deleteTodo={this.deleteTodo}></TodoList>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        )
    }
}

export default Todo;