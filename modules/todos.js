const ADD_TODO = 'todomvc/todos/ADD_TODO';
const DELETE_TODO = 'todomvc/todos/DELETE_TODO';
const COMPLETE_TODO = 'todomvc/todos/COMPLETE_TODO';

const initialState = [{
  text: 'Use Redux',
  completed: false,
  id: 1
}];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [ ...state, {
        id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), 0) + 1,
        text: action.text,
        completed: false  
      }];
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.id)
    case COMPLETE_TODO:
      return state.map(todo =>
        todo.id === action.id ?
          Object.assign({}, todo, { completed: !todo.completed }) :
          todo
      )
    default:
      return state;
  }
}

export function addTodo(text) {
  return { type: ADD_TODO, text }
}

export function deleteTodo(id) {
  return { type: DELETE_TODO, id }
}

export function completeTodo(id) {
  return { type: COMPLETE_TODO, id }
}

