import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as TodosActions from '../modules/todos';
import Header from '../components/header';
import TodoList from '../components/todo_list';

class App extends Component {

  render() {
    const { dispatch } = this.props;
    return (
      <div>
        <Header addTodo={text => dispatch(TodosActions.addTodo(text))} />
        <TodoList todos={this.props.todos} onTodoClick={id => dispatch(TodosActions.completeTodo(id))} />
      </div>
    );
  }
}

export default connect(state => state)(App);
