import React from 'react';
import PropTypes from 'prop-types';

const Paginations = ({ page }) => {
  return (
    <>
      <div className="main-bar-div" role="presentation">
        <div
          className={`bar${page.isPageOne ? ' toggled' : ''}`}
          role="presentation"
        >
          {' '}
        </div>
        <div
          className={`bar${page.isPageTwo ? ' toggled' : ''}`}
          role="presentation"
        >
          {' '}
        </div>
        <div
          className={`bar${page.isPageThree ? ' toggled' : ''}`}
          role="presentation"
        >
          {' '}
        </div>
      </div>
    </>
  );
};

Paginations.propTypes = {
  page: PropTypes.shape({
    isPageOne: PropTypes.bool,
    isPageTwo: PropTypes.bool,
    isPageThree: PropTypes.bool,
  }).isRequired,
};

export default Paginations;
