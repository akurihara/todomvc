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
    const completedCount = todos.reduce(
      (count, todo) => todo.completed ? count + 1 : count,
      0
    );
    const activeCount = todos.length - completedCount;

    return (
      <div>
        <Header addTodo={todosActions.addTodo} />
        <MainSection
          todos={todos}
          actions={todosActions}
          completedCount={completedCount}
          filter={filter} />
        <Footer
          onFilterChange={visibilityFilterActions.setVisibilityFilter}
          filter={filter}
          activeCount={activeCount}
          completedCount={completedCount}
          onClearCompleted={todosActions.clearCompleted} />
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
