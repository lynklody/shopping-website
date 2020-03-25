import React, { Component } from 'react';
import { Container, Box, Card, CardContent } from '@material-ui/core'
import TextField from '@material-ui/core/TextField';

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
            <Container>
            <Box display="flex" 
            alignItems="center" 
            justifyContent="center">
                <TextField
                    id="outlined-textarea"
                    label="Enter your next To-do item here"
                    placeholder='Try pressing "Enter"'
                    multiline
                    variant="outlined"
                    fullWidth
                    value={this.props.text}
                    onChange={this.handleChange}
                />
                {/* <input value={this.props.text} onChange={this.handleChange} /> */}
                <button 
                    onClick={this.handleClick}
                    >Add</button>
            </Box>
            </Container>
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