import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TodosActions from '../modules/todos';
import Header from '../components/header';
import MainSection from '../components/main_section';

class App extends Component {

  render() {
    const { todos, actions } = this.props;
    return (
      <div>
        <Header addTodo={actions.addTodo} />
        <MainSection todos={todos} actions={actions} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodosActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
