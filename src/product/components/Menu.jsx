import React from 'react';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';

const Link = ({ active, children, onClick }) => {
  if (active) return <span>{children}</span>;
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </button>
  );
};

const mapStateToLinkProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter,
});

const mapDispatchToLinkProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setVisibilityFilter(ownProps.filter));
  },
});

const FilterLink = connect(mapStateToLinkProps, mapDispatchToLinkProps)(Link);

const Menu = () => (
  <p>
    Show: <FilterLink filter="SHOW_ALL">All</FilterLink>{' '}
    <FilterLink filter="SHOW_NONSELECTED">Non Selected</FilterLink>{' '}
    <FilterLink filter="SHOW_SELECTED">Selected</FilterLink>
  </p>
);

export default Menu;
