import React, { Component } from 'react';
import Todo from "./Todo";

class TodoList extends Component {

    componentDidMount() {
        this.props.fetchTodos();
    }

    render() {
        const {todos, toggleTodo} = this.props;
        return (
            <div>
                <ul>
                    {
                        todos.map(todo => {
                        // return <li> {todo.text} </li>
                        return <Todo key={todo.id} {...todo} 
                            onClick={() => {toggleTodo(todo.id)}} />
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default TodoList;