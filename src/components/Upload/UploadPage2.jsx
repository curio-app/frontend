import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const UploadTwo = ({
  setPageBars,
  story,
  handleChange,
  sellable,
  toggleSellable,
  history,
}) => {
  useEffect(() => {
    setPageBars(prevState => ({ ...prevState, isPageTwo: true }));
  }, [setPageBars]);

  const handleSubmit = e => {
    e.preventDefault();
    history.push('/upload-page/3');
  };

  return (
    <main className="upload-page-2">
      <form onSubmit={handleSubmit}>
        <h3>Collector&apos;s Story</h3>
        <textarea
          value={story}
          name="story"
          placeholder="What do you love about this collectable?"
          onChange={handleChange}
        />
        <div>
          <h4>Are you willing to sell this item?</h4>
          <p>Other Curio users may contact you to discuss a potential sale</p>
          <button type="button" disabled={sellable} onClick={toggleSellable}>
            Yes
          </button>
          <button type="button" disabled={!sellable} onClick={toggleSellable}>
            No
          </button>
        </div>
        <button type="submit">Continue</button>
      </form>
    </main>
  );
};

UploadTwo.propTypes = {
  setPageBars: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  story: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  sellable: PropTypes.bool.isRequired,
  toggleSellable: PropTypes.func.isRequired,
};

export default UploadTwo;
