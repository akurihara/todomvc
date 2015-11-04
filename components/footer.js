import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { VisibilityFilters } from '../modules/visibilityFilter';

const FILTER_TITLES = {
  [VisibilityFilters.SHOW_ALL]: 'All',
  [VisibilityFilters.SHOW_ACTIVE]: 'Active',
  [VisibilityFilters.SHOW_COMPLETED]: 'Completed'
};

class Footer extends Component {

  renderFilter(filter) {
    const { onFilterChange } = this.props;
    const classes = classnames({ selected: filter === this.props.filter });

    return (
      <li key={filter}>
        <a className={classes} href="#" onClick={() => onFilterChange(filter)}>
          {FILTER_TITLES[filter]}
        </a>
      </li>
    );
  }

  render() {
    const { activeCount } = this.props;
    const { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } = VisibilityFilters;
    const itemWord = activeCount == 1 ? 'item' : 'items';

    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{activeCount}</strong> {itemWord} left
        </span>
				<ul className="filters">
          {[ SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE ].map(this.renderFilter.bind(this))}
				</ul>
      </footer>
    );
  }
}

Footer.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  activeCount: PropTypes.number.isRequired,
  filter: PropTypes.oneOf([
    VisibilityFilters.SHOW_ALL,
    VisibilityFilters.SHOW_COMPLETED,
    VisibilityFilters.SHOW_ACTIVE
  ]).isRequired
};

export default Footer;
