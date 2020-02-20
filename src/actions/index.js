import { ADD_TODO, TOGGLE_TODO, SET_FILTER, SET_TODO_TEXT, 
    FETCH_TODOS_REQUEST, FETCH_TODOS_SUCCESS, FETCH_TODOS_FAILURE } from './actionTypes'

let nextTodoId = 0

// sync actions
const fectchTodosRequest = () => ({
    type: FETCH_TODOS_REQUEST
})

const fectchTodosSuccess = (data) => ({
    type: FETCH_TODOS_SUCCESS,
    data // todo list data
})

const fectchTodosFailure = (error) => ({
    type: FETCH_TODOS_FAILURE,
    error
})

// invoke an async action
export const fetchTodos = () => {
    return (dispatch) => { // return a function, need a middleware(redux-thunk)
        dispatch(fectchTodosRequest());
        return fetch('./mock/todos.json').then( // This is how to access file in public
            response => {
                response.json().then(data => {
                    dispatch(fectchTodosSuccess(data));
                })
            },
            error => {
                dispatch(fectchTodosFailure(error));
                console.log("An error occurred: "+ error);
            }
        )
    }
}

export const addTodo = (text) => ({
    type: ADD_TODO,
    id: nextTodoId++,
    text
})

export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    id
})

export const setFilter = filter => ({
    type: SET_FILTER,
    filter
})

export const setTodoText = text => ({
    type: SET_TODO_TEXT,
    text
})