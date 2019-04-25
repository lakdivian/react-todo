import axios from 'axios';
import { ADD_TODO, DEL_TODO, GET_TODO, UPDATE_TODO} from './Types';

export const getItems = () => dispatch => {
  console.log("+++++++++++++++++++++")
    axios.get('http://jsonplaceholder.typicode.com/todos?_limit=5')
    .then((res) => {
      dispatch({
        type: GET_TODO,        
        payload: res.data
      })
    })
}

export const delItems = (id) => dispatch => {

    axios.delete(`http://jsonplaceholder.typicode.com/todos/${id}`)
         .then((res) => {
           dispatch({
               type: DEL_TODO,
               payload: id
           })
         })
}

export const addTodo = (title) => dispatch => {
    axios.post("http://jsonplaceholder.typicode.com/todos",{
            title,
            completed: false
        })
         .then((res) => {
           dispatch({
                type: ADD_TODO,
                payload: res.data
           })
         })

  }

export const updateTodo = (id) => {
    return {
        type: UPDATE_TODO,
        payload: id
    }
}