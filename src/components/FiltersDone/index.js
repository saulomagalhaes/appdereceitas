import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

function FiltersDone(props) {
  const { handleFood, handleDrink, handleAll } = props;
  return (
    <section className="filter-recipes-done">
      <button data-testid="filter-by-all-btn" type="button" onClick={ handleAll }>
        All
      </button>

      <button data-testid="filter-by-food-btn" type="button" onClick={ handleFood }>
        Food
      </button>

      <button data-testid="filter-by-drink-btn" type="button" onClick={ handleDrink }>
        Drinks
      </button>
    </section>
  );
}

FiltersDone.propTypes = {
  handleFood: PropTypes.func.isRequired,
  handleDrink: PropTypes.func.isRequired,
  handleAll: PropTypes.func.isRequired,
};

export default FiltersDone;
