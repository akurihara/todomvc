import React, { Component, PropTypes } from 'react';
import Todo from './todo';

class TodoList extends Component {

  renderTodo(todo, index) {
    return (
      <Todo {...todo} key={index} onClick={this.props.onTodoClick} />
    ); 
  }

  render() {
    return (
      <ul>
        {this.props.todos.map(this.renderTodo.bind(this))}
      </ul>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
};

export default TodoList;
