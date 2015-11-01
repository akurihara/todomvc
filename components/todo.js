import React, { Component, PropTypes } from 'react';

class Todo extends Component {

  render() {
    return (
      <li
        onClick={() => this.props.onClick(this.props.id)}
        style={{
          textDecoration: this.props.completed ? 'line-through' : 'none',
          cursor: this.props.completed ? 'default' : 'pointer'
        }}>
        {this.props.text}
      </li>
    );
  }
}

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired  
};

export default Todo;
