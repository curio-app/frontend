import React, { useEffect } from 'react';

const UploadThree = (props) => {

  useEffect(() => {
    props.setPageBars({
      ...props.pageBars,
      isPageOne: true,
      isPageTwo: true,
      isPageThree: true
    })
  }, [])

  return (
    <div>
      <form>
        <h3>Description</h3>
        <input
          type="text"
          placeholder="How would you describe this collectible"
        />
        <h3>Tags</h3>
        <p>Keywords to help other users find your item while searching</p>
        <button>Add Tag +</button>
        <button>Finish</button>
      </form>

    </div>
  );
};

export default UploadThree;
