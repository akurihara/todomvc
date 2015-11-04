import React, { Component, PropTypes } from 'react';
import TodoTextInput from './todo_text_input';

class Header extends Component {

  handleSave(text) {
    const { addTodo } = this.props;
    if ( text !== '' ) {
      addTodo(text);
    }
  }

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <TodoTextInput onSave={this.handleSave.bind(this)} placeholder="What needs to be done?" />
      </header>
    );
  }
}

Header.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default Header;
