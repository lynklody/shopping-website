import React, { Component } from 'react';
import { CardContent } from '@material-ui/core';

class Todo extends Component {
    render() {
        const {completed, text, onClick } = this.props;
        return (
            <CardContent>
            <li
                onClick={onClick}
                style={{
                    textDecoration: completed ? "line-through" : "none"
            }}
            >
                {text}
            </li>
            </CardContent>
        );
    }
}

export default Todo;