import React, { Component, PropTypes } from 'react';
import Todo from './todo';

class MainSection extends Component {

  renderTodo(todo, index) {
    return (
      <Todo key={todo.id} todo={todo} {...this.props.actions} />
    );
  }

  render() {
    return (
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {this.props.todos.map(this.renderTodo.bind(this))}
        </ul>
      </section>
    );
  }
}

MainSection.propTypes = {
  actions: PropTypes.object.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired
}
export default MainSection;
