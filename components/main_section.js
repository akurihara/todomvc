import React, { Component, PropTypes } from 'react';
import Todo from './todo';
import { VisibilityFilters } from '../modules/visibilityFilter';

const TODO_FILTERS = {
  [VisibilityFilters.SHOW_ALL]: () => true,
  [VisibilityFilters.SHOW_ACTIVE]: todo => !todo.completed,
  [VisibilityFilters.SHOW_COMPLETED]: todo => todo.completed
};

class MainSection extends Component {

  renderTodo(todo, index) {
    const { actions } = this.props;
    return (
      <Todo key={todo.id} todo={todo} {...actions} />
    );
  }

  render() {
    const { todos, filter } = this.props;
    const filteredTodos = todos.filter(TODO_FILTERS[filter]);

    return (
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {filteredTodos.map(this.renderTodo.bind(this))}
        </ul>
      </section>
    );
  }
}

MainSection.propTypes = {
  actions: PropTypes.object.isRequired,
  filter: PropTypes.oneOf([
    VisibilityFilters.SHOW_ALL,
    VisibilityFilters.SHOW_COMPLETED,
    VisibilityFilters.SHOW_ACTIVE
  ]),
  todos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired
}
export default MainSection;
