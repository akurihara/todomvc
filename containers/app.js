import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TodosActions from '../modules/todos';
import * as VisibilityFilterActions from '../modules/visibilityFilter';
import Header from '../components/header';
import MainSection from '../components/main_section';
import Footer from '../components/footer';

class App extends Component {

  render() {
    const { todos, todosActions, visibilityFilterActions, filter } = this.props;
    return (
      <div>
        <Header addTodo={todosActions.addTodo} />
        <MainSection todos={todos} actions={todosActions} filter={filter} />
        <Footer onFilterChange={visibilityFilterActions.setVisibilityFilter} filter={filter} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos,
    filter: state.visibilityFilter
  }
}

function mapDispatchToProps(dispatch) {
  return {
    todosActions: bindActionCreators(TodosActions, dispatch),
    visibilityFilterActions: bindActionCreators(VisibilityFilterActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
