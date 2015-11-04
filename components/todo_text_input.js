import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

class TodoTextInput extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      text: this.props.text
    }
  }

  handleBlur() {
    const { onSave, isEditing } = this.props;
    const text = this.state.text.trim();
    if ( isEditing ) {
      onSave(text);
    }
  }

  handleKeyDown(e) {
    if ( e.which === 13 ) {
      this.handleEnterKeyDown();
    } else if ( e.which === 27 ) {
      this.handleEscapeKeyDown();
    }
  }

  handleEnterKeyDown() {
    const { onSave, isEditing } = this.props;
    onSave(this.state.text.trim());
    if ( !isEditing ) {
      this.setState({ text: '' });
    }
  }

  handleEscapeKeyDown() {
    const { onSave, isEditing, text } = this.props;
    if ( isEditing ) {
      onSave(text);
    }
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  render() {
    const { isEditing } = this.props;
    const classes = classNames({
      'new-todo': !isEditing,
      edit: isEditing
    });
    return (
      <input
        type="text"
        value={this.state.text}
        className={classes}
        placeholder={this.props.placeholder} 
        autofocus="true"
        onBlur={this.handleBlur.bind(this)}
        onChange={this.handleChange.bind(this)}
        onKeyDown={this.handleKeyDown.bind(this)} />
    );
  }
}

TodoTextInput.propTypes = {
  text: PropTypes.string,
  isEditing: PropTypes.bool,
  onSave: PropTypes.func.isRequired
};

TodoTextInput.defaultProps = {
  isEditing: false,
  text: ''
};

export default TodoTextInput;
