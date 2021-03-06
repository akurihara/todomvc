const ADD_TODO = 'todomvc/todos/ADD_TODO';
const EDIT_TODO = 'todomvc/todos/EDIT_TODO';
const DELETE_TODO = 'todomvc/todos/DELETE_TODO';
const COMPLETE_TODO = 'todomvc/todos/COMPLETE_TODO';
const TOGGLE_ALL = 'todomvc/todos/TOGGLE_ALL';
const CLEAR_COMPLETED = 'todomvc/todos/CLEAR_COMPLETED';

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
    case EDIT_TODO:
      return state.map(todo =>
        todo.id === action.id ?
          Object.assign({}, todo, { text: action.text }) :
          todo
      )
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.id)
    case COMPLETE_TODO:
      return state.map(todo =>
        todo.id === action.id ?
          Object.assign({}, todo, { completed: !todo.completed }) :
          todo
      )
    case TOGGLE_ALL:
      const areAllTodosCompleted = state.every((todo) => todo.completed);
      return state.map(todo => Object.assign({}, todo, { completed: !areAllTodosCompleted }));
    case CLEAR_COMPLETED:
      return state.filter(todo => !todo.completed);

    default:
      return state;
  }
}

export function addTodo(text) {
  return { type: ADD_TODO, text }
}

export function editTodo(id, text) {
  return { type: EDIT_TODO, id, text }
}

export function deleteTodo(id) {
  return { type: DELETE_TODO, id }
}

export function completeTodo(id) {
  return { type: COMPLETE_TODO, id }
}

export function toggleAll() {
  return { type: TOGGLE_ALL }
}

export function clearCompleted() {
  return { type: CLEAR_COMPLETED }
}
