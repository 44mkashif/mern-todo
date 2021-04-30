import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

const TodoList = ({ todos, deleteTodo }) => {

    let cnt = 0;

    return (
        <Box width="70%" margin="30px">
            <List>
                {(todos && todos.length) ?

                    todos.map((todo) =>
                        <div>
                            <ListItem button>
                                <ListItemText primary={todo.action} />
                                <ListItemSecondaryAction>
                                    <IconButton edge="end" aria-label="delete" onClick={() => deleteTodo(todo._id)}>
                                        <DeleteIcon color="secondary" />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                            <Divider />
                        </div>
                    )
                    :
                    <ListItem button>
                        <ListItemText primary="Empty, Add some work!" />
                    </ListItem>
                }

            </List>
        </Box>
    )
}

export default TodoList;