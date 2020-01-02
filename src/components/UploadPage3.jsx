import React from 'react';

const UploadThree = () => {
  return (
    <div>
      <h3>Description</h3>
      <input
        type="text"
        placeholder="How would you describe this collectible"
      />
      <h3>Tags</h3>
      <p>Keywords to help other users find your item while searching</p>
      <button>Add Tag +</button>
      <button>Finish</button>
    </div>
  );
};

export default UploadThree;
