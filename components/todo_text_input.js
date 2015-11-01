import React, { Component, PropTypes } from 'react';

class TodoTextInput extends Component {

  handleSubmit(e) {
    const text = e.target.value.trim();
    if (e.which === 13 && text !== '') {
      this.props.onAddTodo(text);
      e.target.value = '';
    }
  }

  render() {
    return (
      <input
        type="text"
        className="new-todo"
        placeholder={this.props.placeholder} 
        autofocus="true"
        onKeyDown={this.handleSubmit.bind(this)} />
    );
  }
}

TodoTextInput.propTypes = {
  onAddTodo: PropTypes.func.isRequired
};

export default TodoTextInput;
