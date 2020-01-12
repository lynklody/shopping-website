import React, { Component } from 'react';
import AddTodo from "./component/AddTodo";
import TodoList from "./component/TodoList";
import Footer from "./component/Footer";

// const todos = [
//     {
//         id: 1,
//         text: "Walk the dogs",
//         completed: true
//     },
//     {
//         id: 2,
//         text: "Buy grocery",
//         completed: false
//     },
//     {
//         id: 3,
//         text: "Cook dinner",
//         completed: true
//     },
// ]

// const filter = "all";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            filter: 'all'
        }
        this.nextTodoId = 0;
    }

    render() {
        const todos = this.getVisibleTodos();
        const {filter} = this.props;
        return (
            <div>
                <div>MY TODO LIST</div>
                <AddTodo addTodo={this.addTodo} />
                <TodoList todos={todos} toggleTodo={this.toggleTodo} />
                <Footer filter={filter} setVisibilityFilter={this.setVisibilityFilter} />
                <div>Made by Wendy with ♥</div>
            </div>
        );
    }

    // filter todos according to conditions given
    getVisibleTodos = () => {
        const currentFilter = this.state.filter;
        return this.state.todos.filter(item => {
            if (currentFilter === "active") {
                return !item.completed;
            } else if (currentFilter === "completed") {
                return item.completed;
            } else {
                return true;
            }
        })
    }

    // add a new todo element
    addTodo = (text) => {
        const todo = {
            id: this.nextTodoId++,
            text,
            complete: false
        };
        const newTodos = [todo, ...this.state.todos];
        this.setState ({
            todos: newTodos
        });
    }

    // update todo
    toggleTodo = id => {
        const newTodos = this.state.todos.map(item => {
            return item.id === id 
                ? {...item, completed : !item.completed } 
                : item
        });
        this.setState ({
            todos: newTodos
        })
    }

    setVisibilityFilter = filter => {
        this.setState({
            filter
        })
    }
}

export default App;