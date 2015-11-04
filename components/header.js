import React, { Component, PropTypes } from 'react';
import TodoTextInput from './todo_text_input';

class Header extends Component {

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <TodoTextInput onAddTodo={this.props.addTodo} placeholder="What needs to be done?" />
      </header>
    );
  }
}

Header.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default Header;
