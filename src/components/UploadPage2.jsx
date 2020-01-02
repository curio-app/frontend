import React from 'react';

const UploadTwo = () => {
  return (
    <div>
      <h3>Collector's Story</h3>
      <input
        type="text"
        placeholder="What do you love about this collectable?"
      />
      <h4>Are you willing to sell this item?</h4>
      <p>Other Curio users may contact you to discuss a potential sale</p>
      <button>Yes</button>
      <button>No</button>
      <button>Continue</button>
    </div>
  );
};

export default UploadTwo;
