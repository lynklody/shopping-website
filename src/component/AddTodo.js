import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles ( () => ({
    Typography: {
        fontSize: 16,
    },
}));

class AddTodo extends Component {
// const AddTodo = () => {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         text: '',
    //     }
    // }

    // render() {
    //     return (
    //         <div>
    //             <input value={this.state.text} 
    //                 onChange={this.handleChange} 
    //                 />
    //             <button 
    //                 onClick={this.handleClick}
    //                 >Add</button>
    //         </div>
    //     );
    // }

    // handleChange = (e) => {
    //     this.setState({
    //         text: e.target.value,
    //     })
    // }

    // handleClick = () => {
    //     this.props.addTodo(this.state.text);
    //     this.setState({
    //         text: '',
    //     })
    // }
    // const classes = useStyles();
    render() {
        return (
            <Typography>
            <div>
                <input value={this.props.text} onChange={this.handleChange} />
                <button 
                    onClick={this.handleClick}
                    >Add</button>
            </div>
            </Typography>
        );
    }

    handleChange = (e) => {
        this.props.setTodoText(e.target.value)
    }

    handleClick = () => {
        this.props.addTodo(this.props.text)
        this.props.setTodoText("") // clear the content after input
    }
}

export default AddTodo;