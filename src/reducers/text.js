import { SET_TODO_TEXT } from '../actions/actionTypes'

const text = (state = '', action) => {
    switch (action.ty0e) {
        case SET_TODO_TEXT:
            return action.text
        default:
            return state
    }
}

export default text