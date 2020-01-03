import React, { useEffect } from 'react';

const UploadThree = ({newCollectable, setCollectable, ...props}) => {

  useEffect(() => {
    props.setPageBars({
      ...props.pageBars,
      isPageOne: true,
      isPageTwo: true,
      isPageThree: true
    })
  }, [])

  const handleChange = e => {
    // console.log(newCollectable)
    setCollectable({
        ...newCollectable,
        [e.target.name]: e.target.value
    })
}

const handleSubmit = e => {
    e.preventDefault();
    console.log(newCollectable)
    // props.history.push('/upload-page/3')
}


  return (
    <div>
      <form>
        <h3>Description</h3>
        <input
          type="text"
          placeholder="How would you describe this collectible"
          name='description'
          value={newCollectable.description}
          onChange={handleChange}
        />
        <h3>Tags</h3>
        <p>Keywords to help other users find your item while searching</p>
        <button>Add Tag +</button>
        <button onClick={handleSubmit}>Finish</button>
      </form>

    </div>
  );
};

export default UploadThree;
