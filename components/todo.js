import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import TodoTextInput from './todo_text_input';

class Todo extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      isEditing: false
    };
  }

  handleDoubleClick() {
    this.setState({ isEditing: true });
  }

  handleSave(text) {
    const { todo, editTodo, deleteTodo } = this.props;
    if ( text === '' ) {
      deleteTodo(todo.id);
    } else {
      editTodo(todo.id, text);
    }
    this.setState({ isEditing: false });
  }

  render() {
    const { todo, completeTodo, deleteTodo } = this.props;
    let viewElement;

    if ( this.state.isEditing ) {
      viewElement = (
        <TodoTextInput
          text={todo.text}
          isEditing={this.state.isEditing}
          onSave={this.handleSave.bind(this)} />
      );
    } else {
      viewElement = (
        <div className="view">
          <input className="toggle"
            type="checkbox"
            checked={todo.completed}
            onChange={() => completeTodo(todo.id)}/>
          <label onDoubleClick={this.handleDoubleClick.bind(this)}>
            {todo.text}
          </label>
          <button className="destroy" onClick={() => deleteTodo(todo.id)} />
        </div>
      );
    }

    let classes = classnames({
      completed: todo.completed,
      editing: this.state.isEditing
    });
    return (
      <li className={classes}>
        {viewElement}
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
  completeTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired
};

export default Todo;
