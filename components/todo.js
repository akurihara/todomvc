import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

class Todo extends Component {

  render() {
    const { todo, completeTodo } = this.props;
    let classes = classnames({
      completed: todo.completed
    });

    return (
      <li className={classes} >
        <div className="view">
          <input className="toggle"
                 type="checkbox"
                 checked={todo.completed}
                 onChange={() => completeTodo(todo.id)}/>
          <label>{todo.text}</label>
          <button className="destroy" />
        </div>
      </li>
    );
  }
}

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }),
  completeTodo: PropTypes.func.isRequired
};

export default Todo;
