import { ADD_TODO, DEL_TODO, GET_TODO, UPDATE_TODO } from '../actions/Types';


const initialState = {
    todos: []
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_TODO: 
            return {
                todos: action.payload
            }
        case DEL_TODO:
            return {
                todos: state.todos.filter((todo) => (
                    todo.id !== action.payload
                ))
            }
        case ADD_TODO:
            return {
                todos: [...state.todos,action.payload] 
            }
        case UPDATE_TODO:
            return {
                todos: state.todos.map((todo) => {
                    if (todo.id === action.payload) {
                        todo.completed = !todo.completed
                    }
                    return todo;
                })
            }
        default:
            return state;

    }
}

